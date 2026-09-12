> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxanalysisapi/startforwardanalysis(_:)](https://developer.apple.com/documentation/professional_video_applications/fxanalysisapi/startforwardanalysis(_:))

# startForwardAnalysis(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.1+

Requests that the application begin a forwards analysis of a clip from start to end.

## Declaration

```swift
func startForwardAnalysis(_ location: FxAnalysisLocation) throws
```

## Parameters

- `location`: FxAnalysisLocation type to choose to do analysis on either GPU or CPU.

## See Also

### Providing Frame Analysis Information

- [analysisStateForEffect()](analysisstateforeffect%28%29.md): Fetches the state of frame analysis for your plug-in.
- [startBackwardAnalysis(\_:)](startbackwardanalysis%28__%29.md): Requests that the application begin a backwards analysis of a clip from end to start.
- [FxAnalysisLocation](../fxanalysislocation.md): Indicates the type of hardware to use for analysis, either CPU or GPU.

# startForwardAnalysis:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Requests that the application begin a forwards analysis of a clip from start to end.

## Declaration

```objectivec
- (BOOL) startForwardAnalysis:(FxAnalysisLocation) location error:(NSError * *) error;
```

## Parameters

- `location`: FxAnalysisLocation type to choose to do analysis on either GPU or CPU.
- `error`: Descriptions of any errors that occurred while calling this method.

<a id="return-value"></a>

## Return Value

YES if the host successfully started forward analysis of the clip, or NO if it didn’t. When returning NO, be sure to also set the error parameter to a descriptive value.

## See Also

### Providing Frame Analysis Information

- [analysisStateForEffect](analysisstateforeffect%28%29.md): Fetches the state of frame analysis for your plug-in.
- [startBackwardAnalysis:error:](startbackwardanalysis%28__%29.md): Requests that the application begin a backwards analysis of a clip from end to start.
- [FxAnalysisLocation](../fxanalysislocation.md): Indicates the type of hardware to use for analysis, either CPU or GPU.
