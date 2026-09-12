> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/rate](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/rate)

# rate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 14.0)

The synthesizer’s speaking rate (words per minute).

## Declaration

```swift
var rate: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The range of supported rates is not predefined by the Speech Synthesis framework; but the synthesizer may only respond to a limited range of speech rates. Average human speech occurs at a rate of 180 to 220 words per minute.

## See Also

### Configuring Speech Synthesizers

- [usesFeedbackWindow](usesfeedbackwindow.md): Deprecated. Indicates whether the receiver uses the speech feedback window.
- [voice()](voice%28%29.md): Deprecated. Returns the identifier of the receiver’s current voice.
- [setVoice(\_:)](setvoice%28__%29.md): Deprecated. Sets the receiver’s current voice.
- [volume](volume.md): Deprecated. The synthesizer’s speaking volume.

# rate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 14.0)

The synthesizer’s speaking rate (words per minute).

## Declaration

```objectivec
@property float rate;
```

<a id="Discussion"></a>

## Discussion

The range of supported rates is not predefined by the Speech Synthesis framework; but the synthesizer may only respond to a limited range of speech rates. Average human speech occurs at a rate of 180 to 220 words per minute.

## See Also

### Configuring Speech Synthesizers

- [usesFeedbackWindow](usesfeedbackwindow.md): Deprecated. Indicates whether the receiver uses the speech feedback window.
- [voice](voice%28%29.md): Deprecated. Returns the identifier of the receiver’s current voice.
- [setVoice:](setvoice%28__%29.md): Deprecated. Sets the receiver’s current voice.
- [volume](volume.md): Deprecated. The synthesizer’s speaking volume.
