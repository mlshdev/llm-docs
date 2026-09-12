> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolor/init(red:green:blue:alpha:colorspace:)-5mvff](https://developer.apple.com/documentation/coreimage/cicolor/init(red:green:blue:alpha:colorspace:)-5mvff)

# init(red:green:blue:alpha:colorSpace:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

Create a Core Image color object with the specified red, green, blue, and alpha component values as measured in the specified color space.

## Declaration

```swift
convenience init?(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat, colorSpace: CGColorSpace)
```

## Parameters

- `red`: The color’s unpremultiplied red component value.
- `green`: The color’s unpremultiplied green component value.
- `blue`: The color’s unpremultiplied blue component value.
- `alpha`: The color’s alpha (opacity) value between 0 and 1.
- `colorSpace`: The color’s `CGColorSpace` which must have `kCGColorSpaceModelRGB`.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIColor](../cicolor.md) instance.

<a id="discussion"></a>

## Discussion

This will return `null` if the `CGColorSpace` is not `kCGColorSpaceModelRGB`.

The RGB values can be outside the `0...1` range if the `CGColorSpace` is unclamped.

## See Also

### Creating Color Objects

- [init(red:green:blue:)](init%28red_green_blue_%29.md): Create a Core Image color object in the sRGB color space with the specified red, green, and blue component values.
- [init(string:)](init%28string_%29.md): Create a Core Image color object in the sRGB color space using a string containing the RGBA color component values.
- [init(red:green:blue:colorSpace:)](init%28red_green_blue_colorspace_%29-2og6y.md): Create a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.

# colorWithRed:green:blue:alpha:colorSpace: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Create a Core Image color object with the specified red, green, blue, and alpha component values as measured in the specified color space.

## Declaration

```objectivec
+ (instancetype) colorWithRed:(CGFloat) red green:(CGFloat) green blue:(CGFloat) blue alpha:(CGFloat) alpha colorSpace:(CGColorSpaceRef) colorSpace;
```

## Parameters

- `red`: The color’s unpremultiplied red component value.
- `green`: The color’s unpremultiplied green component value.
- `blue`: The color’s unpremultiplied blue component value.
- `alpha`: The color’s alpha (opacity) value between 0 and 1.
- `colorSpace`: The color’s `CGColorSpace` which must have `kCGColorSpaceModelRGB`.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIColor](../cicolor.md) instance.

<a id="discussion"></a>

## Discussion

This will return `null` if the `CGColorSpace` is not `kCGColorSpaceModelRGB`.

The RGB values can be outside the `0...1` range if the `CGColorSpace` is unclamped.

## See Also

### Creating Color Objects

- [colorWithCGColor:](colorwithcgcolor_.md): Create a Core Image color object with a Core Graphics color object.
- [colorWithRed:green:blue:](init%28red_green_blue_%29.md): Create a Core Image color object in the sRGB color space with the specified red, green, and blue component values.
- [colorWithRed:green:blue:alpha:](colorwithred_green_blue_alpha_.md): Create a Core Image color object in the sRGB color space with the specified red, green, blue, and alpha component values.
- [colorWithString:](init%28string_%29.md): Create a Core Image color object in the sRGB color space using a string containing the RGBA color component values.
- [colorWithRed:green:blue:colorSpace:](init%28red_green_blue_colorspace_%29-2og6y.md): Create a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.
