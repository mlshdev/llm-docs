> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerastream/audiostreamsetting](https://developer.apple.com/documentation/homekit/hmcamerastream/audiostreamsetting)

# audioStreamSetting (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 3.0+

The stream’s current audio setting.

## Declaration

```swift
var audioStreamSetting: HMCameraAudioStreamSetting { get }
```

## See Also

### Configuring the audio stream

- [updateAudioStreamSetting(\_:completionHandler:)](updateaudiostreamsetting%28__completionhandler_%29.md): Updates an audio stream’s settings.
- [setAudioStreamSetting(\_:)](setaudiostreamsetting%28__%29.md): Deprecated.
- [HMCameraAudioStreamSetting](../hmcameraaudiostreamsetting.md): The options associated with a camera’s audio stream.

# audioStreamSetting (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 3.0+

The stream’s current audio setting.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) HMCameraAudioStreamSetting audioStreamSetting;
```

## See Also

### Configuring the audio stream

- [updateAudioStreamSetting:completionHandler:](updateaudiostreamsetting%28__completionhandler_%29.md): Updates an audio stream’s settings.
- [setAudioStreamSetting:](setaudiostreamsetting%28__%29.md): Deprecated.
- [HMCameraAudioStreamSetting](../hmcameraaudiostreamsetting.md): The options associated with a camera’s audio stream.
