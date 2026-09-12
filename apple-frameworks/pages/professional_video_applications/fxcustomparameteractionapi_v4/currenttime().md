> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcustomparameteractionapi_v4/currenttime()](https://developer.apple.com/documentation/professional_video_applications/fxcustomparameteractionapi_v4/currenttime())

# currentTime() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Returns the current time, expressed as a rational time.

## Declaration

```swift
func currentTime() -> CMTime
```

<a id="return-value"></a>

## Return Value

The current time, expressed as a rational time.

## Mentioned In

- [Scheduling media in plug-ins](../../professional-video-applications/scheduling-media-in-plug-ins.md)
- [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md)

<a id="discussion"></a>

## Discussion

This is useful when a custom parameter view needs to set a parameter value in response to a user event. Depending on the host application, the time value may be relative to the start of the timeline or to the start of the clip. See [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md).

> **Important**

> Only use `-currentTime` from within methods that are not provided the time by the host. For example, when updating a custom view.

## See Also

### Instance Methods

- [startAction(\_:)](startaction%28__%29.md): Prepares the host to access parameters.
- [endAction(\_:)](endaction%28__%29.md): Tells the host application that the plug-in is done accessing parameters.

# currentTime (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the current time, expressed as a rational time.

## Declaration

```objectivec
- (CMTime) currentTime;
```

<a id="return-value"></a>

## Return Value

The current time, expressed as a rational time.

## Mentioned In

- [Scheduling media in plug-ins](../../professional-video-applications/scheduling-media-in-plug-ins.md)
- [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md)

<a id="discussion"></a>

## Discussion

This is useful when a custom parameter view needs to set a parameter value in response to a user event. Depending on the host application, the time value may be relative to the start of the timeline or to the start of the clip. See [Understanding time in FxPlug](../../professional-video-applications/understanding-time-in-fxplug.md).

> **Important**

> Only use `-currentTime` from within methods that are not provided the time by the host. For example, when updating a custom view.

## See Also

### Instance Methods

- [startAction:](startaction%28__%29.md): Prepares the host to access parameters.
- [endAction:](endaction%28__%29.md): Tells the host application that the plug-in is done accessing parameters.
