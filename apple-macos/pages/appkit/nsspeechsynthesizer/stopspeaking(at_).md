> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/stopspeaking(at:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/stopspeaking(at:))

# stopSpeaking(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Stops synthesis in progress at a given boundary.

## Declaration

```swift
func stopSpeaking(at boundary: NSSpeechSynthesizer.Boundary)
```

## Parameters

- `boundary`: Boundary at which to stop speech. The supported bound types are listed in [NSSpeechSynthesizer.Boundary](boundary.md).

<a id="Discussion"></a>

## Discussion

Pass the constant [NSSpeechSynthesizer.Boundary.immediateBoundary](boundary/immediateboundary.md) to stop immediately, even in the middle of a word. Pass [NSSpeechSynthesizer.Boundary.wordBoundary](boundary/wordboundary.md) or [NSSpeechSynthesizer.Boundary.sentenceBoundary](boundary/sentenceboundary.md) to stop speech at the end of the current word or sentence, respectively.

If the end of the string being spoken is reached before the specified stopping point, the synthesizer stops at the end of the string without generating an error.

## See Also

### Synthesizing Speech

- [isSpeaking](isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeaking(\_:)](startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [startSpeaking(\_:to:)](startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [pauseSpeaking(at:)](pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [continueSpeaking()](continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking()](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [NSSpeechSynthesizer.Boundary](boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeaking(at:)](pausespeaking%28at_%29.md) and [stopSpeaking(at:)](stopspeaking%28at_%29.md).

# stopSpeakingAtBoundary: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Stops synthesis in progress at a given boundary.

## Declaration

```objectivec
- (void) stopSpeakingAtBoundary:(NSSpeechBoundary) boundary;
```

## Parameters

- `boundary`: Boundary at which to stop speech. The supported bound types are listed in [NSSpeechBoundary](boundary.md).

<a id="Discussion"></a>

## Discussion

Pass the constant [NSSpeechImmediateBoundary](boundary/immediateboundary.md) to stop immediately, even in the middle of a word. Pass [NSSpeechWordBoundary](boundary/wordboundary.md) or [NSSpeechSentenceBoundary](boundary/sentenceboundary.md) to stop speech at the end of the current word or sentence, respectively.

If the end of the string being spoken is reached before the specified stopping point, the synthesizer stops at the end of the string without generating an error.

## See Also

### Synthesizing Speech

- [speaking](isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeakingString:](startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [startSpeakingString:toURL:](startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [continueSpeaking](continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [NSSpeechBoundary](boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md) and [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md).
