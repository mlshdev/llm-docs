> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/transformmatrix(relativeto:)](https://developer.apple.com/documentation/realitykit/hastransform/transformmatrix(relativeto:))

# transformMatrix(relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Gets the 4 x 4 transform matrix of an entity relative to the given entity.

## Declaration

```swift
@MainActor @preconcurrency func transformMatrix(relativeTo referenceEntity: Entity?) -> float4x4
```

## Parameters

- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.

<a id="return-value"></a>

## Return Value

The transform of the entity relative to `referenceEntity`.

## See Also

### Using a matrix

- [Transforming entities between RealityKit coordinate spaces](../transforming-entities-between-realitykit-coordinate-spaces.md): Move an entity between a volumetric window and an immersive space using coordinate space transformations.
