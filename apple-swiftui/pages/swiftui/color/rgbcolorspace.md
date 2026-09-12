> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/rgbcolorspace](https://developer.apple.com/documentation/swiftui/color/rgbcolorspace)

# Color.RGBColorSpace

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A profile that specifies how to interpret a color value for display.

## Declaration

```swift
enum RGBColorSpace
```

## Topics

### Getting color spaces

- [Color.RGBColorSpace.sRGB](rgbcolorspace/srgb.md): The extended red, green, blue (sRGB) color space.
- [Color.RGBColorSpace.sRGBLinear](rgbcolorspace/srgblinear.md): The extended sRGB color space with a linear transfer function.
- [Color.RGBColorSpace.displayP3](rgbcolorspace/displayp3.md): The Display P3 color space.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a color from component values

- [init(hue:saturation:brightness:opacity:)](init%28hue_saturation_brightness_opacity_%29.md): Creates a constant color from hue, saturation, and brightness values.
- [init(\_:white:opacity:)](init%28__white_opacity_%29.md): Creates a constant grayscale color.
- [init(\_:red:green:blue:opacity:)](init%28__red_green_blue_opacity_%29.md): Creates a constant color from red, green, and blue component values.
