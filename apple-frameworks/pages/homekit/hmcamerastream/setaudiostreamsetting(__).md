> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerastream/setaudiostreamsetting(_:)](https://developer.apple.com/documentation/homekit/hmcamerastream/setaudiostreamsetting(_:))

# setAudioStreamSetting(\_:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

> Use [updateAudioStreamSetting(\_:completionHandler:)](updateaudiostreamsetting%28__completionhandler_%29.md) instead.

## Declaration

```swift
func setAudioStreamSetting(_ audioStreamSetting: HMCameraAudioStreamSetting)
```

## Parameters

- `audioStreamSetting`: The new audio stream configuration.

## See Also

### Configuring the audio stream

- [audioStreamSetting](audiostreamsetting.md): The stream’s current audio setting.
- [updateAudioStreamSetting(\_:completionHandler:)](updateaudiostreamsetting%28__completionhandler_%29.md): Updates an audio stream’s settings.
- [HMCameraAudioStreamSetting](../hmcameraaudiostreamsetting.md): The options associated with a camera’s audio stream.

# setAudioStreamSetting: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

> Use [updateAudioStreamSetting:completionHandler:](updateaudiostreamsetting%28__completionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) setAudioStreamSetting:(HMCameraAudioStreamSetting) audioStreamSetting;
```

## Parameters

- `audioStreamSetting`: The new audio stream configuration.

## See Also

### Configuring the audio stream

- [audioStreamSetting](audiostreamsetting.md): The stream’s current audio setting.
- [updateAudioStreamSetting:completionHandler:](updateaudiostreamsetting%28__completionhandler_%29.md): Updates an audio stream’s settings.
- [HMCameraAudioStreamSetting](../hmcameraaudiostreamsetting.md): The options associated with a camera’s audio stream.
