import axios from 'axios'
// import { AsyncStorage } from 'react-native'

// AsyncStorage ini berfungsi jika kita ingin menaro beberapa data di cache seperti token dll

export const dapatkanSlide = (value) => {
  return {
    type: 'DAPATKAN_SLIDE',
    value
  }
}

export const dapatkanLocation = (value) => {
  return {
    type: 'DAPATKAN_LOCATION',
    value
  }
}

export const getSlide = () => {
  return (dispatch) => {
    return axios.get('http://shuttle.skyware.systems/web/api/shuttle/get_config').then((response) => {
      const dataSlide = response.data.data.carousel
      const dataLocation = response.data.data.location
      dispatch(dapatkanSlide(dataSlide))
      dispatch(dapatkanLocation(dataLocation))
    })
  }
}
