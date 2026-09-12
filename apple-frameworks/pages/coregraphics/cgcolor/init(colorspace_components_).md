> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolor/init(colorspace:components:)](https://developer.apple.com/documentation/coregraphics/cgcolor/init(colorspace:components:))

# init(colorSpace:components:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a color using a list of intensity values (including alpha) and an associated color space.

## Declaration

```swift
init?(colorSpace space: CGColorSpace, components: UnsafePointer<CGFloat>)
```

## Parameters

- `space`: A color space for the new color. Core Graphics retains this object; upon return, you may safely release it.
- `components`: An array of intensity values describing the color. The array should contain *n*+1 values that correspond to the *n* color components in the specified color space, followed by the alpha component. Each component value should be in the range appropriate for the color space. Values outside this range will be clamped to the nearest correct value.

<a id="return-value"></a>

## Return Value

A new color. In Objective-C, you’re responsible for releasing this object using [CGColorRelease](../cgcolorrelease.md).

## See Also

### Creating Colors

- [copy()](copy%28%29.md): Creates a copy of an existing color.
- [copy(alpha:)](copy%28alpha_%29.md): Creates a copy of an existing color, substituting a new alpha value.
- [init(genericCMYKCyan:magenta:yellow:black:alpha:)](init%28genericcmykcyan_magenta_yellow_black_alpha_%29.md): Creates a color in the Generic CMYK color space.
- [init(gray:alpha:)](init%28gray_alpha_%29.md): Creates a color in the Generic gray color space.
- [init(genericGrayGamma2_2Gray:alpha:)](init%28genericgraygamma2_2gray_alpha_%29.md): Creates a color in the Generic gray color space with a gamma ramp of 2.2.
- [init(red:green:blue:alpha:)](init%28red_green_blue_alpha_%29.md): Creates a color in the Generic RGB color space.
- [init(srgbRed:green:blue:alpha:)](init%28srgbred_green_blue_alpha_%29.md): Creates a color in the sRGB color space.
- [init(patternSpace:pattern:components:)](init%28patternspace_pattern_components_%29.md): Creates a color using a list of intensity values (including alpha), a pattern color space, and a pattern.

# CGColorCreate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a color using a list of intensity values (including alpha) and an associated color space.

## Declaration

```objectivec
extern CGColorRefCGColorCreate(CGColorSpaceRef space, const CGFloat *components);
```

## Parameters

- `space`: A color space for the new color. Core Graphics retains this object; upon return, you may safely release it.
- `components`: An array of intensity values describing the color. The array should contain *n*+1 values that correspond to the *n* color components in the specified color space, followed by the alpha component. Each component value should be in the range appropriate for the color space. Values outside this range will be clamped to the nearest correct value.

<a id="return-value"></a>

## Return Value

A new color. In Objective-C, you’re responsible for releasing this object using [CGColorRelease](../cgcolorrelease.md).

## See Also

### Creating Colors

- [CGColorCreateCopy](copy%28%29.md): Creates a copy of an existing color.
- [CGColorCreateCopyWithAlpha](copy%28alpha_%29.md): Creates a copy of an existing color, substituting a new alpha value.
- [CGColorCreateGenericCMYK](init%28genericcmykcyan_magenta_yellow_black_alpha_%29.md): Creates a color in the Generic CMYK color space.
- [CGColorCreateGenericGray](init%28gray_alpha_%29.md): Creates a color in the Generic gray color space.
- [CGColorCreateGenericGrayGamma2_2](init%28genericgraygamma2_2gray_alpha_%29.md): Creates a color in the Generic gray color space with a gamma ramp of 2.2.
- [CGColorCreateGenericRGB](init%28red_green_blue_alpha_%29.md): Creates a color in the Generic RGB color space.
- [CGColorCreateSRGB](init%28srgbred_green_blue_alpha_%29.md): Creates a color in the sRGB color space.
- [CGColorCreateWithPattern](init%28patternspace_pattern_components_%29.md): Creates a color using a list of intensity values (including alpha), a pattern color space, and a pattern.
- [CGColorGetConstantColor](../cgcolorgetconstantcolor.md): Returns a color object that represents a constant color.
