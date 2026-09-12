> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtimingapi_v4/start(_:ofimageparameter:)](https://developer.apple.com/documentation/professional_video_applications/fxtimingapi_v4/start(_:ofimageparameter:))

# start(\_:ofImageParameter:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Provides the start time of the clip the user assigned to the given image parameter for the effect.

## Declaration

```swift
func start(_ startTime: UnsafeMutablePointer<CMTime>!, ofImageParameter parameterID: UInt32)
```

## Parameters

- `startTime`: The start time of the clip, in `CMTime`.
- `parameterID`: The ID of the image parameter.

<a id="discussion"></a>

## Discussion

In Motion, `startTime` represents the native start time of the image well input, relative to timeline time.

## See Also

### Accessing Timing Values

- [frameDuration(\_:)](frameduration%28__%29.md): Provides the native frame duration of the object to which the effect is applied.
- [sampleDuration(\_:)](sampleduration%28__%29.md): Provides the native sample duration of the object to which the effect is applied.
- [startTime(forEffect:)](starttime%28foreffect_%29.md): Provides the start time for the effect.
- [durationTime(forEffect:)](durationtime%28foreffect_%29.md): Provides the duration time for the effect.
- [startTimeOfInput(toFilter:)](starttimeofinput%28tofilter_%29.md): Provides the start time of the filter’s image input clip.
- [durationTimeOfInput(toFilter:)](durationtimeofinput%28tofilter_%29.md): Provides the duration of the filter’s image input clip.
- [durationTime(\_:ofImageParameter:)](durationtime%28__ofimageparameter_%29.md): Provides the duration of the clip the user assigns to the given image parameter for the effect.
- [inPointTimeOfTimeline(forEffect:)](inpointtimeoftimeline%28foreffect_%29.md): The in point of the timeline on which the user applies the effect.
- [outPointTimeOfTimeline(forEffect:)](outpointtimeoftimeline%28foreffect_%29.md): The out point of the timeline on which the user applies the effect.
- [timelineTime(\_:fromInputTime:)](timelinetime%28__frominputtime_%29.md): Converts from input time of the filter’s image input to timeline time.
- [timelineTime(\_:fromImageTime:forParameterID:)](timelinetime%28__fromimagetime_forparameterid_%29.md): Converts from image time of the given parameter to timeline time.
- [inputTime(\_:fromTimelineTime:)](inputtime%28__fromtimelinetime_%29.md): Converts from timeline time to time of the filter’s image input.
- [imageTime(\_:forParameterID:fromTimelineTime:)](imagetime%28__forparameterid_fromtimelinetime_%29.md): Converts from timeline time of the given parameter to image time.
- [fieldOrderForInput(toFilter:)](fieldorderforinput%28tofilter_%29.md): Returns the field order of the filter input.
- [timelineFpsNumerator(for:)](timelinefpsnumerator%28for_%29.md): The numerator of the timeline’s frame rate where the user applies the effect.

# startTime:ofImageParameter: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides the start time of the clip the user assigned to the given image parameter for the effect.

## Declaration

```objectivec
- (void) startTime:(CMTime *) startTime ofImageParameter:(UInt32) parameterID;
```

## Parameters

- `startTime`: The start time of the clip, in `CMTime`.
- `parameterID`: The ID of the image parameter.

<a id="discussion"></a>

## Discussion

In Motion, `startTime` represents the native start time of the image well input, relative to timeline time.

## See Also

### Accessing Timing Values

- [frameDuration:](frameduration%28__%29.md): Provides the native frame duration of the object to which the effect is applied.
- [sampleDuration:](sampleduration%28__%29.md): Provides the native sample duration of the object to which the effect is applied.
- [startTimeForEffect:](starttime%28foreffect_%29.md): Provides the start time for the effect.
- [durationTimeForEffect:](durationtime%28foreffect_%29.md): Provides the duration time for the effect.
- [startTimeOfInputToFilter:](starttimeofinput%28tofilter_%29.md): Provides the start time of the filter’s image input clip.
- [durationTimeOfInputToFilter:](durationtimeofinput%28tofilter_%29.md): Provides the duration of the filter’s image input clip.
- [durationTime:ofImageParameter:](durationtime%28__ofimageparameter_%29.md): Provides the duration of the clip the user assigns to the given image parameter for the effect.
- [inPointTimeOfTimelineForEffect:](inpointtimeoftimeline%28foreffect_%29.md): The in point of the timeline on which the user applies the effect.
- [outPointTimeOfTimelineForEffect:](outpointtimeoftimeline%28foreffect_%29.md): The out point of the timeline on which the user applies the effect.
- [timelineTime:fromInputTime:](timelinetime%28__frominputtime_%29.md): Converts from input time of the filter’s image input to timeline time.
- [timelineTime:fromImageTime:forParameterID:](timelinetime%28__fromimagetime_forparameterid_%29.md): Converts from image time of the given parameter to timeline time.
- [inputTime:fromTimelineTime:](inputtime%28__fromtimelinetime_%29.md): Converts from timeline time to time of the filter’s image input.
- [imageTime:forParameterID:fromTimelineTime:](imagetime%28__forparameterid_fromtimelinetime_%29.md): Converts from timeline time of the given parameter to image time.
- [fieldOrderForInputToFilter:](fieldorderforinput%28tofilter_%29.md): Returns the field order of the filter input.
- [timelineFpsNumeratorForEffect:](timelinefpsnumerator%28for_%29.md): The numerator of the timeline’s frame rate where the user applies the effect.
