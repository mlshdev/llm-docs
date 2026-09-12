> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/pausespeaking(at:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/pausespeaking(at:))

# pauseSpeaking(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Pauses synthesis in progress at a given boundary.

## Declaration

```swift
func pauseSpeaking(at boundary: NSSpeechSynthesizer.Boundary)
```

## Parameters

- `boundary`: Boundary at which to pause speech. The supported bound types are listed in [NSSpeechSynthesizer.Boundary](boundary.md).

<a id="Discussion"></a>

## Discussion

Pass the constant [NSSpeechSynthesizer.Boundary.immediateBoundary](boundary/immediateboundary.md) to pause immediately, even in the middle of a word. Pass [NSSpeechSynthesizer.Boundary.wordBoundary](boundary/wordboundary.md) or [NSSpeechSynthesizer.Boundary.sentenceBoundary](boundary/sentenceboundary.md) to pause speech at the end of the current word or sentence, respectively.

You can determine whether your application has paused a synthesizer’s speech output by obtaining the [status](speechpropertykey/status.md) property through the [object(forProperty:)](object%28forproperty_%29.md) method. While a synthesizer is paused, the speech status information indicates that [outputBusy](speechpropertykey/statuskey/outputbusy.md) and [outputPaused](speechpropertykey/statuskey/outputpaused.md) are both [true](https://developer.apple.com/documentation/swift/true).

If the end of the string being spoken is reached before the specified pause point, speech output pauses at the end of the string.

## See Also

### Synthesizing Speech

- [isSpeaking](isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeaking(\_:)](startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [startSpeaking(\_:to:)](startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [continueSpeaking()](continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking()](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeaking(at:)](stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
- [NSSpeechSynthesizer.Boundary](boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeaking(at:)](pausespeaking%28at_%29.md) and [stopSpeaking(at:)](stopspeaking%28at_%29.md).

# pauseSpeakingAtBoundary: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Pauses synthesis in progress at a given boundary.

## Declaration

```objectivec
- (void) pauseSpeakingAtBoundary:(NSSpeechBoundary) boundary;
```

## Parameters

- `boundary`: Boundary at which to pause speech. The supported bound types are listed in [NSSpeechBoundary](boundary.md).

<a id="Discussion"></a>

## Discussion

Pass the constant [NSSpeechImmediateBoundary](boundary/immediateboundary.md) to pause immediately, even in the middle of a word. Pass [NSSpeechWordBoundary](boundary/wordboundary.md) or [NSSpeechSentenceBoundary](boundary/sentenceboundary.md) to pause speech at the end of the current word or sentence, respectively.

You can determine whether your application has paused a synthesizer’s speech output by obtaining the [NSSpeechStatusProperty](speechpropertykey/status.md) property through the [objectForProperty:error:](object%28forproperty_%29.md) method. While a synthesizer is paused, the speech status information indicates that [NSSpeechStatusOutputBusy](speechpropertykey/statuskey/outputbusy.md) and [NSSpeechStatusOutputPaused](speechpropertykey/statuskey/outputpaused.md) are both [true](https://developer.apple.com/documentation/swift/true).

If the end of the string being spoken is reached before the specified pause point, speech output pauses at the end of the string.

## See Also

### Synthesizing Speech

- [speaking](isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeakingString:](startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [startSpeakingString:toURL:](startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [continueSpeaking](continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
- [NSSpeechBoundary](boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md) and [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md).
