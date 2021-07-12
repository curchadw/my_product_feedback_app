import React, { useContext } from 'react'
import Tag from '../components/Tag'
import feedbackContext from '../utils/FeedbackContext'

const Tags = () =>{

    const data = useContext(feedbackContext)
    

    return(
        <div className='tags_render'>
        {
            [...new Set(data.map(({category})=> <Tag category={category}/>))]

        }
        </div>
    )
}

export default Tags