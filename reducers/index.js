import { combineReducers } from 'redux'

const dataApps = {
  dataSlide: [],
  dataLocation: []
}

const applicationReducers = (state = dataApps, action) => {
  switch (action.type) {
    case 'DAPATKAN_SLIDE':
      return {...state, dataSlide: action.value}
    case 'DAPATKAN_LOCATION':
      return {...state, dataLocation: action.value}
    default:
      return state;
  }
}

export default combineReducers({
  dataSlide: applicationReducers
})
