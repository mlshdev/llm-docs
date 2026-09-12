> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/setvoice(_:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/setvoice(_:))

# setVoice(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Sets the receiver’s current voice.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
func setVoice(_ voice: NSSpeechSynthesizer.VoiceName?) -> Bool
```

## Parameters

- `voice`: Identifier of the voice to set at the receiver’s current voice. When `nil`, the receiver sets the default voice as its current voice.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the receiver is not currently synthesizing speech and the current voice is set successfully, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Related Documentation

- [defaultVoice](defaultvoice.md): Deprecated. Provides the identifier of the default voice.

### Configuring Speech Synthesizers

- [usesFeedbackWindow](usesfeedbackwindow.md): Deprecated. Indicates whether the receiver uses the speech feedback window.
- [voice()](voice%28%29.md): Deprecated. Returns the identifier of the receiver’s current voice.
- [rate](rate.md): Deprecated. The synthesizer’s speaking rate (words per minute).
- [volume](volume.md): Deprecated. The synthesizer’s speaking volume.

# setVoice: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Sets the receiver’s current voice.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
- (BOOL) setVoice:(NSSpeechSynthesizerVoiceName) voice;
```

## Parameters

- `voice`: Identifier of the voice to set at the receiver’s current voice. When `nil`, the receiver sets the default voice as its current voice.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the receiver is not currently synthesizing speech and the current voice is set successfully, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Related Documentation

- [defaultVoice](defaultvoice.md): Deprecated. Provides the identifier of the default voice.

### Configuring Speech Synthesizers

- [usesFeedbackWindow](usesfeedbackwindow.md): Deprecated. Indicates whether the receiver uses the speech feedback window.
- [voice](voice%28%29.md): Deprecated. Returns the identifier of the receiver’s current voice.
- [rate](rate.md): Deprecated. The synthesizer’s speaking rate (words per minute).
- [volume](volume.md): Deprecated. The synthesizer’s speaking volume.
