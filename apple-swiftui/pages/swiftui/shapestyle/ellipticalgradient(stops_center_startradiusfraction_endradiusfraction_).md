> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/ellipticalgradient(stops:center:startradiusfraction:endradiusfraction:)](https://developer.apple.com/documentation/swiftui/shapestyle/ellipticalgradient(stops:center:startradiusfraction:endradiusfraction:))

# ellipticalGradient(stops:center:startRadiusFraction:endRadiusFraction:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A radial gradient that draws an ellipse defined by a collection of color stops.

## Declaration

```swift
@export(implementation) static func ellipticalGradient(stops: [Gradient.Stop], center: UnitPoint = .center, startRadiusFraction: CGFloat = 0, endRadiusFraction: CGFloat = 0.5) -> EllipticalGradient
```

<a id="discussion"></a>

## Discussion

The gradient maps its coordinate space to the unit space square in which its center and radii are defined, then stretches that square to fill its bounding rect, possibly also stretching the circular gradient to have elliptical contours.

For example, an elliptical gradient used as a background:

```swift
.background(.ellipticalGradient(stops: [
    .init(color: .red, location: 0.0),
    .init(color: .yellow, location: 0.9),
    .init(color: .yellow, location: 1.0),
]))
```

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).

## See Also

### Elliptical gradients

- [ellipticalGradient(\_:center:startRadiusFraction:endRadiusFraction:)](ellipticalgradient%28__center_startradiusfraction_endradiusfraction_%29.md): Conforms when `Self` is `EllipticalGradient`. A radial gradient that draws an ellipse.
- [ellipticalGradient(colors:center:startRadiusFraction:endRadiusFraction:)](ellipticalgradient%28colors_center_startradiusfraction_endradiusfraction_%29.md): Conforms when `Self` is `EllipticalGradient`. A radial gradient that draws an ellipse defined by a collection of colors.
