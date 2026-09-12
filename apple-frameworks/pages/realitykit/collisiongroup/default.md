> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisiongroup/default](https://developer.apple.com/documentation/realitykit/collisiongroup/default)

# default

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The default collision group for objects.

## Declaration

```swift
static let `default`: CollisionGroup
```

<a id="discussion"></a>

## Discussion

If no [CollisionFilter](../collisionfilter.md) is assigned to an entity, that entity will be part of this default collision group.

## See Also

### Standard collision groups

- [all](all.md): The collision group that represents all groups.
- [sceneUnderstanding](sceneunderstanding.md): The default collision group for scene-understanding meshes.
