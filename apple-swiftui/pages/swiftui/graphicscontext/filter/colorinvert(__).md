> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/filter/colorinvert(_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/filter/colorinvert(_:))

# colorInvert(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a filter that inverts the color of their results.

## Declaration

```swift
static func colorInvert(_ amount: Double = 1) -> GraphicsContext.Filter
```

## Parameters

- `amount`: The inversion amount. A value of one results in total inversion, while a value of zero leaves the result unchanged. Other values apply a linear multiplier effect.

<a id="return-value"></a>

## Return Value

A filter that applies a color inversion.

<a id="discussion"></a>

## Discussion

This filter is equivalent to the `invert` filter primitive defined by the Scalable Vector Graphics (SVG) specification.

## See Also

### Manipulating color

- [saturation(\_:)](saturation%28__%29.md): Returns a filter that applies a saturation adjustment.
- [colorMultiply(\_:)](colormultiply%28__%29.md): Returns a filter that multiplies each color component by the matching component of a given color.
- [hueRotation(\_:)](huerotation%28__%29.md): Returns a filter that applies a hue rotation adjustment.
- [grayscale(\_:)](grayscale%28__%29.md): Returns a filter that applies a grayscale adjustment.
- [colorMatrix(\_:)](colormatrix%28__%29.md): Returns a filter that multiplies by a given color matrix.
