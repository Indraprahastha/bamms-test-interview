import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { getSlide } from '../actions/index'
import MapView from 'react-native-maps';

class Detailmaps extends React.Component {
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

  kembali() {

  }

  render () {
    console.log(this.state.data.lat)
    return (
      <View style={styles.container}>
      <MapView
      style={styles.map}
      initialRegion={{
        latitude: Number(this.state.data.lat),
        longitude: Number(this.state.data.lon),
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0201,
      }}
      >
        <MapView.Marker
          coordinate={{
            latitude: Number(this.state.data.lat),
            longitude: Number(this.state.data.lon),
          }}
          title={this.state.data.location_name}
          description={this.state.data.location_address}
        />
      </MapView>
      <Button
      onPress={() => this.props.navigation.goBack(null)}
      title="Kembali"
      color="#841584"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: 900,
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
)(Detailmaps)
