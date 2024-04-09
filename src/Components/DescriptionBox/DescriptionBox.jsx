import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>

            <div className="descriptionbox-description">
                <p>E-commerce sites are also a popular way to sell services, 
                    like consultations, maintenance, tutoring, lessons, and more. 
                    Whether you want to learn to code a website or you’re looking for
                    an experienced trainer to help fix your dog’s troublesome barking habit, 
                    there’s no shortage of assistance available online.</p>
            </div>
        </div>
    )
}

export default DescriptionBox
