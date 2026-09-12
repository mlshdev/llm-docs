> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablevisualstate/point2d](https://developer.apple.com/documentation/tabletopkit/tablevisualstate/point2d)

# TableVisualState.Point2D

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An object that represents a point on the XZ plane.

## Declaration

```swift
struct Point2D
```

## Topics

### Creating 2D point states

- [init()](point2d/init%28%29.md)
- [init(projecting:)](point2d/init%28projecting_%29.md): Initializes this point as the projection of the given 3D point on the XZ plane
- [init(x:z:)](point2d/init%28x_z_%29.md)

### Getting 2D point properties

- [x](point2d/x.md)
- [z](point2d/z.md)
- [zero](point2d/zero.md)

### Default Implementations

- [Decodable Implementations](point2d/decodable-implementations.md)
- [Encodable Implementations](point2d/encodable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Representing 2D states

- [TableVisualState.Pose2D](pose2d.md): An object that represents a 2D position and orientation on the XZ plane.
