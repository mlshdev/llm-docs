> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/init(contentsof:withname:)](https://developer.apple.com/documentation/realitykit/entity/init(contentsof:withname:))

# init(contentsOf:withName:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates an entity by asynchronously loading it from a file URL.

## Declaration

```swift
@MainActor @preconcurrency convenience init(contentsOf url: URL, withName resourceName: String? = nil) async throws
```

## Parameters

- `url`: A file URL representing the file to load. For Reality files, append a URL fragment to specify a scene name — for example, `my.reality#MyScene`.
- `resourceName`: A unique name the method assigns to the resource it loads, for use in network synchronization.

<a id="return-value"></a>

## Return Value

The root entity of the loaded file.

<a id="discussion"></a>

## Discussion

RealityKit supports loading entities from USD (`.usd`, `.usda`, `.usdc`, `.usdz`) and Reality (`.reality`) files.

For Reality files that contain multiple scenes, specify which scene to load by appending a URL fragment with the scene name — for example, `my.reality#MyScene`. Construct the URL using `URLComponents` or `URL(string:)` to preserve the fragment:

```swift
var components = URLComponents()
components.scheme = "file"
components.path = "/path/to/MyContent.reality"
components.fragment = "MyScene"

if let url = components.url {
    let entity = try await Entity(contentsOf: url)
}
```

For more information on loading entities, see [Loading entities from a file](../loading-entities-from-a-file.md).

See [init(named:in:)](init%28named_in_%29.md) for an example of optimally loading content.

## See Also

### Loading an entity from a file

- [Generating procedural textures](../../visionos/generating-procedural-textures-in-visionos.md): Display a 3D model that generates procedural textures in a reality view.
- [Resource](../resource.md): A shared resource you use to configure a component, like a material, mesh, or texture.
- [Loading entities from a file](../loading-entities-from-a-file.md): Retrieve an entity from storage on disk using a synchronous or an asynchronous load operation.
- [Stored entities](../stored-entities.md): Manage entities that you store as assets on disk.
- [Creating USD files for Apple devices](../../usd/creating-usd-files-for-apple-devices.md): Generate 3D assets that render as expected.
- [init(named:in:)](init%28named_in_%29.md): Creates an entity by asynchronously loading it from a bundle.
- [ReferenceComponent](../referencecomponent.md): A component that can load another entity from a file.
