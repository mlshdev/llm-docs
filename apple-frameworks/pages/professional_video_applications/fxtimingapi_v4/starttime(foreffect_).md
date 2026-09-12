> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtimingapi_v4/starttime(foreffect:)](https://developer.apple.com/documentation/professional_video_applications/fxtimingapi_v4/starttime(foreffect:))

# startTime(forEffect:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Provides the start time for the effect.

## Declaration

```swift
func startTime(forEffect startTime: UnsafeMutablePointer<CMTime>!)
```

## Parameters

- `startTime`: The start time of the effect, expressed in `CMTime`.

## Mentioned In

- [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md)

<a id="discussion"></a>

## Discussion

In Motion, this is the time the effect starts relative to timeline time, but in Final Cut Pro this is the time the effect starts relative to the input object’s native start time. For example, if an object’s head is trimmed by 2 seconds and the effect starts at the head of the template, then `-startTimeForEffect:` will return 2 seconds. This value changes when the user retimes the clip in Final Cut Pro, so a 200-percent increase in speed halves the start time to 1 second.

## See Also

### Accessing Timing Values

- [frameDuration(\_:)](frameduration%28__%29.md): Provides the native frame duration of the object to which the effect is applied.
- [sampleDuration(\_:)](sampleduration%28__%29.md): Provides the native sample duration of the object to which the effect is applied.
- [durationTime(forEffect:)](durationtime%28foreffect_%29.md): Provides the duration time for the effect.
- [startTimeOfInput(toFilter:)](starttimeofinput%28tofilter_%29.md): Provides the start time of the filter’s image input clip.
- [durationTimeOfInput(toFilter:)](durationtimeofinput%28tofilter_%29.md): Provides the duration of the filter’s image input clip.
- [start(\_:ofImageParameter:)](start%28__ofimageparameter_%29.md): Provides the start time of the clip the user assigned to the given image parameter for the effect.
- [durationTime(\_:ofImageParameter:)](durationtime%28__ofimageparameter_%29.md): Provides the duration of the clip the user assigns to the given image parameter for the effect.
- [inPointTimeOfTimeline(forEffect:)](inpointtimeoftimeline%28foreffect_%29.md): The in point of the timeline on which the user applies the effect.
- [outPointTimeOfTimeline(forEffect:)](outpointtimeoftimeline%28foreffect_%29.md): The out point of the timeline on which the user applies the effect.
- [timelineTime(\_:fromInputTime:)](timelinetime%28__frominputtime_%29.md): Converts from input time of the filter’s image input to timeline time.
- [timelineTime(\_:fromImageTime:forParameterID:)](timelinetime%28__fromimagetime_forparameterid_%29.md): Converts from image time of the given parameter to timeline time.
- [inputTime(\_:fromTimelineTime:)](inputtime%28__fromtimelinetime_%29.md): Converts from timeline time to time of the filter’s image input.
- [imageTime(\_:forParameterID:fromTimelineTime:)](imagetime%28__forparameterid_fromtimelinetime_%29.md): Converts from timeline time of the given parameter to image time.
- [fieldOrderForInput(toFilter:)](fieldorderforinput%28tofilter_%29.md): Returns the field order of the filter input.
- [timelineFpsNumerator(for:)](timelinefpsnumerator%28for_%29.md): The numerator of the timeline’s frame rate where the user applies the effect.

# startTimeForEffect: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides the start time for the effect.

## Declaration

```objectivec
- (void) startTimeForEffect:(CMTime *) startTime;
```

## Parameters

- `startTime`: The start time of the effect, expressed in `CMTime`.

## Mentioned In

- [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md)

<a id="discussion"></a>

## Discussion

In Motion, this is the time the effect starts relative to timeline time, but in Final Cut Pro this is the time the effect starts relative to the input object’s native start time. For example, if an object’s head is trimmed by 2 seconds and the effect starts at the head of the template, then `-startTimeForEffect:` will return 2 seconds. This value changes when the user retimes the clip in Final Cut Pro, so a 200-percent increase in speed halves the start time to 1 second.

## See Also

### Accessing Timing Values

- [frameDuration:](frameduration%28__%29.md): Provides the native frame duration of the object to which the effect is applied.
- [sampleDuration:](sampleduration%28__%29.md): Provides the native sample duration of the object to which the effect is applied.
- [durationTimeForEffect:](durationtime%28foreffect_%29.md): Provides the duration time for the effect.
- [startTimeOfInputToFilter:](starttimeofinput%28tofilter_%29.md): Provides the start time of the filter’s image input clip.
- [durationTimeOfInputToFilter:](durationtimeofinput%28tofilter_%29.md): Provides the duration of the filter’s image input clip.
- [startTime:ofImageParameter:](start%28__ofimageparameter_%29.md): Provides the start time of the clip the user assigned to the given image parameter for the effect.
- [durationTime:ofImageParameter:](durationtime%28__ofimageparameter_%29.md): Provides the duration of the clip the user assigns to the given image parameter for the effect.
- [inPointTimeOfTimelineForEffect:](inpointtimeoftimeline%28foreffect_%29.md): The in point of the timeline on which the user applies the effect.
- [outPointTimeOfTimelineForEffect:](outpointtimeoftimeline%28foreffect_%29.md): The out point of the timeline on which the user applies the effect.
- [timelineTime:fromInputTime:](timelinetime%28__frominputtime_%29.md): Converts from input time of the filter’s image input to timeline time.
- [timelineTime:fromImageTime:forParameterID:](timelinetime%28__fromimagetime_forparameterid_%29.md): Converts from image time of the given parameter to timeline time.
- [inputTime:fromTimelineTime:](inputtime%28__fromtimelinetime_%29.md): Converts from timeline time to time of the filter’s image input.
- [imageTime:forParameterID:fromTimelineTime:](imagetime%28__forparameterid_fromtimelinetime_%29.md): Converts from timeline time of the given parameter to image time.
- [fieldOrderForInputToFilter:](fieldorderforinput%28tofilter_%29.md): Returns the field order of the filter input.
- [timelineFpsNumeratorForEffect:](timelinefpsnumerator%28for_%29.md): The numerator of the timeline’s frame rate where the user applies the effect.
