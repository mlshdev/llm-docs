> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/angulargradient(_:center:startangle:endangle:)](https://developer.apple.com/documentation/swiftui/shapestyle/angulargradient(_:center:startangle:endangle:))

# angularGradient(\_:center:startAngle:endAngle:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An angular gradient, which applies the color function as the angle changes between the start and end angles, and anchored to a relative center point within the filled shape.

## Declaration

```swift
@export(implementation) static func angularGradient(_ gradient: AnyGradient, center: UnitPoint = .center, startAngle: Angle, endAngle: Angle) -> some ShapeStyle

```

## Parameters

- `gradient`: The gradient to use for filling the shape, providing the colors and their relative stop locations.
- `center`: The relative center of the gradient, mapped from the unit space into the bounding rectangle of the filled shape.
- `startAngle`: The angle that marks the beginning of the gradient.
- `endAngle`: The angle that marks the end of the gradient.

<a id="discussion"></a>

## Discussion

An angular gradient is also known as a “conic” gradient. If `endAngle - startAngle > 2π`, the gradient only draws the last complete turn. If `endAngle - startAngle < 2π`, the gradient fills the missing area with the colors defined by gradient stop locations at `0` and `1`, transitioning between the two halfway across the missing area.

For example, an angular gradient used as a background:

```swift
ContentView()
    .background(.angularGradient(.red.gradient))
```

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).

## See Also

### Angular gradients

- [angularGradient(colors:center:startAngle:endAngle:)](angulargradient%28colors_center_startangle_endangle_%29.md): Conforms when `Self` is `AngularGradient`. An angular gradient defined by a collection of colors.
- [angularGradient(stops:center:startAngle:endAngle:)](angulargradient%28stops_center_startangle_endangle_%29.md): Conforms when `Self` is `AngularGradient`. An angular gradient defined by a collection of color stops.
