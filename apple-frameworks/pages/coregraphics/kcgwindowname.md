> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/kcgwindowname](https://developer.apple.com/documentation/coregraphics/kcgwindowname)

# kCGWindowName (Swift)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
let kCGWindowName: CFString
```

<a id="Discussion"></a>

## Discussion

The key that identifies the name of the window, as configured in Quartz. The value for this key is a [CFString](../corefoundation/cfstring.md) type. (Note that few applications set the Quartz window name.)

## See Also

### Constants

- [conversionBlackPointCompensation](cgcolor/conversionblackpointcompensation.md): An option for whether to apply black point compensation when converting between color profiles.
- [kCGDisplayBitsPerPixel](kcgdisplaybitsperpixel.md): Specifies a CFNumber integer value that represents the number of bits in a pixel.
- [kCGDisplayBitsPerSample](kcgdisplaybitspersample.md): Specifies a CFNumber integer value that represents the number of bits in an individual sample (for example, a color value in an RGB pixel).
- [kCGDisplayBlendNormal](kcgdisplayblendnormal.md): The blend color is not applied at the start or end of a fade operation.
- [kCGDisplayBlendSolidColor](kcgdisplayblendsolidcolor.md): The user sees only the blend color at the start or end of a fade operation.
- [kCGDisplayBytesPerRow](kcgdisplaybytesperrow.md): Specifies a CFNumber integer value that represents the number of bytes in a row on the display.
- [kCGDisplayFadeReservationInvalidToken](kcgdisplayfadereservationinvalidtoken.md)
- [kCGDisplayHeight](kcgdisplayheight.md): Specifies a CFNumber integer value that represents the height of the display in pixels.
- [kCGDisplayIOFlags](kcgdisplayioflags.md): Specifies a CFNumber integer value that contains the I/O Kit display mode flags. For more information, see the header file `IOKit/IOGraphicsTypes.h`.
- [kCGDisplayMode](kcgdisplaymode.md): Specifies a `CFNumber` integer value that represents the I/O Kit display mode number.
- [kCGDisplayModeIsInterlaced](kcgdisplaymodeisinterlaced.md): Specifies a CFBoolean value indicating that the I/O Kit interlace mode flag is set.
- [kCGDisplayModeIsSafeForHardware](kcgdisplaymodeissafeforhardware.md): Deprecated. Specifies a CFBoolean value indicating that the display mode doesn’t need a confirmation dialog to be set.
- [kCGDisplayModeIsStretched](kcgdisplaymodeisstretched.md): Specifies a CFBoolean value indicating that the I/O Kit stretched mode flag is set.
- [kCGDisplayModeIsTelevisionOutput](kcgdisplaymodeistelevisionoutput.md): Specifies a CFBoolean value indicating that the I/O Kit television output mode flag is set.
- [kCGDisplayModeUsableForDesktopGUI](kcgdisplaymodeusablefordesktopgui.md): Specifies a CFBoolean value that indicates whether the display is suitable for use with the macOS graphical user interface. The criteria include factors such as sufficient width and height and adequate pixel depth.

# kCGWindowName (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
extern CFStringRef const kCGWindowName;
```

<a id="Discussion"></a>

## Discussion

The key that identifies the name of the window, as configured in Quartz. The value for this key is a [CFStringRef](../corefoundation/cfstring.md) type. (Note that few applications set the Quartz window name.)

## See Also

### Constants

- [kCGColorConversionBlackPointCompensation](cgcolor/conversionblackpointcompensation.md): An option for whether to apply black point compensation when converting between color profiles.
- [kCGDisplayBitsPerPixel](kcgdisplaybitsperpixel.md): Specifies a CFNumber integer value that represents the number of bits in a pixel.
- [kCGDisplayBitsPerSample](kcgdisplaybitspersample.md): Specifies a CFNumber integer value that represents the number of bits in an individual sample (for example, a color value in an RGB pixel).
- [kCGDisplayBlendNormal](kcgdisplayblendnormal.md): The blend color is not applied at the start or end of a fade operation.
- [kCGDisplayBlendSolidColor](kcgdisplayblendsolidcolor.md): The user sees only the blend color at the start or end of a fade operation.
- [kCGDisplayBytesPerRow](kcgdisplaybytesperrow.md): Specifies a CFNumber integer value that represents the number of bytes in a row on the display.
- [kCGDisplayFadeReservationInvalidToken](kcgdisplayfadereservationinvalidtoken.md)
- [kCGDisplayHeight](kcgdisplayheight.md): Specifies a CFNumber integer value that represents the height of the display in pixels.
- [kCGDisplayIOFlags](kcgdisplayioflags.md): Specifies a CFNumber integer value that contains the I/O Kit display mode flags. For more information, see the header file `IOKit/IOGraphicsTypes.h`.
- [kCGDisplayMode](kcgdisplaymode.md): Specifies a `CFNumber` integer value that represents the I/O Kit display mode number.
- [kCGDisplayModeIsInterlaced](kcgdisplaymodeisinterlaced.md): Specifies a CFBoolean value indicating that the I/O Kit interlace mode flag is set.
- [kCGDisplayModeIsSafeForHardware](kcgdisplaymodeissafeforhardware.md): Deprecated. Specifies a CFBoolean value indicating that the display mode doesn’t need a confirmation dialog to be set.
- [kCGDisplayModeIsStretched](kcgdisplaymodeisstretched.md): Specifies a CFBoolean value indicating that the I/O Kit stretched mode flag is set.
- [kCGDisplayModeIsTelevisionOutput](kcgdisplaymodeistelevisionoutput.md): Specifies a CFBoolean value indicating that the I/O Kit television output mode flag is set.
- [kCGDisplayModeUsableForDesktopGUI](kcgdisplaymodeusablefordesktopgui.md): Specifies a CFBoolean value that indicates whether the display is suitable for use with the macOS graphical user interface. The criteria include factors such as sufficient width and height and adequate pixel depth.
