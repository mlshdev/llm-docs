> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxanalyzer/desiredanalysistimerange(_:forinputwith:)](https://developer.apple.com/documentation/professional_video_applications/fxanalyzer/desiredanalysistimerange(_:forinputwith:))

# desiredAnalysisTimeRange(\_:forInputWith:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.1+

Requests the specified time range of frames you want to analyze.

## Declaration

```swift
func desiredAnalysisTimeRange(_ desiredRange: UnsafeMutablePointer<CMTimeRange>!, forInputWith inputTimeRange: CMTimeRange) throws
```

## Parameters

- `desiredRange`: The specified time range.
- `inputTimeRange`: The input time range.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

## See Also

### Analyzing Frames in Your Plug-in

- [setupAnalysis(for:frameDuration:)](setupanalysis%28for_frameduration_%29.md): Completes any setup work before starting the frame analysis.
- [analyzeFrame(\_:at:)](analyzeframe%28__at_%29.md): Analyzes the next frame.
- [cleanupAnalysis()](cleanupanalysis%28%29.md): Completes any necessary cleanup work after your plug-in’s frame analysis.

# desiredAnalysisTimeRange:forInputWithTimeRange:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Requests the specified time range of frames you want to analyze.

## Declaration

```objectivec
- (BOOL) desiredAnalysisTimeRange:(CMTimeRange *) desiredRange forInputWithTimeRange:(CMTimeRange) inputTimeRange error:(NSError * *) error;
```

## Parameters

- `desiredRange`: The specified time range.
- `inputTimeRange`: The input time range.
- `error`: Description of errors that occurred while calling this method.

<a id="return-value"></a>

## Return Value

`YES` if you got the desired time range, or `NO` if you didn’t. When returning `NO`, be sure to also set the error parameter to a descriptive value.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

## See Also

### Analyzing Frames in Your Plug-in

- [setupAnalysisForTimeRange:frameDuration:error:](setupanalysis%28for_frameduration_%29.md): Completes any setup work before starting the frame analysis.
- [analyzeFrame:atTime:error:](analyzeframe%28__at_%29.md): Analyzes the next frame.
- [cleanupAnalysis:](cleanupanalysis%28%29.md): Completes any necessary cleanup work after your plug-in’s frame analysis.
