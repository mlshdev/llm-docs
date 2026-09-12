> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avoutputsettingsassistant/sourcevideominframeduration](https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/sourcevideominframeduration)

# sourceVideoMinFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A time value that describes the minimum frame duration of the video data.

## Declaration

```swift
var sourceVideoMinFrameDuration: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property enables the output settings assistant to generate more complete video settings. After setting a value, requery the [videoSettings](videosettings.md) property to get the latest values.

If the source of the video data is an instance of [AVAssetReaderOutput](../avassetreaderoutput.md), you can discover the minimum frame duration of your source asset using the [AVAssetTrack](../avassettrack.md) instance’s [minFrameDuration](../avassettrack/minframeduration.md) property.

The default value is `1/30`, which means the output settings assistant assumes that the source video has a maximum frame rate of 30fps.

## See Also

### Configuring output settings

- [outputFileType](outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [audioSettings](audiosettings.md): An audio settings dictionary.
- [sourceAudioFormat](sourceaudioformat.md): The format of the source audio data.
- [videoSettings](videosettings.md): A video settings dictionary.
- [sourceVideoFormat](sourcevideoformat.md): The format of the source video data.
- [sourceVideoAverageFrameDuration](sourcevideoaverageframeduration.md): A time value that describes the average frame duration of the video data.

# sourceVideoMinFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A time value that describes the minimum frame duration of the video data.

## Declaration

```objectivec
@property (nonatomic) CMTime sourceVideoMinFrameDuration;
```

<a id="Discussion"></a>

## Discussion

Setting this property enables the output settings assistant to generate more complete video settings. After setting a value, requery the [videoSettings](videosettings.md) property to get the latest values.

If the source of the video data is an instance of [AVAssetReaderOutput](../avassetreaderoutput.md), you can discover the minimum frame duration of your source asset using the [AVAssetTrack](../avassettrack.md) instance’s [minFrameDuration](../avassettrack/minframeduration.md) property.

The default value is `1/30`, which means the output settings assistant assumes that the source video has a maximum frame rate of 30fps.

## See Also

### Configuring output settings

- [outputFileType](outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [audioSettings](audiosettings.md): An audio settings dictionary.
- [sourceAudioFormat](sourceaudioformat.md): The format of the source audio data.
- [videoSettings](videosettings.md): A video settings dictionary.
- [sourceVideoFormat](sourcevideoformat.md): The format of the source video data.
- [sourceVideoAverageFrameDuration](sourcevideoaverageframeduration.md): A time value that describes the average frame duration of the video data.
