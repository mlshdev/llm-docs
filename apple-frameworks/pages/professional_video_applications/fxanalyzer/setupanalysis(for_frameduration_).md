> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxanalyzer/setupanalysis(for:frameduration:)](https://developer.apple.com/documentation/professional_video_applications/fxanalyzer/setupanalysis(for:frameduration:))

# setupAnalysis(for:frameDuration:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.1+

Completes any setup work before starting the frame analysis.

## Declaration

```swift
func setupAnalysis(for analysisRange: CMTimeRange, frameDuration: CMTime) throws
```

## Parameters

- `analysisRange`: The analysis time range.
- `frameDuration`: The frame duration.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

## See Also

### Analyzing Frames in Your Plug-in

- [desiredAnalysisTimeRange(\_:forInputWith:)](desiredanalysistimerange%28__forinputwith_%29.md): Requests the specified time range of frames you want to analyze.
- [analyzeFrame(\_:at:)](analyzeframe%28__at_%29.md): Analyzes the next frame.
- [cleanupAnalysis()](cleanupanalysis%28%29.md): Completes any necessary cleanup work after your plug-in’s frame analysis.

# setupAnalysisForTimeRange:frameDuration:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Completes any setup work before starting the frame analysis.

## Declaration

```objectivec
- (BOOL) setupAnalysisForTimeRange:(CMTimeRange) analysisRange frameDuration:(CMTime) frameDuration error:(NSError * *) error;
```

## Parameters

- `analysisRange`: The analysis time range.
- `frameDuration`: The frame duration.
- `error`: Descriptions of any errors that occurred while calling this method.

<a id="return-value"></a>

## Return Value

`YES` if you set up analysis successfully for the given time range, or `NO` if you didn’t. When returning `NO`, be sure to also set the error parameter to a descriptive value.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

## See Also

### Analyzing Frames in Your Plug-in

- [desiredAnalysisTimeRange:forInputWithTimeRange:error:](desiredanalysistimerange%28__forinputwith_%29.md): Requests the specified time range of frames you want to analyze.
- [analyzeFrame:atTime:error:](analyzeframe%28__at_%29.md): Analyzes the next frame.
- [cleanupAnalysis:](cleanupanalysis%28%29.md): Completes any necessary cleanup work after your plug-in’s frame analysis.
