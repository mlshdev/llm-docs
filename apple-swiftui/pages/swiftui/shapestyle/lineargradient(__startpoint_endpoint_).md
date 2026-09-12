> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/lineargradient(_:startpoint:endpoint:)](https://developer.apple.com/documentation/swiftui/shapestyle/lineargradient(_:startpoint:endpoint:))

# linearGradient(\_:startPoint:endPoint:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A linear gradient.

## Declaration

```swift
@export(implementation) static func linearGradient(_ gradient: AnyGradient, startPoint: UnitPoint, endPoint: UnitPoint) -> some ShapeStyle

```

<a id="discussion"></a>

## Discussion

The gradient applies the color function along an axis, as defined by its start and end points. The gradient maps the unit space points into the bounding rectangle of each shape filled with the gradient.

For example, a linear gradient used as a background:

```swift
ContentView()
    .background(.linearGradient(.red.gradient,
        startPoint: .top, endPoint: .bottom))
```

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).

## See Also

### Linear gradients

- [linearGradient(colors:startPoint:endPoint:)](lineargradient%28colors_startpoint_endpoint_%29.md): Conforms when `Self` is `LinearGradient`. A linear gradient defined by a collection of colors.
- [linearGradient(stops:startPoint:endPoint:)](lineargradient%28stops_startpoint_endpoint_%29.md): Conforms when `Self` is `LinearGradient`. A linear gradient defined by a collection of color stops.
