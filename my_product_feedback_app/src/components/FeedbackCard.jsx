import React from 'react'
import { useHistory } from 'react-router-dom'

const FeedbackCard = ({title, status, upvotes, description, category, numComments, _id}) =>{
    const history = useHistory()

    return (
        <div className="feedbackCard" onClick={()=>
            history.push(`/feedback/${_id}`)
        }>

            <div id="upvotes">
                <img src="../images/icon-arrow-up.svg" alt="upvote_arrow" />
                {upvotes}
            </div>
            <div className="feedback_main">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tag">{category}</div>
            </div>
            <div className="num_comments">
            <img src="../images/icon-comments.svg" alt="comments" />
                {numComments}
            </div>    


        </div>

    )
}

export default FeedbackCard