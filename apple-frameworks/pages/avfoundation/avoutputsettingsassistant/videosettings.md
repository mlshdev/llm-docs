> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avoutputsettingsassistant/videosettings](https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/videosettings)

# videoSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A video settings dictionary.

## Declaration

```swift
var videoSettings: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property may change as a result of setting a new value for the [sourceVideoFormat](sourcevideoformat.md) property. See [Video settings](../video-settings.md) for the supported keys and values.

## See Also

### Configuring output settings

- [outputFileType](outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [audioSettings](audiosettings.md): An audio settings dictionary.
- [sourceAudioFormat](sourceaudioformat.md): The format of the source audio data.
- [sourceVideoFormat](sourcevideoformat.md): The format of the source video data.
- [sourceVideoMinFrameDuration](sourcevideominframeduration.md): A time value that describes the minimum frame duration of the video data.
- [sourceVideoAverageFrameDuration](sourcevideoaverageframeduration.md): A time value that describes the average frame duration of the video data.

# videoSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A video settings dictionary.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * videoSettings;
```

<a id="Discussion"></a>

## Discussion

The value of this property may change as a result of setting a new value for the [sourceVideoFormat](sourcevideoformat.md) property. See [Video settings](../video-settings.md) for the supported keys and values.

## See Also

### Configuring output settings

- [outputFileType](outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [audioSettings](audiosettings.md): An audio settings dictionary.
- [sourceAudioFormat](sourceaudioformat.md): The format of the source audio data.
- [sourceVideoFormat](sourcevideoformat.md): The format of the source video data.
- [sourceVideoMinFrameDuration](sourcevideominframeduration.md): A time value that describes the minimum frame duration of the video data.
- [sourceVideoAverageFrameDuration](sourcevideoaverageframeduration.md): A time value that describes the average frame duration of the video data.
