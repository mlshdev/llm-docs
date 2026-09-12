> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(red:green:blue:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/init(red:green:blue:alpha:))

# init(red:green:blue:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.9+

Creates a color object with the specified red, green, blue, and alpha channel values.

## Declaration

```swift
init(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat)
```

## Parameters

- `red`: The red channel value. If the value is outside of the range `0–1.0`, the extended sRGB color space is used.
- `green`: The green channel value. If the value is outside of the range `0–1.0`, the extended sRGB color space is used.
- `blue`: The blue channel value. If the value is outside of the range `0–1.0`, the extended sRGB color space is used.
- `alpha`: The alpha (opacity), specified as a value from `0-1.0`. Alpha values below `0` are interpreted as `0.0`, and values above `1.0` are interpreted as `1.0`.

<a id="Discussion"></a>

## Discussion

This method accepts extended color component values. If the red, green, blue, or alpha values are outside of the `0-1.0` range, the method creates a color in the extended range color space. This method is provided for easier reuse of code that uses [UIColor](https://developer.apple.com/documentation/uikit/uicolor) in iOS.

Where possible, it is preferable to specify the colorspace explicitly using the [init(srgbRed:green:blue:alpha:)](init%28srgbred_green_blue_alpha_%29-9oz51.md) or [init(genericGamma22White:alpha:)](init%28genericgamma22white_alpha_%29.md) method.

## See Also

### Creating a color using RGB components

- [init(srgbRed:green:blue:alpha:)](init%28srgbred_green_blue_alpha_%29-9oz51.md): Creates a color object from the specified components in the sRGB colorspace.
- [init(displayP3Red:green:blue:alpha:)](init%28displayp3red_green_blue_alpha_%29.md): Creates a color object from the specified components in the Display P3 color space.
- [init(calibratedRed:green:blue:alpha:)](init%28calibratedred_green_blue_alpha_%29.md): Creates a color object using the given opacity and RGB components.
- [init(deviceRed:green:blue:alpha:)](init%28devicered_green_blue_alpha_%29.md): Creates a color object using the given opacity value and RGB components.

# colorWithRed:green:blue:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.9+

Creates a color object with the specified red, green, blue, and alpha channel values.

## Declaration

```objectivec
+ (NSColor *) colorWithRed:(CGFloat) red green:(CGFloat) green blue:(CGFloat) blue alpha:(CGFloat) alpha;
```

## Parameters

- `red`: The red channel value. If the value is outside of the range `0–1.0`, the extended sRGB color space is used.
- `green`: The green channel value. If the value is outside of the range `0–1.0`, the extended sRGB color space is used.
- `blue`: The blue channel value. If the value is outside of the range `0–1.0`, the extended sRGB color space is used.
- `alpha`: The alpha (opacity), specified as a value from `0-1.0`. Alpha values below `0` are interpreted as `0.0`, and values above `1.0` are interpreted as `1.0`.

<a id="Discussion"></a>

## Discussion

This method accepts extended color component values. If the red, green, blue, or alpha values are outside of the `0-1.0` range, the method creates a color in the extended range color space. This method is provided for easier reuse of code that uses [UIColor](https://developer.apple.com/documentation/uikit/uicolor) in iOS.

Where possible, it is preferable to specify the colorspace explicitly using the [colorWithSRGBRed:green:blue:alpha:](init%28srgbred_green_blue_alpha_%29-9oz51.md) or [colorWithGenericGamma22White:alpha:](init%28genericgamma22white_alpha_%29.md) method.

## See Also

### Creating a color using RGB components

- [colorWithSRGBRed:green:blue:alpha:](init%28srgbred_green_blue_alpha_%29-9oz51.md): Creates a color object from the specified components in the sRGB colorspace.
- [colorWithDisplayP3Red:green:blue:alpha:](init%28displayp3red_green_blue_alpha_%29.md): Creates a color object from the specified components in the Display P3 color space.
- [colorWithCalibratedRed:green:blue:alpha:](init%28calibratedred_green_blue_alpha_%29.md): Creates a color object using the given opacity and RGB components.
- [colorWithDeviceRed:green:blue:alpha:](init%28devicered_green_blue_alpha_%29.md): Creates a color object using the given opacity value and RGB components.
