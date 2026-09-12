> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorgetconstantcolor](https://developer.apple.com/documentation/coregraphics/cgcolorgetconstantcolor)

# CGColorGetConstantColor

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.5+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a color object that represents a constant color.

## Declaration

```objectivec
extern CGColorRefCGColorGetConstantColor(CFStringRef colorName);
```

## Parameters

- `colorName`: A color name. You can pass any of constants in [Getting System Colors](cgcolor.md#Getting-System-Colors).

<a id="return-value"></a>

## Return Value

A color object.

<a id="Discussion"></a>

## Discussion

As this function is not a “Copy” or “Create” function, it does not necessarily return a new reference each time it’s called. As a consequence, you should not release the returned value. However, colors returned from this function can be retained and released in a properly nested fashion, just as any other Core Foundation type can.

## See Also

### Creating Colors

- [CGColorCreateCopy](cgcolor/copy%28%29.md): Creates a copy of an existing color.
- [CGColorCreateCopyWithAlpha](cgcolor/copy%28alpha_%29.md): Creates a copy of an existing color, substituting a new alpha value.
- [CGColorCreateGenericCMYK](cgcolor/init%28genericcmykcyan_magenta_yellow_black_alpha_%29.md): Creates a color in the Generic CMYK color space.
- [CGColorCreateGenericGray](cgcolor/init%28gray_alpha_%29.md): Creates a color in the Generic gray color space.
- [CGColorCreateGenericGrayGamma2_2](cgcolor/init%28genericgraygamma2_2gray_alpha_%29.md): Creates a color in the Generic gray color space with a gamma ramp of 2.2.
- [CGColorCreateGenericRGB](cgcolor/init%28red_green_blue_alpha_%29.md): Creates a color in the Generic RGB color space.
- [CGColorCreateSRGB](cgcolor/init%28srgbred_green_blue_alpha_%29.md): Creates a color in the sRGB color space.
- [CGColorCreate](cgcolor/init%28colorspace_components_%29.md): Creates a color using a list of intensity values (including alpha) and an associated color space.
- [CGColorCreateWithPattern](cgcolor/init%28patternspace_pattern_components_%29.md): Creates a color using a list of intensity values (including alpha), a pattern color space, and a pattern.
