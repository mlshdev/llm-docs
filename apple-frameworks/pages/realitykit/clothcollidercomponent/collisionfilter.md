> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothcollidercomponent/collisionfilter

# collisionFilter

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Defines the collision groups that the collider belongs to, and the mask used to determine which groups this collider affects.

## Declaration

```swift
var collisionFilter: ClothCollisionFilter
```

<a id="discussion"></a>

## Discussion

By default, the collision groups are set to `.defaultColliders`, and the mask is set to `.all`.
