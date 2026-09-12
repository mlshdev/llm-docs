> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxkeyframeapi_v3](https://developer.apple.com/documentation/professional_video_applications/fxkeyframeapi_v3)

# FxKeyframeAPI_v3 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.0+

A collection of methods for manipulating the keyframes of your FxPlug 4 plug-in.

## Declaration

```swift
protocol FxKeyframeAPI_v3
```

<a id="overview"></a>

## Overview

These methods allow you to get keyframe information about any parameter your plug-in has. You can also set keyframes, which can be useful for creating presets and automating common uses of your plug-ins.

## Topics

### Instance Methods

- [add(\_:toParameter:andChannel:)](fxkeyframeapi_v3/add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount(\_:forParameter:)](fxkeyframeapi_v3/channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe(\_:atOrAfter:fromParameter:andChannel:)](fxkeyframeapi_v3/keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe(\_:atOrBefore:fromParameter:andChannel:)](fxkeyframeapi_v3/keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe(\_:forParameter:channel:andIndex:)](fxkeyframeapi_v3/keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [keyframeCount(\_:forParameter:andChannel:)](fxkeyframeapi_v3/keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [parameter(\_:channel:hasKeyframe:at:)](fxkeyframeapi_v3/parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeAllKeyframes(forParameter:andChannel:)](fxkeyframeapi_v3/removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframe(at:fromParameter:andChannel:)](fxkeyframeapi_v3/removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex(\_:with:forParameter:andChannel:)](fxkeyframeapi_v3/setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.

### Structure

- [FxKeyframe](fxkeyframe.md)

### Constants

- [FxKeyframeStyle](fxkeyframestyle.md): Constants for specifying the type of keyframe.
- [kFxKeyframe_V3](kfxkeyframe_v3.md)
- [kFxKeyframe_CurrentVersion](kfxkeyframe_currentversion.md)

## See Also

### Time and analysis

- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md): Learn about time handling in host apps and plug-ins.
- [Scheduling media in plug-ins](../professional-video-applications/scheduling-media-in-plug-ins.md): Use the scheduling APIs in FxPlug to retrieve frames from different times.
- [FxTimingAPI_v4](fxtimingapi_v4.md): A protocol that defines the methods provided by the host, so that a plug-in can query the timing properties of its input.
- [Analyzing media](../professional-video-applications/analyzing-media.md): Use the FxPlug analysis API to analyze frames of source media before rendering them.
- [FxAnalysisAPI](fxanalysisapi.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalysisAPI_v2](fxanalysisapi_v2.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalyzer](fxanalyzer.md): A protocol you implement in your plug-in to analyze frames that the plug-in is applied to.

# FxKeyframeAPI_v3 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A collection of methods for manipulating the keyframes of your FxPlug 4 plug-in.

## Declaration

```objectivec
@protocol FxKeyframeAPI_v3
```

<a id="overview"></a>

## Overview

These methods allow you to get keyframe information about any parameter your plug-in has. You can also set keyframes, which can be useful for creating presets and automating common uses of your plug-ins.

## Topics

### Instance Methods

- [addKeyframe:toParameter:andChannel:](fxkeyframeapi_v3/add%28__toparameter_andchannel_%29.md): Adds a keyframe at the given time.
- [channelCount:forParameter:](fxkeyframeapi_v3/channelcount%28__forparameter_%29.md): Returns the number of channels in a parameter.
- [keyframe:atOrAfterTime:fromParameter:andChannel:](fxkeyframeapi_v3/keyframe%28__atorafter_fromparameter_andchannel_%29.md): Returns the info about the nearest next keyframe.
- [keyframe:atOrBeforeTime:fromParameter:andChannel:](fxkeyframeapi_v3/keyframe%28__atorbefore_fromparameter_andchannel_%29.md): Returns the info about the nearest previous keyframe.
- [keyframe:forParameter:channel:andIndex:](fxkeyframeapi_v3/keyframe%28__forparameter_channel_andindex_%29.md): Returns the keyframe info for the keyframe at a given index.
- [keyframeCount:forParameter:andChannel:](fxkeyframeapi_v3/keyframecount%28__forparameter_andchannel_%29.md): Returns the number of keyframes for a parameter’s channel.
- [parameter:channel:hasKeyframe:atTime:](fxkeyframeapi_v3/parameter%28__channel_haskeyframe_at_%29.md): Tells whether there is a keyframe at a given time.
- [removeAllKeyframesForParameter:andChannel:](fxkeyframeapi_v3/removeallkeyframes%28forparameter_andchannel_%29.md): Remove all keyframes from the given parameter’s channel.
- [removeKeyframeAtIndex:fromParameter:andChannel:](fxkeyframeapi_v3/removekeyframe%28at_fromparameter_andchannel_%29.md): Removes the keyframe at the given index.
- [setKeyframeIndex:withKeyframe:forParameter:andChannel:](fxkeyframeapi_v3/setkeyframeindex%28__with_forparameter_andchannel_%29.md): Sets the keyframe at the given index to have the given info.

### Structure

- [FxKeyframe](fxkeyframe.md)

### Constants

- [FxKeyframeStyle](fxkeyframestyle.md): Constants for specifying the type of keyframe.
- [kFxKeyframe_V3](kfxkeyframe_v3.md)
- [kFxKeyframe_CurrentVersion](kfxkeyframe_currentversion.md)

## See Also

### Time and analysis

- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md): Learn about time handling in host apps and plug-ins.
- [Scheduling media in plug-ins](../professional-video-applications/scheduling-media-in-plug-ins.md): Use the scheduling APIs in FxPlug to retrieve frames from different times.
- [FxTimingAPI_v4](fxtimingapi_v4.md): A protocol that defines the methods provided by the host, so that a plug-in can query the timing properties of its input.
- [Analyzing media](../professional-video-applications/analyzing-media.md): Use the FxPlug analysis API to analyze frames of source media before rendering them.
- [FxAnalysisAPI](fxanalysisapi.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalysisAPI_v2](fxanalysisapi_v2.md): A protocol that host applications implement to provide information to plug-ins that support the FxAnalyzer protocol.
- [FxAnalyzer](fxanalyzer.md): A protocol you implement in your plug-in to analyze frames that the plug-in is applied to.
