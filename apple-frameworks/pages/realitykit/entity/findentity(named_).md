> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/findentity(named:)](https://developer.apple.com/documentation/realitykit/entity/findentity(named:))

# findEntity(named:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Recursively searches all descendant entities for one with the given name.

## Declaration

```swift
@MainActor @preconcurrency func findEntity(named name: String) -> Entity?
```

## Parameters

- `name`: The entity name for which to search.

<a id="return-value"></a>

## Return Value

An entity with the given name, or `nil` if no entity is found.

<a id="discussion"></a>

## Discussion

The [findEntity(named:)](findentity%28named_%29.md) method conducts a depth-first, recursive search over all of the entity’s descendants for one whose [name](name.md) property matches the given name. The method returns the first match. Entity names need not be unique.

## See Also

### Inspecting an entity

- [scene](scene.md): The scene that owns the entity.
- [name](name.md): The name of the entity.
- [debugDescription](debugdescription.md): A human readable description of the entity.
