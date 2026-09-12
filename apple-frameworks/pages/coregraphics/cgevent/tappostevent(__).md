> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgevent/tappostevent(_:)](https://developer.apple.com/documentation/coregraphics/cgevent/tappostevent(_:))

# tapPostEvent(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Posts a Quartz event from an event tap into the event stream.

## Declaration

```swift
func tapPostEvent(_ proxy: CGEventTapProxy?)
```

## Parameters

- `proxy`: A proxy that identifies the event tap posting the event. Your event tap callback function is passed this proxy when it is invoked.

<a id="Discussion"></a>

## Discussion

You can use this function to post a new event at the same point to which an event returned from an event tap callback function would be posted. The new event enters the system before the event returned by the callback enters the system. Events posted into the system will be seen by all taps placed after the tap posting the event.

## See Also

### Functions

- [CGAcquireDisplayFadeReservation(\_:\_:)](../cgacquiredisplayfadereservation%28____%29.md): Reserves the fade hardware for a specified time interval.
- [CGAssociateMouseAndMouseCursorPosition(\_:)](../cgassociatemouseandmousecursorposition%28__%29.md): Connects or disconnects the mouse and cursor while an application is in the foreground.
- [CGBeginDisplayConfiguration(\_:)](../cgbegindisplayconfiguration%28__%29.md): Begins a new set of display configuration changes.
- [CGCancelDisplayConfiguration(\_:)](../cgcanceldisplayconfiguration%28__%29.md): Cancels a set of display configuration changes.
- [CGCaptureAllDisplays()](../cgcapturealldisplays%28%29.md): Obtains exclusive use of all active displays, preventing other applications and system services from using the display or changing its configuration.
- [CGCaptureAllDisplaysWithOptions(\_:)](../cgcapturealldisplayswithoptions%28__%29.md): Captures all attached displays, using the specified options.
- [CGCompleteDisplayConfiguration(\_:\_:)](../cgcompletedisplayconfiguration%28____%29.md): Completes a set of display configuration changes.
- [CGConfigureDisplayFadeEffect(\_:\_:\_:\_:\_:\_:)](../cgconfiguredisplayfadeeffect%28____________%29.md): Modifies the settings of the built-in fade effect that occurs during a display configuration.
- [CGConfigureDisplayMirrorOfDisplay(\_:\_:\_:)](../cgconfiguredisplaymirrorofdisplay%28______%29.md): Changes the configuration of a mirroring set.
- [CGConfigureDisplayMode(\_:\_:\_:)](../cgconfiguredisplaymode%28______%29.md): Deprecated. Configures the display mode of a display.
- [CGConfigureDisplayOrigin(\_:\_:\_:\_:)](../cgconfiguredisplayorigin%28________%29.md): Configures the origin of a display relative to the global display coordinate space.
- [CGConfigureDisplayStereoOperation(\_:\_:\_:\_:)](../cgconfiguredisplaystereooperation%28________%29.md): Enables or disables stereo operation for a display, as part of a display configuration.
- [CGConfigureDisplayWithDisplayMode(\_:\_:\_:\_:)](../cgconfiguredisplaywithdisplaymode%28________%29.md): Configures the display mode of a display.
- [CGCursorIsDrawnInFramebuffer()](../cgcursorisdrawninframebuffer%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is drawn in framebuffer memory.
- [CGCursorIsVisible()](../cgcursorisvisible%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is visible.

# CGEventTapPostEvent (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Posts a Quartz event from an event tap into the event stream.

## Declaration

```objectivec
extern void CGEventTapPostEvent(CGEventTapProxy proxy, CGEventRef event);
```

## Parameters

- `proxy`: A proxy that identifies the event tap posting the event. Your event tap callback function is passed this proxy when it is invoked.
- `event`: The event to post.

<a id="Discussion"></a>

## Discussion

You can use this function to post a new event at the same point to which an event returned from an event tap callback function would be posted. The new event enters the system before the event returned by the callback enters the system. Events posted into the system will be seen by all taps placed after the tap posting the event.

## See Also

### Functions

- [CGAcquireDisplayFadeReservation](../cgacquiredisplayfadereservation%28____%29.md): Reserves the fade hardware for a specified time interval.
- [CGAssociateMouseAndMouseCursorPosition](../cgassociatemouseandmousecursorposition%28__%29.md): Connects or disconnects the mouse and cursor while an application is in the foreground.
- [CGBeginDisplayConfiguration](../cgbegindisplayconfiguration%28__%29.md): Begins a new set of display configuration changes.
- [CGCancelDisplayConfiguration](../cgcanceldisplayconfiguration%28__%29.md): Cancels a set of display configuration changes.
- [CGCaptureAllDisplays](../cgcapturealldisplays%28%29.md): Obtains exclusive use of all active displays, preventing other applications and system services from using the display or changing its configuration.
- [CGCaptureAllDisplaysWithOptions](../cgcapturealldisplayswithoptions%28__%29.md): Captures all attached displays, using the specified options.
- [CGColorConversionInfoCreateFromList](../cgcolorconversioninfocreatefromlist.md): Creates a conversion between an arbitrary number of specified color spaces.
- [CGCompleteDisplayConfiguration](../cgcompletedisplayconfiguration%28____%29.md): Completes a set of display configuration changes.
- [CGConfigureDisplayFadeEffect](../cgconfiguredisplayfadeeffect%28____________%29.md): Modifies the settings of the built-in fade effect that occurs during a display configuration.
- [CGConfigureDisplayMirrorOfDisplay](../cgconfiguredisplaymirrorofdisplay%28______%29.md): Changes the configuration of a mirroring set.
- [CGConfigureDisplayMode](../cgconfiguredisplaymode%28______%29.md): Deprecated. Configures the display mode of a display.
- [CGConfigureDisplayOrigin](../cgconfiguredisplayorigin%28________%29.md): Configures the origin of a display relative to the global display coordinate space.
- [CGConfigureDisplayStereoOperation](../cgconfiguredisplaystereooperation%28________%29.md): Enables or disables stereo operation for a display, as part of a display configuration.
- [CGConfigureDisplayWithDisplayMode](../cgconfiguredisplaywithdisplaymode%28________%29.md): Configures the display mode of a display.
- [CGContextDrawPDFDocument](../cgcontextdrawpdfdocument.md): Deprecated.
