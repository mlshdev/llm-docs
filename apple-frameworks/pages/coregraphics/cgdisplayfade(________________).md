> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdisplayfade(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgdisplayfade(_:_:_:_:_:_:_:_:))

# CGDisplayFade(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.2+

Performs a single fade operation.

## Declaration

```swift
func CGDisplayFade(_ token: CGDisplayFadeReservationToken, _ duration: CGDisplayFadeInterval, _ startBlend: CGDisplayBlendFraction, _ endBlend: CGDisplayBlendFraction, _ redBlend: Float, _ greenBlend: Float, _ blueBlend: Float, _ synchronous: boolean_t) -> CGError
```

## Parameters

- `token`: A reservation token for the fade hardware you acquire by calling [CGAcquireDisplayFadeReservation(\_:\_:)](cgacquiredisplayfadereservation%28____%29.md).
- `duration`: The desired number of seconds for the fade operation. You should use a value in the interval `[0, kCGMaxDisplayReservationInterval`\]. If the value is `0`, Quartz applies the ending blend color immediately.
- `startBlend`: An intensity value in the interval `[0, 1]` that specifies the alpha component of the desired blend color at the beginning of the fade operation. For more information, see [Display Fade Blend Fractions](display-fade-blend-fractions.md).
- `endBlend`: An intensity value in the interval `[0, 1]` that specifies the alpha component of the desired blend color at the end of the fade operation. For more information, see [Display Fade Blend Fractions](display-fade-blend-fractions.md).
- `redBlend`: An intensity value in the interval `[0, 1]` that specifies the red component of the desired blend color.
- `greenBlend`: An intensity value in the interval `[0, 1]` that specifies the green component of the desired blend color.
- `blueBlend`: An intensity value in the interval `[0, 1]` that specifies the blue component of the desired blend color.
- `synchronous`: Pass `true` if you want the fade operation to be synchronous; otherwise, pass `false`. If a fade operation is synchronous, the function doesn’t return until the operation is complete.

<a id="return-value"></a>

## Return Value

A result code. To interpret the result code, see [CGError](cgerror.md).

<a id="Discussion"></a>

## Discussion

Over the fade operation time interval, Quartz interpolates a blending coefficient between the starting and ending values given, applying a nonlinear (sine-based) bias term. Using this coefficient, Quartz blends the video output with the specified color.

The following example shows how to perform a 2-second synchronous fade-out to black:

```objc
CGDisplayFade (
    myToken,
    2.0,                        // 2 seconds
    kCGDisplayBlendNormal,      // starting state
    kCGDisplayBlendSolidColor,  // ending state
    0.0, 0.0, 0.0,              // black
    true                        // wait for completion
);
```

To perform a 2-second asynchronous fade-in from black:

```objc
CGDisplayFade (
    myToken,
    2.0,                        // 2 seconds
    kCGDisplayBlendSolidColor,  // starting state
    kCGDisplayBlendNormal,      // ending state
    0.0, 0.0, 0.0,              // black
    false                       // don't wait for completion
);
```

If you specify an asynchronous fade operation, it’s safe to call [CGReleaseDisplayFadeReservation(\_:)](cgreleasedisplayfadereservation%28__%29.md) immediately after this function returns.

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

# CGDisplayFade (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.2+

Performs a single fade operation.

## Declaration

```objectivec
extern CGError CGDisplayFade(CGDisplayFadeReservationToken token, CGDisplayFadeInterval duration, CGDisplayBlendFraction startBlend, CGDisplayBlendFraction endBlend, float redBlend, float greenBlend, float blueBlend, boolean_t synchronous);
```

## Parameters

- `token`: A reservation token for the fade hardware you acquire by calling [CGAcquireDisplayFadeReservation](cgacquiredisplayfadereservation%28____%29.md).
- `duration`: The desired number of seconds for the fade operation. You should use a value in the interval `[0, kCGMaxDisplayReservationInterval`\]. If the value is `0`, Quartz applies the ending blend color immediately.
- `startBlend`: An intensity value in the interval `[0, 1]` that specifies the alpha component of the desired blend color at the beginning of the fade operation. For more information, see [Display Fade Blend Fractions](display-fade-blend-fractions.md).
- `endBlend`: An intensity value in the interval `[0, 1]` that specifies the alpha component of the desired blend color at the end of the fade operation. For more information, see [Display Fade Blend Fractions](display-fade-blend-fractions.md).
- `redBlend`: An intensity value in the interval `[0, 1]` that specifies the red component of the desired blend color.
- `greenBlend`: An intensity value in the interval `[0, 1]` that specifies the green component of the desired blend color.
- `blueBlend`: An intensity value in the interval `[0, 1]` that specifies the blue component of the desired blend color.
- `synchronous`: Pass `true` if you want the fade operation to be synchronous; otherwise, pass `false`. If a fade operation is synchronous, the function doesn’t return until the operation is complete.

<a id="return-value"></a>

## Return Value

A result code. To interpret the result code, see [CGError](cgerror.md).

<a id="Discussion"></a>

## Discussion

Over the fade operation time interval, Quartz interpolates a blending coefficient between the starting and ending values given, applying a nonlinear (sine-based) bias term. Using this coefficient, Quartz blends the video output with the specified color.

The following example shows how to perform a 2-second synchronous fade-out to black:

```objc
CGDisplayFade (
    myToken,
    2.0,                        // 2 seconds
    kCGDisplayBlendNormal,      // starting state
    kCGDisplayBlendSolidColor,  // ending state
    0.0, 0.0, 0.0,              // black
    true                        // wait for completion
);
```

To perform a 2-second asynchronous fade-in from black:

```objc
CGDisplayFade (
    myToken,
    2.0,                        // 2 seconds
    kCGDisplayBlendSolidColor,  // starting state
    kCGDisplayBlendNormal,      // ending state
    0.0, 0.0, 0.0,              // black
    false                       // don't wait for completion
);
```

If you specify an asynchronous fade operation, it’s safe to call [CGReleaseDisplayFadeReservation](cgreleasedisplayfadereservation%28__%29.md) immediately after this function returns.

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
