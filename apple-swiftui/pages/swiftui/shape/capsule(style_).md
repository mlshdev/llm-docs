> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/capsule(style:)](https://developer.apple.com/documentation/swiftui/shape/capsule(style:))

# capsule(style:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A capsule shape aligned inside the frame of the view containing it.

## Declaration

```swift
@export(implementation) static func capsule(style: RoundedCornerStyle) -> Self
```

<a id="discussion"></a>

## Discussion

A capsule shape is equivalent to a rounded rectangle where the corner radius is chosen as half the length of the rectangle’s smallest edge.

## See Also

### Getting standard shapes

- [buttonBorder](buttonborder.md): Conforms when `Self` is `ButtonBorderShape`. A shape that defers to the environment to determine the resolved button border shape.
- [capsule](capsule.md): Conforms when `Self` is `Capsule`. A capsule shape aligned inside the frame of the view containing it.
- [circle](circle.md): Conforms when `Self` is `Circle`. A circle centered on the frame of the view containing it.
- [containerRelative](containerrelative.md): Conforms when `Self` is `ContainerRelativeShape`. A shape that is replaced by an inset version of the current container shape. If no container shape was defined, is replaced by a rectangle.
- [ellipse](ellipse.md): Conforms when `Self` is `Ellipse`. An ellipse aligned inside the frame of the view containing it.
- [textInputBorder](textinputborder.md): Conforms when `Self` is `TextInputBorderShape`. A shape that defers to the environment to determine the resolved text input border shape.
