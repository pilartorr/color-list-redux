import { ADD_COLOR, REMOVE_COLOR } from './actions';
import shortid  from 'shortid';

function reducers(state = {}, action) {
  switch (action.type) {
    case ADD_COLOR:
      return {
        ...state,
        colors: [
          ...state.colors,
          {
            id: shortid.generate(),
            title: action.title,
            color: action.color
          }
        ]
      }
    //
    case REMOVE_COLOR:
      return {
        ...state,
        colors: state.colors.filter(color =>
          color.id !== action.id
        )
      }
    default:
      return state
  }
}

export default reducers;
