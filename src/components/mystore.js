import {useState, useEffect} from 'react';
import MystoreTemplate from './mystore_template';
function Mystore() {

  const [userData, setUserData] = useState([]);
  const [loadMoreData, setLoadMoreData] = useState([]);
  const itemPerPage = 10; //Set Items Page 
  const [loading, setLoading] = useState(true);
  
  const fetchURL = `https://retoolapi.dev/J56W2U/users`


  //Fetch Data
  async function getUsers(){
    const response = await fetch(fetchURL);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const usersData = await response.json();
    return usersData;
  }


  useEffect(() => {
    
    //Set Initial Data
    !loading && getUsers().then(data => {
      //Set Intial Data Limit
      let d = data;

      //Trim Data for Limit
      setUserData(d.splice(0,itemPerPage));
      
      //Set Rest Data to Loadmore
      setLoadMoreData(data);

    }).catch(error => {
      console.log(error);
    });

    setLoading(false);

    //Unmount
    return () => {
      setLoading(true);
    };    
  }, [loading])
  
  


  //Load More Function
  const loadMore = () =>{
    setUserData([...userData, ...loadMoreData.splice(0,itemPerPage)])
  }


  
  return (
    <>
      <MystoreTemplate userData={userData} loadMore={loadMore} loadMoreLength={loadMoreData.length} />
    </>
  )
}

export default Mystore
