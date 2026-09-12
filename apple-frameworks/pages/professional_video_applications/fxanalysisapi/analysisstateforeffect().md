> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxanalysisapi/analysisstateforeffect()](https://developer.apple.com/documentation/professional_video_applications/fxanalysisapi/analysisstateforeffect())

# analysisStateForEffect() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.1+

Fetches the state of frame analysis for your plug-in.

## Declaration

```swift
func analysisStateForEffect() -> FxAnalysisState
```

<a id="return-value"></a>

## Return Value

An analysis state ([FxAnalysisState](../fxanalysisstate.md)) of not analyzing, requested, started analyzing, completed, or interrupted.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

## See Also

### Providing Frame Analysis Information

- [startForwardAnalysis(\_:)](startforwardanalysis%28__%29.md): Requests that the application begin a forwards analysis of a clip from start to end.
- [startBackwardAnalysis(\_:)](startbackwardanalysis%28__%29.md): Requests that the application begin a backwards analysis of a clip from end to start.
- [FxAnalysisLocation](../fxanalysislocation.md): Indicates the type of hardware to use for analysis, either CPU or GPU.

# analysisStateForEffect (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Fetches the state of frame analysis for your plug-in.

## Declaration

```objectivec
- (FxAnalysisState) analysisStateForEffect;
```

<a id="return-value"></a>

## Return Value

An analysis state ([FxAnalysisState](../fxanalysisstate.md)) of not analyzing, requested, started analyzing, completed, or interrupted.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

## See Also

### Providing Frame Analysis Information

- [startForwardAnalysis:error:](startforwardanalysis%28__%29.md): Requests that the application begin a forwards analysis of a clip from start to end.
- [startBackwardAnalysis:error:](startbackwardanalysis%28__%29.md): Requests that the application begin a backwards analysis of a clip from end to start.
- [FxAnalysisLocation](../fxanalysislocation.md): Indicates the type of hardware to use for analysis, either CPU or GPU.
