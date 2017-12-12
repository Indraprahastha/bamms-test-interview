import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Image } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { getSlide } from '../actions/index'

class Detailcalllocations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.navigation.state.params.data
    };
  }

  componentWillMount() {
    // this.props.getSlide()
  }

  componentDidMount() {

  }

  render () {
    console.log(this.state.data)
    return (
      <View style={styles.container}>
        <View style={styles.konten}>
          <View style={{paddingBottom:20, justifyContent: 'center', flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Contact Us</Text>
          </View>
          <View style={{paddingLeft: 10, paddingBottom: 10, justifyContent: 'center', flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                style={{width: 15, height: 15}}
                source={{uri: 'http://simpleicon.com/wp-content/uploads/phone-volume-256x256.png'}}
              />
            </View>
            <View style={{flex: 9}}>
            <Text style={{fontSize: 13}}>{this.state.data.location_phone}</Text>
            </View>
          </View>
          <View style={{paddingLeft: 10, paddingBottom: 10, justifyContent: 'center', flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                style={{width: 15, height: 15}}
                source={{uri: 'https://www.pintsizedhome.com/wp-content/uploads/2016/05/1469664096_Home01.png'}}
              />
            </View>
            <View style={{flex: 9}}>
            <Text style={{fontSize: 13}}>{this.state.data.location_address}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: 'blue',
    padding: 25,
    height: 700,
  },
  konten: {
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: '#FFD700',
  }
});

const mapState = state => {
  return {
    // dataSlide: state.dataSlide.dataSlide,
    // dataLocation: state.dataSlide.dataLocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getSlide: () => dispatch(getSlide()),
  }
}

export default connect(
  mapState,
  mapDispatchToProps
)(Detailcalllocations)
