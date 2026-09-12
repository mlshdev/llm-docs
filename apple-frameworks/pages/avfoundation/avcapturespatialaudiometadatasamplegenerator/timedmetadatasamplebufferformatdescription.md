> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturespatialaudiometadatasamplegenerator/timedmetadatasamplebufferformatdescription](https://developer.apple.com/documentation/avfoundation/avcapturespatialaudiometadatasamplegenerator/timedmetadatasamplebufferformatdescription)

# timedMetadataSampleBufferFormatDescription (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Returns the format description of the sample buffer returned from the [newTimedMetadataSampleBufferAndResetAnalyzer()](newtimedmetadatasamplebufferandresetanalyzer%28%29.md) method.

## Declaration

```swift
var timedMetadataSampleBufferFormatDescription: CMFormatDescription { get }
```

<a id="discussion"></a>

## Discussion

Use this format description when creating your [AVAssetWriter](../avassetwriter.md) track for spatial audio timed metadata.

## See Also

### Analyzing audio samples

- [analyzeAudioSample(\_:)](analyzeaudiosample%28__%29.md): Analyzes the provided audio sample buffer for its contribution to the spatial audio timed metadata value.
- [newTimedMetadataSampleBufferAndResetAnalyzer()](newtimedmetadatasamplebufferandresetanalyzer%28%29.md): Creates a sample buffer containing a spatial audio timed metadata sample computed from all analyzed audio buffers, and resets the analyzer to its initial state.
- [resetAnalyzer()](resetanalyzer%28%29.md): Calling this method resets the analyzer to its initial state so that a new run of audio sample buffers can be analyzed.

# timedMetadataSampleBufferFormatDescription (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Returns the format description of the sample buffer returned from the [newTimedMetadataSampleBufferAndResetAnalyzer](newtimedmetadatasamplebufferandresetanalyzer%28%29.md) method.

## Declaration

```objectivec
@property (nonatomic, readonly) CMFormatDescriptionRef timedMetadataSampleBufferFormatDescription;
```

<a id="discussion"></a>

## Discussion

Use this format description when creating your [AVAssetWriter](../avassetwriter.md) track for spatial audio timed metadata.

## See Also

### Analyzing audio samples

- [analyzeAudioSample:](analyzeaudiosample%28__%29.md): Analyzes the provided audio sample buffer for its contribution to the spatial audio timed metadata value.
- [newTimedMetadataSampleBufferAndResetAnalyzer](newtimedmetadatasamplebufferandresetanalyzer%28%29.md): Creates a sample buffer containing a spatial audio timed metadata sample computed from all analyzed audio buffers, and resets the analyzer to its initial state.
- [resetAnalyzer](resetanalyzer%28%29.md): Calling this method resets the analyzer to its initial state so that a new run of audio sample buffers can be analyzed.
