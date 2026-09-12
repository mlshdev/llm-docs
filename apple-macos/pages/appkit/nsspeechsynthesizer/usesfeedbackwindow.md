> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/usesfeedbackwindow](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/usesfeedbackwindow)

# usesFeedbackWindow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Indicates whether the receiver uses the speech feedback window.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
var usesFeedbackWindow: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) when the receiver uses the speech feedback window, [false](https://developer.apple.com/documentation/swift/false) otherwise.

See the class description for details on the `UsesFeedbackWindow` attribute.

> **Important**

>  The delegate only receives the [speechSynthesizer(\_:didFinishSpeaking:)](../nsspeechsynthesizerdelegate/speechsynthesizer%28__didfinishspeaking_%29.md) message when speaking occurs through the feedback window.

## See Also

### Configuring Speech Synthesizers

- [voice()](voice%28%29.md): Deprecated. Returns the identifier of the receiver’s current voice.
- [setVoice(\_:)](setvoice%28__%29.md): Deprecated. Sets the receiver’s current voice.
- [rate](rate.md): Deprecated. The synthesizer’s speaking rate (words per minute).
- [volume](volume.md): Deprecated. The synthesizer’s speaking volume.

# usesFeedbackWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Indicates whether the receiver uses the speech feedback window.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
@property BOOL usesFeedbackWindow;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) when the receiver uses the speech feedback window, [false](https://developer.apple.com/documentation/swift/false) otherwise.

See the class description for details on the `UsesFeedbackWindow` attribute.

> **Important**

>  The delegate only receives the [speechSynthesizer:didFinishSpeaking:](../nsspeechsynthesizerdelegate/speechsynthesizer%28__didfinishspeaking_%29.md) message when speaking occurs through the feedback window.

## See Also

### Configuring Speech Synthesizers

- [voice](voice%28%29.md): Deprecated. Returns the identifier of the receiver’s current voice.
- [setVoice:](setvoice%28__%29.md): Deprecated. Sets the receiver’s current voice.
- [rate](rate.md): Deprecated. The synthesizer’s speaking rate (words per minute).
- [volume](volume.md): Deprecated. The synthesizer’s speaking volume.
