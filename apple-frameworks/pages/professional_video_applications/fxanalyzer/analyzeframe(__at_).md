> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxanalyzer/analyzeframe(_:at:)](https://developer.apple.com/documentation/professional_video_applications/fxanalyzer/analyzeframe(_:at:))

# analyzeFrame(\_:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.1+

Analyzes the next frame.

## Declaration

```swift
func analyzeFrame(_ frame: FxImageTile!, at frameTime: CMTime) throws
```

## Parameters

- `frame`: The current frame to analyze.
- `frameTime`: The time of the `frame` parameter.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

## See Also

### Analyzing Frames in Your Plug-in

- [desiredAnalysisTimeRange(\_:forInputWith:)](desiredanalysistimerange%28__forinputwith_%29.md): Requests the specified time range of frames you want to analyze.
- [setupAnalysis(for:frameDuration:)](setupanalysis%28for_frameduration_%29.md): Completes any setup work before starting the frame analysis.
- [cleanupAnalysis()](cleanupanalysis%28%29.md): Completes any necessary cleanup work after your plug-in’s frame analysis.

# analyzeFrame:atTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Analyzes the next frame.

## Declaration

```objectivec
- (BOOL) analyzeFrame:(FxImageTile *) frame atTime:(CMTime) frameTime error:(NSError * *) error;
```

## Parameters

- `frame`: The current frame to analyze.
- `frameTime`: The time of the `frame` parameter.
- `error`: Descriptions of errors that occurred while calling this method.

<a id="return-value"></a>

## Return Value

`YES` if you successfully analyzed the frame, `NO` if you didn’t. When returning `NO`, be sure to also set the error parameter to a descriptive value. Returning `NO` has the effect of canceling the rest of the analysis.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

## See Also

### Analyzing Frames in Your Plug-in

- [desiredAnalysisTimeRange:forInputWithTimeRange:error:](desiredanalysistimerange%28__forinputwith_%29.md): Requests the specified time range of frames you want to analyze.
- [setupAnalysisForTimeRange:frameDuration:error:](setupanalysis%28for_frameduration_%29.md): Completes any setup work before starting the frame analysis.
- [cleanupAnalysis:](cleanupanalysis%28%29.md): Completes any necessary cleanup work after your plug-in’s frame analysis.
