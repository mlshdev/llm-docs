> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisionfilter/sensor](https://developer.apple.com/documentation/realitykit/collisionfilter/sensor)

# sensor

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A collision filter for an entity that collides with everything.

## Declaration

```swift
static let sensor: CollisionFilter
```

<a id="discussion"></a>

## Discussion

The sensor collision filter is typically used by rays in ray casts, shapes in convex shape casts, and trigger volumes. It corresponds to a [group](group.md) and [mask](mask.md) both set to [all](../collisiongroup/all.md).

## See Also

### Creating a collision filter

- [init(group:mask:)](init%28group_mask_%29.md): Creates a collision filter.
- [default](default.md): The default collision filter.
