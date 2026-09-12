> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgconfiguredisplayfadeeffect(_:_:_:_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgconfiguredisplayfadeeffect(_:_:_:_:_:_:))

# CGConfigureDisplayFadeEffect(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.2+

Modifies the settings of the built-in fade effect that occurs during a display configuration.

## Declaration

```swift
func CGConfigureDisplayFadeEffect(_ config: CGDisplayConfigRef?, _ fadeOutSeconds: CGDisplayFadeInterval, _ fadeInSeconds: CGDisplayFadeInterval, _ fadeRed: Float, _ fadeGreen: Float, _ fadeBlue: Float) -> CGError
```

## Parameters

- `config`: A display configuration, acquired by calling [CGBeginDisplayConfiguration(\_:)](cgbegindisplayconfiguration%28__%29.md).
- `fadeOutSeconds`: The time, in seconds, to fade from the normal display to the specified fade color. The fade out is completed before the display configuration is changed. If the interval is 0, Quartz applies the color immediately.
- `fadeInSeconds`: The time, in seconds, to return from the specified fade color to the normal display. The fade-in is run asynchronously after the display configuration is changed.
- `fadeRed`: An intensity value in the interval \[0, 1\] that represents the red component of the desired blend color.
- `fadeGreen`: An intensity value in the interval \[0, 1\] that represents the green component of the desired blend color.
- `fadeBlue`: An intensity value in the interval \[0, 1\] that represents the blue component of the desired blend color.

<a id="return-value"></a>

## Return Value

A result code. See `Core Graphics Data Types and Constants`.

<a id="Discussion"></a>

## Discussion

This function provides a way to customize the built-in fade effect that Quartz performs when displays are reconfigured. The default time settings for this fade effect are 0.3 seconds to fade out, and 0.5 seconds to fade back in. The default fade color is French Blue for a normal desktop, and black for a captured display.

Before using this function, you need to call [CGBeginDisplayConfiguration(\_:)](cgbegindisplayconfiguration%28__%29.md) to acquire the display configuration token for the desired display. No fade reservation is needed—when you call [CGCompleteDisplayConfiguration(\_:\_:)](cgcompletedisplayconfiguration%28____%29.md), Quartz reserves the fade hardware (assuming it is available) and performs the fade.

Calling this function modifies the fade behavior for a single display configuration and has no permanent effect.

## See Also

### Functions

