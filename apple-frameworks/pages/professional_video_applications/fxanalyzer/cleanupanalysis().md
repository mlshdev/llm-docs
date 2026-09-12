> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxanalyzer/cleanupanalysis()](https://developer.apple.com/documentation/professional_video_applications/fxanalyzer/cleanupanalysis())

# cleanupAnalysis() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.1+

Completes any necessary cleanup work after your plug-in’s frame analysis.

## Declaration

```swift
func cleanupAnalysis() throws
```

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

## See Also

### Analyzing Frames in Your Plug-in

- [desiredAnalysisTimeRange(\_:forInputWith:)](desiredanalysistimerange%28__forinputwith_%29.md): Requests the specified time range of frames you want to analyze.
- [setupAnalysis(for:frameDuration:)](setupanalysis%28for_frameduration_%29.md): Completes any setup work before starting the frame analysis.
- [analyzeFrame(\_:at:)](analyzeframe%28__at_%29.md): Analyzes the next frame.

# cleanupAnalysis: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Completes any necessary cleanup work after your plug-in’s frame analysis.

## Declaration

```objectivec
- (BOOL) cleanupAnalysis:(NSError * *) error;
```

## Parameters

- `error`: Descriptions of errors that occurred while calling this method.

<a id="return-value"></a>

## Return Value

`YES` if your plug-in successfully completed any clean up required after analysis, or `NO` if it didn’t. When returning `NO`, be sure to also set the error parameter to a descriptive value. This work is often paired with setup work done in [setupAnalysisForTimeRange:frameDuration:error:](setupanalysis%28for_frameduration_%29.md).

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

## See Also

### Analyzing Frames in Your Plug-in

- [desiredAnalysisTimeRange:forInputWithTimeRange:error:](desiredanalysistimerange%28__forinputwith_%29.md): Requests the specified time range of frames you want to analyze.
- [setupAnalysisForTimeRange:frameDuration:error:](setupanalysis%28for_frameduration_%29.md): Completes any setup work before starting the frame analysis.
- [analyzeFrame:atTime:error:](analyzeframe%28__at_%29.md): Analyzes the next frame.
