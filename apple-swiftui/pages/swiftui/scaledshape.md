> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scaledshape](https://developer.apple.com/documentation/swiftui/scaledshape)

# ScaledShape

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A shape with a scale transform applied to it.

## Declaration

```swift
@frozen struct ScaledShape<Content> where Content : Shape
```

## Topics

### Creating a scaled shape

- [init(shape:scale:anchor:)](scaledshape/init%28shape_scale_anchor_%29.md)

### Getting the shape’s characteristics

- [anchor](scaledshape/anchor.md)
- [scale](scaledshape/scale.md)
- [shape](scaledshape/shape.md)

### Supporting types

- [animatableData](scaledshape/animatabledata.md): The data to animate.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shape](shape.md)
- [View](view.md)

## See Also

### Transforming a shape

- [RotatedShape](rotatedshape.md): A shape with a rotation transform applied to it.
- [OffsetShape](offsetshape.md): A shape with a translation offset transform applied to it.
- [TransformedShape](transformedshape.md): A shape with an affine transform applied to it.
