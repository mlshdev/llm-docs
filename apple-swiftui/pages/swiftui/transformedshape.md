> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transformedshape](https://developer.apple.com/documentation/swiftui/transformedshape)

# TransformedShape

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A shape with an affine transform applied to it.

## Declaration

```swift
@frozen struct TransformedShape<Content> where Content : Shape
```

## Topics

### Creating a transformed shape

- [init(shape:transform:)](transformedshape/init%28shape_transform_%29.md)

### Getting the shape’s characteristics

- [shape](transformedshape/shape.md)
- [transform](transformedshape/transform.md)

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shape](shape.md)
- [View](view.md)

## See Also

### Transforming a shape

- [ScaledShape](scaledshape.md): A shape with a scale transform applied to it.
- [RotatedShape](rotatedshape.md): A shape with a rotation transform applied to it.
- [OffsetShape](offsetshape.md): A shape with a translation offset transform applied to it.
