> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scvideostreamanalyzer/beginanalysis(of:)-9ehkx](https://developer.apple.com/documentation/sensitivecontentanalysis/scvideostreamanalyzer/beginanalysis(of:)-9ehkx)

# beginAnalysis(of:) (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Analyzes video frames for the given decompression session.

## Declaration

```swift
func beginAnalysis(of decompressionSession: VTDecompressionSession) throws
```

## Parameters

- `decompressionSession`: An object that provides video frames for your app to analyze for sensitive content.

<a id="discussion"></a>

## Discussion

If the framework detects sensitive content in the video stream, the [VTDecompressionSession](../../videotoolbox/vtdecompressionsession.md) produces blank frames to effectively censor the video stream on the person’s behalf. When your app is ready to show the video stream again, resume analysis by calling [continueStream()](continuestream%28%29.md).

## See Also

### Analyzing a video stream

- [analyze(\_:)](analyze%28__%29.md): Analyzes individual video-stream frames for sensitive content.
- [beginAnalysis(of:)](beginanalysis%28of_%29-78qm.md): Analyzes video frames for the given capture device input.
- [analysisChanges](analysischanges.md): A stream your app uses to receive video-stream analysis results.
- [endAnalysis()](endanalysis%28%29.md): Stops stream analysis.

# beginAnalysisOfDecompressionSession:error: (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Analyzes video frames for the given decompression session.

## Declaration

```objectivec
- (BOOL) beginAnalysisOfDecompressionSession:(VTDecompressionSessionRef) decompressionSession error:(NSError **) error;
```

## Parameters

- `decompressionSession`: An object that provides video frames for your app to analyze for sensitive content.
- `error`: An error object that describes an issue that occurs while providing the video decompression session.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeds; otherwise, `NO`.

<a id="discussion"></a>

## Discussion

If the framework detects sensitive content in the video stream, the [VTDecompressionSessionRef](../../videotoolbox/vtdecompressionsession.md) produces blank frames to effectively censor the video stream on the person’s behalf. When your app is ready to show the video stream again, resume analysis by calling [continueStream](continuestream%28%29.md).

## See Also

### Analyzing a video stream

- [analyzePixelBuffer:](analyze%28__%29.md): Analyzes individual video-stream frames for sensitive content.
- [beginAnalysisOfCaptureDeviceInput:error:](beginanalysis%28of_%29-78qm.md): Analyzes video frames for the given capture device input.
- [endAnalysis](endanalysis%28%29.md): Stops stream analysis.
