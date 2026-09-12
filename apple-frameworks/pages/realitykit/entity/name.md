> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/name](https://developer.apple.com/documentation/realitykit/entity/name)

# name

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The name of the entity.

## Declaration

```swift
@MainActor @preconcurrency var name: String { get set }
```

<a id="discussion"></a>

## Discussion

You can find an entity by name in a scene by calling the scene’s [findEntity(named:)](../scene/findentity%28named_%29.md) method. Or you can recursively search among the children of a given entity by calling the entity’s [findEntity(named:)](findentity%28named_%29.md) method.

Entity names are not guaranteed to be unique. When you search by name, these methods return the first entity encountered with the given name.

## See Also

### Inspecting an entity

- [scene](scene.md): The scene that owns the entity.
- [findEntity(named:)](findentity%28named_%29.md): Recursively searches all descendant entities for one with the given name.
- [debugDescription](debugdescription.md): A human readable description of the entity.
