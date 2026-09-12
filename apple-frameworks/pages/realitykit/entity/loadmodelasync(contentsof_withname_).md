> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/loadmodelasync(contentsof:withname:)](https://developer.apple.com/documentation/realitykit/entity/loadmodelasync(contentsof:withname:))

# loadModelAsync(contentsOf:withName:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a load request that creates a model entity by asynchronously loading it from a file URL and flattening the model entity’s hierarchy.

## Declaration

```swift
@MainActor @preconcurrency static func loadModelAsync(contentsOf url: URL, withName resourceName: String? = nil) -> LoadRequest<ModelEntity>
```

## Parameters

- `url`: The location of a file that represents an entity.
- `resourceName`: A unique name the method assigns to the resource it loads, for use in network synchronization.

<a id="discussion"></a>

## Discussion

For more information on loading entities, see [Loading entities from a file](../loading-entities-from-a-file.md).

## See Also

### Loading a flattened model entity

- [loadModel(named:in:)](loadmodel%28named_in_%29.md): Synchronously loads a model entity from a bundle.
- [loadModel(contentsOf:withName:)](loadmodel%28contentsof_withname_%29.md): Synchronously loads a model entity from a file URL.
- [loadModelAsync(named:in:)](loadmodelasync%28named_in_%29.md): Deprecated. Asynchronously loads a model entity from a bundle.
