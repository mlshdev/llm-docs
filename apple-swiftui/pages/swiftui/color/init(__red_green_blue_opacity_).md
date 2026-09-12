> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/init(_:red:green:blue:opacity:)](https://developer.apple.com/documentation/swiftui/color/init(_:red:green:blue:opacity:))

# init(\_:red:green:blue:opacity:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a constant color from red, green, and blue component values.

## Declaration

```swift
init(_ colorSpace: Color.RGBColorSpace = .sRGB, red: Double, green: Double, blue: Double, opacity: Double = 1)
```

## Parameters

- `colorSpace`: The profile that specifies how to interpret the color for display. The default is [Color.RGBColorSpace.sRGB](rgbcolorspace/srgb.md).
- `red`: The amount of red in the color.
- `green`: The amount of green in the color.
- `blue`: The amount of blue in the color.
- `opacity`: An optional degree of opacity, given in the range `0` to `1`. A value of `0` means 100% transparency, while a value of `1` means 100% opacity. The default is `1`.

<a id="discussion"></a>

## Discussion

This initializer creates a constant color that doesn’t change based on context. For example, it doesn’t have distinct light and dark appearances, unlike various system-defined colors, or a color that you load from an Asset Catalog with [init(\_:bundle:)](init%28__bundle_%29.md).

A standard sRGB color space clamps each color component — `red`, `green`, and `blue` — to a range of `0` to `1`, but SwiftUI colors use an extended sRGB color space, so you can use component values outside that range. This makes it possible to create colors using the [Color.RGBColorSpace.sRGB](rgbcolorspace/srgb.md) or [Color.RGBColorSpace.sRGBLinear](rgbcolorspace/srgblinear.md) color space that make full use of the wider gamut of a diplay that supports [Color.RGBColorSpace.displayP3](rgbcolorspace/displayp3.md).

## See Also

### Creating a color from component values

- [init(hue:saturation:brightness:opacity:)](init%28hue_saturation_brightness_opacity_%29.md): Creates a constant color from hue, saturation, and brightness values.
- [init(\_:white:opacity:)](init%28__white_opacity_%29.md): Creates a constant grayscale color.
- [Color.RGBColorSpace](rgbcolorspace.md): A profile that specifies how to interpret a color value for display.
