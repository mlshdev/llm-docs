> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfvoiceanalytics/shimmer](https://developer.apple.com/documentation/speech/sfvoiceanalytics/shimmer)

# shimmer (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

The variation in vocal volume stability (amplitude) in each frame of a transcription segment, expressed in decibels.

## Declaration

```swift
@NSCopying var shimmer: SFAcousticFeature { get }
```

## See Also

### Analyzing voice

- [SFAcousticFeature](../sfacousticfeature.md): The value of a voice analysis metric.
- [voicing](voicing.md): The likelihood of a voice in each frame of a transcription segment.
- [pitch](pitch.md): The highness or lowness of the tone (fundamental frequency) in each frame of a transcription segment, expressed as a logarithm.
- [jitter](jitter.md): The variation in pitch in each frame of a transcription segment, expressed as a percentage of the frame’s fundamental frequency.

# shimmer (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

The variation in vocal volume stability (amplitude) in each frame of a transcription segment, expressed in decibels.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) SFAcousticFeature * shimmer;
```

## See Also

### Analyzing voice

- [SFAcousticFeature](../sfacousticfeature.md): The value of a voice analysis metric.
- [voicing](voicing.md): The likelihood of a voice in each frame of a transcription segment.
- [pitch](pitch.md): The highness or lowness of the tone (fundamental frequency) in each frame of a transcription segment, expressed as a logarithm.
- [jitter](jitter.md): The variation in pitch in each frame of a transcription segment, expressed as a percentage of the frame’s fundamental frequency.
