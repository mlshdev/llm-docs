> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(devicehue:saturation:brightness:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/init(devicehue:saturation:brightness:alpha:))

# init(deviceHue:saturation:brightness:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a color object using the given opacity value and HSB color space components.

## Declaration

```swift
init(deviceHue hue: CGFloat, saturation: CGFloat, brightness: CGFloat, alpha: CGFloat)
```

## Parameters

- `hue`: The hue component of the color object.
- `saturation`: The saturation component of the color object.
- `brightness`: The brightness component of the color object.
- `alpha`: The opacity value of the color object.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

Values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

## See Also

### Related Documentation

- [getHue(\_:saturation:brightness:alpha:)](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [init(deviceRed:green:blue:alpha:)](init%28devicered_green_blue_alpha_%29.md): Creates a color object using the given opacity value and RGB components.

### Creating a color using HSB components

- [init(calibratedHue:saturation:brightness:alpha:)](init%28calibratedhue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity and HSB color space components.
- [init(hue:saturation:brightness:alpha:)](init%28hue_saturation_brightness_alpha_%29.md): Creates a color object with the specified hue, saturation, brightness, and alpha channel values.
- [init(colorSpace:hue:saturation:brightness:alpha:)](init%28colorspace_hue_saturation_brightness_alpha_%29.md): Creates a color object with the specified color space, hue, saturation, brightness, and alpha channel values.

# colorWithDeviceHue:saturation:brightness:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates a color object using the given opacity value and HSB color space components.

## Declaration

```objectivec
+ (NSColor *) colorWithDeviceHue:(CGFloat) hue saturation:(CGFloat) saturation brightness:(CGFloat) brightness alpha:(CGFloat) alpha;
```

## Parameters

- `hue`: The hue component of the color object.
- `saturation`: The saturation component of the color object.
- `brightness`: The brightness component of the color object.
- `alpha`: The opacity value of the color object.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

Values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

## See Also

### Related Documentation

- [getHue:saturation:brightness:alpha:](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [colorWithDeviceRed:green:blue:alpha:](init%28devicered_green_blue_alpha_%29.md): Creates a color object using the given opacity value and RGB components.

### Creating a color using HSB components

- [colorWithCalibratedHue:saturation:brightness:alpha:](init%28calibratedhue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity and HSB color space components.
- [colorWithHue:saturation:brightness:alpha:](init%28hue_saturation_brightness_alpha_%29.md): Creates a color object with the specified hue, saturation, brightness, and alpha channel values.
- [colorWithColorSpace:hue:saturation:brightness:alpha:](init%28colorspace_hue_saturation_brightness_alpha_%29.md): Creates a color object with the specified color space, hue, saturation, brightness, and alpha channel values.
