> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/boundary](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/boundary)

# NSSpeechSynthesizer.Boundary (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+ (deprecated in 14.0)

These constants are used to indicate where speech should be stopped and paused. See [pauseSpeaking(at:)](pausespeaking%28at_%29.md) and [stopSpeaking(at:)](stopspeaking%28at_%29.md).

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
enum Boundary
```

## Topics

### Constants

- [NSSpeechSynthesizer.Boundary.immediateBoundary](boundary/immediateboundary.md): Deprecated. Speech should be paused or stopped immediately.
- [NSSpeechSynthesizer.Boundary.wordBoundary](boundary/wordboundary.md): Deprecated. Speech should be paused or stopped at the end of the word.
- [NSSpeechSynthesizer.Boundary.sentenceBoundary](boundary/sentenceboundary.md): Deprecated. Speech should be paused or stopped at the end of the sentence.

### Initializers

- [init(rawValue:)](boundary/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Synthesizing Speech

- [isSpeaking](isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeaking(\_:)](startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [startSpeaking(\_:to:)](startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [pauseSpeaking(at:)](pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [continueSpeaking()](continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking()](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeaking(at:)](stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.

# NSSpeechBoundary (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+ (deprecated in 14.0)

These constants are used to indicate where speech should be stopped and paused. See [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md) and [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md).

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
enum NSSpeechBoundary : NSUInteger;
```

## Topics

### Constants

- [NSSpeechImmediateBoundary](boundary/immediateboundary.md): Deprecated. Speech should be paused or stopped immediately.
- [NSSpeechWordBoundary](boundary/wordboundary.md): Deprecated. Speech should be paused or stopped at the end of the word.
- [NSSpeechSentenceBoundary](boundary/sentenceboundary.md): Deprecated. Speech should be paused or stopped at the end of the sentence.

## See Also

### Synthesizing Speech

- [speaking](isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeakingString:](startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [startSpeakingString:toURL:](startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [continueSpeaking](continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
