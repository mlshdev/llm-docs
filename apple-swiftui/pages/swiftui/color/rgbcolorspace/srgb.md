> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/rgbcolorspace/srgb](https://developer.apple.com/documentation/swiftui/color/rgbcolorspace/srgb)

# Color.RGBColorSpace.sRGB

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The extended red, green, blue (sRGB) color space.

## Declaration

```swift
case sRGB
```

<a id="discussion"></a>

## Discussion

For information about the sRGB colorimetry and nonlinear transform function, see the IEC 61966-2-1 specification.

Standard sRGB color spaces clamp the red, green, and blue components of a color to a range of `0` to `1`, but SwiftUI colors use an extended sRGB color space, so you can use component values outside that range.

## See Also

### Getting color spaces

- [Color.RGBColorSpace.sRGBLinear](srgblinear.md): The extended sRGB color space with a linear transfer function.
- [Color.RGBColorSpace.displayP3](displayp3.md): The Display P3 color space.
