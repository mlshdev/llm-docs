> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/settransformmatrix(_:relativeto:)](https://developer.apple.com/documentation/realitykit/hastransform/settransformmatrix(_:relativeto:))

# setTransformMatrix(\_:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Sets the transform of the entity relative to the given reference entity using a 4x4 matrix representation.

## Declaration

```swift
@MainActor @preconcurrency func setTransformMatrix(_ transform: float4x4, relativeTo referenceEntity: Entity?)
```

## Parameters

- `transform`: A 4x4 transform matrix, given relative to `referenceEntity`.
- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.

<a id="discussion"></a>

## Discussion

The [Transform](../transform.md) component can’t represent all transforms that a general 4x4 matrix can represent. Setting a [transform](transform.md) using a 4x4 matrix is therefore a lossy event that might result in certain transformations, like shear, being dropped.
