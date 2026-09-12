> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxanalysisapi_v2/startbackwardanalysis(_:ofparameter:)](https://developer.apple.com/documentation/professional_video_applications/fxanalysisapi_v2/startbackwardanalysis(_:ofparameter:))

# startBackwardAnalysis(\_:ofParameter:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.2.2+

Requests that the application begin a backward analysis of an image parameter from start to end.

## Declaration

```swift
func startBackwardAnalysis(_ location: FxAnalysisLocation, ofParameter parameterID: UInt32) throws
```

## Parameters

- `location`: `FxAnalysisLocation` type to choose to do analysis on either GPU or CPU.
- `parameterID`: The ID of the image parameter to analyze.

## See Also

### Analyzing Input from an Image Well

- [startForwardAnalysis(\_:ofParameter:)](startforwardanalysis%28__ofparameter_%29.md): Requests that the application begin a forward analysis of an image parameter from start to end.

# startBackwardAnalysis:ofParameter:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Requests that the application begin a backward analysis of an image parameter from start to end.

## Declaration

```objectivec
- (BOOL) startBackwardAnalysis:(FxAnalysisLocation) location ofParameter:(UInt32) parameterID error:(NSError * *) error;
```

## Parameters

- `location`: `FxAnalysisLocation` type to choose to do analysis on either GPU or CPU.
- `parameterID`: The ID of the image parameter to analyze.
- `error`: Descriptions of errors that occurred while calling this method.

<a id="return-value"></a>

## Return Value

`YES` if the host successfully started backward analysis of the image parameter, or `NO` if it didn’t. When returning `NO`, be sure to also set the error parameter to a descriptive value.

## See Also

### Analyzing Input from an Image Well

- [startForwardAnalysis:ofParameter:error:](startforwardanalysis%28__ofparameter_%29.md): Requests that the application begin a forward analysis of an image parameter from start to end.
