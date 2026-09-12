> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/offsetshape](https://developer.apple.com/documentation/swiftui/offsetshape)

# OffsetShape

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A shape with a translation offset transform applied to it.

## Declaration

```swift
@frozen struct OffsetShape<Content> where Content : Shape
```

## Topics

### Creating an offset shape

- [init(shape:offset:)](offsetshape/init%28shape_offset_%29.md)

### Getting the shape’s characteristics

- [offset](offsetshape/offset.md)
- [shape](offsetshape/shape.md)

### Supporting types

- [animatableData](offsetshape/animatabledata.md): The data to animate.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InsettableShape](insettableshape.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shape](shape.md)
- [View](view.md)

## See Also

### Transforming a shape

- [ScaledShape](scaledshape.md): A shape with a scale transform applied to it.
- [RotatedShape](rotatedshape.md): A shape with a rotation transform applied to it.
- [TransformedShape](transformedshape.md): A shape with an affine transform applied to it.
