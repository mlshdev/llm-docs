> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(genericgamma22white:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/init(genericgamma22white:alpha:))

# init(genericGamma22White:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Returns a color object with the specified white and alpha values in the GenericGamma22 colorspace.

## Declaration

```swift
init(genericGamma22White white: CGFloat, alpha: CGFloat)
```

## Parameters

- `white`: The white value of the color object.
- `alpha`: The opacity value of the color object.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

Values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

## See Also

### Related Documentation

- [init(srgbRed:green:blue:alpha:)](init%28srgbred_green_blue_alpha_%29-9oz51.md): Creates a color object from the specified components in the sRGB colorspace.
- [init(deviceHue:saturation:brightness:alpha:)](init%28devicehue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity value and HSB color space components.
- [init(calibratedRed:green:blue:alpha:)](init%28calibratedred_green_blue_alpha_%29.md): Creates a color object using the given opacity and RGB components.

### Creating a color using white components

- [init(white:alpha:)](init%28white_alpha_%29.md): Creates a color object with the specified brightness and alpha channel values.
- [init(calibratedWhite:alpha:)](init%28calibratedwhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
- [init(deviceWhite:alpha:)](init%28devicewhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.

# colorWithGenericGamma22White:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Returns a color object with the specified white and alpha values in the GenericGamma22 colorspace.

## Declaration

```objectivec
+ (NSColor *) colorWithGenericGamma22White:(CGFloat) white alpha:(CGFloat) alpha;
```

## Parameters

- `white`: The white value of the color object.
- `alpha`: The opacity value of the color object.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

Values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

## See Also

### Related Documentation

- [colorWithSRGBRed:green:blue:alpha:](init%28srgbred_green_blue_alpha_%29-9oz51.md): Creates a color object from the specified components in the sRGB colorspace.
- [colorWithDeviceHue:saturation:brightness:alpha:](init%28devicehue_saturation_brightness_alpha_%29.md): Creates a color object using the given opacity value and HSB color space components.
- [colorWithCalibratedRed:green:blue:alpha:](init%28calibratedred_green_blue_alpha_%29.md): Creates a color object using the given opacity and RGB components.

### Creating a color using white components

- [colorWithWhite:alpha:](init%28white_alpha_%29.md): Creates a color object with the specified brightness and alpha channel values.
- [colorWithCalibratedWhite:alpha:](init%28calibratedwhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
- [colorWithDeviceWhite:alpha:](init%28devicewhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
