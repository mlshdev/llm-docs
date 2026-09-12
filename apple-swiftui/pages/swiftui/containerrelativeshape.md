> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/containerrelativeshape](https://developer.apple.com/documentation/swiftui/containerrelativeshape)

# ContainerRelativeShape

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A shape whose dimensions the system calculates from an inset version of the current container shape.

## Declaration

```swift
@frozen struct ContainerRelativeShape
```

<a id="overview"></a>

## Overview

If there is not a current container shape, the system provides a rectangle.

## Topics

### Creating the shape

- [init()](containerrelativeshape/init%28%29.md)

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InsettableShape](insettableshape.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shape](shape.md)
- [View](view.md)

## See Also

### Setting a container shape

- [containerShape(\_:)](view/containershape%28__%29.md): Sets the container shape to use for any container relative shape or concentric rectangle within this view.
- [InsettableShape](insettableshape.md): A shape type that is able to inset itself to produce another shape.
