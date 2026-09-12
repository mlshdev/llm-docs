> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/load(contentsof:withname:)](https://developer.apple.com/documentation/realitykit/entity/load(contentsof:withname:))

# load(contentsOf:withName:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Returns an entity by synchronously loading it from a file URL.

## Declaration

```swift
@MainActor @preconcurrency static func load(contentsOf url: URL, withName resourceName: String? = nil) throws -> Entity
```

## Parameters

- `url`: A file URL representing the file to load. For Reality files, append a URL fragment to specify a scene name — for example, `my.reality#MyScene`.
- `resourceName`: A unique name the method assigns to the resource it loads, for use in network synchronization.

<a id="return-value"></a>

## Return Value

The root entity in the loaded file.

## Mentioned In

- [Loading entities from a file](../loading-entities-from-a-file.md)

<a id="discussion"></a>

## Discussion

Loading an [Entity](../entity.md) with this method blocks the main actor because it’s synchronous, so only call it from a command-line application. The method can stall a regular app, which makes it visibly hitch, and the system terminates an app if its UI becomes unresponsive. See [init(named:in:)](init%28named_in_%29.md) for an example that demonstrates how to safely load content.

RealityKit supports loading entities from USD (`.usd`, `.usda`, `.usdc`, `.usdz`) and Reality (`.reality`) files. For Reality files that contain multiple scenes, specify which scene to load by appending a URL fragment with the scene name — for example, `my.reality#MyScene`.

For more information on loading entities, see [Loading entities from a file](../loading-entities-from-a-file.md).

## See Also

### Loading an entity hierarchy

- [load(named:in:)](load%28named_in_%29.md): Returns an entity by synchronously loading it from a bundle.
- [loadAsync(named:in:)](loadasync%28named_in_%29.md): Deprecated. Returns a load request that creates an entity by asynchronously loading it from a bundle.
- [loadAsync(contentsOf:withName:)](loadasync%28contentsof_withname_%29.md): Deprecated. Returns a load request that creates an entity by asynchronously loading it from a file URL and preserving the entity’s hierarchy.
