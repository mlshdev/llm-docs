> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfvoiceanalytics/voicing](https://developer.apple.com/documentation/speech/sfvoiceanalytics/voicing)

# voicing (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

The likelihood of a voice in each frame of a transcription segment.

## Declaration

```swift
@NSCopying var voicing: SFAcousticFeature { get }
```

<a id="discussion"></a>

## Discussion

The `voicing` value is expressed as a probability in the range `[0.0, 1.0]`.

## See Also

### Analyzing voice

- [SFAcousticFeature](../sfacousticfeature.md): The value of a voice analysis metric.
- [pitch](pitch.md): The highness or lowness of the tone (fundamental frequency) in each frame of a transcription segment, expressed as a logarithm.
- [jitter](jitter.md): The variation in pitch in each frame of a transcription segment, expressed as a percentage of the frame’s fundamental frequency.
- [shimmer](shimmer.md): The variation in vocal volume stability (amplitude) in each frame of a transcription segment, expressed in decibels.

# voicing (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

The likelihood of a voice in each frame of a transcription segment.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) SFAcousticFeature * voicing;
```

<a id="discussion"></a>

## Discussion

The `voicing` value is expressed as a probability in the range `[0.0, 1.0]`.

## See Also

### Analyzing voice

- [SFAcousticFeature](../sfacousticfeature.md): The value of a voice analysis metric.
- [pitch](pitch.md): The highness or lowness of the tone (fundamental frequency) in each frame of a transcription segment, expressed as a logarithm.
- [jitter](jitter.md): The variation in pitch in each frame of a transcription segment, expressed as a percentage of the frame’s fundamental frequency.
- [shimmer](shimmer.md): The variation in vocal volume stability (amplitude) in each frame of a transcription segment, expressed in decibels.
