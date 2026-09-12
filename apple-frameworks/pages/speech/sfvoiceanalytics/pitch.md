> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfvoiceanalytics/pitch](https://developer.apple.com/documentation/speech/sfvoiceanalytics/pitch)

# pitch (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

The highness or lowness of the tone (fundamental frequency) in each frame of a transcription segment, expressed as a logarithm.

## Declaration

```swift
@NSCopying var pitch: SFAcousticFeature { get }
```

<a id="discussion"></a>

## Discussion

The value is a logarithm (base `e`) of the normalized pitch estimate for each frame.

## See Also

### Analyzing voice

- [SFAcousticFeature](../sfacousticfeature.md): The value of a voice analysis metric.
- [voicing](voicing.md): The likelihood of a voice in each frame of a transcription segment.
- [jitter](jitter.md): The variation in pitch in each frame of a transcription segment, expressed as a percentage of the frame’s fundamental frequency.
- [shimmer](shimmer.md): The variation in vocal volume stability (amplitude) in each frame of a transcription segment, expressed in decibels.

# pitch (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

The highness or lowness of the tone (fundamental frequency) in each frame of a transcription segment, expressed as a logarithm.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) SFAcousticFeature * pitch;
```

<a id="discussion"></a>

## Discussion

The value is a logarithm (base `e`) of the normalized pitch estimate for each frame.

## See Also

### Analyzing voice

- [SFAcousticFeature](../sfacousticfeature.md): The value of a voice analysis metric.
- [voicing](voicing.md): The likelihood of a voice in each frame of a transcription segment.
- [jitter](jitter.md): The variation in pitch in each frame of a transcription segment, expressed as a percentage of the frame’s fundamental frequency.
- [shimmer](shimmer.md): The variation in vocal volume stability (amplitude) in each frame of a transcription segment, expressed in decibels.
