
import './App.css';
import Dashboard from './pages/Dashboard.jsx'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FeedbackDetails from './pages/FeedbackDetails';
import React, {useEffect, useState} from 'react';
function App() {

  const[feedbackData, setFeedBackData] = useState([])

  useEffect(()=>{
    axios.get('data.json').then(res=>{
      setFeedBackData(res.data.productRequests)
    })

  },[])

  return (
    <feedbackContext.Provider value={feedbackData}>
      <div className='App'>
        <Router>
          <Route path="/feedback/:id" component={FeedbackDetails} />
          <Route path="/" component={Dashboard} />
        </Router>
      </div>
    </feedbackContext.Provider>
  );
}

export default App;
