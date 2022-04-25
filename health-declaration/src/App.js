import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import NavBar from './components/navbar.component';
import ListHealth from './components/list-health.component';
import EditHealth from './components/edit-health.component';
import CreateHealth from './components/create-health.component';

function App() {
    return (
        <Router>
            <NavBar />
            <br />
            <Routes>
                <Route path="/" element={<ListHealth />} exact></Route>
                <Route path="/edit/:id" element={<EditHealth />} exact></Route>
                <Route path="/create" element={<CreateHealth />} exact></Route>
            </Routes>
        </Router>
    );
}

export default App;
