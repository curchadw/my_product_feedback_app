import React, { useContext, useEffect, useState} from 'react'
import Tag from '../components/Tag'
import feedbackContext from '../utils/FeedbackContext'

const Tags = () =>{

    const data = useContext(feedbackContext)
    const [dataArray, setDataArray] = useState([])
   

    useEffect(() =>{
        if (data){
           let tempArray = data.reduce((acc,cur) => [...acc,cur.category],[]) 
           setDataArray(Array.from(new Set(tempArray)))
           }
        
        },[data])
        
   useEffect(()=>{
    console.log(dataArray)
   },[dataArray])

    return(
        <div className='tags_render'>
        {
            dataArray.map(name => <Tag key={name.id} category={name.category}/>)
        }
        </div>
    )
}

export default Tags