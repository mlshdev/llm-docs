> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturespatialaudiometadatasamplegenerator/newtimedmetadatasamplebufferandresetanalyzer()](https://developer.apple.com/documentation/avfoundation/avcapturespatialaudiometadatasamplegenerator/newtimedmetadatasamplebufferandresetanalyzer())

# newTimedMetadataSampleBufferAndResetAnalyzer() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a sample buffer containing a spatial audio timed metadata sample computed from all analyzed audio buffers, and resets the analyzer to its initial state.

## Declaration

```swift
func newTimedMetadataSampleBufferAndResetAnalyzer() -> Unmanaged<CMSampleBuffer>?
```

<a id="return-value"></a>

## Return Value

A `CMSampleBufferRef` containing the spatial audio timed metadata sample, or `NULL` if no value can be computed.

<a id="discussion"></a>

## Discussion

Call this method after you pass the last audio sample buffer of your recording to [analyzeAudioSample(\_:)](analyzeaudiosample%28__%29.md). Then pass the returned `CMSampleBufferRef` directly to your [AVAssetWriterInput](../avassetwriterinput.md) to add the sample to your recording’s audio timed metadata track. Note that [AVAssetWriter](../avassetwriter.md) expects one and only one spatial audio metadata sample buffer to be present in the timed metadata track.

> **Note**

> Calling this method also resets the analyzer, making it ready for another run of audio sample buffers. Thus one generator can be re-used for multiple recordings.

## See Also

### Analyzing audio samples

- [analyzeAudioSample(\_:)](analyzeaudiosample%28__%29.md): Analyzes the provided audio sample buffer for its contribution to the spatial audio timed metadata value.
- [timedMetadataSampleBufferFormatDescription](timedmetadatasamplebufferformatdescription.md): Returns the format description of the sample buffer returned from the [newTimedMetadataSampleBufferAndResetAnalyzer()](newtimedmetadatasamplebufferandresetanalyzer%28%29.md) method.
- [resetAnalyzer()](resetanalyzer%28%29.md): Calling this method resets the analyzer to its initial state so that a new run of audio sample buffers can be analyzed.

# newTimedMetadataSampleBufferAndResetAnalyzer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a sample buffer containing a spatial audio timed metadata sample computed from all analyzed audio buffers, and resets the analyzer to its initial state.

## Declaration

```objectivec
- (CMSampleBufferRef) newTimedMetadataSampleBufferAndResetAnalyzer;
```

<a id="return-value"></a>

## Return Value

A `CMSampleBufferRef` containing the spatial audio timed metadata sample, or `NULL` if no value can be computed.

<a id="discussion"></a>

## Discussion

Call this method after you pass the last audio sample buffer of your recording to [analyzeAudioSample:](analyzeaudiosample%28__%29.md). Then pass the returned `CMSampleBufferRef` directly to your [AVAssetWriterInput](../avassetwriterinput.md) to add the sample to your recording’s audio timed metadata track. Note that [AVAssetWriter](../avassetwriter.md) expects one and only one spatial audio metadata sample buffer to be present in the timed metadata track.

> **Note**

> Calling this method also resets the analyzer, making it ready for another run of audio sample buffers. Thus one generator can be re-used for multiple recordings.

## See Also

### Analyzing audio samples

- [analyzeAudioSample:](analyzeaudiosample%28__%29.md): Analyzes the provided audio sample buffer for its contribution to the spatial audio timed metadata value.
- [timedMetadataSampleBufferFormatDescription](timedmetadatasamplebufferformatdescription.md): Returns the format description of the sample buffer returned from the [newTimedMetadataSampleBufferAndResetAnalyzer](newtimedmetadatasamplebufferandresetanalyzer%28%29.md) method.
- [resetAnalyzer](resetanalyzer%28%29.md): Calling this method resets the analyzer to its initial state so that a new run of audio sample buffers can be analyzed.
