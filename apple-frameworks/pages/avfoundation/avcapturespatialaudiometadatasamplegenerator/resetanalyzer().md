> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturespatialaudiometadatasamplegenerator/resetanalyzer()](https://developer.apple.com/documentation/avfoundation/avcapturespatialaudiometadatasamplegenerator/resetanalyzer())

# resetAnalyzer() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Calling this method resets the analyzer to its initial state so that a new run of audio sample buffers can be analyzed.

## Declaration

```swift
func resetAnalyzer()
```

<a id="discussion"></a>

## Discussion

Call this method if you need to abort generating the audio timed metadata buffer for audio already provided to [analyzeAudioSample(\_:)](analyzeaudiosample%28__%29.md).

## See Also

### Analyzing audio samples

- [analyzeAudioSample(\_:)](analyzeaudiosample%28__%29.md): Analyzes the provided audio sample buffer for its contribution to the spatial audio timed metadata value.
- [newTimedMetadataSampleBufferAndResetAnalyzer()](newtimedmetadatasamplebufferandresetanalyzer%28%29.md): Creates a sample buffer containing a spatial audio timed metadata sample computed from all analyzed audio buffers, and resets the analyzer to its initial state.
- [timedMetadataSampleBufferFormatDescription](timedmetadatasamplebufferformatdescription.md): Returns the format description of the sample buffer returned from the [newTimedMetadataSampleBufferAndResetAnalyzer()](newtimedmetadatasamplebufferandresetanalyzer%28%29.md) method.

# resetAnalyzer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Calling this method resets the analyzer to its initial state so that a new run of audio sample buffers can be analyzed.

## Declaration

```objectivec
- (void) resetAnalyzer;
```

<a id="discussion"></a>

## Discussion

Call this method if you need to abort generating the audio timed metadata buffer for audio already provided to [analyzeAudioSample:](analyzeaudiosample%28__%29.md).

## See Also

### Analyzing audio samples

- [analyzeAudioSample:](analyzeaudiosample%28__%29.md): Analyzes the provided audio sample buffer for its contribution to the spatial audio timed metadata value.
- [newTimedMetadataSampleBufferAndResetAnalyzer](newtimedmetadatasamplebufferandresetanalyzer%28%29.md): Creates a sample buffer containing a spatial audio timed metadata sample computed from all analyzed audio buffers, and resets the analyzer to its initial state.
- [timedMetadataSampleBufferFormatDescription](timedmetadatasamplebufferformatdescription.md): Returns the format description of the sample buffer returned from the [newTimedMetadataSampleBufferAndResetAnalyzer](newtimedmetadatasamplebufferandresetanalyzer%28%29.md) method.
