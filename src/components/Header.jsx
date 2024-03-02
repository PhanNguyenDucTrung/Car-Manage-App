const Header = () => {
    return (
        <header>
            <nav>
                <div></div>
                <div className='borderBottom'></div>
                <div style={{ display: 'flex' }}>
                    <div>
                        <a href='/'>Settings</a>
                    </div>
                    <div>...</div>
                </div>
            </nav>
        </header>
    );
};
export default Header;
