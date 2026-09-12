> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(devicered:green:blue:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/init(devicered:green:blue:alpha:))

# init(deviceRed:green:blue:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a color object using the given opacity value and RGB components.

## Declaration

```swift
init(deviceRed red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat)
```

## Parameters

- `red`: The red component of the color object.
- `green`: The green component of the color object.
- `blue`: The blue component of the color object.
- `alpha`: The opacity value of the color object.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

Values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

## See Also

### Related Documentation

- [getRed(\_:green:blue:alpha:)](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [init(deviceHue:saturation:brightness:alpha:)](init%28devicehue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity value and HSB color space components.

### Creating a color using RGB components

- [init(srgbRed:green:blue:alpha:)](init%28srgbred_green_blue_alpha_%29-9oz51.md): Creates a color object from the specified components in the sRGB colorspace.
- [init(displayP3Red:green:blue:alpha:)](init%28displayp3red_green_blue_alpha_%29.md): Creates a color object from the specified components in the Display P3 color space.
- [init(red:green:blue:alpha:)](init%28red_green_blue_alpha_%29.md): Creates a color object with the specified red, green, blue, and alpha channel values.
- [init(calibratedRed:green:blue:alpha:)](init%28calibratedred_green_blue_alpha_%29.md): Creates a color object using the given opacity and RGB components.

# colorWithDeviceRed:green:blue:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates a color object using the given opacity value and RGB components.

## Declaration

```objectivec
+ (NSColor *) colorWithDeviceRed:(CGFloat) red green:(CGFloat) green blue:(CGFloat) blue alpha:(CGFloat) alpha;
```

## Parameters

- `red`: The red component of the color object.
- `green`: The green component of the color object.
- `blue`: The blue component of the color object.
- `alpha`: The opacity value of the color object.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

Values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

## See Also

### Related Documentation

- [getRed:green:blue:alpha:](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [colorWithDeviceHue:saturation:brightness:alpha:](init%28devicehue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity value and HSB color space components.

### Creating a color using RGB components

- [colorWithSRGBRed:green:blue:alpha:](init%28srgbred_green_blue_alpha_%29-9oz51.md): Creates a color object from the specified components in the sRGB colorspace.
- [colorWithDisplayP3Red:green:blue:alpha:](init%28displayp3red_green_blue_alpha_%29.md): Creates a color object from the specified components in the Display P3 color space.
- [colorWithRed:green:blue:alpha:](init%28red_green_blue_alpha_%29.md): Creates a color object with the specified red, green, blue, and alpha channel values.
- [colorWithCalibratedRed:green:blue:alpha:](init%28calibratedred_green_blue_alpha_%29.md): Creates a color object using the given opacity and RGB components.
