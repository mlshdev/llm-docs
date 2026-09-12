> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgsetlocaleventsfilterduringsuppressionstate(_:_:)](https://developer.apple.com/documentation/coregraphics/cgsetlocaleventsfilterduringsuppressionstate(_:_:))

# CGSetLocalEventsFilterDuringSuppressionState(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

Filters local hardware events from the keyboard and mouse during the short interval after a synthetic event is posted.

> No longer supported

## Declaration

```swift
func CGSetLocalEventsFilterDuringSuppressionState(_ filter: CGEventFilterMask, _ state: CGEventSuppressionState) -> CGError
```

## Parameters

- `filter`: The class of local hardware events to enable after a synthetic event is posted. Pass one of the constants listed in [CGEventFilterMask](cgeventfiltermask.md).
- `state`: The type of interval during which the filter is applied. Pass one of the constants listed in [CGEventSuppressionState](cgeventsuppressionstate.md).

<a id="return-value"></a>

## Return Value

A result code. See the result codes described in [Quartz Display Services](quartz-display-services.md).

<a id="Discussion"></a>

## Discussion

By default, the system suppresses local hardware events from the keyboard and mouse during a short interval after a synthetic event is posted and during a synthetic mouse drag (mouse movement with the left or only mouse button down).

Some applications may want to enable events from some of the local hardware. For example, if you post mouse events only, you may wish to permit local keyboard hardware events to pass through.

This function lets you specify a state (event suppression interval or mouse drag), and a mask of event categories to be passed through. The new filter state takes effect with the next synthetic event you post.

This function is not recommended for general use because of undocumented special cases and undesirable side effects. The recommended replacement for this function is [setLocalEventsFilterDuringSuppressionState(\_:state:)](cgeventsource/setlocaleventsfilterduringsuppressionstate%28__state_%29.md), which allows the filter behavior to be associated only with events created from a specific event source.

## See Also

### Functions

- [CGAcquireDisplayFadeReservation(\_:\_:)](cgacquiredisplayfadereservation%28____%29.md): Reserves the fade hardware for a specified time interval.
- [CGAssociateMouseAndMouseCursorPosition(\_:)](cgassociatemouseandmousecursorposition%28__%29.md): Connects or disconnects the mouse and cursor while an application is in the foreground.
- [CGBeginDisplayConfiguration(\_:)](cgbegindisplayconfiguration%28__%29.md): Begins a new set of display configuration changes.
- [CGCancelDisplayConfiguration(\_:)](cgcanceldisplayconfiguration%28__%29.md): Cancels a set of display configuration changes.
- [CGCaptureAllDisplays()](cgcapturealldisplays%28%29.md): Obtains exclusive use of all active displays, preventing other applications and system services from using the display or changing its configuration.
- [CGCaptureAllDisplaysWithOptions(\_:)](cgcapturealldisplayswithoptions%28__%29.md): Captures all attached displays, using the specified options.
- [CGCompleteDisplayConfiguration(\_:\_:)](cgcompletedisplayconfiguration%28____%29.md): Completes a set of display configuration changes.
- [CGConfigureDisplayFadeEffect(\_:\_:\_:\_:\_:\_:)](cgconfiguredisplayfadeeffect%28____________%29.md): Modifies the settings of the built-in fade effect that occurs during a display configuration.
- [CGConfigureDisplayMirrorOfDisplay(\_:\_:\_:)](cgconfiguredisplaymirrorofdisplay%28______%29.md): Changes the configuration of a mirroring set.
- [CGConfigureDisplayMode(\_:\_:\_:)](cgconfiguredisplaymode%28______%29.md): Deprecated. Configures the display mode of a display.
- [CGConfigureDisplayOrigin(\_:\_:\_:\_:)](cgconfiguredisplayorigin%28________%29.md): Configures the origin of a display relative to the global display coordinate space.
- [CGConfigureDisplayStereoOperation(\_:\_:\_:\_:)](cgconfiguredisplaystereooperation%28________%29.md): Enables or disables stereo operation for a display, as part of a display configuration.
- [CGConfigureDisplayWithDisplayMode(\_:\_:\_:\_:)](cgconfiguredisplaywithdisplaymode%28________%29.md): Configures the display mode of a display.
- [CGCursorIsDrawnInFramebuffer()](cgcursorisdrawninframebuffer%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is drawn in framebuffer memory.
- [CGCursorIsVisible()](cgcursorisvisible%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is visible.

# CGSetLocalEventsFilterDuringSuppressionState (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.1+ (deprecated in 10.6)

Filters local hardware events from the keyboard and mouse during the short interval after a synthetic event is posted.

> No longer supported

## Declaration

```objectivec
extern CGError CGSetLocalEventsFilterDuringSuppressionState(CGEventFilterMask filter, CGEventSuppressionState state);
```

## Parameters

- `filter`: The class of local hardware events to enable after a synthetic event is posted. Pass one of the constants listed in [CGEventFilterMask](cgeventfiltermask.md).
- `state`: The type of interval during which the filter is applied. Pass one of the constants listed in [CGEventSuppressionState](cgeventsuppressionstate.md).

<a id="return-value"></a>

## Return Value

A result code. See the result codes described in [Quartz Display Services](quartz-display-services.md).

<a id="Discussion"></a>

## Discussion

By default, the system suppresses local hardware events from the keyboard and mouse during a short interval after a synthetic event is posted and during a synthetic mouse drag (mouse movement with the left or only mouse button down).

Some applications may want to enable events from some of the local hardware. For example, if you post mouse events only, you may wish to permit local keyboard hardware events to pass through.

This function lets you specify a state (event suppression interval or mouse drag), and a mask of event categories to be passed through. The new filter state takes effect with the next synthetic event you post.

This function is not recommended for general use because of undocumented special cases and undesirable side effects. The recommended replacement for this function is [CGEventSourceSetLocalEventsFilterDuringSuppressionState](cgeventsource/setlocaleventsfilterduringsuppressionstate%28__state_%29.md), which allows the filter behavior to be associated only with events created from a specific event source.

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
