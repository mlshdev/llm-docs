> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturespatialaudiometadatasamplegenerator/analyzeaudiosample(_:)](https://developer.apple.com/documentation/avfoundation/avcapturespatialaudiometadatasamplegenerator/analyzeaudiosample(_:))

# analyzeAudioSample(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Analyzes the provided audio sample buffer for its contribution to the spatial audio timed metadata value.

## Declaration

```swift
func analyzeAudioSample(_ sbuf: CMSampleBuffer) -> OSStatus
```

## Parameters

- `sbuf`: A sample buffer containing spatial audio.

<a id="return-value"></a>

## Return Value

`noErr` if the sample is successfully analyzed, otherwise a non-zero error code.

<a id="discussion"></a>

## Discussion

You must call this method with each and every spatial audio buffer you provide to [AVAssetWriter](../avassetwriter.md), so it can be analyzed for the generation of a proper spatial audio timed metadata value.

## See Also

### Analyzing audio samples

- [newTimedMetadataSampleBufferAndResetAnalyzer()](newtimedmetadatasamplebufferandresetanalyzer%28%29.md): Creates a sample buffer containing a spatial audio timed metadata sample computed from all analyzed audio buffers, and resets the analyzer to its initial state.
- [timedMetadataSampleBufferFormatDescription](timedmetadatasamplebufferformatdescription.md): Returns the format description of the sample buffer returned from the [newTimedMetadataSampleBufferAndResetAnalyzer()](newtimedmetadatasamplebufferandresetanalyzer%28%29.md) method.
- [resetAnalyzer()](resetanalyzer%28%29.md): Calling this method resets the analyzer to its initial state so that a new run of audio sample buffers can be analyzed.

# analyzeAudioSample: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Analyzes the provided audio sample buffer for its contribution to the spatial audio timed metadata value.

## Declaration

```objectivec
- (OSStatus) analyzeAudioSample:(CMSampleBufferRef) sbuf;
```

## Parameters

- `sbuf`: A sample buffer containing spatial audio.

<a id="return-value"></a>

## Return Value

`noErr` if the sample is successfully analyzed, otherwise a non-zero error code.

<a id="discussion"></a>

## Discussion

You must call this method with each and every spatial audio buffer you provide to [AVAssetWriter](../avassetwriter.md), so it can be analyzed for the generation of a proper spatial audio timed metadata value.

## See Also

### Analyzing audio samples

- [newTimedMetadataSampleBufferAndResetAnalyzer](newtimedmetadatasamplebufferandresetanalyzer%28%29.md): Creates a sample buffer containing a spatial audio timed metadata sample computed from all analyzed audio buffers, and resets the analyzer to its initial state.
- [timedMetadataSampleBufferFormatDescription](timedmetadatasamplebufferformatdescription.md): Returns the format description of the sample buffer returned from the [newTimedMetadataSampleBufferAndResetAnalyzer](newtimedmetadatasamplebufferandresetanalyzer%28%29.md) method.
- [resetAnalyzer](resetanalyzer%28%29.md): Calling this method resets the analyzer to its initial state so that a new run of audio sample buffers can be analyzed.
