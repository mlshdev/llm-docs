> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/capsule](https://developer.apple.com/documentation/swiftui/capsule)

# Capsule

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A capsule shape aligned inside the frame of the view containing it.

## Declaration

```swift
@frozen struct Capsule
```

## Mentioned In

- [Applying Liquid Glass to custom views](applying-liquid-glass-to-custom-views.md)

<a id="overview"></a>

## Overview

A capsule shape is equivalent to a rounded rectangle where the corner radius is chosen as half the length of the rectangle’s smallest edge.

## Topics

### Creating a capsule

- [init(style:)](capsule/init%28style_%29.md): Creates a new capsule shape.

### Getting the shape’s characteristics

- [style](capsule/style.md)

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InsettableShape](insettableshape.md)
- [RoundedRectangularShape](roundedrectangularshape.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shape](shape.md)
- [View](view.md)

## See Also

### Creating circular shapes

- [Circle](circle.md): A circle centered on the frame of the view containing it.
- [Ellipse](ellipse.md): An ellipse aligned inside the frame of the view containing it.
