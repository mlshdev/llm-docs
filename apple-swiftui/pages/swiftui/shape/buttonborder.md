> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/buttonborder](https://developer.apple.com/documentation/swiftui/shape/buttonborder)

# buttonBorder

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A shape that defers to the environment to determine the resolved button border shape.

## Declaration

```swift
static var buttonBorder: ButtonBorderShape { get }
```

<a id="discussion"></a>

## Discussion

You can override the resolved shape in a given view hierarchy by using the [buttonBorderShape(\_:)](../view/buttonbordershape%28__%29.md) modifier. If no button border shape is specified, it is resolved automatically for the given context and platform.

## See Also

### Getting standard shapes

- [capsule](capsule.md): Conforms when `Self` is `Capsule`. A capsule shape aligned inside the frame of the view containing it.
- [capsule(style:)](capsule%28style_%29.md): Conforms when `Self` is `Capsule`. A capsule shape aligned inside the frame of the view containing it.
- [circle](circle.md): Conforms when `Self` is `Circle`. A circle centered on the frame of the view containing it.
- [containerRelative](containerrelative.md): Conforms when `Self` is `ContainerRelativeShape`. A shape that is replaced by an inset version of the current container shape. If no container shape was defined, is replaced by a rectangle.
- [ellipse](ellipse.md): Conforms when `Self` is `Ellipse`. An ellipse aligned inside the frame of the view containing it.
- [textInputBorder](textinputborder.md): Conforms when `Self` is `TextInputBorderShape`. A shape that defers to the environment to determine the resolved text input border shape.
