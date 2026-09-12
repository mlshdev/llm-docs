> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/shading/color(_:white:opacity:)](https://developer.apple.com/documentation/swiftui/graphicscontext/shading/color(_:white:opacity:))

# color(\_:white:opacity:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a shading instance that fills with a monochrome color in the given color space.

## Declaration

```swift
static func color(_ colorSpace: Color.RGBColorSpace = .sRGB, white: Double, opacity: Double = 1) -> GraphicsContext.Shading
```

## Parameters

- `colorSpace`: The RGB color space used to define the color. The default is [Color.RGBColorSpace.sRGB](../../color/rgbcolorspace/srgb.md).
- `white`: The value to use for each of the red, green, and blue components of the color.
- `opacity`: The opacity of the color. The default is `1`, which means fully opaque.

<a id="return-value"></a>

## Return Value

A shading instance filled with a color.

## See Also

### Colors

- [color(\_:)](color%28__%29.md): Returns a shading instance that fills with a color.
- [color(\_:red:green:blue:opacity:)](color%28__red_green_blue_opacity_%29.md): Returns a shading instance that fills with a color in the given color space.
