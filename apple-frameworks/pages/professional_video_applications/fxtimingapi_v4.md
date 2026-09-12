> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtimingapi_v4](https://developer.apple.com/documentation/professional_video_applications/fxtimingapi_v4)

# FxTimingAPI_v4 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.0+

A protocol that defines the methods provided by the host, so that a plug-in can query the timing properties of its input.

## Declaration

```swift
protocol FxTimingAPI_v4
```

## Mentioned In

- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md)

<a id="overview"></a>

## Overview

Using the FxTimingAPI, your plug-in can query the timing properties of its input image or images, image parameters, effect, timeline, and in or out points.

> **Note**

>  This version of the API is only available to plug-ins built in the FxPlug 4 style and later, and it intentionally doesn’t inherit from previous versions.

## Topics

### Accessing Timing Values

- [frameDuration(\_:)](fxtimingapi_v4/frameduration%28__%29.md): Provides the native frame duration of the object to which the effect is applied.
- [sampleDuration(\_:)](fxtimingapi_v4/sampleduration%28__%29.md): Provides the native sample duration of the object to which the effect is applied.
- [startTime(forEffect:)](fxtimingapi_v4/starttime%28foreffect_%29.md): Provides the start time for the effect.
- [durationTime(forEffect:)](fxtimingapi_v4/durationtime%28foreffect_%29.md): Provides the duration time for the effect.
- [startTimeOfInput(toFilter:)](fxtimingapi_v4/starttimeofinput%28tofilter_%29.md): Provides the start time of the filter’s image input clip.
- [durationTimeOfInput(toFilter:)](fxtimingapi_v4/durationtimeofinput%28tofilter_%29.md): Provides the duration of the filter’s image input clip.
- [start(\_:ofImageParameter:)](fxtimingapi_v4/start%28__ofimageparameter_%29.md): Provides the start time of the clip the user assigned to the given image parameter for the effect.
- [durationTime(\_:ofImageParameter:)](fxtimingapi_v4/durationtime%28__ofimageparameter_%29.md): Provides the duration of the clip the user assigns to the given image parameter for the effect.
- [inPointTimeOfTimeline(forEffect:)](fxtimingapi_v4/inpointtimeoftimeline%28foreffect_%29.md): The in point of the timeline on which the user applies the effect.
- [outPointTimeOfTimeline(forEffect:)](fxtimingapi_v4/outpointtimeoftimeline%28foreffect_%29.md): The out point of the timeline on which the user applies the effect.
- [timelineTime(\_:fromInputTime:)](fxtimingapi_v4/timelinetime%28__frominputtime_%29.md): Converts from input time of the filter’s image input to timeline time.
- [timelineTime(\_:fromImageTime:forParameterID:)](fxtimingapi_v4/timelinetime%28__fromimagetime_forparameterid_%29.md): Converts from image time of the given parameter to timeline time.
- [inputTime(\_:fromTimelineTime:)](fxtimingapi_v4/inputtime%28__fromtimelinetime_%29.md): Converts from timeline time to time of the filter’s image input.
- [imageTime(\_:forParameterID:fromTimelineTime:)](fxtimingapi_v4/imagetime%28__forparameterid_fromtimelinetime_%29.md): Converts from timeline time of the given parameter to image time.
- [fieldOrderForInput(toFilter:)](fxtimingapi_v4/fieldorderforinput%28tofilter_%29.md): Returns the field order of the filter input.
- [timelineFpsNumerator(for:)](fxtimingapi_v4/timelinefpsnumerator%28for_%29.md): The numerator of the timeline’s frame rate where the user applies the effect.
- [timelineFpsDenominator(for:)](fxtimingapi_v4/timelinefpsdenominator%28for_%29.md): The denominator of the timeline’s frame rate where the user applies the effect.

## See Also

### Time and analysis

- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md): Learn about time handling in host apps and plug-ins.
- [Scheduling media in plug-ins](../professional-video-applications/scheduling-media-in-plug-ins.md): Use the scheduling APIs in FxPlug to retrieve frames from different times.
- [FxKeyframeAPI_v3](fxkeyframeapi_v3.md): A collection of methods for manipulating the keyframes of your FxPlug 4 plug-in.
- [Analyzing media](../professional-video-applications/analyzing-media.md): Use the FxPlug analysis API to analyze frames of source media before rendering them.
- [FxAnalysisAPI](fxanalysisapi.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalysisAPI_v2](fxanalysisapi_v2.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalyzer](fxanalyzer.md): A protocol you implement in your plug-in to analyze frames that the plug-in is applied to.

