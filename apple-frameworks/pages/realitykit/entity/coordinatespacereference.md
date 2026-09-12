> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/coordinatespacereference](https://developer.apple.com/documentation/realitykit/entity/coordinatespacereference)

# Entity.CoordinateSpaceReference

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.0+

Defines the coordinate space reference for transform conversion.

## Declaration

```swift
enum CoordinateSpaceReference
```

<a id="overview"></a>

## Overview

Entity uses this option as a reference coordinate space during transform conversion.

Depending on the coordinate space that a caller entity is parented under, and whether there is an immersive space open, some transform conversion case can be inapplicable. Check out each case for more information.

## Topics

### Enumeration Cases

- [Entity.CoordinateSpaceReference.immersiveSpace](coordinatespacereference/immersivespace.md): A reference to an opened immersive space.
- [Entity.CoordinateSpaceReference.scene](coordinatespacereference/scene.md): A reference to an entity’s parent window scene.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Positioning entities in space

- [HasTransform](../hastransform.md): An interface that enables manipulating the scale, rotation, and translation of an entity.
- [Transform](../transform.md): A component that defines the scale, rotation, and translation of an entity.
- [transformMatrix(relativeTo:)](transformmatrix%28relativeto_%29.md): Returns the 4 x 4 transform matrix of an entity relative to the given coordinate space.
- [Entity.ForwardDirection](forwarddirection.md): Defines the forward direction for an entity.
