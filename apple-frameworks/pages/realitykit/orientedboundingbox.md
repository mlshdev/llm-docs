> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/orientedboundingbox

# OrientedBoundingBox

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 16.0+ · macOS 13.0+

Representation for an oriented bounding box. Uses a combination of an axis-aligned bounding box and a rotation vector around the centroid of the said axis-aligned bounding box to represent an oriented bounding box.

## Declaration

```swift
struct OrientedBoundingBox
```

## Topics

### Initializers

- [init(orientation:boundingBox:)](orientedboundingbox/init%28orientation_boundingbox_%29.md)

### Instance Properties

- [boundingBox](orientedboundingbox/boundingbox.md): Axis aligned bounding box
- [orientation](orientedboundingbox/orientation.md): Orientation (rotation) of the bounding box

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Bounding box retrieval

- [BoundingBox](boundingbox.md): An axis-aligned bounding box (AABB).
