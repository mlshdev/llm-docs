> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolor/init(gray:alpha:)](https://developer.apple.com/documentation/coregraphics/cgcolor/init(gray:alpha:))

# init(gray:alpha:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a color in the Generic gray color space.

## Declaration

```swift
init(gray: CGFloat, alpha: CGFloat)
```

## Parameters

- `gray`: A grayscale value (`0.0` \- `1.0`).
- `alpha`: An alpha value (`0.0` \- `1.0`).

<a id="return-value"></a>

## Return Value

A color object.

## See Also

### Creating Colors

- [copy()](copy%28%29.md): Creates a copy of an existing color.
- [copy(alpha:)](copy%28alpha_%29.md): Creates a copy of an existing color, substituting a new alpha value.
- [init(genericCMYKCyan:magenta:yellow:black:alpha:)](init%28genericcmykcyan_magenta_yellow_black_alpha_%29.md): Creates a color in the Generic CMYK color space.
- [init(genericGrayGamma2_2Gray:alpha:)](init%28genericgraygamma2_2gray_alpha_%29.md): Creates a color in the Generic gray color space with a gamma ramp of 2.2.
- [init(red:green:blue:alpha:)](init%28red_green_blue_alpha_%29.md): Creates a color in the Generic RGB color space.
- [init(srgbRed:green:blue:alpha:)](init%28srgbred_green_blue_alpha_%29.md): Creates a color in the sRGB color space.
- [init(colorSpace:components:)](init%28colorspace_components_%29.md): Creates a color using a list of intensity values (including alpha) and an associated color space.
- [init(patternSpace:pattern:components:)](init%28patternspace_pattern_components_%29.md): Creates a color using a list of intensity values (including alpha), a pattern color space, and a pattern.

# CGColorCreateGenericGray (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a color in the Generic gray color space.

## Declaration

```objectivec
extern CGColorRefCGColorCreateGenericGray(CGFloat gray, CGFloat alpha);
```

## Parameters

- `gray`: A grayscale value (`0.0` \- `1.0`).
- `alpha`: An alpha value (`0.0` \- `1.0`).

<a id="return-value"></a>

## Return Value

A color object.

## See Also

### Creating Colors

- [CGColorCreateCopy](copy%28%29.md): Creates a copy of an existing color.
- [CGColorCreateCopyWithAlpha](copy%28alpha_%29.md): Creates a copy of an existing color, substituting a new alpha value.
- [CGColorCreateGenericCMYK](init%28genericcmykcyan_magenta_yellow_black_alpha_%29.md): Creates a color in the Generic CMYK color space.
- [CGColorCreateGenericGrayGamma2_2](init%28genericgraygamma2_2gray_alpha_%29.md): Creates a color in the Generic gray color space with a gamma ramp of 2.2.
- [CGColorCreateGenericRGB](init%28red_green_blue_alpha_%29.md): Creates a color in the Generic RGB color space.
- [CGColorCreateSRGB](init%28srgbred_green_blue_alpha_%29.md): Creates a color in the sRGB color space.
- [CGColorCreate](init%28colorspace_components_%29.md): Creates a color using a list of intensity values (including alpha) and an associated color space.
- [CGColorCreateWithPattern](init%28patternspace_pattern_components_%29.md): Creates a color using a list of intensity values (including alpha), a pattern color space, and a pattern.
- [CGColorGetConstantColor](../cgcolorgetconstantcolor.md): Returns a color object that represents a constant color.
