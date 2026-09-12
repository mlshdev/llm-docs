> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sceneupdatecontext/entities(matching:updatingsystemwhen:)](https://developer.apple.com/documentation/realitykit/sceneupdatecontext/entities(matching:updatingsystemwhen:))

# entities(matching:updatingSystemWhen:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Returns all entities which pass the query predicate of the query.

## Declaration

```swift
func entities(matching query: EntityQuery, updatingSystemWhen condition: SystemUpdateCondition) -> QueryResult<Entity>
```

## Parameters

- `query`: The query identifying which entities you want to fetch.
- `condition`: How often the [System](../system.md) is updated (if the query is not empty).

## Mentioned In

- [Implementing systems for entities in a scene](../implementing-systems-for-entities-in-a-scene.md)

<a id="discussion"></a>

## Discussion

Calling this function can increase the rate at which RealityKit calls the [update(context:)](../system/update%28context_%29.md) method. If `condition` is not met for the current update, this method returns an empty result.
