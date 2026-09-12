> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/load(contentsof:withname:options:)](https://developer.apple.com/documentation/realitykit/textureresource/load(contentsof:withname:options:))

# load(contentsOf:withName:options:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Synchronously loads a texture resource from a URL with options.

## Declaration

```swift
@MainActor @preconcurrency static func load(contentsOf url: URL, withName resourceName: String? = nil, options: TextureResource.CreateOptions) throws -> TextureResource
```

## Parameters

- `url`: The URL of the resource.
- `resourceName`: A unique name the method assigns to the resource it loads, for use in network synchronization.
- `options`: A configuration for generating the texture.

<a id="return-value"></a>

## Return Value

The loaded resource.

<a id="discussion"></a>

## Discussion

Loading a [TextureResource](../textureresource.md) with this method blocks the main actor because it’s synchronous, so only call it from a command-line application. The method can stall a regular app, which makes it visibly hitch, and the system terminates an app if its UI becomes unresponsive. See [init(named:in:)](init%28named_in_%29.md) for an example that demonstrates how to safely load content.

This method loads the image that the `URL` specifies, and creates a texture resource from it. The method blocks until it finishes loading the image and creating the texture resource.

RealityKit uses the resource name to identify resources, and to match texture resources between networked peers. Specify a unique name for each texture resource you load or generate.

## See Also

### Loading a texture

- [init(named:in:)](init%28named_in_%29.md): Asynchronously loads a texture resource from a bundle.
- [init(named:in:options:)](init%28named_in_options_%29.md): Asynchronously loads a texture resource from a bundle with options.
- [init(contentsOf:withName:options:)](init%28contentsof_withname_options_%29.md): Asynchronously creates a texture resource from a file URL with creation options.
- [init(contentsOf:withName:)](init%28contentsof_withname_%29.md): Asynchronously creates a texture resource from a file URL.
- [load(named:in:)](load%28named_in_%29.md): Returns a texture resource by synchronously loading it from a bundle.
- [load(named:in:options:)](load%28named_in_options_%29.md): Returns a texture resource by synchronously loading it from a bundle with options.
- [load(contentsOf:withName:)](load%28contentsof_withname_%29.md): Synchronously loads a texture resource from a URL.
- [loadAsync(named:in:)](loadasync%28named_in_%29.md): Deprecated. Returns a load request that creates a texture resource by asynchronously loading it from a bundle.
- [loadAsync(named:in:options:)](loadasync%28named_in_options_%29.md): Deprecated. Returns a load request that creates a texture resource by asynchronously loading it from a bundle with options.
- [loadAsync(contentsOf:withName:)](loadasync%28contentsof_withname_%29.md): Deprecated. Asynchronously loads a texture resource from a URL.
