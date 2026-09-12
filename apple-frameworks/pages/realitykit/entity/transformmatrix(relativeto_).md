> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/transformmatrix(relativeto:)](https://developer.apple.com/documentation/realitykit/entity/transformmatrix(relativeto:))

# transformMatrix(relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Returns the 4 x 4 transform matrix of an entity relative to the given coordinate space.

## Declaration

```swift
@MainActor @preconcurrency func transformMatrix(relativeTo referenceSpace: Entity.CoordinateSpaceReference) -> float4x4?
```

## Parameters

- `referenceSpace`: The coordinate space that defines a frame of reference.

<a id="return-value"></a>

## Return Value

The transform of the entity relative to `referenceSpace`, or `nil` when the given coordinate space is not applicable to the given entity.

<a id="discussion"></a>

## Discussion

This method overloads  [transformMatrix(relativeTo:)](../hastransform/transformmatrix%28relativeto_%29.md).

## See Also

### Positioning entities in space

- [HasTransform](../hastransform.md): An interface that enables manipulating the scale, rotation, and translation of an entity.
- [Transform](../transform.md): A component that defines the scale, rotation, and translation of an entity.
- [Entity.CoordinateSpaceReference](coordinatespacereference.md): Defines the coordinate space reference for transform conversion.
- [Entity.ForwardDirection](forwarddirection.md): Defines the forward direction for an entity.
