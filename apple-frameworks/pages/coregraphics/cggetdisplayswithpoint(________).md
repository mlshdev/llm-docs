> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cggetdisplayswithpoint(_:_:_:_:)](https://developer.apple.com/documentation/coregraphics/cggetdisplayswithpoint(_:_:_:_:))

# CGGetDisplaysWithPoint(\_:\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

Provides a list of online displays with bounds that include the specified point.

## Declaration

```swift
func CGGetDisplaysWithPoint(_ point: CGPoint, _ maxDisplays: UInt32, _ displays: UnsafeMutablePointer<CGDirectDisplayID>?, _ matchingDisplayCount: UnsafeMutablePointer<UInt32>?) -> CGError
```

## Parameters

- `point`: The coordinates of a point in the global display coordinate space. The origin is the upper-left corner of the main display.
- `maxDisplays`: The size of the `displays` array. This value determines the maximum number of displays the list includes.
- `displays`: A pointer to storage you provide for an array of display IDs. On return, the array contains a list of displays with bounds that include the point. If you pass `NULL`, on return the display count contains the total number of displays with bounds that include the point.
- `matchingDisplayCount`: A pointer to a display count variable you provide. On return, the display count contains the actual number of displays the list includes in the `dspys` array. This value is at most `maxDisplays`.

<a id="return-value"></a>

## Return Value

A result code. To interpret the result code, see [CGError](cgerror.md).

<a id="Discussion"></a>

## Discussion

If the `displays` array is `nil`, this function ignores the `maxDisplays` parameter. If the `maxDisplays` parameter is `0`, this function ignores the `displays` array. In any case, this function fills in the `matchingDisplayCount` pointer with the number of displays that contain the specified point.

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

# CGGetDisplaysWithPoint (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

Provides a list of online displays with bounds that include the specified point.

## Declaration

```objectivec
extern CGError CGGetDisplaysWithPoint(CGPoint point, uint32_t maxDisplays, CGDirectDisplayID *displays, uint32_t *matchingDisplayCount);
```

## Parameters

- `point`: The coordinates of a point in the global display coordinate space. The origin is the upper-left corner of the main display.
- `maxDisplays`: The size of the `displays` array. This value determines the maximum number of displays the list includes.
- `displays`: A pointer to storage you provide for an array of display IDs. On return, the array contains a list of displays with bounds that include the point. If you pass `NULL`, on return the display count contains the total number of displays with bounds that include the point.
- `matchingDisplayCount`: A pointer to a display count variable you provide. On return, the display count contains the actual number of displays the list includes in the `dspys` array. This value is at most `maxDisplays`.

<a id="return-value"></a>

## Return Value

A result code. To interpret the result code, see [CGError](cgerror.md).

<a id="Discussion"></a>

## Discussion

If the `displays` array is `nil`, this function ignores the `maxDisplays` parameter. If the `maxDisplays` parameter is `0`, this function ignores the `displays` array. In any case, this function fills in the `matchingDisplayCount` pointer with the number of displays that contain the specified point.

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
