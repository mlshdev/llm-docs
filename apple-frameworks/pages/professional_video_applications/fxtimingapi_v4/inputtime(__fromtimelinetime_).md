> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtimingapi_v4/inputtime(_:fromtimelinetime:)](https://developer.apple.com/documentation/professional_video_applications/fxtimingapi_v4/inputtime(_:fromtimelinetime:))

# inputTime(\_:fromTimelineTime:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Converts from timeline time to time of the filter’s image input.

## Declaration

```swift
func inputTime(_ inputTime: UnsafeMutablePointer<CMTime>!, fromTimelineTime time: CMTime)
```

## Parameters

- `inputTime`: The converted time, in `CMTime`.
- `time`: The timeline time, in `CMTime`.

## Mentioned In

- [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md)

<a id="discussion"></a>

## Discussion

In Motion, this timeline time and input time are always equal. In Final Cut Pro, this method provides the calculated input time for any given timeline time. For more information about how to handle time conversion, see [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md).

## See Also

### Accessing Timing Values

- [frameDuration(\_:)](frameduration%28__%29.md): Provides the native frame duration of the object to which the effect is applied.
- [sampleDuration(\_:)](sampleduration%28__%29.md): Provides the native sample duration of the object to which the effect is applied.
- [startTime(forEffect:)](starttime%28foreffect_%29.md): Provides the start time for the effect.
- [durationTime(forEffect:)](durationtime%28foreffect_%29.md): Provides the duration time for the effect.
- [startTimeOfInput(toFilter:)](starttimeofinput%28tofilter_%29.md): Provides the start time of the filter’s image input clip.
- [durationTimeOfInput(toFilter:)](durationtimeofinput%28tofilter_%29.md): Provides the duration of the filter’s image input clip.
- [start(\_:ofImageParameter:)](start%28__ofimageparameter_%29.md): Provides the start time of the clip the user assigned to the given image parameter for the effect.
- [durationTime(\_:ofImageParameter:)](durationtime%28__ofimageparameter_%29.md): Provides the duration of the clip the user assigns to the given image parameter for the effect.
- [inPointTimeOfTimeline(forEffect:)](inpointtimeoftimeline%28foreffect_%29.md): The in point of the timeline on which the user applies the effect.
- [outPointTimeOfTimeline(forEffect:)](outpointtimeoftimeline%28foreffect_%29.md): The out point of the timeline on which the user applies the effect.
- [timelineTime(\_:fromInputTime:)](timelinetime%28__frominputtime_%29.md): Converts from input time of the filter’s image input to timeline time.
- [timelineTime(\_:fromImageTime:forParameterID:)](timelinetime%28__fromimagetime_forparameterid_%29.md): Converts from image time of the given parameter to timeline time.
- [imageTime(\_:forParameterID:fromTimelineTime:)](imagetime%28__forparameterid_fromtimelinetime_%29.md): Converts from timeline time of the given parameter to image time.
- [fieldOrderForInput(toFilter:)](fieldorderforinput%28tofilter_%29.md): Returns the field order of the filter input.
- [timelineFpsNumerator(for:)](timelinefpsnumerator%28for_%29.md): The numerator of the timeline’s frame rate where the user applies the effect.

# inputTime:fromTimelineTime: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Converts from timeline time to time of the filter’s image input.

## Declaration

```objectivec
- (void) inputTime:(CMTime *) inputTime fromTimelineTime:(CMTime) time;
```

## Parameters

- `inputTime`: The converted time, in `CMTime`.
- `time`: The timeline time, in `CMTime`.

## Mentioned In

- [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md)

<a id="discussion"></a>

## Discussion

In Motion, this timeline time and input time are always equal. In Final Cut Pro, this method provides the calculated input time for any given timeline time. For more information about how to handle time conversion, see [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md).

## See Also

### Accessing Timing Values

- [frameDuration:](frameduration%28__%29.md): Provides the native frame duration of the object to which the effect is applied.
- [sampleDuration:](sampleduration%28__%29.md): Provides the native sample duration of the object to which the effect is applied.
- [startTimeForEffect:](starttime%28foreffect_%29.md): Provides the start time for the effect.
- [durationTimeForEffect:](durationtime%28foreffect_%29.md): Provides the duration time for the effect.
- [startTimeOfInputToFilter:](starttimeofinput%28tofilter_%29.md): Provides the start time of the filter’s image input clip.
- [durationTimeOfInputToFilter:](durationtimeofinput%28tofilter_%29.md): Provides the duration of the filter’s image input clip.
- [startTime:ofImageParameter:](start%28__ofimageparameter_%29.md): Provides the start time of the clip the user assigned to the given image parameter for the effect.
- [durationTime:ofImageParameter:](durationtime%28__ofimageparameter_%29.md): Provides the duration of the clip the user assigns to the given image parameter for the effect.
- [inPointTimeOfTimelineForEffect:](inpointtimeoftimeline%28foreffect_%29.md): The in point of the timeline on which the user applies the effect.
- [outPointTimeOfTimelineForEffect:](outpointtimeoftimeline%28foreffect_%29.md): The out point of the timeline on which the user applies the effect.
- [timelineTime:fromInputTime:](timelinetime%28__frominputtime_%29.md): Converts from input time of the filter’s image input to timeline time.
- [timelineTime:fromImageTime:forParameterID:](timelinetime%28__fromimagetime_forparameterid_%29.md): Converts from image time of the given parameter to timeline time.
- [imageTime:forParameterID:fromTimelineTime:](imagetime%28__forparameterid_fromtimelinetime_%29.md): Converts from timeline time of the given parameter to image time.
- [fieldOrderForInputToFilter:](fieldorderforinput%28tofilter_%29.md): Returns the field order of the filter input.
- [timelineFpsNumeratorForEffect:](timelinefpsnumerator%28for_%29.md): The numerator of the timeline’s frame rate where the user applies the effect.
