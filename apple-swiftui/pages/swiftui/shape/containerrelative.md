> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/containerrelative](https://developer.apple.com/documentation/swiftui/shape/containerrelative)

# containerRelative

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A shape that is replaced by an inset version of the current container shape. If no container shape was defined, is replaced by a rectangle.

## Declaration

```swift
@export(implementation) static var containerRelative: ContainerRelativeShape { get }
```

## See Also

### Getting standard shapes

- [buttonBorder](buttonborder.md): Conforms when `Self` is `ButtonBorderShape`. A shape that defers to the environment to determine the resolved button border shape.
- [capsule](capsule.md): Conforms when `Self` is `Capsule`. A capsule shape aligned inside the frame of the view containing it.
- [capsule(style:)](capsule%28style_%29.md): Conforms when `Self` is `Capsule`. A capsule shape aligned inside the frame of the view containing it.
- [circle](circle.md): Conforms when `Self` is `Circle`. A circle centered on the frame of the view containing it.
- [ellipse](ellipse.md): Conforms when `Self` is `Ellipse`. An ellipse aligned inside the frame of the view containing it.
- [textInputBorder](textinputborder.md): Conforms when `Self` is `TextInputBorderShape`. A shape that defers to the environment to determine the resolved text input border shape.
