> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/isspeaking](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/isspeaking)

# isSpeaking (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Indicates whether the receiver is currently generating synthesized speech.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
var isSpeaking: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) when the receiver is generating synthesized speech, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Synthesizing Speech

- [startSpeaking(\_:)](startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [startSpeaking(\_:to:)](startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [pauseSpeaking(at:)](pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [continueSpeaking()](continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking()](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeaking(at:)](stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
- [NSSpeechSynthesizer.Boundary](boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeaking(at:)](pausespeaking%28at_%29.md) and [stopSpeaking(at:)](stopspeaking%28at_%29.md).

# speaking (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Indicates whether the receiver is currently generating synthesized speech.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
@property (readonly, getter=isSpeaking) BOOL speaking;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) when the receiver is generating synthesized speech, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Synthesizing Speech

- [startSpeakingString:](startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [startSpeakingString:toURL:](startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [continueSpeaking](continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
- [NSSpeechBoundary](boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md) and [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md).
