import React from 'react';

const Color = (props) => {

    return(
      <div className="container d-flex">
        <div className="m-auto">
          <div className="lead">
            <p className="mt-3">Name: {props.title}</p>
            <p>Hex-color: {props.color}</p>
            <div className="m-auto" style={{width:"30px", height:"30px", backgroundColor:`${props.color}`}}></div>
          </div>
          <button className="btn btn-danger mt-3 ml-5" onClick={props.onRemove}>REMOVE</button>
        </div>
      </div>
  )
}


export default Color;
