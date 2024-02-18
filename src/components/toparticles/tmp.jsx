import React from 'react'
import { Row } from 'react-bootstrap'

const tmp = () => {
  return (
    <div className='container-fluid'>
        <Row>
            <div className="Col-6">
               <img  src="..." alt="" />
            </div>
            <div className="Col-6">
            <h1>This is a temporary page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget lorem tempus commodo. </p>
            <Row>
                <div className="Col-6">
                    author
                </div>
                <div className="Col-6">
                    DATE
                </div>
            </Row>
            </div>
        </Row>
        


    </div>
  )
}

export default tmp