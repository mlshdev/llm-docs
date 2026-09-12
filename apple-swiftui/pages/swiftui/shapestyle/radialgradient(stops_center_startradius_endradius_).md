> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/radialgradient(stops:center:startradius:endradius:)](https://developer.apple.com/documentation/swiftui/shapestyle/radialgradient(stops:center:startradius:endradius:))

# radialGradient(stops:center:startRadius:endRadius:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A radial gradient defined by a collection of color stops.

## Declaration

```swift
@export(implementation) static func radialGradient(stops: [Gradient.Stop], center: UnitPoint, startRadius: CGFloat, endRadius: CGFloat) -> RadialGradient
```

<a id="discussion"></a>

## Discussion

The gradient applies the color function as the distance from a center point, scaled to fit within the defined start and end radii. The gradient maps the unit space center point into the bounding rectangle of each shape filled with the gradient.

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).

## See Also

### Radial gradients

- [radialGradient(\_:center:startRadius:endRadius:)](radialgradient%28__center_startradius_endradius_%29.md): Conforms when `Self` is `RadialGradient`. A radial gradient.
- [radialGradient(colors:center:startRadius:endRadius:)](radialgradient%28colors_center_startradius_endradius_%29.md): Conforms when `Self` is `RadialGradient`. A radial gradient defined by a collection of colors.
