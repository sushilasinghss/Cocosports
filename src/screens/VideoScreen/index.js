import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Video from 'react-native-video';

import style from "./style"

const VideoScreen = () => {
    const playRef = useRef()
    const [onBuffer, setOnBuffer] = useState(false);
    const [videoError, setVideoError] = useState(false);

    return (
        <View style={style.mainContainer}>
            <View style={style.videContainer}>
                {/* <Image
                    source={{ uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800' }}
                    style={{ height: '100%', width: '100%', position: 'absolute', zIndex: 10000 }}
                    resizeMode='cover'
                /> */}
                <Video
                    // onEnd={onEnd}
                    // onLoad={onLoad}
                    // onLoadStart={onLoadStart}
                    // onProgress={onProgress}
                    // paused={paused}
                    ref={playRef}
                    // resizeMode={screenType}
                    // onFullScreen={isFullScreen}
                    controls={true}
                    source={{
                        uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4'
                    }}
                    style={style.mediaPlayer}
                    volume={10}
                />
            </View>
        </View>
    )
}


export default VideoScreen;
