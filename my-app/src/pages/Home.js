import '../index.css';

const Home = () => {
    return (
        <>
        
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
                    <p className='description'>Select filters to improve what is shown.</p>
                    <div className='I-container-filter'>
                        <div className='filter-container'>
                            <button className='filter-button'><span className='btn-text'>Tech</span></button>
                            <button className='filter-button'><span className='btn-text'>Customer Service</span></button>
                            <button className='filter-button'><span className='btn-text'>Work from Home</span></button>
                            <button className='filter-button'><span className='btn-text'>Full Time</span></button>
                            <button className='filter-button'><span className='btn-text'>Part Time</span></button>
                            <button className='filter-button'><span className='btn-text'>Contract</span></button>
                            <button className='filter-button'><span className='btn-text'>Internship</span></button>
                            <button className='filter-button'><span className='btn-text'>Paid Internship</span></button>
                            <button className='filter-button'><span className='btn-text'>Retail</span></button>
                            <button className='filter-button'><span className='btn-text'>Realtor</span></button>
                            <button className='filter-button'><span className='btn-text'>School</span></button>
                            <button className='filter-button'><span className='btn-text'>Data Analyst</span></button>
                            <button className='filter-button'><span className='btn-text'>Web Developer</span></button>
                            <button className='filter-button'><span className='btn-text'>Developer</span></button>
                            <button className='filter-button'><span className='btn-text'>Financial</span></button>
                            <button className='filter-button'><span className='btn-text'>Banking</span></button>
                            <button className='filter-button'><span className='btn-text'>Accountant</span></button>
                        </div>
                    </div>
                </div>
                <div className='J-container'>
                    <h1 className='title'>Today's Jobs</h1>
                    <div className='job-filter-container'>
                        <button className='filter-button'><span className='btn-text'>Tech</span></button>
                        <button className='filter-button'><span className='btn-text'>Customer Service</span></button>
                        <button className='filter-button'><span className='btn-text'>Work from Home</span></button>
                        <button className='filter-button'><span className='btn-text'>Full Time</span></button>
                        <button className='filter-button'><span className='btn-text'>Part Time</span></button>
                        <button className='filter-button'><span className='btn-text'>Contract</span></button>
                        <button className='filter-button'><span className='btn-text'>Internship</span></button>
                    </div>
                    <a href='/' className='job-link'>
                        <div className='job-container'>
                            <div className='job-info-container'>
                                <h5 className='job-info'>Full Time</h5>
                                <h5 className='job-info'>$25 an Hour</h5>
                                <h5 className='job-info'>Rating: 4</h5>
                            </div>
                            <h2 className='job-title'>Unknown Job</h2>
                            <p className='job-description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Proin aliquam semper arcu, eget lacinia ex eleifend sed. 
                                Donec ultrices venenatis nisl non placerat. 
                                Quisque non metus id neque hendrerit viverra.
                            </p>
                        </div>
                    </a>
                    <a href='/' className='job-link'>
                        <div className='job-container'>
                        <div className='job-info-container'>
                                <h5 className='job-info'>Part Time</h5>
                                <h5 className='job-info'>$15 an Hour</h5>
                                <h5 className='job-info'>Rating: 4.25</h5>
                            </div>
                            <h2 className='job-title'>Unknown Job</h2>
                            <p className='job-description'>
                                Cras quis ultricies enim, a eleifend elit. 
                                Sed eros ipsum, tempor in tincidunt nec, varius sed turpis. 
                                Ut viverra urna a urna interdum pellentesque.
                            </p>
                        </div>
                    </a>
                    <a href='/' className='job-link'>
                        <div className='job-container'>
                            <div className='job-info-container'>
                                <h5 className='job-info'>Full Time</h5>
                                <h5 className='job-info'>$25 an Hour</h5>
                                <h5 className='job-info'>Rating: 4</h5>
                            </div>
                            <h2 className='job-title'>Unknown Job</h2>
                            <p className='job-description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Proin aliquam semper arcu, eget lacinia ex eleifend sed. 
                                Donec ultrices venenatis nisl non placerat. 
                                Quisque non metus id neque hendrerit viverra.
                            </p>
                        </div>
                    </a>
                    <a href='/' className='job-link'>
                        <div className='job-container'>
                        <div className='job-info-container'>
                                <h5 className='job-info'>Part Time</h5>
                                <h5 className='job-info'>$15 an Hour</h5>
                                <h5 className='job-info'>Rating: 4.25</h5>
                            </div>
                            <h2 className='job-title'>Unknown Job</h2>
                            <p className='job-description'>
                                Cras quis ultricies enim, a eleifend elit. 
                                Sed eros ipsum, tempor in tincidunt nec, varius sed turpis. 
                                Ut viverra urna a urna interdum pellentesque.
                            </p>
                        </div>
                    </a>
                    <a href='/' className='job-link'>
                        <div className='job-container'>
                            <div className='job-info-container'>
                                <h5 className='job-info'>Full Time</h5>
                                <h5 className='job-info'>$25 an Hour</h5>
                                <h5 className='job-info'>Rating: 4</h5>
                            </div>
                            <h2 className='job-title'>Unknown Job</h2>
                            <p className='job-description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Proin aliquam semper arcu, eget lacinia ex eleifend sed. 
                                Donec ultrices venenatis nisl non placerat. 
                                Quisque non metus id neque hendrerit viverra.
                            </p>
                        </div>
                    </a>
                    <a href='/' className='job-link'>
                        <div className='job-container'>
                        <div className='job-info-container'>
                                <h5 className='job-info'>Part Time</h5>
                                <h5 className='job-info'>$15 an Hour</h5>
                                <h5 className='job-info'>Rating: 4.25</h5>
                            </div>
                            <h2 className='job-title'>Unknown Job</h2>
                            <p className='job-description'>
                                Cras quis ultricies enim, a eleifend elit. 
                                Sed eros ipsum, tempor in tincidunt nec, varius sed turpis. 
                                Ut viverra urna a urna interdum pellentesque.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='footer'>
                <p>FOOTER</p>
            </div>
        </>
    );
}
 
export default Home;