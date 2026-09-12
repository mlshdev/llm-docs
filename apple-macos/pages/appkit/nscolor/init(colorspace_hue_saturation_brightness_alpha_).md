> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(colorspace:hue:saturation:brightness:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/init(colorspace:hue:saturation:brightness:alpha:))

# init(colorSpace:hue:saturation:brightness:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Creates a color object with the specified color space, hue, saturation, brightness, and alpha channel values.

## Declaration

```swift
init(colorSpace space: NSColorSpace, hue: CGFloat, saturation: CGFloat, brightness: CGFloat, alpha: CGFloat)
```

## Parameters

- `space`: An `NSColorSpace` object representing a color space. An exception is raised if the color model of the provided color space is not RGB.
- `hue`: The hue (color) component, expressed as a floating-point value in the range 0–1.0.
- `saturation`: The color saturation component, expressed as a floating-point value in the range 0–1.0.
- `brightness`: The brightness component, expressed as a floating-point value in the range 0–1.0.
- `alpha`: The alpha (opacity), expressed as a floating-point value in the range 0 (transparent) to 1.0 (opaque).

<a id="return-value"></a>

## Return Value

The color object.

## See Also

### Creating a color using HSB components

- [init(calibratedHue:saturation:brightness:alpha:)](init%28calibratedhue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity and HSB color space components.
- [init(deviceHue:saturation:brightness:alpha:)](init%28devicehue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity value and HSB color space components.
- [init(hue:saturation:brightness:alpha:)](init%28hue_saturation_brightness_alpha_%29.md): Creates a color object with the specified hue, saturation, brightness, and alpha channel values.

# colorWithColorSpace:hue:saturation:brightness:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Creates a color object with the specified color space, hue, saturation, brightness, and alpha channel values.

## Declaration

```objectivec
+ (NSColor *) colorWithColorSpace:(NSColorSpace *) space hue:(CGFloat) hue saturation:(CGFloat) saturation brightness:(CGFloat) brightness alpha:(CGFloat) alpha;
```

## Parameters

- `space`: An `NSColorSpace` object representing a color space. An exception is raised if the color model of the provided color space is not RGB.
- `hue`: The hue (color) component, expressed as a floating-point value in the range 0–1.0.
- `saturation`: The color saturation component, expressed as a floating-point value in the range 0–1.0.
- `brightness`: The brightness component, expressed as a floating-point value in the range 0–1.0.
- `alpha`: The alpha (opacity), expressed as a floating-point value in the range 0 (transparent) to 1.0 (opaque).

<a id="return-value"></a>

## Return Value

The color object.

## See Also

### Creating a color using HSB components

- [colorWithCalibratedHue:saturation:brightness:alpha:](init%28calibratedhue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity and HSB color space components.
- [colorWithDeviceHue:saturation:brightness:alpha:](init%28devicehue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity value and HSB color space components.
- [colorWithHue:saturation:brightness:alpha:](init%28hue_saturation_brightness_alpha_%29.md): Creates a color object with the specified hue, saturation, brightness, and alpha channel values.
