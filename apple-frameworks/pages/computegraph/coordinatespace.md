> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/coordinatespace](https://developer.apple.com/documentation/computegraph/coordinatespace)

# CoordinateSpace

**Framework:** Compute Graph  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Simulation coordinate space, controlling how positions and orientations are stored.

## Declaration

```swift
enum CoordinateSpace
```

## Topics

### Enumeration Cases

- [CoordinateSpace.local](coordinatespace/local.md): Positions and orientations are stored in relative to the Entity
- [CoordinateSpace.world](coordinatespace/world.md): Positions and orientations are stored in relative to the Scene.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Geometry and simulation inputs

- [StripOrientation](striporientation.md): An enumeration that specifies how a strip should be oriented.
- [Viewpoint](viewpoint-swift.struct.md): Camera viewpoint parameters in 3D space.
- [MouseParams](mouseparams.md): Parameters describing mouse interaction in 3D space.
