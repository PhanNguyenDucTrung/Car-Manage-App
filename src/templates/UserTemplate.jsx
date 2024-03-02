import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar.jsx';

const UserTemplate = () => {
    return (
        <div
            className='d-flex'
            style={{
                backgroundColor: `rgb(234, 240, 245)`,
                minHeight: `100vh`,
            }}>
            <SideBar />
            <div className='w-100' style={{ minHeight: '100vh' }}>
                <Outlet />
            </div>
        </div>
    );
};
export default UserTemplate;
