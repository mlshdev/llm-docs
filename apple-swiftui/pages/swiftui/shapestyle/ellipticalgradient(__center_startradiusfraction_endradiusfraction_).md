> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/ellipticalgradient(_:center:startradiusfraction:endradiusfraction:)](https://developer.apple.com/documentation/swiftui/shapestyle/ellipticalgradient(_:center:startradiusfraction:endradiusfraction:))

# ellipticalGradient(\_:center:startRadiusFraction:endRadiusFraction:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A radial gradient that draws an ellipse.

## Declaration

```swift
@export(implementation) static func ellipticalGradient(_ gradient: AnyGradient, center: UnitPoint = .center, startRadiusFraction: CGFloat = 0, endRadiusFraction: CGFloat = 0.5) -> some ShapeStyle

```

<a id="discussion"></a>

## Discussion

The gradient maps its coordinate space to the unit space square in which its center and radii are defined, then stretches that square to fill its bounding rect, possibly also stretching the circular gradient to have elliptical contours.

For example, an elliptical gradient used as a background:

```swift
ContentView()
    .background(.ellipticalGradient(.red.gradient))
```

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).

## See Also

### Elliptical gradients

- [ellipticalGradient(colors:center:startRadiusFraction:endRadiusFraction:)](ellipticalgradient%28colors_center_startradiusfraction_endradiusfraction_%29.md): Conforms when `Self` is `EllipticalGradient`. A radial gradient that draws an ellipse defined by a collection of colors.
- [ellipticalGradient(stops:center:startRadiusFraction:endRadiusFraction:)](ellipticalgradient%28stops_center_startradiusfraction_endradiusfraction_%29.md): Conforms when `Self` is `EllipticalGradient`. A radial gradient that draws an ellipse defined by a collection of color stops.
