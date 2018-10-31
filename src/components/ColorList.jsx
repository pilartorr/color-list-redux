import React from 'react';
import Color from './Color';

const ColorList = ({ colors, onRemove }) => {

  //if there is not colors in the list, add a colors
  //if there is colors, map de array of colors, choose a color and delete
  //to delete a color, we call the function removeColor( ) in our Color Component
  //this Color Component lives in our UI ColorList Component
  return(
    <div className="container d-flex color-list mt-3">
      {(colors.length === 0) ?
      <p className="m-auto lead">No colors Listed. Add a Color</p> :
      colors.map((color) => (
        <Color key = {color.id}
               {...color}
               onRemove={() =>
               onRemove(color.id)
              } />
      ))}
    </div>
  )
}

export default ColorList;
