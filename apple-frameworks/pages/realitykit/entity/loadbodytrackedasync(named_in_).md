> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/loadbodytrackedasync(named:in:)](https://developer.apple.com/documentation/realitykit/entity/loadbodytrackedasync(named:in:))

# loadBodyTrackedAsync(named:in:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0)

Asynchronously loads a body-tracked entity from a bundle.

## Declaration

```swift
@MainActor @preconcurrency static func loadBodyTrackedAsync(named name: String, in bundle: Bundle? = nil) -> LoadRequest<BodyTrackedEntity>
```

## Parameters

- `name`: The base name of the file to load, omitting the filename extension.
- `bundle`: The bundle containing the file. Use `nil` to search the app’s main bundle.

<a id="return-value"></a>

## Return Value

A resource loader that publishes the root entity in the loaded file as a [BodyTrackedEntity](../bodytrackedentity.md).

## See Also

### Loading a flattened body-tracked entity

- [loadBodyTracked(named:in:)](loadbodytracked%28named_in_%29.md): Synchronously loads a body-tracked entity from a bundle.
- [loadBodyTracked(contentsOf:withName:)](loadbodytracked%28contentsof_withname_%29.md): Synchronously loads a body-tracked entity from a file URL.
- [loadBodyTrackedAsync(contentsOf:withName:)](loadbodytrackedasync%28contentsof_withname_%29.md): Deprecated. Asynchronously loads a body-tracked entity from a file URL.
