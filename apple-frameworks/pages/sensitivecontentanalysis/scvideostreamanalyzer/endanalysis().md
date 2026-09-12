> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scvideostreamanalyzer/endanalysis()](https://developer.apple.com/documentation/sensitivecontentanalysis/scvideostreamanalyzer/endanalysis())

# endAnalysis() (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Stops stream analysis.

## Declaration

```swift
func endAnalysis()
```

<a id="discussion"></a>

## Discussion

This method stops analyzing the video stream in reference to the most recent call to `beginAnalysis`.

## See Also

### Analyzing a video stream

- [analyze(\_:)](analyze%28__%29.md): Analyzes individual video-stream frames for sensitive content.
- [beginAnalysis(of:)](beginanalysis%28of_%29-78qm.md): Analyzes video frames for the given capture device input.
- [beginAnalysis(of:)](beginanalysis%28of_%29-9ehkx.md): Analyzes video frames for the given decompression session.
- [analysisChanges](analysischanges.md): A stream your app uses to receive video-stream analysis results.

# endAnalysis (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Stops stream analysis.

## Declaration

```objectivec
- (void) endAnalysis;
```

<a id="discussion"></a>

## Discussion

This method stops analyzing the video stream in reference to the most recent call to `beginAnalysis`.

## See Also

### Analyzing a video stream

- [analyzePixelBuffer:](analyze%28__%29.md): Analyzes individual video-stream frames for sensitive content.
- [beginAnalysisOfCaptureDeviceInput:error:](beginanalysis%28of_%29-78qm.md): Analyzes video frames for the given capture device input.
- [beginAnalysisOfDecompressionSession:error:](beginanalysis%28of_%29-9ehkx.md): Analyzes video frames for the given decompression session.
