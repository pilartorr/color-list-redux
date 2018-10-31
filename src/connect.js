
import { connect } from 'react-redux';

//import type the actions that change our state
import { addColor, removeColor } from './actions';

//Import UI Components
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';

//connect the actions "addColor" and "removeColor" with UI components "AddColorForm" and "ColorList"
export const NewColor = connect (
  //null as first argument, ignore the state and pass directly to the second argument
  null,
  dispatch => ({
    onNewColor(title, color) {
      dispatch(addColor(title, color))
    }
  })
)(AddColorForm)

export const Colors = connect (
  state =>
    ({
      colors: [...state.colors]
    }),
  dispatch =>
    ({
      onRemove(id) {
        dispatch(removeColor(id))
      }
    })
)(ColorList)
