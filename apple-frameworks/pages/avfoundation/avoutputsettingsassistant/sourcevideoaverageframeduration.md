> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avoutputsettingsassistant/sourcevideoaverageframeduration](https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/sourcevideoaverageframeduration)

# sourceVideoAverageFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A time value that describes the average frame duration of the video data.

## Declaration

```swift
var sourceVideoAverageFrameDuration: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property enables the output settings assistant to generate more complete video settings. After setting a value, requery the [videoSettings](videosettings.md) property to get the latest values.

The default value is `1/30`, which means the output settings assistant assumes that your source video has a frame rate of 30fps.

## See Also

### Configuring output settings

- [outputFileType](outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [audioSettings](audiosettings.md): An audio settings dictionary.
- [sourceAudioFormat](sourceaudioformat.md): The format of the source audio data.
- [videoSettings](videosettings.md): A video settings dictionary.
- [sourceVideoFormat](sourcevideoformat.md): The format of the source video data.
- [sourceVideoMinFrameDuration](sourcevideominframeduration.md): A time value that describes the minimum frame duration of the video data.

# sourceVideoAverageFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A time value that describes the average frame duration of the video data.

## Declaration

```objectivec
@property (nonatomic) CMTime sourceVideoAverageFrameDuration;
```

<a id="Discussion"></a>

## Discussion

Setting this property enables the output settings assistant to generate more complete video settings. After setting a value, requery the [videoSettings](videosettings.md) property to get the latest values.

The default value is `1/30`, which means the output settings assistant assumes that your source video has a frame rate of 30fps.

## See Also

### Configuring output settings

- [outputFileType](outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [audioSettings](audiosettings.md): An audio settings dictionary.
- [sourceAudioFormat](sourceaudioformat.md): The format of the source audio data.
- [videoSettings](videosettings.md): A video settings dictionary.
- [sourceVideoFormat](sourcevideoformat.md): The format of the source video data.
- [sourceVideoMinFrameDuration](sourcevideominframeduration.md): A time value that describes the minimum frame duration of the video data.
