> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/loadbodytrackedasync(contentsof:withname:)](https://developer.apple.com/documentation/realitykit/entity/loadbodytrackedasync(contentsof:withname:))

# loadBodyTrackedAsync(contentsOf:withName:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0)

Asynchronously loads a body-tracked entity from a file URL.

## Declaration

```swift
@MainActor @preconcurrency static func loadBodyTrackedAsync(contentsOf url: URL, withName resourceName: String? = nil) -> LoadRequest<BodyTrackedEntity>
```

## Parameters

- `url`: A file URL representing the file to load.
- `resourceName`: A unique name the method assigns to the resource it loads, for use in network synchronization.

<a id="return-value"></a>

## Return Value

A resource loader that publishes the root entity in the loaded file as a [BodyTrackedEntity](../bodytrackedentity.md).

## See Also

### Loading a flattened body-tracked entity

- [loadBodyTracked(named:in:)](loadbodytracked%28named_in_%29.md): Synchronously loads a body-tracked entity from a bundle.
- [loadBodyTracked(contentsOf:withName:)](loadbodytracked%28contentsof_withname_%29.md): Synchronously loads a body-tracked entity from a file URL.
- [loadBodyTrackedAsync(named:in:)](loadbodytrackedasync%28named_in_%29.md): Deprecated. Asynchronously loads a body-tracked entity from a bundle.
