> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/findentity(named:)](https://developer.apple.com/documentation/realitykit/scene/findentity(named:))

# findEntity(named:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Searches the scene’s anchor entity hierarchies for an entity with the given name.

## Declaration

```swift
@MainActor @preconcurrency func findEntity(named name: String) -> Entity?
```

## Parameters

- `name`: The name of the entity for which to search.

<a id="return-value"></a>

## Return Value

The first entity found with the given name, or `nil` if none is found.

<a id="discussion"></a>

## Discussion

The [findEntity(named:)](findentity%28named_%29.md) method conducts a depth-first, recursive search over all of the scene’s entities for one whose [name](../entity/name.md) property matches the given name. The method returns the first match. Entity names need not be unique.

## See Also

### Finding entities

- [performQuery(\_:)](performquery%28__%29.md): Returns all entities of the scene which pass the query.
- [findEntity(id:)](findentity%28id_%29.md): Returns `Entity` with the given `Entity.ID` in the `Scene`.
