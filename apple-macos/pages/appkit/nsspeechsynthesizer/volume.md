> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/volume](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/volume)

# volume (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 14.0)

The synthesizer’s speaking volume.

## Declaration

```swift
var volume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Volumes are expressed in floating-point units ranging from 0.0 through 1.0. A value of 0.0 corresponds to silence, and a value of 1.0 corresponds to the maximum possible volume. Volume units lie on a scale that is linear with amplitude or voltage. A doubling of perceived loudness corresponds to a doubling of the volume. Setting a value outside this range is undefined.

## See Also

### Configuring Speech Synthesizers

- [usesFeedbackWindow](usesfeedbackwindow.md): Deprecated. Indicates whether the receiver uses the speech feedback window.
- [voice()](voice%28%29.md): Deprecated. Returns the identifier of the receiver’s current voice.
- [setVoice(\_:)](setvoice%28__%29.md): Deprecated. Sets the receiver’s current voice.
- [rate](rate.md): Deprecated. The synthesizer’s speaking rate (words per minute).

# volume (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 14.0)

The synthesizer’s speaking volume.

## Declaration

```objectivec
@property float volume;
```

<a id="Discussion"></a>

## Discussion

Volumes are expressed in floating-point units ranging from 0.0 through 1.0. A value of 0.0 corresponds to silence, and a value of 1.0 corresponds to the maximum possible volume. Volume units lie on a scale that is linear with amplitude or voltage. A doubling of perceived loudness corresponds to a doubling of the volume. Setting a value outside this range is undefined.

## See Also

### Configuring Speech Synthesizers

- [usesFeedbackWindow](usesfeedbackwindow.md): Deprecated. Indicates whether the receiver uses the speech feedback window.
- [voice](voice%28%29.md): Deprecated. Returns the identifier of the receiver’s current voice.
- [setVoice:](setvoice%28__%29.md): Deprecated. Sets the receiver’s current voice.
- [rate](rate.md): Deprecated. The synthesizer’s speaking rate (words per minute).
