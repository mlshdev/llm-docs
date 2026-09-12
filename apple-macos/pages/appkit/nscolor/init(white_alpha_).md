> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(white:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/init(white:alpha:))

# init(white:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.9+

Creates a color object with the specified brightness and alpha channel values.

## Declaration

```swift
init(white: CGFloat, alpha: CGFloat)
```

## Parameters

- `white`: The brightness. If the value is outside of the range `0–1.0`, the extended sRGB color space is used.
- `alpha`: The alpha (opacity), expressed as a floating-point value in the range `0` (transparent) to `1.0` (opaque). Alpha values below `0` are interpreted as `0.0`, and values above `1.0` are interpreted as `1.0`.

<a id="Discussion"></a>

## Discussion

This method accepts extended color component values. If the alpha or white values are outside of the `0-1.0` range, the method creates a color in the extended range or [extendedGenericGamma22Gray](../nscolorspace/extendedgenericgamma22gray.md) color space that is compatible with the sRGB colorspace. This method is provided for easier reuse of code that uses [UIColor](https://developer.apple.com/documentation/uikit/uicolor) in iOS.

Where possible, it is preferable to specify the colorspace explicitly using the [init(srgbRed:green:blue:alpha:)](init%28srgbred_green_blue_alpha_%29-9oz51.md) or [init(genericGamma22White:alpha:)](init%28genericgamma22white_alpha_%29.md) method.

## See Also

### Creating a color using white components

- [init(calibratedWhite:alpha:)](init%28calibratedwhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
- [init(deviceWhite:alpha:)](init%28devicewhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
- [init(genericGamma22White:alpha:)](init%28genericgamma22white_alpha_%29.md): Returns a color object with the specified white and alpha values in the GenericGamma22 colorspace.

# colorWithWhite:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.9+

Creates a color object with the specified brightness and alpha channel values.

## Declaration

```objectivec
+ (NSColor *) colorWithWhite:(CGFloat) white alpha:(CGFloat) alpha;
```

## Parameters

- `white`: The brightness. If the value is outside of the range `0–1.0`, the extended sRGB color space is used.
- `alpha`: The alpha (opacity), expressed as a floating-point value in the range `0` (transparent) to `1.0` (opaque). Alpha values below `0` are interpreted as `0.0`, and values above `1.0` are interpreted as `1.0`.

<a id="Discussion"></a>

## Discussion

This method accepts extended color component values. If the alpha or white values are outside of the `0-1.0` range, the method creates a color in the extended range or [extendedGenericGamma22GrayColorSpace](../nscolorspace/extendedgenericgamma22gray.md) color space that is compatible with the sRGB colorspace. This method is provided for easier reuse of code that uses [UIColor](https://developer.apple.com/documentation/uikit/uicolor) in iOS.

Where possible, it is preferable to specify the colorspace explicitly using the [colorWithSRGBRed:green:blue:alpha:](init%28srgbred_green_blue_alpha_%29-9oz51.md) or [colorWithGenericGamma22White:alpha:](init%28genericgamma22white_alpha_%29.md) method.

## See Also

### Creating a color using white components

- [colorWithCalibratedWhite:alpha:](init%28calibratedwhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
- [colorWithDeviceWhite:alpha:](init%28devicewhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
- [colorWithGenericGamma22White:alpha:](init%28genericgamma22white_alpha_%29.md): Returns a color object with the specified white and alpha values in the GenericGamma22 colorspace.
