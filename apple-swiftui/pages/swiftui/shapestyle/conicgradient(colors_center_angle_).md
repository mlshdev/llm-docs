> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/conicgradient(colors:center:angle:)](https://developer.apple.com/documentation/swiftui/shapestyle/conicgradient(colors:center:angle:))

# conicGradient(colors:center:angle:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A conic gradient defined by a collection of colors that completes a full turn.

## Declaration

```swift
@export(implementation) static func conicGradient(colors: [Color], center: UnitPoint, angle: Angle = .zero) -> AngularGradient
```

## Parameters

- `colors`: The colors of the gradient, evenly spaced along its full length.
- `center`: The relative center of the gradient, mapped from the unit space into the bounding rectangle of the filled shape.
- `angle`: The angle to offset the beginning of the gradient’s full turn.

<a id="discussion"></a>

## Discussion

For more information on how to use conic gradients, see [conicGradient(\_:center:angle:)](conicgradient%28__center_angle_%29.md).

## See Also

### Conic gradients

- [conicGradient(\_:center:angle:)](conicgradient%28__center_angle_%29.md): Conforms when `Self` is `AngularGradient`. A conic gradient that completes a full turn, optionally starting from a given angle and anchored to a relative center point within the filled shape.
- [conicGradient(stops:center:angle:)](conicgradient%28stops_center_angle_%29.md): Conforms when `Self` is `AngularGradient`. A conic gradient defined by a collection of color stops that completes a full turn.
