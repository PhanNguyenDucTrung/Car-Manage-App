import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='bg-dark text-white p-2' style={{ minHeight: '100vh', width: '283px' }}>
            <nav>
                <ul>
                    <li>
                        <NavLink to='history'> History</NavLink>
                    </li>
                    <li>
                        <NavLink to='reminder'> Reminder</NavLink>
                    </li>
                    <li>
                        <NavLink to='reports'> Reports</NavLink>
                    </li>
                    <li>
                        <NavLink to='users'> Users</NavLink>
                    </li>
                    <li>
                        <NavLink to='vehicles'> Vehicles</NavLink>
                    </li>
                    <li>
                        <NavLink to='settings'>Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default SideBar;
