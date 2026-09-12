> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/scene](https://developer.apple.com/documentation/realitykit/entity/scene)

# scene

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The scene that owns the entity.

## Declaration

```swift
@MainActor @preconcurrency var scene: Scene? { get }
```

<a id="discussion"></a>

## Discussion

An entity belongs to a scene if the entity is part of a hierarchy that’s rooted in the scene’s [anchors](../scene/anchors.md) collection.

The value of the property is `nil` if the entity isn’t currently attached to any scene.

## See Also

### Inspecting an entity

- [name](name.md): The name of the entity.
- [findEntity(named:)](findentity%28named_%29.md): Recursively searches all descendant entities for one with the given name.
- [debugDescription](debugdescription.md): A human readable description of the entity.
