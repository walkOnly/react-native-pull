import React, { Component } from 'react';
import {
    StyleSheet,
    Animated,
    Easing,
    Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default class WhirlImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animation: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.loop(
            Animated.timing(
                this.state.animation,
                {
                    toValue: 1,
                    duration: 60 * 1000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            )
        ).start();
    }

    render() {
        return (
            <Animated.Image
                source={require('./imgs/ic_loading.png')}
                style={[styles.loadingLogoStyle, {
                    transform: [
                        {
                            rotate: this.state.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '18000deg']
                            })
                        }
                    ]
                }]} />
        );
    }

}

const styles = StyleSheet.create({
    loadingLogoStyle: {
        width: width * 0.04,
        height: width * 0.04,
        marginRight: width * 0.06
    }
});
