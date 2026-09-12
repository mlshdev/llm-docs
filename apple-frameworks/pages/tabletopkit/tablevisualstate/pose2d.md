> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablevisualstate/pose2d](https://developer.apple.com/documentation/tabletopkit/tablevisualstate/pose2d)

# TableVisualState.Pose2D

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An object that represents a 2D position and orientation on the XZ plane.

## Declaration

```swift
struct Pose2D
```

## Topics

### Creating 2D pose objects

- [init()](pose2d/init%28%29.md)
- [init(position:rotation:)](pose2d/init%28position_rotation_%29.md)
- [init(projecting:)](pose2d/init%28projecting_%29.md): Initializes this pose as the 2D projection of the given pose on the XZ plane

### Getting 2D pose properties

- [position](pose2d/position.md)
- [rotation](pose2d/rotation.md)

### Getting the identifier

- [identity](pose2d/identity.md): The identity pose

### Default Implementations

- [Decodable Implementations](pose2d/decodable-implementations.md)
- [Encodable Implementations](pose2d/encodable-implementations.md)

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

- [TableVisualState.Point2D](point2d.md): An object that represents a point on the XZ plane.
