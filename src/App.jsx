import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserTemplate from './templates/UserTemplate';
import Users from './pages/Users';
import Vehicles from './pages/Vehicles.jsx';
import VehicleEdit from './pages/VehicleEdit.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<UserTemplate />}>
                        <Route path='history' element={<h1>History</h1>} />
                        <Route path='reminder' element={<h1>Reminder</h1>} />
                        <Route path='reports' element={<h1>Reports</h1>} />
                        <Route path='users' element={<Users></Users>} />
                        <Route path='vehicles' element={<Vehicles />} />
                        <Route path='settings' element={<h1>Settings</h1>} />
                        <Route path='vehicle/edit' element={<VehicleEdit />}></Route>
                    </Route>

                    {/* <Route path='about' element={<About //>} /> */}
                    {/* <Route path='*' element={<NotFound />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
