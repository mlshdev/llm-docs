> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/loadanchorasync(named:in:)](https://developer.apple.com/documentation/realitykit/entity/loadanchorasync(named:in:))

# loadAnchorAsync(named:in:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Asynchronously loads an anchor entity from a bundle.

## Declaration

```swift
@MainActor @preconcurrency static func loadAnchorAsync(named name: String, in bundle: Bundle? = nil) -> LoadRequest<AnchorEntity>
```

## Parameters

- `name`: The base name of the file to load, omitting the filename extension.
- `bundle`: The bundle containing the file. Use `nil` to search the app’s main bundle.

<a id="return-value"></a>

## Return Value

A resource loader that publishes the root entity in the loaded file as an [AnchorEntity](../anchorentity.md).

## See Also

### Loading an anchor entity

- [loadAnchor(named:in:)](loadanchor%28named_in_%29.md): Synchronously loads an anchor entity from a bundle.
- [loadAnchor(contentsOf:withName:)](loadanchor%28contentsof_withname_%29.md): Synchronously loads an anchor entity from a file URL.
- [loadAnchorAsync(contentsOf:withName:)](loadanchorasync%28contentsof_withname_%29.md): Deprecated. Asynchronously loads an anchor entity from a file URL.
