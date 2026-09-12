> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/init(named:in:options:)](https://developer.apple.com/documentation/realitykit/textureresource/init(named:in:options:))

# init(named:in:options:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Asynchronously loads a texture resource from a bundle with options.

## Declaration

```swift
@MainActor @preconcurrency convenience init(named name: String, in bundle: Bundle? = nil, options: TextureResource.CreateOptions) async throws
```

## Parameters

- `name`: The name of the resource. The filename extension is optional.
- `bundle`: The bundle to search for the resource. Use `nil` to indicate the app’s bundle.
- `options`: Configuration options for texture creation.

<a id="discussion"></a>

## Discussion

RealityKit automatically creates a resource name for the texture resource based on the values of `name` and `bundle`. RealityKit uses the resource name to identify resources, and to match texture resources between networked peers. Specify a unique name for each texture resource you load or generate.

See [init(named:in:)](init%28named_in_%29.md) for an example of optimally loading textures with other content.

## See Also

### Loading a texture

- [init(named:in:)](init%28named_in_%29.md): Asynchronously loads a texture resource from a bundle.
- [init(contentsOf:withName:options:)](init%28contentsof_withname_options_%29.md): Asynchronously creates a texture resource from a file URL with creation options.
- [init(contentsOf:withName:)](init%28contentsof_withname_%29.md): Asynchronously creates a texture resource from a file URL.
- [load(named:in:)](load%28named_in_%29.md): Returns a texture resource by synchronously loading it from a bundle.
- [load(named:in:options:)](load%28named_in_options_%29.md): Returns a texture resource by synchronously loading it from a bundle with options.
- [load(contentsOf:withName:options:)](load%28contentsof_withname_options_%29.md): Synchronously loads a texture resource from a URL with options.
- [load(contentsOf:withName:)](load%28contentsof_withname_%29.md): Synchronously loads a texture resource from a URL.
- [loadAsync(named:in:)](loadasync%28named_in_%29.md): Deprecated. Returns a load request that creates a texture resource by asynchronously loading it from a bundle.
- [loadAsync(named:in:options:)](loadasync%28named_in_options_%29.md): Deprecated. Returns a load request that creates a texture resource by asynchronously loading it from a bundle with options.
- [loadAsync(contentsOf:withName:)](loadasync%28contentsof_withname_%29.md): Deprecated. Asynchronously loads a texture resource from a URL.
