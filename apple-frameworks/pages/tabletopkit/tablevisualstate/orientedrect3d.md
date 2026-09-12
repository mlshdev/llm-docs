> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablevisualstate/orientedrect3d](https://developer.apple.com/documentation/tabletopkit/tablevisualstate/orientedrect3d)

# TableVisualState.OrientedRect3D

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An object that represents the position and orientation of a 3D rectangle.

## Declaration

```swift
struct OrientedRect3D
```

## Topics

### Creating 3D rectangle states

- [init()](orientedrect3d/init%28%29.md)
- [init(pose:size:)](orientedrect3d/init%28pose_size_%29.md)
- [init(rotation:rect:)](orientedrect3d/init%28rotation_rect_%29.md)

### Getting 3D rectangle properties

- [pose](orientedrect3d/pose.md): The pose of the rectangle.
- [size](orientedrect3d/size.md): The size of the rectangle.

### Default Implementations

- [Decodable Implementations](orientedrect3d/decodable-implementations.md)
- [Encodable Implementations](orientedrect3d/encodable-implementations.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Representing 3D states

- [bounds(for:)](bounds%28for_%29.md): Returns the current pose and extents of the bounding box for the given equipment. Returns `nil` if the equipment is not part of the game.
- [bounds(forEquipment:)](bounds%28forequipment_%29.md): Deprecated.
- [bounds(matching:)](bounds%28matching_%29.md)
- [goalBounds(forEquipment:)](goalbounds%28forequipment_%29.md): Deprecated.
- [goalBounds(matching:)](goalbounds%28matching_%29.md)
- [tableBounds](tablebounds.md)
