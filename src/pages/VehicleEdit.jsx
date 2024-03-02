import { useState } from 'react';
import Header from '../components/Header';
const VehicleEdit = () => {
    const [selectedOption, setSelectedOption] = useState('ativo');
    const [selectedDistanceUnit, setSelectedDistanceUnit] = useState('km');

    const handleOptionChange = event => {
        setSelectedOption(event.target.value);
    };
    const [selectedVehicle, setSelectedVehicle] = useState('car');

    const handleDistanceUnitChange = event => {
        setSelectedDistanceUnit(event.target.value);
    };

    const handleVehicleChange = event => {
        setSelectedVehicle(event.target.id);
    };

    const [focusStates, setFocusStates] = useState({
        placa: false,
        chassi: false,
        renavam: false,
        observacao: false,
    });

    const [inputValues, setInputValues] = useState({
        placa: '',
        chassi: '',
        renavam: '',
        observacao: '',
        nome: '',
        modelo: 'Car',
        ano: '',
    });
    const handleInputChange = e => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleFocus = fieldName => {
        console.log(fieldName);
        setFocusStates({ ...focusStates, [fieldName]: true });
    };

    const handleBlur = fieldName => {
        setFocusStates({ ...focusStates, [fieldName]: false });
    };
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
                    </div>
                </div>

                <form action=''>
                    <div className='formField'>
                        <div>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 32 32'
                                color='success.default'
                                className='styles__StyledIcon-sc-fiiay8-1 kmSrTJ'>
                                <path d='M16 2.666c-7.333 0-13.333 6-13.333 13.333s6 13.334 13.333 13.334 13.333-6 13.333-13.334S23.333 2.666 16 2.666m-2.667 20-6.666-6.667 1.88-1.88 4.786 4.774 10.12-10.12 1.88 1.893z'></path>
                            </svg>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor='ativo' className='formLabel'>
                                <div className={`labelIcon ${selectedOption === 'ativo' ? 'active' : ''}`}>
                                    <div className='circle'></div>
                                </div>
                                <input
                                    type='radio'
                                    id='ativo'
                                    name='ativo'
                                    value='ativo'
                                    checked={selectedOption === 'ativo'}
                                    onChange={handleOptionChange}
                                />
                                Active
                            </label>
                            <label htmlFor='inativo' className='formLabel'>
                                <div className={`labelIcon ${selectedOption === 'inativo' ? 'active' : ''}`}>
                                    <div className='circle'></div>
                                </div>
                                <input
                                    type='radio'
                                    id='inativo'
                                    name='ativo'
                                    value='inativo'
                                    checked={selectedOption === 'inativo'}
                                    onChange={handleOptionChange}
                                />
                                Inactive
                            </label>
                        </div>
                    </div>
                    <div className='formBorderBottom'></div>
                    <div className='formField noIcon'>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px 32px ' }}>
                            <label
                                htmlFor='car'
                                className={`vehicleLabel ${selectedVehicle === 'car' ? 'active' : ''}`}
                                onClick={handleVehicleChange}>
                                <div>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 22 12'
                                        className='styles__StyledIcon-sc-fiiay8-1 ddCqYU'>
                                        <path d='m15 0 3 4h2c1.11 0 2 .89 2 2v3h-2a3 3 0 0 1-6 0H8a3 3 0 1 1-6 0H0V6c0-1.11.89-2 2-2l3-4zM9.5 1.5H5.75L3.86 4H9.5zm1.5 0V4h5.14l-1.89-2.5zm-6 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m12 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3'></path>
                                    </svg>
                                    Car
                                    <input type='radio' name='car' id='car' />
                                </div>
                            </label>
                            <label
                                htmlFor='motorbike'
                                className={`vehicleLabel ${selectedVehicle === 'motorbike' ? 'active' : ''}`}
                                onClick={handleVehicleChange}>
                                <div>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 13'
                                        className='styles__StyledIcon-sc-fiiay8-1 ddCqYU'>
                                        <path d='m15.42 4-4.01-4H7v2h3.59l2 2H4.5C2 4 0 6 0 8.5S2 13 4.5 13c2.22 0 4.06-1.62 4.42-3.73L11.04 8c-.04.17-.04.33-.04.5 0 2.5 2 4.5 4.5 4.5S20 11 20 8.5 18 4 15.5 4zM6.84 9.26C6.5 10.27 5.58 11 4.47 11a2.5 2.5 0 0 1 0-5c1.12 0 2.03.74 2.37 1.75H4v1.5zM15.47 11a2.5 2.5 0 1 1 .002-5.002A2.5 2.5 0 0 1 15.47 11'></path>
                                    </svg>
                                    Motorbike
                                    <input type='radio' name='motorbike' id='motorbike' />
                                </div>
                            </label>
                            <label
                                htmlFor='bus'
                                className={`vehicleLabel ${selectedVehicle === 'bus' ? 'active' : ''}`}
                                onClick={handleVehicleChange}>
                                <div>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 30 16'
                                        className='styles__StyledIcon-sc-fiiay8-1 ddCqYU'>
                                        <path d='M3 0A2.657 2.657 0 0 0 .333 2.667V12H3a4 4 0 1 0 8 0h8a4 4 0 1 0 8 0h2.667V2.667A2.657 2.657 0 0 0 27 0zm-.667 2h5.334v3.333H2.333zm7.334 0H15v3.333H9.667zM17 2h5.333v3.333H17zm7.333 0h3.334v7.333l-3.334-2.666zM7 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m16 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4'></path>
                                    </svg>
                                    Bus
                                    <input type='radio' name='bus' id='bus' />
                                </div>
                            </label>
                            <label
                                htmlFor='truck'
                                className={`vehicleLabel ${selectedVehicle === 'truck' ? 'active' : ''}`}
                                onClick={handleVehicleChange}>
                                <div>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 30 22'
                                        className='styles__StyledIcon-sc-fiiay8-1 ddCqYU'>
                                        <path d='M23 19.667a2 2 0 1 1 0-4 2 2 0 0 1 0 4m2-12L27.613 11h-5.946V7.667zm-18 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4m18.667-14h-4V.333H3A2.657 2.657 0 0 0 .333 3v14.667H3a4 4 0 0 0 8 0h8a4 4 0 1 0 8 0h2.667V11z'></path>
                                    </svg>
                                    Truck
                                    <input type='radio' name='truck' id='truck' />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className='formBorderBottom'></div>
                    <div className='formField'>
                        <div>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 30'
                                color='dark.d_300'
                                fill=''
                                className='styles__StyledIcon-sc-fiiay8-1 kmSrTJ'>
                                <path d='M12 .333 0 5.667v8c0 7.4 5.12 14.32 12 16 6.88-1.68 12-8.6 12-16v-8z'></path>
                            </svg>
                        </div>
                    </div>

                    <div className='formField noIcon'></div>

                    {/* Model */}
                    <div className='formField noIcon'>
                        <div className='inputContainer'>
                            <div className={`inputWrapper ${inputValues.modelo ? 'hasValue' : ''}`}>
                                <label htmlFor='modelo'>Model</label>
                                <input
                                    id='modelo'
                                    name='modelo'
                                    type='text'
                                    value={inputValues.modelo}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Model end */}

                    {/* Car year */}
                    <div className='formField'>
                        <div>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' color='dark.d_300'>
                                <path d='M25.333 26.666H6.667V11.999h18.666zm-4-24v2.667H10.667V2.666H8v2.667H6.667A2.667 2.667 0 0 0 4 7.999v18.667a2.667 2.667 0 0 0 2.667 2.667h18.666A2.667 2.667 0 0 0 28 26.666V7.999a2.667 2.667 0 0 0-2.667-2.666H24V2.666zm-6.826 14.667H9.693l3.894 2.813-1.48 4.6L16 21.906l3.893 2.84-1.493-4.587 3.893-2.826h-4.8L16 12.746z'></path>
                            </svg>
                        </div>

                        <div className='inputContainer'>
                            <div className={`inputWrapper ${inputValues.ano ? 'hasValue' : ''}`}>
                                <label htmlFor='ano'>Year (optional)</label>
                                <input
                                    id='ano'
                                    name='ano'
                                    type='text'
                                    value={inputValues.ano}
                                    onFocus={() => handleFocus('ano')}
                                    onBlur={() => handleBlur('ano')}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Car Name */}
                    <div className='formField'>
                        <div>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 12' color='dark.d_300'>
                                <path d='m15 0 3 4h2c1.11 0 2 .89 2 2v3h-2a3 3 0 0 1-6 0H8a3 3 0 1 1-6 0H0V6c0-1.11.89-2 2-2l3-4zM9.5 1.5H5.75L3.86 4H9.5zm1.5 0V4h5.14l-1.89-2.5zm-6 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m12 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3'></path>
                            </svg>
                        </div>
                        <div className='inputContainer'>
                            <div className={`inputWrapper ${inputValues.nome ? 'hasValue' : ''}`}>
                                <label htmlFor='nome'>Name (optional)</label>
                                <input
                                    id='nome'
                                    name='nome'
                                    type='text'
                                    value={inputValues.nome}
                                    onFocus={() => handleFocus('nome')}
                                    onBlur={() => handleBlur('nome')}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='formBorderBottom'></div>
                    {/* Fuel Type  Start*/}
                    <div className='formField'>
                        <div>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' color='dark.d_300'>
                                <path d='M18 8v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.9 2.2-3.9 4-3.9V3H9V2h6v1h-1v1.1c1.7 0 4 2 4 3.9'></path>
                            </svg>
                        </div>
                        <div className='inputContainer' style={{ marginRight: '32px' }}>
                            <div className={`inputWrapper ${inputValues.renavam ? 'hasValue' : ''}`}>
                                <label htmlFor='renavam'>Fuel capacity (L) (VIN) (Optional)</label>
                                <input
                                    id='renavam'
                                    name='renavam'
                                    type='text'
                                    value={inputValues.renavam}
                                    onFocus={() => handleFocus('renavam')}
                                    onBlur={() => handleBlur('renavam')}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <div className={`inputWrapper ${inputValues.renavam ? 'hasValue' : ''}`}>
                                <label htmlFor='renavam'>Identification (VIN) (Optional)</label>
                                <input
                                    id='renavam'
                                    name='renavam'
                                    type='text'
                                    value={inputValues.renavam}
                                    onFocus={() => handleFocus('renavam')}
                                    onBlur={() => handleBlur('renavam')}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Fuel Type End */}
                    <div className='formBorderBottom'></div>
                    <div className='formField'>
                        <div>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' color='dark.d_300'>
                                <path
                                    fillRule='evenodd'
                                    d='M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-2.15 13.63.52.37h-2.79l-.01-.86.97-.01s.91-.16.92-1.05c.04-1-.81-1-.96-1-.13 0-1.07.05-1.07.87h-1.52s.04-2.06 2.59-2.06c2.6 0 2.46 2.02 2.46 2.02s.04 1.25-1.11 1.72M13 6v12h-2V6zm1.25 0c-.37.65-.38 1.31-.38 1.31l1.54-.01S15.27 6.05 16.5 6c1.41 0 .84 1.67.7 1.95-.15.29-3.2 3.52-3.2 3.52l.04 1 5.2.03-.01-1.22-3.32.02 2.33-2.55c.17-.25.64-.95.71-1.62l.001-.028c.006-.129.027-.611-.19-1.102h-4.51M7.42 16h1.5V8.41h-.16L5.62 9.53v1.23l1.8-.56z'
                                    clipRule='evenodd'></path>
                            </svg>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor='km' className='formLabel'>
                                <div className={`labelIcon ${selectedDistanceUnit === 'km' ? 'active' : ''}`}>
                                    <div className='circle'></div>
                                </div>
                                <input
                                    type='radio'
                                    id='km'
                                    name='distance'
                                    value='km'
                                    checked={selectedDistanceUnit === 'km'}
                                    onChange={handleDistanceUnitChange}
                                />
                                Kilometer (km)
                            </label>
                            <label htmlFor='miles' className='formLabel'>
                                <div className={`labelIcon ${selectedDistanceUnit === 'miles' ? 'active' : ''}`}>
                                    <div className='circle'></div>
                                </div>
                                <input
                                    type='radio'
                                    id='miles'
                                    name='distance'
                                    value='miles'
                                    checked={selectedDistanceUnit === 'miles'}
                                    onChange={handleDistanceUnitChange}
                                />
                                Mile (mi)
                            </label>
                        </div>
                    </div>

                    <div className='formBorderBottom'></div>

                    <div className='formField'>
                        <div>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' color='dark.d_300'>
                                <path d='M25.333 20h-2.666v-2.666h2.666zm1.334 6.667v2.667h-5.334v-2.667h1.334v-2.666h-1.334v-2.667h4v5.333zm-1.44-20a2 2 0 0 0-1.894-1.333H8.667a2 2 0 0 0-1.894 1.333l-2.773 8v10.667a1.333 1.333 0 0 0 1.333 1.333h1.334A1.333 1.333 0 0 0 8 25.334v-1.333h6.667A9.333 9.333 0 0 1 24 14.667a9.1 9.1 0 0 1 4 .907v-.907zM8.667 20.001a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-2-6.667 2-6h14.666l2 6z'></path>
                            </svg>
                        </div>
                        <div className='inputContainer'>
                            <div className={`inputWrapper ${inputValues.placa ? 'hasValue' : ''}`}>
                                <label htmlFor='placa'>License plate (Optional)</label>
                                <input
                                    id='placa'
                                    name='placa'
                                    type='text'
                                    value={inputValues.placa}
                                    onFocus={() => handleFocus('placa')}
                                    onBlur={() => handleBlur('placa')}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='formField noIcon'>
                        <div className='inputContainer'>
                            <div className={`inputWrapper ${inputValues.chassi ? 'hasValue' : ''}`}>
                                <label htmlFor='chassi'>Chassis number (Optional)</label>
                                <input
                                    id='chassi'
                                    name='chassi'
                                    type='text'
                                    value={inputValues.chassi}
                                    onFocus={() => handleFocus('chassi')}
                                    onBlur={() => handleBlur('chassi')}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='formField noIcon'>
                        <div className='inputContainer'>
                            <div className={`inputWrapper ${inputValues.renavam ? 'hasValue' : ''}`}>
                                <label htmlFor='renavam'>Identification (VIN) (Optional)</label>
                                <input
                                    id='renavam'
                                    name='renavam'
                                    type='text'
                                    value={inputValues.renavam}
                                    onFocus={() => handleFocus('renavam')}
                                    onBlur={() => handleBlur('renavam')}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='formField'>
                        <div>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' color='dark.d_300'>
                                <path d='M21 6v2H3V6zM3 18h9v-2H3zm0-5h18v-2H3z'></path>
                            </svg>
                        </div>
                        <div className='inputContainerTextarea'>
                            <div className={`textareaWrapper${inputValues.observacao ? ' hasValue' : ''}`}>
                                <label htmlFor='observacao'>Notes</label>
                                <textarea id='observacao' name='observacao' onChange={handleInputChange}></textarea>
                            </div>
                        </div>
                    </div>

                    <div className='formBorderBottom'></div>
                </form>
            </section>
        </div>
    );
};
export default VehicleEdit;
