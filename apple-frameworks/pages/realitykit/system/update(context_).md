> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/system/update(context:)](https://developer.apple.com/documentation/realitykit/system/update(context:))

# update(context:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Updates entities up to once every scene update.

## Declaration

```swift
@MainActor @preconcurrency mutating func update(context: SceneUpdateContext)
```

## Parameters

- `context`: The scene context for the scene to update.

## Mentioned In

- [Implementing systems for entities in a scene](../implementing-systems-for-entities-in-a-scene.md)

<a id="discussion"></a>

## Discussion

RealityKit calls this method on all registered systems, as often as the `updatingSystemWhen` parameter of [entities(matching:updatingSystemWhen:)](../sceneupdatecontext/entities%28matching_updatingsystemwhen_%29.md) defines.

The `context` parameter contains a reference to the scene that the [System](../system.md) is updating, along with the elapsed time since RealityKit last called the update method for the same scene. Use [entities(matching:updatingSystemWhen:)](../sceneupdatecontext/entities%28matching_updatingsystemwhen_%29.md) inside this method for the most optimized way to find the matching entities for this [System](../system.md).

## Default Implementations

### System Implementations

- [update(context:)](update%28context_%29-3d0qz.md): A default implementation that does nothing.

## See Also

### Implementing system logic

- [SceneUpdateContext](../sceneupdatecontext.md): An object that contains information about the scene to update.
- [EntityQuery](../entityquery.md): An object that retrieves entities from a scene.
- [QueryPredicate](../querypredicate.md): An object that defines the criteria for an entity query.
- [QueryResult](../queryresult.md): An object that returns the results of an entity query.
