> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/loadmodel(contentsof:withname:)](https://developer.apple.com/documentation/realitykit/entity/loadmodel(contentsof:withname:))

# loadModel(contentsOf:withName:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 1.0+

Synchronously loads a model entity from a file URL.

## Declaration

```swift
@MainActor @preconcurrency static func loadModel(contentsOf url: URL, withName resourceName: String? = nil) throws -> ModelEntity
```

## Parameters

- `url`: A file URL representing the file to load.
- `resourceName`: A unique name the method assigns to the resource it loads, for use in network synchronization.

<a id="return-value"></a>

## Return Value

The root entity in the loaded file, which Reality Kit casts as a [ModelEntity](../modelentity.md).

<a id="discussion"></a>

## Discussion

Loading an [Entity](../entity.md) with this method blocks the main actor because it’s synchronous, so only call it from a command-line application. The method can stall a regular app, which makes it visibly hitch, and the system terminates an app if its UI becomes unresponsive. See [init(named:in:)](init%28named_in_%29.md) for an example that demonstrates how to safely load content.

## See Also

### Loading a flattened model entity

- [loadModel(named:in:)](loadmodel%28named_in_%29.md): Synchronously loads a model entity from a bundle.
- [loadModelAsync(named:in:)](loadmodelasync%28named_in_%29.md): Deprecated. Asynchronously loads a model entity from a bundle.
- [loadModelAsync(contentsOf:withName:)](loadmodelasync%28contentsof_withname_%29.md): Deprecated. Returns a load request that creates a model entity by asynchronously loading it from a file URL and flattening the model entity’s hierarchy.
