> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/rotatedshape

# RotatedShape

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A shape with a rotation transform applied to it.

## Declaration

```swift
@frozen struct RotatedShape<Content> where Content : Shape
```

## Topics

### Creating a rotated shape

- [init(shape:angle:anchor:)](rotatedshape/init%28shape_angle_anchor_%29.md)

### Getting the shape’s characteristics

- [anchor](rotatedshape/anchor.md)
- [angle](rotatedshape/angle.md)
- [shape](rotatedshape/shape.md)

### Supporting types

- [animatableData](rotatedshape/animatabledata.md): The data to animate.

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
- [OffsetShape](offsetshape.md): A shape with a translation offset transform applied to it.
- [TransformedShape](transformedshape.md): A shape with an affine transform applied to it.
