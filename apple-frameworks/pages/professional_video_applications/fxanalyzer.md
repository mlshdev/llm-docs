> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxanalyzer](https://developer.apple.com/documentation/professional_video_applications/fxanalyzer)

# FxAnalyzer (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.1+

A protocol you implement in your plug-in to analyze frames that the plug-in is applied to.

## Declaration

```swift
protocol FxAnalyzer
```

## Mentioned In

- [Analyzing media](../professional-video-applications/analyzing-media.md)

<a id="overview"></a>

## Overview

Implement this protocol if your plug-in needs to analyze some or all of the frames your plug-in is applied to before being able to render.

## Topics

### Analyzing Frames in Your Plug-in

- [desiredAnalysisTimeRange(\_:forInputWith:)](fxanalyzer/desiredanalysistimerange%28__forinputwith_%29.md): Requests the specified time range of frames you want to analyze.
- [setupAnalysis(for:frameDuration:)](fxanalyzer/setupanalysis%28for_frameduration_%29.md): Completes any setup work before starting the frame analysis.
- [analyzeFrame(\_:at:)](fxanalyzer/analyzeframe%28__at_%29.md): Analyzes the next frame.
- [cleanupAnalysis()](fxanalyzer/cleanupanalysis%28%29.md): Completes any necessary cleanup work after your plug-in’s frame analysis.

### Determining the Analysis State

- [FxAnalysisState](fxanalysisstate.md): The possible states of frame analysis, as reported by the host application.

## See Also

### Time and analysis

- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md): Learn about time handling in host apps and plug-ins.
- [Scheduling media in plug-ins](../professional-video-applications/scheduling-media-in-plug-ins.md): Use the scheduling APIs in FxPlug to retrieve frames from different times.
- [FxTimingAPI_v4](fxtimingapi_v4.md): A protocol that defines the methods provided by the host, so that a plug-in can query the timing properties of its input.
- [FxKeyframeAPI_v3](fxkeyframeapi_v3.md): A collection of methods for manipulating the keyframes of your FxPlug 4 plug-in.
- [Analyzing media](../professional-video-applications/analyzing-media.md): Use the FxPlug analysis API to analyze frames of source media before rendering them.
- [FxAnalysisAPI](fxanalysisapi.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalysisAPI_v2](fxanalysisapi_v2.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.

# FxAnalyzer (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A protocol you implement in your plug-in to analyze frames that the plug-in is applied to.

## Declaration

```objectivec
@protocol FxAnalyzer
```

## Mentioned In

- [Analyzing media](../professional-video-applications/analyzing-media.md)

<a id="overview"></a>

## Overview

Implement this protocol if your plug-in needs to analyze some or all of the frames your plug-in is applied to before being able to render.

## Topics

### Analyzing Frames in Your Plug-in

- [desiredAnalysisTimeRange:forInputWithTimeRange:error:](fxanalyzer/desiredanalysistimerange%28__forinputwith_%29.md): Requests the specified time range of frames you want to analyze.
- [setupAnalysisForTimeRange:frameDuration:error:](fxanalyzer/setupanalysis%28for_frameduration_%29.md): Completes any setup work before starting the frame analysis.
- [analyzeFrame:atTime:error:](fxanalyzer/analyzeframe%28__at_%29.md): Analyzes the next frame.
- [cleanupAnalysis:](fxanalyzer/cleanupanalysis%28%29.md): Completes any necessary cleanup work after your plug-in’s frame analysis.

### Determining the Analysis State

- [FxAnalysisState](fxanalysisstate.md): The possible states of frame analysis, as reported by the host application.

## See Also

### Time and analysis

- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md): Learn about time handling in host apps and plug-ins.
- [Scheduling media in plug-ins](../professional-video-applications/scheduling-media-in-plug-ins.md): Use the scheduling APIs in FxPlug to retrieve frames from different times.
- [FxTimingAPI_v4](fxtimingapi_v4.md): A protocol that defines the methods provided by the host, so that a plug-in can query the timing properties of its input.
- [FxKeyframeAPI_v3](fxkeyframeapi_v3.md): A collection of methods for manipulating the keyframes of your FxPlug 4 plug-in.
- [Analyzing media](../professional-video-applications/analyzing-media.md): Use the FxPlug analysis API to analyze frames of source media before rendering them.
- [FxAnalysisAPI](fxanalysisapi.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalysisAPI_v2](fxanalysisapi_v2.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
