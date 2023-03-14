
import Navbar from "./components/Navbar"
import './App.css';
import Footer from './components/Footer';
import UserList from './components/UserList';

function App() {
  return (
    <>
    <Navbar />
      <div className="App">
        <h3>Get User</h3>
      </div>
      <UserList />
      <Footer />
    </>

  );
}

export default App;
