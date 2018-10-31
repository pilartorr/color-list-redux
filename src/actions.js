//constants
export const ADD_COLOR = 'ADD_COLOR';
export const REMOVE_COLOR = 'REMOVE_COLOR';

//actions
export const addColor = (title, color) =>
({
  type: ADD_COLOR,
  title,
  color
})

export const removeColor = (id) =>
({
  type: REMOVE_COLOR,
  id
})
