> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/forwarddirection](https://developer.apple.com/documentation/realitykit/entity/forwarddirection)

# Entity.ForwardDirection

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Defines the forward direction for an entity.

## Declaration

```swift
enum ForwardDirection
```

## Topics

### Enumeration Cases

- [Entity.ForwardDirection.negativeZ](forwarddirection/negativez.md)
- [Entity.ForwardDirection.positiveZ](forwarddirection/positivez.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Positioning entities in space

- [HasTransform](../hastransform.md): An interface that enables manipulating the scale, rotation, and translation of an entity.
- [Transform](../transform.md): A component that defines the scale, rotation, and translation of an entity.
- [transformMatrix(relativeTo:)](transformmatrix%28relativeto_%29.md): Returns the 4 x 4 transform matrix of an entity relative to the given coordinate space.
- [Entity.CoordinateSpaceReference](coordinatespacereference.md): Defines the coordinate space reference for transform conversion.
