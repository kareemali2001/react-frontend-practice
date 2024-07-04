import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Jobs from './components/jobs';
import JobListings from './components/joblisting' ;
import JobCategories from './components/jobcat' ;
import Newsletter from './components/newsletter';
import Footer from './components/footer';

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <JobListings/>
      <Jobs/>
      <JobCategories/>
      <Newsletter/>
      <Footer/>
    </div>
    
  );
}

export default App;