- [CGAcquireDisplayFadeReservation(\_:\_:)](cgacquiredisplayfadereservation%28____%29.md): Reserves the fade hardware for a specified time interval.
- [CGAssociateMouseAndMouseCursorPosition(\_:)](cgassociatemouseandmousecursorposition%28__%29.md): Connects or disconnects the mouse and cursor while an application is in the foreground.
- [CGBeginDisplayConfiguration(\_:)](cgbegindisplayconfiguration%28__%29.md): Begins a new set of display configuration changes.
- [CGCancelDisplayConfiguration(\_:)](cgcanceldisplayconfiguration%28__%29.md): Cancels a set of display configuration changes.
- [CGCaptureAllDisplays()](cgcapturealldisplays%28%29.md): Obtains exclusive use of all active displays, preventing other applications and system services from using the display or changing its configuration.
- [CGCaptureAllDisplaysWithOptions(\_:)](cgcapturealldisplayswithoptions%28__%29.md): Captures all attached displays, using the specified options.
- [CGCompleteDisplayConfiguration(\_:\_:)](cgcompletedisplayconfiguration%28____%29.md): Completes a set of display configuration changes.
- [CGConfigureDisplayMirrorOfDisplay(\_:\_:\_:)](cgconfiguredisplaymirrorofdisplay%28______%29.md): Changes the configuration of a mirroring set.
- [CGConfigureDisplayMode(\_:\_:\_:)](cgconfiguredisplaymode%28______%29.md): Deprecated. Configures the display mode of a display.
- [CGConfigureDisplayOrigin(\_:\_:\_:\_:)](cgconfiguredisplayorigin%28________%29.md): Configures the origin of a display relative to the global display coordinate space.
- [CGConfigureDisplayStereoOperation(\_:\_:\_:\_:)](cgconfiguredisplaystereooperation%28________%29.md): Enables or disables stereo operation for a display, as part of a display configuration.
- [CGConfigureDisplayWithDisplayMode(\_:\_:\_:\_:)](cgconfiguredisplaywithdisplaymode%28________%29.md): Configures the display mode of a display.
- [CGCursorIsDrawnInFramebuffer()](cgcursorisdrawninframebuffer%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is drawn in framebuffer memory.
- [CGCursorIsVisible()](cgcursorisvisible%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is visible.
- [CGDirectDisplayCopyCurrentMetalDevice(\_:)](cgdirectdisplaycopycurrentmetaldevice%28__%29.md): Returns the GPU device instance that’s currently driving a display.

# CGConfigureDisplayFadeEffect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.2+

Modifies the settings of the built-in fade effect that occurs during a display configuration.

## Declaration

```objectivec
extern CGError CGConfigureDisplayFadeEffect(CGDisplayConfigRef config, CGDisplayFadeInterval fadeOutSeconds, CGDisplayFadeInterval fadeInSeconds, float fadeRed, float fadeGreen, float fadeBlue);
```

## Parameters

- `config`: A display configuration, acquired by calling [CGBeginDisplayConfiguration](cgbegindisplayconfiguration%28__%29.md).
- `fadeOutSeconds`: The time, in seconds, to fade from the normal display to the specified fade color. The fade out is completed before the display configuration is changed. If the interval is 0, Quartz applies the color immediately.
- `fadeInSeconds`: The time, in seconds, to return from the specified fade color to the normal display. The fade-in is run asynchronously after the display configuration is changed.
- `fadeRed`: An intensity value in the interval \[0, 1\] that represents the red component of the desired blend color.
- `fadeGreen`: An intensity value in the interval \[0, 1\] that represents the green component of the desired blend color.
- `fadeBlue`: An intensity value in the interval \[0, 1\] that represents the blue component of the desired blend color.

<a id="return-value"></a>

## Return Value

A result code. See `Core Graphics Data Types and Constants`.

<a id="Discussion"></a>

## Discussion

This function provides a way to customize the built-in fade effect that Quartz performs when displays are reconfigured. The default time settings for this fade effect are 0.3 seconds to fade out, and 0.5 seconds to fade back in. The default fade color is French Blue for a normal desktop, and black for a captured display.

Before using this function, you need to call [CGBeginDisplayConfiguration](cgbegindisplayconfiguration%28__%29.md) to acquire the display configuration token for the desired display. No fade reservation is needed—when you call [CGCompleteDisplayConfiguration](cgcompletedisplayconfiguration%28____%29.md), Quartz reserves the fade hardware (assuming it is available) and performs the fade.

Calling this function modifies the fade behavior for a single display configuration and has no permanent effect.

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
- [CGConfigureDisplayMirrorOfDisplay](cgconfiguredisplaymirrorofdisplay%28______%29.md): Changes the configuration of a mirroring set.
- [CGConfigureDisplayMode](cgconfiguredisplaymode%28______%29.md): Deprecated. Configures the display mode of a display.
- [CGConfigureDisplayOrigin](cgconfiguredisplayorigin%28________%29.md): Configures the origin of a display relative to the global display coordinate space.
- [CGConfigureDisplayStereoOperation](cgconfiguredisplaystereooperation%28________%29.md): Enables or disables stereo operation for a display, as part of a display configuration.
- [CGConfigureDisplayWithDisplayMode](cgconfiguredisplaywithdisplaymode%28________%29.md): Configures the display mode of a display.
- [CGContextDrawPDFDocument](cgcontextdrawpdfdocument.md): Deprecated.
- [CGCursorIsDrawnInFramebuffer](cgcursorisdrawninframebuffer%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is drawn in framebuffer memory.
