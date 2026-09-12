> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/loadasync(contentsof:withname:)](https://developer.apple.com/documentation/realitykit/entity/loadasync(contentsof:withname:))

# loadAsync(contentsOf:withName:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a load request that creates an entity by asynchronously loading it from a file URL and preserving the entity’s hierarchy.

## Declaration

```swift
@MainActor @preconcurrency static func loadAsync(contentsOf url: URL, withName resourceName: String? = nil) -> LoadRequest<Entity>
```

## Parameters

- `url`: A file URL representing the file to load. For Reality files, append a URL fragment to specify a scene name — for example, `my.reality#MyScene`.
- `resourceName`: A unique name the method assigns to the resource it loads, for use in network synchronization.

<a id="discussion"></a>

## Discussion

RealityKit supports loading entities from USD (`.usd`, `.usda`, `.usdc`, `.usdz`) and Reality (`.reality`) files. For Reality files that contain multiple scenes, specify which scene to load by appending a URL fragment with the scene name — for example, `my.reality#MyScene`.

For more information on loading entities, see [Loading entities from a file](../loading-entities-from-a-file.md).

## See Also

### Loading an entity hierarchy

- [load(named:in:)](load%28named_in_%29.md): Returns an entity by synchronously loading it from a bundle.
- [load(contentsOf:withName:)](load%28contentsof_withname_%29.md): Returns an entity by synchronously loading it from a file URL.
- [loadAsync(named:in:)](loadasync%28named_in_%29.md): Deprecated. Returns a load request that creates an entity by asynchronously loading it from a bundle.
