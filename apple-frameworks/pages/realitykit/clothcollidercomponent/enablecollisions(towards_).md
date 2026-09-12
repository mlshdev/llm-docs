> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcollidercomponent/enablecollisions(towards:)](https://developer.apple.com/documentation/realitykit/clothcollidercomponent/enablecollisions(towards:))

# enableCollisions(towards:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Enables one-way collisions towards the selected groups.

## Declaration

```swift
mutating func enableCollisions(towards groups: ClothCollisionGroupSet)
```

## Parameters

- `groups`: The collision groups to add to the collider’s mask.

<a id="discussion"></a>

## Discussion

This adds the selected groups to the collider’s mask, causing body particles in those groups to be pushed away by this collider.

## See Also

### Managing collision response

- [isCollisionResponseEnabled](iscollisionresponseenabled.md): Indicates whether this collider pushes away intersecting cloth body particles.
- [disableCollisions(towards:)](disablecollisions%28towards_%29.md): Disables one-way collisions towards the selected groups.
