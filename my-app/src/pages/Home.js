import '../index.css';

const Home = () => {
    return (
        <div className='container'>
            <div className='QOD-container'>
                <h1 className='title'>Quote of the Day</h1>
                <p className='QOD-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra, purus dignissim blandit hendrerit, diam erat ullamcorper massa, non varius turpis eros sed massa. 
                Praesent quis pretium nulla, sed tristique. 
                </p>
            </div>
            <div className='I-container'>
                <h1 className='title'>What's Your Interest?</h1>
                <p className='description'>Select filters to improve what is seen.</p>
                <div className='filter-container'>
                    <button>Tech</button>
                </div>
            </div>
            <div className='J-container'>
                <h1 className='title'>Today's Jobs</h1>
                <div className='job-filter-container'>FILTERS</div>
                <a href='/' className='job-link'>
                    <div className='job-container'>
                        <h2 className='job-title'>Unknown Job</h2>
                    </div>
                </a>
                <a href='/' className='job-link'>
                    <div className='job-container'>
                        <h2 className='job-title'>Unknown Job</h2>
                    </div>
                </a>
                <a href='/' className='job-link'>
                    <div className='job-container'>
                        <h2 className='job-title'>Unknown Job</h2>
                    </div>
                </a>
                <a href='/' className='job-link'>
                    <div className='job-container'>
                        <h2 className='job-title'>Unknown Job</h2>
                    </div>
                </a>
            </div>
            <div className='footer'>
                <p>FOOTER</p>
            </div>
        </div>
    );
}
 
export default Home;