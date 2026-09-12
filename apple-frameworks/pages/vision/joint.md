> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/joint](https://developer.apple.com/documentation/vision/joint)

# Joint

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A pose joint represented as a normalized point in an image, along with a label and a confidence value.

## Declaration

```swift
struct Joint
```

## Topics

### Inspecting a joint

- [confidence](joint/confidence.md): A confidence score that indicates the detected joint’s accuracy.
- [jointName](joint/jointname.md): The joint’s identifier label.
- [location](joint/location.md): The location of the joint in normalized coordinates.

### Getting the distance to a joint

- [distance(to:)](joint/distance%28to_%29.md): Returns the distance to another joint.

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

### Joints

- [Joint3D](joint3d.md): An object that represents a body pose joint in 3D space.
