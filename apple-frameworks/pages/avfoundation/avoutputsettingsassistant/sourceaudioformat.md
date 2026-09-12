> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avoutputsettingsassistant/sourceaudioformat](https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/sourceaudioformat)

# sourceAudioFormat (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The format of the source audio data.

## Declaration

```swift
var sourceAudioFormat: CMAudioFormatDescription? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which means the assistant doesn’t know the audio format. Setting a value for this property helps the assistant generate more complete audio settings. After setting a value, requery the [audioSettings](audiosettings.md) property to get the latest values.

## See Also

### Configuring output settings

- [outputFileType](outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [audioSettings](audiosettings.md): An audio settings dictionary.
- [videoSettings](videosettings.md): A video settings dictionary.
- [sourceVideoFormat](sourcevideoformat.md): The format of the source video data.
- [sourceVideoMinFrameDuration](sourcevideominframeduration.md): A time value that describes the minimum frame duration of the video data.
- [sourceVideoAverageFrameDuration](sourcevideoaverageframeduration.md): A time value that describes the average frame duration of the video data.

# sourceAudioFormat (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The format of the source audio data.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CMAudioFormatDescriptionRef sourceAudioFormat;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which means the assistant doesn’t know the audio format. Setting a value for this property helps the assistant generate more complete audio settings. After setting a value, requery the [audioSettings](audiosettings.md) property to get the latest values.

## See Also

### Configuring output settings

- [outputFileType](outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [audioSettings](audiosettings.md): An audio settings dictionary.
- [videoSettings](videosettings.md): A video settings dictionary.
- [sourceVideoFormat](sourcevideoformat.md): The format of the source video data.
- [sourceVideoMinFrameDuration](sourcevideominframeduration.md): A time value that describes the minimum frame duration of the video data.
- [sourceVideoAverageFrameDuration](sourcevideoaverageframeduration.md): A time value that describes the average frame duration of the video data.
