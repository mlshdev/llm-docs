> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/angulargradient(colors:center:startangle:endangle:)](https://developer.apple.com/documentation/swiftui/shapestyle/angulargradient(colors:center:startangle:endangle:))

# angularGradient(colors:center:startAngle:endAngle:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An angular gradient defined by a collection of colors.

## Declaration

```swift
@export(implementation) static func angularGradient(colors: [Color], center: UnitPoint, startAngle: Angle, endAngle: Angle) -> AngularGradient
```

## Parameters

- `colors`: The colors of the gradient, evenly spaced along its full length.
- `center`: The relative center of the gradient, mapped from the unit space into the bounding rectangle of the filled shape.
- `startAngle`: The angle that marks the beginning of the gradient.
- `endAngle`: The angle that marks the end of the gradient.

<a id="discussion"></a>

## Discussion

For more information on how to use angular gradients, see [angularGradient(\_:center:startAngle:endAngle:)](angulargradient%28__center_startangle_endangle_%29.md).

## See Also

### Angular gradients

- [angularGradient(\_:center:startAngle:endAngle:)](angulargradient%28__center_startangle_endangle_%29.md): Conforms when `Self` is `AngularGradient`. An angular gradient, which applies the color function as the angle changes between the start and end angles, and anchored to a relative center point within the filled shape.
- [angularGradient(stops:center:startAngle:endAngle:)](angulargradient%28stops_center_startangle_endangle_%29.md): Conforms when `Self` is `AngularGradient`. An angular gradient defined by a collection of color stops.
