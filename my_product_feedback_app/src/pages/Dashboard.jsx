import React from 'react'
import FeedbackCards from '../components/FeedbackCards'
import Banner from '../components/Banner'
import Filter from '../components/Filter'
import Roadmap from '../components/Roadmap'
import Header from '../components/Header'




const Dashboard = () =>{
    return(
        <div>
            <Header />
            <div className='dashboard'>
                <div className="sidebar">
                    <Banner />
                    <Filter />
                    <Roadmap />


                </div>
                <div className="main_dash">
                    <FeedbackCards />
                </div>
            </div>
        </div>
    )

    }

    export default Dashboard