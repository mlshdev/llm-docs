> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolor/copy(alpha:)](https://developer.apple.com/documentation/coregraphics/cgcolor/copy(alpha:))

# copy(alpha:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a copy of an existing color, substituting a new alpha value.

## Declaration

```swift
func copy(alpha: CGFloat) -> CGColor?
```

## Parameters

- `alpha`: A value that specifies the desired opacity of the copy. Values outside the range `[0,1]` are clamped to `0` or `1`.

<a id="return-value"></a>

## Return Value

A copy of the specified color, using the specified alpha value. In Objective-C, you’re responsible for releasing this object using [CGColorRelease](../cgcolorrelease.md).

## See Also

### Creating Colors

- [copy()](copy%28%29.md): Creates a copy of an existing color.
- [init(genericCMYKCyan:magenta:yellow:black:alpha:)](init%28genericcmykcyan_magenta_yellow_black_alpha_%29.md): Creates a color in the Generic CMYK color space.
- [init(gray:alpha:)](init%28gray_alpha_%29.md): Creates a color in the Generic gray color space.
- [init(genericGrayGamma2_2Gray:alpha:)](init%28genericgraygamma2_2gray_alpha_%29.md): Creates a color in the Generic gray color space with a gamma ramp of 2.2.
- [init(red:green:blue:alpha:)](init%28red_green_blue_alpha_%29.md): Creates a color in the Generic RGB color space.
- [init(srgbRed:green:blue:alpha:)](init%28srgbred_green_blue_alpha_%29.md): Creates a color in the sRGB color space.
- [init(colorSpace:components:)](init%28colorspace_components_%29.md): Creates a color using a list of intensity values (including alpha) and an associated color space.
- [init(patternSpace:pattern:components:)](init%28patternspace_pattern_components_%29.md): Creates a color using a list of intensity values (including alpha), a pattern color space, and a pattern.

# CGColorCreateCopyWithAlpha (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a copy of an existing color, substituting a new alpha value.

## Declaration

```objectivec
extern CGColorRefCGColorCreateCopyWithAlpha(CGColorRef color, CGFloat alpha);
```

## Parameters

- `color`: The color to copy.
- `alpha`: A value that specifies the desired opacity of the copy. Values outside the range `[0,1]` are clamped to `0` or `1`.

<a id="return-value"></a>

## Return Value

A copy of the specified color, using the specified alpha value. In Objective-C, you’re responsible for releasing this object using [CGColorRelease](../cgcolorrelease.md).

## See Also

### Creating Colors

- [CGColorCreateCopy](copy%28%29.md): Creates a copy of an existing color.
- [CGColorCreateGenericCMYK](init%28genericcmykcyan_magenta_yellow_black_alpha_%29.md): Creates a color in the Generic CMYK color space.
- [CGColorCreateGenericGray](init%28gray_alpha_%29.md): Creates a color in the Generic gray color space.
- [CGColorCreateGenericGrayGamma2_2](init%28genericgraygamma2_2gray_alpha_%29.md): Creates a color in the Generic gray color space with a gamma ramp of 2.2.
- [CGColorCreateGenericRGB](init%28red_green_blue_alpha_%29.md): Creates a color in the Generic RGB color space.
- [CGColorCreateSRGB](init%28srgbred_green_blue_alpha_%29.md): Creates a color in the sRGB color space.
- [CGColorCreate](init%28colorspace_components_%29.md): Creates a color using a list of intensity values (including alpha) and an associated color space.
- [CGColorCreateWithPattern](init%28patternspace_pattern_components_%29.md): Creates a color using a list of intensity values (including alpha), a pattern color space, and a pattern.
- [CGColorGetConstantColor](../cgcolorgetconstantcolor.md): Returns a color object that represents a constant color.
