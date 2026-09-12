> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scvideostreamanalyzer/beginanalysis(of:)-78qm](https://developer.apple.com/documentation/sensitivecontentanalysis/scvideostreamanalyzer/beginanalysis(of:)-78qm)

# beginAnalysis(of:) (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Analyzes video frames for the given capture device input.

## Declaration

```swift
func beginAnalysis(of captureDeviceInput: AVCaptureDeviceInput) throws
```

## Parameters

- `captureDeviceInput`: An object that contains information about the specific camera and its captured content in the video stream.

<a id="Discussion"></a>

## Discussion

Call this method to begin analyzing a video stream from the given [AVCaptureDeviceInput](../../avfoundation/avcapturedeviceinput.md). If the framework detects sensitive content in the video stream, the `AVCaptureDeviceInput` interrupts subsequent frames with the `AVCaptureSessionInterruptionReasonSensitiveContentMitigationActivated` interruption reason to effectively censor the video stream on the person’s behalf. When your app is ready to show the video stream again, resume analysis by calling [continueStream()](continuestream%28%29.md).

## See Also

### Analyzing a video stream

- [analyze(\_:)](analyze%28__%29.md): Analyzes individual video-stream frames for sensitive content.
- [beginAnalysis(of:)](beginanalysis%28of_%29-9ehkx.md): Analyzes video frames for the given decompression session.
- [analysisChanges](analysischanges.md): A stream your app uses to receive video-stream analysis results.
- [endAnalysis()](endanalysis%28%29.md): Stops stream analysis.

# beginAnalysisOfCaptureDeviceInput:error: (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Analyzes video frames for the given capture device input.

## Declaration

```objectivec
- (BOOL) beginAnalysisOfCaptureDeviceInput:(AVCaptureDeviceInput *) captureDeviceInput error:(NSError **) error;
```

## Parameters

- `captureDeviceInput`: An object that contains information about the specific camera and its captured content in the video stream.
- `error`: An error object that describes an issue that occurs while processing the capture device input.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeds; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

Call this method to begin analyzing a video stream from the given [AVCaptureDeviceInput](../../avfoundation/avcapturedeviceinput.md). If the framework detects sensitive content in the video stream, the `AVCaptureDeviceInput` interrupts subsequent frames with the `AVCaptureSessionInterruptionReasonSensitiveContentMitigationActivated` interruption reason to effectively censor the video stream on the person’s behalf. When your app is ready to show the video stream again, resume analysis by calling [continueStream](continuestream%28%29.md).

## See Also

### Analyzing a video stream

- [analyzePixelBuffer:](analyze%28__%29.md): Analyzes individual video-stream frames for sensitive content.
- [beginAnalysisOfDecompressionSession:error:](beginanalysis%28of_%29-9ehkx.md): Analyzes video frames for the given decompression session.
- [endAnalysis](endanalysis%28%29.md): Stops stream analysis.
