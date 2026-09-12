> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxanalysisapi_v2](https://developer.apple.com/documentation/professional_video_applications/fxanalysisapi_v2)

# FxAnalysisAPI_v2 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.2.2+

A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.

## Declaration

```swift
protocol FxAnalysisAPI_v2 : FxAnalysisAPI
```

<a id="overview"></a>

## Overview

Host applications implement this protocol to provide frame analysis information to plug-ins that support the FxAnalyzer protocol.

## Topics

### Analyzing Input from an Image Well

- [startForwardAnalysis(\_:ofParameter:)](fxanalysisapi_v2/startforwardanalysis%28__ofparameter_%29.md): Requests that the application begin a forward analysis of an image parameter from start to end.
- [startBackwardAnalysis(\_:ofParameter:)](fxanalysisapi_v2/startbackwardanalysis%28__ofparameter_%29.md): Requests that the application begin a backward analysis of an image parameter from start to end.

## Relationships

### Inherits From

- [FxAnalysisAPI](fxanalysisapi.md)

## See Also

### Time and analysis

- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md): Learn about time handling in host apps and plug-ins.
- [Scheduling media in plug-ins](../professional-video-applications/scheduling-media-in-plug-ins.md): Use the scheduling APIs in FxPlug to retrieve frames from different times.
- [FxTimingAPI_v4](fxtimingapi_v4.md): A protocol that defines the methods provided by the host, so that a plug-in can query the timing properties of its input.
- [FxKeyframeAPI_v3](fxkeyframeapi_v3.md): A collection of methods for manipulating the keyframes of your FxPlug 4 plug-in.
- [Analyzing media](../professional-video-applications/analyzing-media.md): Use the FxPlug analysis API to analyze frames of source media before rendering them.
- [FxAnalysisAPI](fxanalysisapi.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalyzer](fxanalyzer.md): A protocol you implement in your plug-in to analyze frames that the plug-in is applied to.

# FxAnalysisAPI_v2 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.

## Declaration

```objectivec
@protocol FxAnalysisAPI_v2 <FxAnalysisAPI>
```

<a id="overview"></a>

## Overview

Host applications implement this protocol to provide frame analysis information to plug-ins that support the FxAnalyzer protocol.

## Topics

### Analyzing Input from an Image Well

- [startForwardAnalysis:ofParameter:error:](fxanalysisapi_v2/startforwardanalysis%28__ofparameter_%29.md): Requests that the application begin a forward analysis of an image parameter from start to end.
- [startBackwardAnalysis:ofParameter:error:](fxanalysisapi_v2/startbackwardanalysis%28__ofparameter_%29.md): Requests that the application begin a backward analysis of an image parameter from start to end.

## Relationships

### Inherits From

- [FxAnalysisAPI](fxanalysisapi.md)

## See Also

### Time and analysis

- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md): Learn about time handling in host apps and plug-ins.
- [Scheduling media in plug-ins](../professional-video-applications/scheduling-media-in-plug-ins.md): Use the scheduling APIs in FxPlug to retrieve frames from different times.
- [FxTimingAPI_v4](fxtimingapi_v4.md): A protocol that defines the methods provided by the host, so that a plug-in can query the timing properties of its input.
- [FxKeyframeAPI_v3](fxkeyframeapi_v3.md): A collection of methods for manipulating the keyframes of your FxPlug 4 plug-in.
- [Analyzing media](../professional-video-applications/analyzing-media.md): Use the FxPlug analysis API to analyze frames of source media before rendering them.
- [FxAnalysisAPI](fxanalysisapi.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalyzer](fxanalyzer.md): A protocol you implement in your plug-in to analyze frames that the plug-in is applied to.
