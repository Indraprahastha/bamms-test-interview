import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { getSlide } from '../actions/index'

class Locations extends React.Component {
  constructor() {
    super()
    this.state = {
    };
  }

  componentWillMount() {
    this.props.getSlide()
  }

  componentDidMount() {

  }

  render () {
    const { navigate } = this.props.navigation;
    // console.log(this.props.dataLocation);
    const data = this.props.dataLocation
    const kotaJakarta = []
    const kotaBandung = []
    const kotaCirebon = []

    for (var i = 0; i < this.props.dataLocation.length; i++) {
      if (this.props.dataLocation[i].location_city == 'BANDUNG') {
        kotaBandung.push(this.props.dataLocation[i])
      } else if (this.props.dataLocation[i].location_city == 'CIREBON') {
        kotaCirebon.push(this.props.dataLocation[i])
      } else if (this.props.dataLocation[i].location_city == 'JAKARTA') {
        kotaJakarta.push(this.props.dataLocation[i])
      }
    }
    return (
      <View style={styles.container}>

        <View style={styles.Konten}>
          <Text style={styles.textkota}>BANDUNG</Text>
        </View>

        {
          kotaBandung.map((data) => {
            return (
              <View style={styles.isikota}>
                <View style={{flex: 5, flexDirection:'column',}}>
                  <Text style={{fontSize: 13,}}>{data.location_name}</Text>
                  <Text style={{fontSize: 10,}}>{data.location_address}</Text>
                </View>
                <View style={{flex: 1, flexDirection:'column',}}>
                <TouchableOpacity onPress={() => navigate('Detailcalllocations', {data: data})}>
                <Image
                  style={{width: 25, height: 25}}
                  source={{uri: 'http://simpleicon.com/wp-content/uploads/phone-volume-256x256.png'}}
                />
                </TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection:'column',}}>
                <TouchableOpacity onPress={() => navigate('Detailmaps', {data: data})}>
                <Image
                  style={{width: 25, height: 25}}
                  source={{uri: 'https://www.shareicon.net/data/128x128/2016/08/24/819488_pin_512x512.png'}}
                />
                </TouchableOpacity>
                </View>
              </View>
            )
          })
        }

        <View style={styles.Konten}>
          <Text style={styles.textkota}>CIREBON</Text>
        </View>

        {
          kotaCirebon.map((data) => {
            return (
              <View style={styles.isikota}>
                <View style={{flex: 5, flexDirection:'column',}}>
                  <Text style={{fontSize: 13,}}>{data.location_name}</Text>
                  <Text style={{fontSize: 10,}}>{data.location_address}</Text>
                </View>
                <View style={{flex: 1, flexDirection:'column',}}>
                <TouchableOpacity onPress={() => navigate('Detailcalllocations', {data: data})}>
                <Image
                  style={{width: 25, height: 25}}
                  source={{uri: 'http://simpleicon.com/wp-content/uploads/phone-volume-256x256.png'}}
                />
                </TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection:'column',}}>
                <TouchableOpacity onPress={() => navigate('Detailmaps', {data: data})}>
                <Image
                  style={{width: 25, height: 25}}
                  source={{uri: 'https://www.shareicon.net/data/128x128/2016/08/24/819488_pin_512x512.png'}}
                />
                </TouchableOpacity>
                </View>
              </View>
            )
          })
        }

        <View style={styles.Konten}>
          <Text style={styles.textkota}>JAKARTA</Text>
        </View>

        {
          kotaJakarta.map((data) => {
            return (
              <View style={styles.isikota}>
                <View style={{flex: 5, flexDirection:'column',}}>
                  <Text style={{fontSize: 13,}}>{data.location_name}</Text>
                  <Text style={{fontSize: 10,}}>{data.location_address}</Text>
                </View>
                <View style={{flex: 1, flexDirection:'column',}}>
                <TouchableOpacity onPress={() => navigate('Detailcalllocations', {data: data})}>
                <Image
                  style={{width: 25, height: 25}}
                  source={{uri: 'http://simpleicon.com/wp-content/uploads/phone-volume-256x256.png'}}
                />
                </TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection:'column',}}>
                <TouchableOpacity onPress={() => navigate('Detailmaps', {data: data})}>
                <Image
                  style={{width: 25, height: 25}}
                  source={{uri: 'https://www.shareicon.net/data/128x128/2016/08/24/819488_pin_512x512.png'}}
                />
                </TouchableOpacity>
                </View>
              </View>
            )
          })
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  Konten: {
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    height: 35,
    borderBottomColor: '#000000',
    borderBottomWidth: 1
  },
  textkota: {
    // marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  isikota: {
    paddingLeft: 20,
    paddingTop: 10,
    flexDirection: 'row',
  }
});

const mapState = state => {
  return {
    dataSlide: state.dataSlide.dataSlide,
    dataLocation: state.dataSlide.dataLocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSlide: () => dispatch(getSlide()),
  }
}

export default connect(
  mapState,
  mapDispatchToProps
)(Locations)
