> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothcollidercomponent/disablecollisions(towards:)

# disableCollisions(towards:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Disables one-way collisions towards the selected groups.

## Declaration

```swift
mutating func disableCollisions(towards groups: ClothCollisionGroupSet)
```

## Parameters

- `groups`: The collision groups to remove from the collider’s mask.

<a id="discussion"></a>

## Discussion

This removes the selected groups from the collider’s mask, so that body particles in those groups will no longer be pushed away by this collider.

## See Also

### Managing collision response

- [isCollisionResponseEnabled](iscollisionresponseenabled.md): Indicates whether this collider pushes away intersecting cloth body particles.
- [enableCollisions(towards:)](enablecollisions%28towards_%29.md): Enables one-way collisions towards the selected groups.
