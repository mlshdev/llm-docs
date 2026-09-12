> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/voice()](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/voice())

# voice() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Returns the identifier of the receiver’s current voice.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
func voice() -> NSSpeechSynthesizer.VoiceName?
```

<a id="return-value"></a>

## Return Value

Identifier of the receiver’s current voice.

## See Also

### Configuring Speech Synthesizers

- [usesFeedbackWindow](usesfeedbackwindow.md): Deprecated. Indicates whether the receiver uses the speech feedback window.
- [setVoice(\_:)](setvoice%28__%29.md): Deprecated. Sets the receiver’s current voice.
- [rate](rate.md): Deprecated. The synthesizer’s speaking rate (words per minute).
- [volume](volume.md): Deprecated. The synthesizer’s speaking volume.

# voice (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Returns the identifier of the receiver’s current voice.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
- (NSSpeechSynthesizerVoiceName) voice;
```

<a id="return-value"></a>

## Return Value

Identifier of the receiver’s current voice.

## See Also

### Configuring Speech Synthesizers

- [usesFeedbackWindow](usesfeedbackwindow.md): Deprecated. Indicates whether the receiver uses the speech feedback window.
- [setVoice:](setvoice%28__%29.md): Deprecated. Sets the receiver’s current voice.
- [rate](rate.md): Deprecated. The synthesizer’s speaking rate (words per minute).
- [volume](volume.md): Deprecated. The synthesizer’s speaking volume.
