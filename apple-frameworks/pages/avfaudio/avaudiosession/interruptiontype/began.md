> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/interruptiontype/began](https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptiontype/began)

# AVAudioSession.InterruptionType.began (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A type that indicates that the operating system began interrupting the audio session.

> Use AVAudioSessionDidBecomeInactiveNotification and AVAudioSessionResumptionRecommendationNotification instead

## Declaration

```swift
case began
```

## See Also

### Interruption Types

- [AVAudioSession.InterruptionType.ended](ended.md): Deprecated. A type that indicates that the operating system ended interrupting the audio session.

# AVAudioSessionInterruptionTypeBegan (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A type that indicates that the operating system began interrupting the audio session.

> Use AVAudioSessionDidBecomeInactiveNotification and AVAudioSessionResumptionRecommendationNotification instead

## Declaration

```objectivec
AVAudioSessionInterruptionTypeBegan
```

## See Also

### Interruption Types

- [AVAudioSessionInterruptionTypeEnded](ended.md): Deprecated. A type that indicates that the operating system ended interrupting the audio session.
