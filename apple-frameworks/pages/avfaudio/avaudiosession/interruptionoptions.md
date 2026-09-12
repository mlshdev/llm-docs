> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/interruptionoptions](https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptionoptions)

# AVAudioSession.InterruptionOptions (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Constants that indicate the state of an audio session after an interruption.

> Use AVAudioSessionResumptionRecommendationNotification instead

## Declaration

```swift
struct InterruptionOptions
```

## Mentioned In

- [Handling audio interruptions](../handling-audio-interruptions.md)

## Topics

### Creating an Interruption Option

- [init(rawValue:)](interruptionoptions/init%28rawvalue_%29.md): Deprecated. Creates a new instance with the raw value you specify.

### Getting Standard Interruption Options

- [shouldResume](interruptionoptions/shouldresume.md): Deprecated. An option that indicates the interruption by another audio session has ended and the app can resume its audio session.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### User Info Values

- [AVAudioSession.InterruptionType](interruptiontype.md): Deprecated. Constants that describe the type of an audio interruption.
- [AVAudioSession.InterruptionReason](interruptionreason.md): Constants that define the reasons for an audio session interruption.

# AVAudioSessionInterruptionOptions (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Constants that indicate the state of an audio session after an interruption.

> Use AVAudioSessionResumptionRecommendationNotification instead

## Declaration

```objectivec
enum AVAudioSessionInterruptionOptions : NSUInteger;
```

## Mentioned In

- [Handling audio interruptions](../handling-audio-interruptions.md)

## Topics

### Getting Standard Interruption Options

- [AVAudioSessionInterruptionOptionShouldResume](interruptionoptions/shouldresume.md): Deprecated. An option that indicates the interruption by another audio session has ended and the app can resume its audio session.

## See Also

### User Info Values

- [AVAudioSessionInterruptionType](interruptiontype.md): Deprecated. Constants that describe the type of an audio interruption.
- [AVAudioSessionInterruptionReason](interruptionreason.md): Constants that define the reasons for an audio session interruption.
