> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerastream/updateaudiostreamsetting(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmcamerastream/updateaudiostreamsetting(_:completionhandler:))

# updateAudioStreamSetting(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 3.0+

Updates an audio stream’s settings.

## Declaration

```swift
func updateAudioStreamSetting(_ audioStreamSetting: HMCameraAudioStreamSetting, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateAudioStreamSetting(_ audioStreamSetting: HMCameraAudioStreamSetting) async throws
```

## Parameters

- `audioStreamSetting`: The new audio stream configuration.
- `completion`: The block executed after processing the request.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Configuring the audio stream

- [audioStreamSetting](audiostreamsetting.md): The stream’s current audio setting.
- [setAudioStreamSetting(\_:)](setaudiostreamsetting%28__%29.md): Deprecated.
- [HMCameraAudioStreamSetting](../hmcameraaudiostreamsetting.md): The options associated with a camera’s audio stream.

# updateAudioStreamSetting:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 3.0+

Updates an audio stream’s settings.

## Declaration

```objectivec
- (void) updateAudioStreamSetting:(HMCameraAudioStreamSetting) audioStreamSetting completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `audioStreamSetting`: The new audio stream configuration.
- `completion`: The block executed after processing the request.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Configuring the audio stream

- [audioStreamSetting](audiostreamsetting.md): The stream’s current audio setting.
- [setAudioStreamSetting:](setaudiostreamsetting%28__%29.md): Deprecated.
- [HMCameraAudioStreamSetting](../hmcameraaudiostreamsetting.md): The options associated with a camera’s audio stream.
