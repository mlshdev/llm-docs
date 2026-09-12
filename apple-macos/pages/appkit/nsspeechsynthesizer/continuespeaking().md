> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/continuespeaking()](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/continuespeaking())

# continueSpeaking() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Resumes synthesis.

## Declaration

```swift
func continueSpeaking()
```

<a id="Discussion"></a>

## Discussion

At any time after [pauseSpeaking(at:)](pausespeaking%28at_%29.md) is called, [continueSpeaking()](continuespeaking%28%29.md) can be called to continue speaking from the beginning of the word at which speech paused.

Sending [continueSpeaking()](continuespeaking%28%29.md) to a receiver that is not currently in a paused state has no effect on the synthesizer or on future calls to the [pauseSpeaking(at:)](pausespeaking%28at_%29.md) function. If you call [continueSpeaking()](continuespeaking%28%29.md) on a synthesizer before a pause is effective, [continueSpeaking()](continuespeaking%28%29.md) cancels the pause.

If the [pauseSpeaking(at:)](pausespeaking%28at_%29.md) method stopped speech in the middle of a word, the synthesizer will start speaking that word from the beginning when you call [continueSpeaking()](continuespeaking%28%29.md).

## See Also

### Synthesizing Speech

- [isSpeaking](isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeaking(\_:)](startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [startSpeaking(\_:to:)](startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [pauseSpeaking(at:)](pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [stopSpeaking()](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeaking(at:)](stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
- [NSSpeechSynthesizer.Boundary](boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeaking(at:)](pausespeaking%28at_%29.md) and [stopSpeaking(at:)](stopspeaking%28at_%29.md).

# continueSpeaking (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Resumes synthesis.

## Declaration

```objectivec
- (void) continueSpeaking;
```

<a id="Discussion"></a>

## Discussion

At any time after [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md) is called, [continueSpeaking](continuespeaking%28%29.md) can be called to continue speaking from the beginning of the word at which speech paused.

Sending [continueSpeaking](continuespeaking%28%29.md) to a receiver that is not currently in a paused state has no effect on the synthesizer or on future calls to the [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md) function. If you call [continueSpeaking](continuespeaking%28%29.md) on a synthesizer before a pause is effective, [continueSpeaking](continuespeaking%28%29.md) cancels the pause.

If the [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md) method stopped speech in the middle of a word, the synthesizer will start speaking that word from the beginning when you call [continueSpeaking](continuespeaking%28%29.md).

## See Also

### Synthesizing Speech

- [speaking](isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeakingString:](startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [startSpeakingString:toURL:](startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [stopSpeaking](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
- [NSSpeechBoundary](boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md) and [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md).
