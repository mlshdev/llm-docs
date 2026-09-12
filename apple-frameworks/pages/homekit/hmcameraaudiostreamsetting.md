> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcameraaudiostreamsetting](https://developer.apple.com/documentation/homekit/hmcameraaudiostreamsetting)

# HMCameraAudioStreamSetting (Swift)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The options associated with a camera’s audio stream.

## Declaration

```swift
enum HMCameraAudioStreamSetting
```

## Topics

### Configuring the Audio Stream

- [HMCameraAudioStreamSetting.muted](hmcameraaudiostreamsetting/muted.md): The setting that mutes both incoming and outgoing audio.
- [HMCameraAudioStreamSetting.incomingAudioAllowed](hmcameraaudiostreamsetting/incomingaudioallowed.md): The setting that permits incoming audio.
- [HMCameraAudioStreamSetting.bidirectionalAudioAllowed](hmcameraaudiostreamsetting/bidirectionalaudioallowed.md): The setting that permits both incoming and outgoing audio.

### Initializers

- [init(rawValue:)](hmcameraaudiostreamsetting/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the audio stream

- [audioStreamSetting](hmcamerastream/audiostreamsetting.md): The stream’s current audio setting.
- [updateAudioStreamSetting(\_:completionHandler:)](hmcamerastream/updateaudiostreamsetting%28__completionhandler_%29.md): Updates an audio stream’s settings.
- [setAudioStreamSetting(\_:)](hmcamerastream/setaudiostreamsetting%28__%29.md): Deprecated.

# HMCameraAudioStreamSetting (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The options associated with a camera’s audio stream.

## Declaration

```objectivec
enum HMCameraAudioStreamSetting : NSUInteger;
```

## Topics

### Configuring the Audio Stream

- [HMCameraAudioStreamSettingMuted](hmcameraaudiostreamsetting/muted.md): The setting that mutes both incoming and outgoing audio.
- [HMCameraAudioStreamSettingIncomingAudioAllowed](hmcameraaudiostreamsetting/incomingaudioallowed.md): The setting that permits incoming audio.
- [HMCameraAudioStreamSettingBidirectionalAudioAllowed](hmcameraaudiostreamsetting/bidirectionalaudioallowed.md): The setting that permits both incoming and outgoing audio.

## See Also

### Configuring the audio stream

- [audioStreamSetting](hmcamerastream/audiostreamsetting.md): The stream’s current audio setting.
- [updateAudioStreamSetting:completionHandler:](hmcamerastream/updateaudiostreamsetting%28__completionhandler_%29.md): Updates an audio stream’s settings.
- [setAudioStreamSetting:](hmcamerastream/setaudiostreamsetting%28__%29.md): Deprecated.
