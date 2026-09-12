> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/loadmodelasync(named:in:)](https://developer.apple.com/documentation/realitykit/entity/loadmodelasync(named:in:))

# loadModelAsync(named:in:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Asynchronously loads a model entity from a bundle.

## Declaration

```swift
@MainActor @preconcurrency static func loadModelAsync(named name: String, in bundle: Bundle? = nil) -> LoadRequest<ModelEntity>
```

## Parameters

- `name`: The base name of the file to load, omitting the filename extension.
- `bundle`: The bundle containing the file. Use `nil` to search the app’s main bundle.

<a id="return-value"></a>

## Return Value

A resource loader that publishes the root entity in the loaded file as a [ModelEntity](../modelentity.md).

## Mentioned In

- [Reducing CPU Utilization in Your RealityKit App](../reducing-cpu-utilization-in-your-realitykit-app.md)

## See Also

### Loading a flattened model entity

- [loadModel(named:in:)](loadmodel%28named_in_%29.md): Synchronously loads a model entity from a bundle.
- [loadModel(contentsOf:withName:)](loadmodel%28contentsof_withname_%29.md): Synchronously loads a model entity from a file URL.
- [loadModelAsync(contentsOf:withName:)](loadmodelasync%28contentsof_withname_%29.md): Deprecated. Returns a load request that creates a model entity by asynchronously loading it from a file URL and flattening the model entity’s hierarchy.
