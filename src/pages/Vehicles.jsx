import Header from '../components/Header.jsx';
import { NavLink } from 'react-router-dom';

const Vehicles = () => {
    return (
        <div
            style={{
                margin: '16px 32px',
            }}>
            <Header />
            <section className='sectionBox'>
                <div className='sectionHeader'>
                    <div className='sectionTitle'>
                        <h1>Vehicles</h1>
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
                                <p>Type</p>
                            </th>
                            <th>
                                <p>Nickname</p>
                            </th>
                            <th>
                                <p>Manufacturer</p>
                            </th>
                            <th>
                                <p>Model</p>
                            </th>
                            <th>
                                <p>Last Update</p>
                            </th>
                            <th>
                                <p>Status</p>
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
                            <td>
                                <button>Down</button>
                                <NavLink
                                    className='ms-1'
                                    to={'../vehicle/edit'}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}>
                                    Edit
                                </NavLink>
                                <button className='ms-1'>Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};
export default Vehicles;