# FxTimingAPI_v4 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A protocol that defines the methods provided by the host, so that a plug-in can query the timing properties of its input.

## Declaration

```objectivec
@protocol FxTimingAPI_v4
```

## Mentioned In

- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md)

<a id="overview"></a>

## Overview

Using the FxTimingAPI, your plug-in can query the timing properties of its input image or images, image parameters, effect, timeline, and in or out points.

> **Note**

>  This version of the API is only available to plug-ins built in the FxPlug 4 style and later, and it intentionally doesn’t inherit from previous versions.

## Topics

### Accessing Timing Values

- [frameDuration:](fxtimingapi_v4/frameduration%28__%29.md): Provides the native frame duration of the object to which the effect is applied.
- [sampleDuration:](fxtimingapi_v4/sampleduration%28__%29.md): Provides the native sample duration of the object to which the effect is applied.
- [startTimeForEffect:](fxtimingapi_v4/starttime%28foreffect_%29.md): Provides the start time for the effect.
- [durationTimeForEffect:](fxtimingapi_v4/durationtime%28foreffect_%29.md): Provides the duration time for the effect.
- [startTimeOfInputToFilter:](fxtimingapi_v4/starttimeofinput%28tofilter_%29.md): Provides the start time of the filter’s image input clip.
- [durationTimeOfInputToFilter:](fxtimingapi_v4/durationtimeofinput%28tofilter_%29.md): Provides the duration of the filter’s image input clip.
- [startTime:ofImageParameter:](fxtimingapi_v4/start%28__ofimageparameter_%29.md): Provides the start time of the clip the user assigned to the given image parameter for the effect.
- [durationTime:ofImageParameter:](fxtimingapi_v4/durationtime%28__ofimageparameter_%29.md): Provides the duration of the clip the user assigns to the given image parameter for the effect.
- [inPointTimeOfTimelineForEffect:](fxtimingapi_v4/inpointtimeoftimeline%28foreffect_%29.md): The in point of the timeline on which the user applies the effect.
- [outPointTimeOfTimelineForEffect:](fxtimingapi_v4/outpointtimeoftimeline%28foreffect_%29.md): The out point of the timeline on which the user applies the effect.
- [timelineTime:fromInputTime:](fxtimingapi_v4/timelinetime%28__frominputtime_%29.md): Converts from input time of the filter’s image input to timeline time.
- [timelineTime:fromImageTime:forParameterID:](fxtimingapi_v4/timelinetime%28__fromimagetime_forparameterid_%29.md): Converts from image time of the given parameter to timeline time.
- [inputTime:fromTimelineTime:](fxtimingapi_v4/inputtime%28__fromtimelinetime_%29.md): Converts from timeline time to time of the filter’s image input.
- [imageTime:forParameterID:fromTimelineTime:](fxtimingapi_v4/imagetime%28__forparameterid_fromtimelinetime_%29.md): Converts from timeline time of the given parameter to image time.
- [fieldOrderForInputToFilter:](fxtimingapi_v4/fieldorderforinput%28tofilter_%29.md): Returns the field order of the filter input.
- [timelineFpsNumeratorForEffect:](fxtimingapi_v4/timelinefpsnumerator%28for_%29.md): The numerator of the timeline’s frame rate where the user applies the effect.
- [timelineFpsDenominatorForEffect:](fxtimingapi_v4/timelinefpsdenominator%28for_%29.md): The denominator of the timeline’s frame rate where the user applies the effect.

## See Also

### Time and analysis

- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md): Learn about time handling in host apps and plug-ins.
- [Scheduling media in plug-ins](../professional-video-applications/scheduling-media-in-plug-ins.md): Use the scheduling APIs in FxPlug to retrieve frames from different times.
- [FxKeyframeAPI_v3](fxkeyframeapi_v3.md): A collection of methods for manipulating the keyframes of your FxPlug 4 plug-in.
- [Analyzing media](../professional-video-applications/analyzing-media.md): Use the FxPlug analysis API to analyze frames of source media before rendering them.
- [FxAnalysisAPI](fxanalysisapi.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalysisAPI_v2](fxanalysisapi_v2.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalyzer](fxanalyzer.md): A protocol you implement in your plug-in to analyze frames that the plug-in is applied to.
