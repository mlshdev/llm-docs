> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/interruptiontype/ended](https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptiontype/ended)

# AVAudioSession.InterruptionType.ended (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A type that indicates that the operating system ended interrupting the audio session.

> Use AVAudioSessionDidBecomeInactiveNotification and AVAudioSessionResumptionRecommendationNotification instead

## Declaration

```swift
case ended
```

## Mentioned In

- [Handling audio interruptions](../../handling-audio-interruptions.md)

## See Also

### Interruption Types

- [AVAudioSession.InterruptionType.began](began.md): Deprecated. A type that indicates that the operating system began interrupting the audio session.

# AVAudioSessionInterruptionTypeEnded (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A type that indicates that the operating system ended interrupting the audio session.

> Use AVAudioSessionDidBecomeInactiveNotification and AVAudioSessionResumptionRecommendationNotification instead

## Declaration

```objectivec
AVAudioSessionInterruptionTypeEnded
```

## Mentioned In

- [Handling audio interruptions](../../handling-audio-interruptions.md)

## See Also

### Interruption Types

- [AVAudioSessionInterruptionTypeBegan](began.md): Deprecated. A type that indicates that the operating system began interrupting the audio session.
