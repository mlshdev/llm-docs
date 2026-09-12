> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/findentity(id:)](https://developer.apple.com/documentation/realitykit/scene/findentity(id:))

# findEntity(id:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Returns `Entity` with the given `Entity.ID` in the `Scene`.

## Declaration

```swift
@MainActor @preconcurrency func findEntity(id: Entity.ID) -> Entity?
```

## Parameters

- `id`: `Entity.ID` obtained from `Entity.id`

<a id="return-value"></a>

## Return Value

`Entity` with the given `Entity.ID`, or `nil` if no such `Entity` is found in the `Scene`.

<a id="discussion"></a>

## Discussion

> **Note**

> This method uses efficient mapping from `Entity.ID` to `Entity`, not linear traversal of all Entities in the `Scene`.

## See Also

### Finding entities

- [findEntity(named:)](findentity%28named_%29.md): Searches the scene’s anchor entity hierarchies for an entity with the given name.
- [performQuery(\_:)](performquery%28__%29.md): Returns all entities of the scene which pass the query.
