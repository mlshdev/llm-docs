> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avoutputsettingsassistant/sourcevideoformat](https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/sourcevideoformat)

# sourceVideoFormat (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The format of the source video data.

## Declaration

```swift
var sourceVideoFormat: CMVideoFormatDescription? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which means the assistant doesn’t know the video format. Setting a value for this property helps the assistant generate more complete video settings. After setting a value, requery the [videoSettings](videosettings.md) property to get the latest values.

## See Also

### Configuring output settings

- [outputFileType](outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [audioSettings](audiosettings.md): An audio settings dictionary.
- [sourceAudioFormat](sourceaudioformat.md): The format of the source audio data.
- [videoSettings](videosettings.md): A video settings dictionary.
- [sourceVideoMinFrameDuration](sourcevideominframeduration.md): A time value that describes the minimum frame duration of the video data.
- [sourceVideoAverageFrameDuration](sourcevideoaverageframeduration.md): A time value that describes the average frame duration of the video data.

# sourceVideoFormat (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The format of the source video data.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CMVideoFormatDescriptionRef sourceVideoFormat;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which means the assistant doesn’t know the video format. Setting a value for this property helps the assistant generate more complete video settings. After setting a value, requery the [videoSettings](videosettings.md) property to get the latest values.

## See Also

### Configuring output settings

- [outputFileType](outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [audioSettings](audiosettings.md): An audio settings dictionary.
- [sourceAudioFormat](sourceaudioformat.md): The format of the source audio data.
- [videoSettings](videosettings.md): A video settings dictionary.
- [sourceVideoMinFrameDuration](sourcevideominframeduration.md): A time value that describes the minimum frame duration of the video data.
- [sourceVideoAverageFrameDuration](sourcevideoaverageframeduration.md): A time value that describes the average frame duration of the video data.
