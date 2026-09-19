> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entity/coordinatespacereference/immersivespace

# Entity.CoordinateSpaceReference.immersiveSpace

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** visionOS 2.0+

A reference to an opened immersive space.

## Declaration

```swift
case immersiveSpace
```

<a id="discussion"></a>

## Discussion

You can use this enum case to get an entity’s relative transform to the immersive space:

```swift
let transformInImmersiveSpace = entity.transformMatrix(relativeTo: .immersiveSpace)
```

> **Note**

> If no immersive space is open, calling `Entity/transformMatrix(relativeTo:)-70l1k` with the case `immersiveSpace` returns `nil`.
