> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/audiosettings

# audioSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An audio settings dictionary.

## Declaration

```swift
var audioSettings: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property may change as a result of setting a new value for the [sourceAudioFormat](sourceaudioformat.md) property. See [Audio settings](../audio-settings.md) for keys and values.

## See Also

### Configuring output settings

- [outputFileType](outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [sourceAudioFormat](sourceaudioformat.md): The format of the source audio data.
- [videoSettings](videosettings.md): A video settings dictionary.
- [sourceVideoFormat](sourcevideoformat.md): The format of the source video data.
- [sourceVideoMinFrameDuration](sourcevideominframeduration.md): A time value that describes the minimum frame duration of the video data.
- [sourceVideoAverageFrameDuration](sourcevideoaverageframeduration.md): A time value that describes the average frame duration of the video data.

# audioSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An audio settings dictionary.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * audioSettings;
```

<a id="Discussion"></a>

## Discussion

The value of this property may change as a result of setting a new value for the [sourceAudioFormat](sourceaudioformat.md) property. See [Audio settings](../audio-settings.md) for keys and values.

## See Also

### Configuring output settings

- [outputFileType](outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [sourceAudioFormat](sourceaudioformat.md): The format of the source audio data.
- [videoSettings](videosettings.md): A video settings dictionary.
- [sourceVideoFormat](sourcevideoformat.md): The format of the source video data.
- [sourceVideoMinFrameDuration](sourcevideominframeduration.md): A time value that describes the minimum frame duration of the video data.
- [sourceVideoAverageFrameDuration](sourcevideoaverageframeduration.md): A time value that describes the average frame duration of the video data.
