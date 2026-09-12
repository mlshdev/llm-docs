> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scvideostreamanalyzer/analyze(_:)](https://developer.apple.com/documentation/sensitivecontentanalysis/scvideostreamanalyzer/analyze(_:))

# analyze(\_:) (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Analyzes individual video-stream frames for sensitive content.

## Declaration

```swift
func analyze(_ pixelBuffer: CVPixelBuffer)
```

<a id="discussion"></a>

## Discussion

This method analyzes a specific video frame and updates [analysis](analysis.md) according to the results. If your app implements a custom stream decoder, you can call this method for each video frame.

## See Also

### Analyzing a video stream

- [beginAnalysis(of:)](beginanalysis%28of_%29-78qm.md): Analyzes video frames for the given capture device input.
- [beginAnalysis(of:)](beginanalysis%28of_%29-9ehkx.md): Analyzes video frames for the given decompression session.
- [analysisChanges](analysischanges.md): A stream your app uses to receive video-stream analysis results.
- [endAnalysis()](endanalysis%28%29.md): Stops stream analysis.

# analyzePixelBuffer: (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Analyzes individual video-stream frames for sensitive content.

## Declaration

```objectivec
- (void) analyzePixelBuffer:(CVPixelBufferRef) pixelBuffer;
```

<a id="discussion"></a>

## Discussion

This method analyzes a specific video frame and updates [analysis](analysis.md) according to the results. If your app implements a custom stream decoder, you can call this method for each video frame.

## See Also

### Analyzing a video stream

- [beginAnalysisOfCaptureDeviceInput:error:](beginanalysis%28of_%29-78qm.md): Analyzes video frames for the given capture device input.
- [beginAnalysisOfDecompressionSession:error:](beginanalysis%28of_%29-9ehkx.md): Analyzes video frames for the given decompression session.
- [endAnalysis](endanalysis%28%29.md): Stops stream analysis.
