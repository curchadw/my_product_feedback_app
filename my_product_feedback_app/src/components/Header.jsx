import React,{useEffect,useState,useContext} from 'react'
import feedbackContext from '../utils/FeedbackContext'


const Header = () =>{

const data = useContext(feedbackContext)
const [dataArray, setDataArray] = useState([])

useEffect(()=>{
    let tempData = data.map(tally => tally.comments)
    setDataArray(tempData.length)
},[])


return(
    <div className='header'>
        <img src="../images/icon-suggestions.svg" alt="light bulb"  /> <h3> {dataArray} Suggestions</h3> <p>Sort by</p>
    </div>
)
}

export default Header