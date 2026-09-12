> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/interruptiontype](https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptiontype)

# AVAudioSession.InterruptionType (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Constants that describe the type of an audio interruption.

> Use AVAudioSessionDidBecomeInactiveNotification and AVAudioSessionResumptionRecommendationNotification instead

## Declaration

```swift
enum InterruptionType
```

## Mentioned In

- [Handling audio interruptions](../handling-audio-interruptions.md)

## Topics

### Interruption Types

- [AVAudioSession.InterruptionType.began](interruptiontype/began.md): Deprecated. A type that indicates that the operating system began interrupting the audio session.
- [AVAudioSession.InterruptionType.ended](interruptiontype/ended.md): Deprecated. A type that indicates that the operating system ended interrupting the audio session.

### Initializers

- [init(rawValue:)](interruptiontype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User Info Values

- [AVAudioSession.InterruptionOptions](interruptionoptions.md): Deprecated. Constants that indicate the state of an audio session after an interruption.
- [AVAudioSession.InterruptionReason](interruptionreason.md): Constants that define the reasons for an audio session interruption.

# AVAudioSessionInterruptionType (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Constants that describe the type of an audio interruption.

> Use AVAudioSessionDidBecomeInactiveNotification and AVAudioSessionResumptionRecommendationNotification instead

## Declaration

```objectivec
enum AVAudioSessionInterruptionType : NSUInteger;
```

## Mentioned In

- [Handling audio interruptions](../handling-audio-interruptions.md)

## Topics

### Interruption Types

- [AVAudioSessionInterruptionTypeBegan](interruptiontype/began.md): Deprecated. A type that indicates that the operating system began interrupting the audio session.
- [AVAudioSessionInterruptionTypeEnded](interruptiontype/ended.md): Deprecated. A type that indicates that the operating system ended interrupting the audio session.

## See Also

### User Info Values

- [AVAudioSessionInterruptionOptions](interruptionoptions.md): Deprecated. Constants that indicate the state of an audio session after an interruption.
- [AVAudioSessionInterruptionReason](interruptionreason.md): Constants that define the reasons for an audio session interruption.
