> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisionfilter/default](https://developer.apple.com/documentation/realitykit/collisionfilter/default)

# default

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The default collision filter.

## Declaration

```swift
static let `default`: CollisionFilter
```

<a id="discussion"></a>

## Discussion

Entities with a [default](default.md) collision filter have a [group](group.md) of [default](../collisiongroup/default.md) and a [mask](mask.md) of [all](../collisiongroup/all.md).

## See Also

### Creating a collision filter

- [init(group:mask:)](init%28group_mask_%29.md): Creates a collision filter.
- [sensor](sensor.md): A collision filter for an entity that collides with everything.
