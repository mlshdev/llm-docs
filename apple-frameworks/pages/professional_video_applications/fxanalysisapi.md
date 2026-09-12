> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxanalysisapi](https://developer.apple.com/documentation/professional_video_applications/fxanalysisapi)

# FxAnalysisAPI (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.1+

A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.

## Declaration

```swift
protocol FxAnalysisAPI
```

## Mentioned In

- [Analyzing media](../professional-video-applications/analyzing-media.md)

<a id="overview"></a>

## Overview

Host applications implement this protocol to provide frame analysis information to plug-ins that support the FxAnalyzer protocol.

## Topics

### Providing Frame Analysis Information

- [analysisStateForEffect()](fxanalysisapi/analysisstateforeffect%28%29.md): Fetches the state of frame analysis for your plug-in.
- [startForwardAnalysis(\_:)](fxanalysisapi/startforwardanalysis%28__%29.md): Requests that the application begin a forwards analysis of a clip from start to end.
- [startBackwardAnalysis(\_:)](fxanalysisapi/startbackwardanalysis%28__%29.md): Requests that the application begin a backwards analysis of a clip from end to start.
- [FxAnalysisLocation](fxanalysislocation.md): Indicates the type of hardware to use for analysis, either CPU or GPU.

## Relationships

### Inherited By

- [FxAnalysisAPI_v2](fxanalysisapi_v2.md)

## See Also

### Time and analysis

- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md): Learn about time handling in host apps and plug-ins.
- [Scheduling media in plug-ins](../professional-video-applications/scheduling-media-in-plug-ins.md): Use the scheduling APIs in FxPlug to retrieve frames from different times.
- [FxTimingAPI_v4](fxtimingapi_v4.md): A protocol that defines the methods provided by the host, so that a plug-in can query the timing properties of its input.
- [FxKeyframeAPI_v3](fxkeyframeapi_v3.md): A collection of methods for manipulating the keyframes of your FxPlug 4 plug-in.
- [Analyzing media](../professional-video-applications/analyzing-media.md): Use the FxPlug analysis API to analyze frames of source media before rendering them.
- [FxAnalysisAPI_v2](fxanalysisapi_v2.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalyzer](fxanalyzer.md): A protocol you implement in your plug-in to analyze frames that the plug-in is applied to.

# FxAnalysisAPI (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.

## Declaration

```objectivec
@protocol FxAnalysisAPI
```

## Mentioned In

- [Analyzing media](../professional-video-applications/analyzing-media.md)

<a id="overview"></a>

## Overview

Host applications implement this protocol to provide frame analysis information to plug-ins that support the FxAnalyzer protocol.

## Topics

### Providing Frame Analysis Information

- [analysisStateForEffect](fxanalysisapi/analysisstateforeffect%28%29.md): Fetches the state of frame analysis for your plug-in.
- [startForwardAnalysis:error:](fxanalysisapi/startforwardanalysis%28__%29.md): Requests that the application begin a forwards analysis of a clip from start to end.
- [startBackwardAnalysis:error:](fxanalysisapi/startbackwardanalysis%28__%29.md): Requests that the application begin a backwards analysis of a clip from end to start.
- [FxAnalysisLocation](fxanalysislocation.md): Indicates the type of hardware to use for analysis, either CPU or GPU.

## Relationships

### Inherited By

- [FxAnalysisAPI_v2](fxanalysisapi_v2.md)

## See Also

### Time and analysis

- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md): Learn about time handling in host apps and plug-ins.
- [Scheduling media in plug-ins](../professional-video-applications/scheduling-media-in-plug-ins.md): Use the scheduling APIs in FxPlug to retrieve frames from different times.
- [FxTimingAPI_v4](fxtimingapi_v4.md): A protocol that defines the methods provided by the host, so that a plug-in can query the timing properties of its input.
- [FxKeyframeAPI_v3](fxkeyframeapi_v3.md): A collection of methods for manipulating the keyframes of your FxPlug 4 plug-in.
- [Analyzing media](../professional-video-applications/analyzing-media.md): Use the FxPlug analysis API to analyze frames of source media before rendering them.
- [FxAnalysisAPI_v2](fxanalysisapi_v2.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalyzer](fxanalyzer.md): A protocol you implement in your plug-in to analyze frames that the plug-in is applied to.
