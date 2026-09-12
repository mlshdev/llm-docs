> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/filter/huerotation(_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/filter/huerotation(_:))

# hueRotation(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a filter that applies a hue rotation adjustment.

## Declaration

```swift
static func hueRotation(_ angle: Angle) -> GraphicsContext.Filter
```

## Parameters

- `angle`: The amount by which to rotate the hue value of each pixel.

<a id="return-value"></a>

## Return Value

A filter that applies a hue rotation adjustment.

<a id="discussion"></a>

## Discussion

This filter is equivalent to the `hue-rotate` filter primitive defined by the Scalable Vector Graphics (SVG) specification.

## See Also

### Manipulating color

- [saturation(\_:)](saturation%28__%29.md): Returns a filter that applies a saturation adjustment.
- [colorInvert(\_:)](colorinvert%28__%29.md): Returns a filter that inverts the color of their results.
- [colorMultiply(\_:)](colormultiply%28__%29.md): Returns a filter that multiplies each color component by the matching component of a given color.
- [grayscale(\_:)](grayscale%28__%29.md): Returns a filter that applies a grayscale adjustment.
- [colorMatrix(\_:)](colormatrix%28__%29.md): Returns a filter that multiplies by a given color matrix.
