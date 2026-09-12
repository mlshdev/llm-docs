> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgeventsourcesetlocaleventssuppressioninterval](https://developer.apple.com/documentation/coregraphics/cgeventsourcesetlocaleventssuppressioninterval)

# CGEventSourceSetLocalEventsSuppressionInterval

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Sets the interval that local hardware events may be suppressed following the posting of a Quartz event.

## Declaration

```objectivec
extern void CGEventSourceSetLocalEventsSuppressionInterval(CGEventSourceRef source, CFTimeInterval seconds);
```

## Parameters

- `source`: The event source to access.
- `seconds`: The period of time in seconds that local hardware events (keyboard or mouse) are suppressed after posting a Quartz event created with the specified event source. The value should be a number in the range \[0.0, 10.0\].

<a id="Discussion"></a>

## Discussion

By default, the system does not suppress local hardware events from the keyboard or mouse during a short interval after a Quartz event is posted. You can use the function [CGEventSourceSetLocalEventsFilterDuringSuppressionState](cgeventsource/setlocaleventsfilterduringsuppressionstate%28__state_%29.md) to modify this behavior.

This function sets the period of time in seconds that local hardware events may be suppressed after posting a Quartz event created with the specified event source. The default suppression interval is 0.25 seconds.

## See Also

### Functions

- [CGAcquireDisplayFadeReservation](cgacquiredisplayfadereservation%28____%29.md): Reserves the fade hardware for a specified time interval.
- [CGAssociateMouseAndMouseCursorPosition](cgassociatemouseandmousecursorposition%28__%29.md): Connects or disconnects the mouse and cursor while an application is in the foreground.
- [CGBeginDisplayConfiguration](cgbegindisplayconfiguration%28__%29.md): Begins a new set of display configuration changes.
- [CGCancelDisplayConfiguration](cgcanceldisplayconfiguration%28__%29.md): Cancels a set of display configuration changes.
- [CGCaptureAllDisplays](cgcapturealldisplays%28%29.md): Obtains exclusive use of all active displays, preventing other applications and system services from using the display or changing its configuration.
- [CGCaptureAllDisplaysWithOptions](cgcapturealldisplayswithoptions%28__%29.md): Captures all attached displays, using the specified options.
- [CGColorConversionInfoCreateFromList](cgcolorconversioninfocreatefromlist.md): Creates a conversion between an arbitrary number of specified color spaces.
- [CGCompleteDisplayConfiguration](cgcompletedisplayconfiguration%28____%29.md): Completes a set of display configuration changes.
- [CGConfigureDisplayFadeEffect](cgconfiguredisplayfadeeffect%28____________%29.md): Modifies the settings of the built-in fade effect that occurs during a display configuration.
- [CGConfigureDisplayMirrorOfDisplay](cgconfiguredisplaymirrorofdisplay%28______%29.md): Changes the configuration of a mirroring set.
- [CGConfigureDisplayMode](cgconfiguredisplaymode%28______%29.md): Deprecated. Configures the display mode of a display.
- [CGConfigureDisplayOrigin](cgconfiguredisplayorigin%28________%29.md): Configures the origin of a display relative to the global display coordinate space.
- [CGConfigureDisplayStereoOperation](cgconfiguredisplaystereooperation%28________%29.md): Enables or disables stereo operation for a display, as part of a display configuration.
- [CGConfigureDisplayWithDisplayMode](cgconfiguredisplaywithdisplaymode%28________%29.md): Configures the display mode of a display.
- [CGContextDrawPDFDocument](cgcontextdrawpdfdocument.md): Deprecated.
