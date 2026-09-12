> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/joint3d](https://developer.apple.com/documentation/vision/joint3d)

# Joint3D

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An object that represents a body pose joint in 3D space.

## Declaration

```swift
struct Joint3D
```

## Topics

### Creating a joint

- [init(position:localPosition:identifer:parentJoint:)](joint3d/init%28position_localposition_identifer_parentjoint_%29.md): Creates a 3D joint.

### Inspecting a joint

- [localPosition](joint3d/localposition.md): The joint position relative to the parent joint.
- [position](joint3d/position.md): The joint position relative to the camera.
- [parentJoint](joint3d/parentjoint.md): The parent joint in the observation.
- [identifier](joint3d/identifier.md): The name of the joint.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Joints

- [Joint](joint.md): A pose joint represented as a normalized point in an image, along with a label and a confidence value.
