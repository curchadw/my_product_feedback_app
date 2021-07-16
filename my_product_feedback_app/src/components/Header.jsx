import React,{useEffect,useState,useContext} from 'react'
import feedbackContext from '../utils/FeedbackContext'
import AddFeedback from './AddFeedback'


const Header = () =>{

const data = useContext(feedbackContext)
const [dataArray, setDataArray] = useState([])

useEffect(()=>{
    if(data){
        let tempData = data.map(tally => tally.comments)
        setDataArray(tempData.length)
    }
},[data])


return(
    <div className='header'>
        <img src="../images/icon-suggestions.svg" alt="light bulb"  /> 
        <h3> {dataArray} Suggestions</h3> <p>Sort by</p>
        <AddFeedback />
    </div>
)
}

export default Header