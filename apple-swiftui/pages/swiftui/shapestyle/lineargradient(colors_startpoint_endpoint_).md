> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/lineargradient(colors:startpoint:endpoint:)](https://developer.apple.com/documentation/swiftui/shapestyle/lineargradient(colors:startpoint:endpoint:))

# linearGradient(colors:startPoint:endPoint:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A linear gradient defined by a collection of colors.

## Declaration

```swift
@export(implementation) static func linearGradient(colors: [Color], startPoint: UnitPoint, endPoint: UnitPoint) -> LinearGradient
```

<a id="discussion"></a>

## Discussion

The gradient applies the color function along an axis, as defined by its start and end points. The gradient maps the unit space points into the bounding rectangle of each shape filled with the gradient.

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).

## See Also

### Linear gradients

- [linearGradient(\_:startPoint:endPoint:)](lineargradient%28__startpoint_endpoint_%29.md): Conforms when `Self` is `LinearGradient`. A linear gradient.
- [linearGradient(stops:startPoint:endPoint:)](lineargradient%28stops_startpoint_endpoint_%29.md): Conforms when `Self` is `LinearGradient`. A linear gradient defined by a collection of color stops.
