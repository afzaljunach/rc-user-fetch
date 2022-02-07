function MystoreTemplate({ userData, loadMore, loadMoreLength }) {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                <h2>Users List</h2>
                                <table className="table table-bordred">
                                    <thead>
                                        <tr>
                                            <td>Sr.</td>
                                            <td>Name</td>
                                            <td>Job Type</td>
                                            <td>Location</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userData.length <= 0 ? (
                                                <tr> 
                                                    <td colSpan={4}>Loading...</td>
                                                </tr>

                                            ) : (

                                                userData.map((data, i) => (
                                                    <tr key={i}>
                                                        <td>{data.id}</td>
                                                        <td>{data.name}</td>
                                                        <td>{data.job_title}</td>
                                                        <td>{data.location}</td>
                                                    </tr>
                                                ))
                                            )
                                        }
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    {
                                        loadMoreLength > 0 && (
                                            <span className="btn btn-primary" onClick={() => loadMore()}>Load More</span>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MystoreTemplate
