> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/silencesecondaryaudiohinttype](https://developer.apple.com/documentation/avfaudio/avaudiosession/silencesecondaryaudiohinttype)

# AVAudioSession.SilenceSecondaryAudioHintType (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Constants that indicate whether optional secondary audio muting should begin or end.

## Declaration

```swift
enum SilenceSecondaryAudioHintType
```

## Topics

### Constants

- [AVAudioSession.SilenceSecondaryAudioHintType.begin](silencesecondaryaudiohinttype/begin.md): A value that indicates that another application’s primary audio has started.
- [AVAudioSession.SilenceSecondaryAudioHintType.end](silencesecondaryaudiohinttype/end.md): A value that indicates that another application’s primary audio has stopped.

### Initializers

- [init(rawValue:)](silencesecondaryaudiohinttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVAudioSessionSilenceSecondaryAudioHintType (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate whether optional secondary audio muting should begin or end.

## Declaration

```objectivec
enum AVAudioSessionSilenceSecondaryAudioHintType : NSUInteger;
```

## Topics

### Constants

- [AVAudioSessionSilenceSecondaryAudioHintTypeBegin](silencesecondaryaudiohinttype/begin.md): A value that indicates that another application’s primary audio has started.
- [AVAudioSessionSilenceSecondaryAudioHintTypeEnd](silencesecondaryaudiohinttype/end.md): A value that indicates that another application’s primary audio has stopped.
