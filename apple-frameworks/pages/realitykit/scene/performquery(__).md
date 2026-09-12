> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/performquery(_:)](https://developer.apple.com/documentation/realitykit/scene/performquery(_:))

# performQuery(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Returns all entities of the scene which pass the query.

## Declaration

```swift
@MainActor @preconcurrency func performQuery(_ query: EntityQuery) -> QueryResult<Entity>
```

<a id="discussion"></a>

## Discussion

When in [update(context:)](../system/update%28context_%29.md), call [entities(matching:updatingSystemWhen:)](../sceneupdatecontext/entities%28matching_updatingsystemwhen_%29.md) instead of `performQuery`. This allows the [System](../system.md) to sleep on some platforms when there is no matching component, reducing unnecessary work.

## See Also

### Finding entities

- [findEntity(named:)](findentity%28named_%29.md): Searches the scene’s anchor entity hierarchies for an entity with the given name.
- [findEntity(id:)](findentity%28id_%29.md): Returns `Entity` with the given `Entity.ID` in the `Scene`.
