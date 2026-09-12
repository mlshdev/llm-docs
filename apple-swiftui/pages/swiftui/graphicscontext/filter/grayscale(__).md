> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/filter/grayscale(_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/filter/grayscale(_:))

# grayscale(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a filter that applies a grayscale adjustment.

## Declaration

```swift
static func grayscale(_ amount: Double) -> GraphicsContext.Filter
```

## Parameters

- `amount`: An amount that controls the effect. A value of one makes the image completely gray. A value of zero leaves the result unchanged. Other values apply a linear multiplier effect.

<a id="return-value"></a>

## Return Value

A filter that applies a grayscale adjustment.

<a id="discussion"></a>

## Discussion

This filter is equivalent to the `grayscale` filter primitive defined by the Scalable Vector Graphics (SVG) specification.

## See Also

### Manipulating color

- [saturation(\_:)](saturation%28__%29.md): Returns a filter that applies a saturation adjustment.
- [colorInvert(\_:)](colorinvert%28__%29.md): Returns a filter that inverts the color of their results.
- [colorMultiply(\_:)](colormultiply%28__%29.md): Returns a filter that multiplies each color component by the matching component of a given color.
- [hueRotation(\_:)](huerotation%28__%29.md): Returns a filter that applies a hue rotation adjustment.
- [colorMatrix(\_:)](colormatrix%28__%29.md): Returns a filter that multiplies by a given color matrix.
