> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechboundary](https://developer.apple.com/documentation/avfaudio/avspeechboundary)

# AVSpeechBoundary (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Specifies when to pause or stop speech.

## Declaration

```swift
enum AVSpeechBoundary
```

## Topics

### Speech boundaries

- [AVSpeechBoundary.immediate](avspeechboundary/immediate.md): Indicates to pause or stop speech immediately.
- [AVSpeechBoundary.word](avspeechboundary/word.md): Indicates to pause or stop speech after the synthesizer finishes speaking the current word.

### Initializers

- [init(rawValue:)](avspeechboundary/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling speech

- [speak(\_:)](avspeechsynthesizer/speak%28__%29.md): Adds the utterance you specify to the speech synthesizer’s queue.
- [continueSpeaking()](avspeechsynthesizer/continuespeaking%28%29.md): Resumes speech from its paused point.
- [pauseSpeaking(at:)](avspeechsynthesizer/pausespeaking%28at_%29.md): Pauses speech at the boundary you specify.
- [stopSpeaking(at:)](avspeechsynthesizer/stopspeaking%28at_%29.md): Stops speech at the boundary you specify.

# AVSpeechBoundary (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Specifies when to pause or stop speech.

## Declaration

```objectivec
enum AVSpeechBoundary : NSInteger;
```

## Topics

### Speech boundaries

- [AVSpeechBoundaryImmediate](avspeechboundary/immediate.md): Indicates to pause or stop speech immediately.
- [AVSpeechBoundaryWord](avspeechboundary/word.md): Indicates to pause or stop speech after the synthesizer finishes speaking the current word.

## See Also

### Controlling speech

- [speakUtterance:](avspeechsynthesizer/speak%28__%29.md): Adds the utterance you specify to the speech synthesizer’s queue.
- [continueSpeaking](avspeechsynthesizer/continuespeaking%28%29.md): Resumes speech from its paused point.
- [pauseSpeakingAtBoundary:](avspeechsynthesizer/pausespeaking%28at_%29.md): Pauses speech at the boundary you specify.
- [stopSpeakingAtBoundary:](avspeechsynthesizer/stopspeaking%28at_%29.md): Stops speech at the boundary you specify.
