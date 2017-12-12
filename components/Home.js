import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { getSlide } from '../actions/index'
// import Swiper from 'react-native-swiper'
// import Carousel from 'react-native-carousel-view';
import ImageSlider from 'react-native-image-slider';

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      position: 1,
      interval: null
    };
  }

  componentWillMount() {
    this.props.getSlide()
    this.setState({interval: setInterval(() => {
      this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
    }, 3000)});
  }

  componentDidMount() {

  }

  navigasiLokasi() {
    this.props.navigation.navigate('Locations')
    // alert(this.props.navigation.navigate)
  }

  render () {
    const list = []
    for (var i = 0; i < this.props.dataSlide.length; i++) {
      list.push(this.props.dataSlide[i].url_location)
    }
    return (
      <View style={styles.container}>

        <View style={{height: 220, backgroundColor: '#FFD700', flexDirection: 'row'}}>
          <ImageSlider
          style={styles.image}
          height={220}
          images={list}
          position={this.state.position}
          onPositionChanged={position => this.setState({position})}/>
        </View>

        <View style={{justifyContent: 'center', paddingTop: 25, backgroundColor: '#FFD700', flexDirection: 'row', height: 70,}}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>Kami menerima pengiriman Paket</Text>
        </View>

        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <Button
        onPress={()=> this.navigasiLokasi()}
        title="Cek Lokasi"
        color="#841584"
        />
        </View>

        <View style={{justifyContent: 'center', flexDirection: 'row', height: 400,}}>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#FFD700',
  },
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
)(Home)
