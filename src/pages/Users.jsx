import Header from '../components/Header.jsx';
const Users = () => {
    return (
        <div
            style={{
                margin: '16px 32px',
            }}>
            <Header />
            <section className='sectionBox'>
                <div className='sectionHeader'>
                    <div className='sectionTitle'>
                        <h1>Users</h1>
                        <div className='sectionBorderLeft'></div>
                        <div>
                            <button>Search</button>
                        </div>
                    </div>

                    <button className='addNewButton'>Add New</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>#</p>
                            </th>
                            <th>
                                <p>Email</p>
                            </th>
                            <th>
                                <p>User type</p>
                            </th>
                            <th>
                                <p>Driver license expiry</p>
                            </th>
                            <th>
                                <p>Vehicle / User</p>
                            </th>
                            <th>
                                <p>Active</p>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>1</p>
                            </td>
                            <td>
                                <p>HannanBoko</p>
                            </td>
                            <td>
                                <p>tungpham@gmail.com</p>
                            </td>
                            <td>
                                <p>Admin</p>
                            </td>
                            <td>
                                <p>No</p>
                            </td>
                            <td>
                                <p>-</p>
                            </td>
                            <td>
                                <p>Yes</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};
export default Users;
