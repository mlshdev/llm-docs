> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/radialgradient(_:center:startradius:endradius:)](https://developer.apple.com/documentation/swiftui/shapestyle/radialgradient(_:center:startradius:endradius:))

# radialGradient(\_:center:startRadius:endRadius:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A radial gradient.

## Declaration

```swift
@export(implementation) static func radialGradient(_ gradient: AnyGradient, center: UnitPoint = .center, startRadius: CGFloat = 0, endRadius: CGFloat) -> some ShapeStyle

```

<a id="discussion"></a>

## Discussion

The gradient applies the color function as the distance from a center point, scaled to fit within the defined start and end radii. The gradient maps the unit space center point into the bounding rectangle of each shape filled with the gradient.

For example, a radial gradient used as a background:

```swift
ContentView()
    .background(.radialGradient(.red.gradient, endRadius: 100))
```

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).

## See Also

### Radial gradients

- [radialGradient(colors:center:startRadius:endRadius:)](radialgradient%28colors_center_startradius_endradius_%29.md): Conforms when `Self` is `RadialGradient`. A radial gradient defined by a collection of colors.
- [radialGradient(stops:center:startRadius:endRadius:)](radialgradient%28stops_center_startradius_endradius_%29.md): Conforms when `Self` is `RadialGradient`. A radial gradient defined by a collection of color stops.
