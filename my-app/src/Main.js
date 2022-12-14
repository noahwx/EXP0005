import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TrendingJobs from './pages/TrendingJobs';
import Search from './pages/Search';

const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/pages/TrendingJobs" element={<TrendingJobs />}/>
            <Route exact path="/pages/Search" element={<Search />}/>
        </Routes>
    );
}
 
export default Main;