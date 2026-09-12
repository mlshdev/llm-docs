> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(hue:saturation:brightness:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/init(hue:saturation:brightness:alpha:))

# init(hue:saturation:brightness:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.9+

Creates a color object with the specified hue, saturation, brightness, and alpha channel values.

## Declaration

```swift
init(hue: CGFloat, saturation: CGFloat, brightness: CGFloat, alpha: CGFloat)
```

## Parameters

- `hue`: The hue (color) component. If the value is outside of the range `0–1.0`, the extended range color space is used.
- `saturation`: The color saturation component. If the value is outside of the range `0–1.0`, the extended range color space is used.
- `brightness`: The brightness component. If the value is outside of the range `0–1.0`, the extended range color space is used.
- `alpha`: The alpha (opacity), specified as a value from `0-1.0`. Alpha values below `0` are interpreted as `0.0`, and values above `1.0` are interpreted as `1.0`.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

This method accepts extended color component values. If the component values are outside of the `0-1.0` range, the method creates a color in the extended range color space. This method is provided for easier reuse of code that uses [UIColor](https://developer.apple.com/documentation/uikit/uicolor) in iOS.

Where possible, it is preferable to specify the colorspace explicitly using the [init(srgbRed:green:blue:alpha:)](init%28srgbred_green_blue_alpha_%29-9oz51.md) or [init(genericGamma22White:alpha:)](init%28genericgamma22white_alpha_%29.md) method.

## See Also

### Creating a color using HSB components

- [init(calibratedHue:saturation:brightness:alpha:)](init%28calibratedhue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity and HSB color space components.
- [init(deviceHue:saturation:brightness:alpha:)](init%28devicehue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity value and HSB color space components.
- [init(colorSpace:hue:saturation:brightness:alpha:)](init%28colorspace_hue_saturation_brightness_alpha_%29.md): Creates a color object with the specified color space, hue, saturation, brightness, and alpha channel values.

# colorWithHue:saturation:brightness:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.9+

Creates a color object with the specified hue, saturation, brightness, and alpha channel values.

## Declaration

```objectivec
+ (NSColor *) colorWithHue:(CGFloat) hue saturation:(CGFloat) saturation brightness:(CGFloat) brightness alpha:(CGFloat) alpha;
```

## Parameters

- `hue`: The hue (color) component. If the value is outside of the range `0–1.0`, the extended range color space is used.
- `saturation`: The color saturation component. If the value is outside of the range `0–1.0`, the extended range color space is used.
- `brightness`: The brightness component. If the value is outside of the range `0–1.0`, the extended range color space is used.
- `alpha`: The alpha (opacity), specified as a value from `0-1.0`. Alpha values below `0` are interpreted as `0.0`, and values above `1.0` are interpreted as `1.0`.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

This method accepts extended color component values. If the component values are outside of the `0-1.0` range, the method creates a color in the extended range color space. This method is provided for easier reuse of code that uses [UIColor](https://developer.apple.com/documentation/uikit/uicolor) in iOS.

Where possible, it is preferable to specify the colorspace explicitly using the [colorWithSRGBRed:green:blue:alpha:](init%28srgbred_green_blue_alpha_%29-9oz51.md) or [colorWithGenericGamma22White:alpha:](init%28genericgamma22white_alpha_%29.md) method.

## See Also

### Creating a color using HSB components

- [colorWithCalibratedHue:saturation:brightness:alpha:](init%28calibratedhue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity and HSB color space components.
- [colorWithDeviceHue:saturation:brightness:alpha:](init%28devicehue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity value and HSB color space components.
- [colorWithColorSpace:hue:saturation:brightness:alpha:](init%28colorspace_hue_saturation_brightness_alpha_%29.md): Creates a color object with the specified color space, hue, saturation, brightness, and alpha channel values.
