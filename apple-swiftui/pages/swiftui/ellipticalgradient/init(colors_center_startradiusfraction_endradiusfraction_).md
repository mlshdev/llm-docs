> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/ellipticalgradient/init(colors:center:startradiusfraction:endradiusfraction:)](https://developer.apple.com/documentation/swiftui/ellipticalgradient/init(colors:center:startradiusfraction:endradiusfraction:))

# init(colors:center:startRadiusFraction:endRadiusFraction:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an elliptical gradient from a collection of colors.

## Declaration

```swift
nonisolated init(colors: [Color], center: UnitPoint = .center, startRadiusFraction: CGFloat = 0, endRadiusFraction: CGFloat = 0.5)
```

<a id="discussion"></a>

## Discussion

For example, an elliptical gradient centered on the top-leading corner of the view:

```swift
EllipticalGradient(
    colors: [.blue, .green],
    center: .topLeading,
    startRadiusFraction: 0,
    endRadiusFraction: 1)
```

- colors: The colors, evenly distributed throughout the gradient.
- center: The center of the circle, in \[0, 1\] coordinates.
- startRadiusFraction: The start radius value, as a fraction between zero and one. Zero maps to the center point, one maps to the diameter of the unit circle.
- endRadiusFraction: The end radius value, as a fraction between zero and one. Zero maps to the center point, one maps to the diameter of the unit circle.

## See Also

### Creating an elliptical gradient

- [init(gradient:center:startRadiusFraction:endRadiusFraction:)](init%28gradient_center_startradiusfraction_endradiusfraction_%29.md): Creates an elliptical gradient.
- [init(stops:center:startRadiusFraction:endRadiusFraction:)](init%28stops_center_startradiusfraction_endradiusfraction_%29.md): Creates an elliptical gradient from a collection of color stops.
