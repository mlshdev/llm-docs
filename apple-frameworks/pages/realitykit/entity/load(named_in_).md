> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/load(named:in:)](https://developer.apple.com/documentation/realitykit/entity/load(named:in:))

# load(named:in:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Returns an entity by synchronously loading it from a bundle.

## Declaration

```swift
@MainActor @preconcurrency static func load(named name: String, in bundle: Bundle? = nil) throws -> Entity
```

## Parameters

- `name`: The base name of the file to load.  An extension isn’t required, but you can provide one to resolve collisions.  In the presence of a collision, the provided name resolves with the following order of precedence: \[`.usdz`, `.usd`, `.usdc`, `.usda`\].
- `bundle`: The bundle containing the file. Use `nil` to search the app’s main bundle.

<a id="return-value"></a>

## Return Value

The root entity in the loaded file.

## Mentioned In

- [Loading remote assets in multiplayer apps](../loading-remote-assets.md)

<a id="discussion"></a>

## Discussion

Loading an [Entity](../entity.md) with this method blocks the main actor because it’s synchronous, so only call it from a command-line application. The method can stall a regular app, which makes it visibly hitch, and the system terminates an app if its UI becomes unresponsive. See [init(named:in:)](init%28named_in_%29.md) for an example that demonstrates how to safely load content.

RealityKit supports loading entities from USD (`.usd`, `.usda`, `.usdc`, `.usdz`) and Reality (`.reality`) files.

When building your app, Xcode automatically converts any Reality Composer projects (`.rcproject`) in the selected target into Reality files, which it then copies into your app’s bundle.

For more information on loading entities, see [Loading entities from a file](../loading-entities-from-a-file.md).

## See Also

### Loading an entity hierarchy

- [load(contentsOf:withName:)](load%28contentsof_withname_%29.md): Returns an entity by synchronously loading it from a file URL.
- [loadAsync(named:in:)](loadasync%28named_in_%29.md): Deprecated. Returns a load request that creates an entity by asynchronously loading it from a bundle.
- [loadAsync(contentsOf:withName:)](loadasync%28contentsof_withname_%29.md): Deprecated. Returns a load request that creates an entity by asynchronously loading it from a file URL and preserving the entity’s hierarchy.
