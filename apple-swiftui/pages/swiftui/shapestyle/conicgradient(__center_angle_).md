> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/conicgradient(_:center:angle:)](https://developer.apple.com/documentation/swiftui/shapestyle/conicgradient(_:center:angle:))

# conicGradient(\_:center:angle:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A conic gradient that completes a full turn, optionally starting from a given angle and anchored to a relative center point within the filled shape.

## Declaration

```swift
@export(implementation) static func conicGradient(_ gradient: AnyGradient, center: UnitPoint = .center, angle: Angle = .zero) -> some ShapeStyle

```

## Parameters

- `gradient`: The gradient to use for filling the shape, providing the colors and their relative stop locations.
- `center`: The relative center of the gradient, mapped from the unit space into the bounding rectangle of the filled shape.
- `angle`: The angle to offset the beginning of the gradient’s full turn.

<a id="discussion"></a>

## Discussion

For example, a conic gradient used as a background:

```swift
let gradient = Gradient(colors: [.red, .yellow])

ContentView()
    .background(.conicGradient(gradient))
```

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).

## See Also

### Conic gradients

- [conicGradient(colors:center:angle:)](conicgradient%28colors_center_angle_%29.md): Conforms when `Self` is `AngularGradient`. A conic gradient defined by a collection of colors that completes a full turn.
- [conicGradient(stops:center:angle:)](conicgradient%28stops_center_angle_%29.md): Conforms when `Self` is `AngularGradient`. A conic gradient defined by a collection of color stops that completes a full turn.
