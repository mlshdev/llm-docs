> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(displayp3red:green:blue:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/init(displayp3red:green:blue:alpha:))

# init(displayP3Red:green:blue:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Creates a color object from the specified components in the Display P3 color space.

## Declaration

```swift
init(displayP3Red red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat)
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

### Creating a color using RGB components

- [init(srgbRed:green:blue:alpha:)](init%28srgbred_green_blue_alpha_%29-9oz51.md): Creates a color object from the specified components in the sRGB colorspace.
- [init(red:green:blue:alpha:)](init%28red_green_blue_alpha_%29.md): Creates a color object with the specified red, green, blue, and alpha channel values.
- [init(calibratedRed:green:blue:alpha:)](init%28calibratedred_green_blue_alpha_%29.md): Creates a color object using the given opacity and RGB components.
- [init(deviceRed:green:blue:alpha:)](init%28devicered_green_blue_alpha_%29.md): Creates a color object using the given opacity value and RGB components.

# colorWithDisplayP3Red:green:blue:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Creates a color object from the specified components in the Display P3 color space.

## Declaration

```objectivec
+ (NSColor *) colorWithDisplayP3Red:(CGFloat) red green:(CGFloat) green blue:(CGFloat) blue alpha:(CGFloat) alpha;
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

### Creating a color using RGB components

- [colorWithSRGBRed:green:blue:alpha:](init%28srgbred_green_blue_alpha_%29-9oz51.md): Creates a color object from the specified components in the sRGB colorspace.
- [colorWithRed:green:blue:alpha:](init%28red_green_blue_alpha_%29.md): Creates a color object with the specified red, green, blue, and alpha channel values.
- [colorWithCalibratedRed:green:blue:alpha:](init%28calibratedred_green_blue_alpha_%29.md): Creates a color object using the given opacity and RGB components.
- [colorWithDeviceRed:green:blue:alpha:](init%28devicered_green_blue_alpha_%29.md): Creates a color object using the given opacity value and RGB components.
