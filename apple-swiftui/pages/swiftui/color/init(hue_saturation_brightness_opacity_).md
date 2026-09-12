> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/init(hue:saturation:brightness:opacity:)](https://developer.apple.com/documentation/swiftui/color/init(hue:saturation:brightness:opacity:))

# init(hue:saturation:brightness:opacity:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a constant color from hue, saturation, and brightness values.

## Declaration

```swift
init(hue: Double, saturation: Double, brightness: Double, opacity: Double = 1)
```

## Parameters

- `hue`: A value in the range `0` to `1` that maps to an angle from 0° to 360° to represent a shade on the color wheel.
- `saturation`: A value in the range `0` to `1` that indicates how strongly the hue affects the color. A value of `0` removes the effect of the hue, resulting in gray. As the value increases, the hue becomes more prominent.
- `brightness`: A value in the range `0` to `1` that indicates how bright a color is. A value of `0` results in black, regardless of the other components. The color lightens as you increase this component.
- `opacity`: An optional degree of opacity, given in the range `0` to `1`. A value of `0` means 100% transparency, while a value of `1` means 100% opacity. The default is `1`.

<a id="discussion"></a>

## Discussion

This initializer creates a constant color that doesn’t change based on context. For example, it doesn’t have distinct light and dark appearances, unlike various system-defined colors, or a color that you load from an Asset Catalog with [init(\_:bundle:)](init%28__bundle_%29.md).

## See Also

### Creating a color from component values

- [init(\_:white:opacity:)](init%28__white_opacity_%29.md): Creates a constant grayscale color.
- [init(\_:red:green:blue:opacity:)](init%28__red_green_blue_opacity_%29.md): Creates a constant color from red, green, and blue component values.
- [Color.RGBColorSpace](rgbcolorspace.md): A profile that specifies how to interpret a color value for display.
