> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/filter/colormultiply(_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/filter/colormultiply(_:))

# colorMultiply(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a filter that multiplies each color component by the matching component of a given color.

## Declaration

```swift
static func colorMultiply(_ color: Color) -> GraphicsContext.Filter
```

## Parameters

- `color`: The color that the filter uses for the multiplication operation.

<a id="return-value"></a>

## Return Value

A filter that multiplies color components.

## See Also

### Manipulating color

- [saturation(\_:)](saturation%28__%29.md): Returns a filter that applies a saturation adjustment.
- [colorInvert(\_:)](colorinvert%28__%29.md): Returns a filter that inverts the color of their results.
- [hueRotation(\_:)](huerotation%28__%29.md): Returns a filter that applies a hue rotation adjustment.
- [grayscale(\_:)](grayscale%28__%29.md): Returns a filter that applies a grayscale adjustment.
- [colorMatrix(\_:)](colormatrix%28__%29.md): Returns a filter that multiplies by a given color matrix.
