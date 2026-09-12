> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/loadasync(named:in:)](https://developer.apple.com/documentation/realitykit/entity/loadasync(named:in:))

# loadAsync(named:in:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a load request that creates an entity by asynchronously loading it from a bundle.

## Declaration

```swift
@MainActor @preconcurrency static func loadAsync(named name: String, in bundle: Bundle? = nil) -> LoadRequest<Entity>
```

## Parameters

- `name`: The base name of the file to load, omitting the filename extension.
- `bundle`: The bundle containing the file. Use `nil` to search the app’s main bundle.

<a id="return-value"></a>

## Return Value

A resource loader that publishes the root entity in the loaded file.

## Mentioned In

- [Loading remote assets in multiplayer apps](../loading-remote-assets.md)

<a id="discussion"></a>

## Discussion

RealityKit supports loading entities from USD (`.usd`, `.usda`, `.usdc`, `.usdz`) and Reality (`.reality`) files.

When building your app, Xcode automatically converts any Reality Composer projects (`.rcproject`) in the selected target into Reality files, which it then copies into your app’s bundle.

For more information on loading entities, see [Loading entities from a file](../loading-entities-from-a-file.md).

## See Also

### Loading an entity hierarchy

- [load(named:in:)](load%28named_in_%29.md): Returns an entity by synchronously loading it from a bundle.
- [load(contentsOf:withName:)](load%28contentsof_withname_%29.md): Returns an entity by synchronously loading it from a file URL.
- [loadAsync(contentsOf:withName:)](loadasync%28contentsof_withname_%29.md): Deprecated. Returns a load request that creates an entity by asynchronously loading it from a file URL and preserving the entity’s hierarchy.
