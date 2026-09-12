> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/loadasync(contentsof:withname:)](https://developer.apple.com/documentation/realitykit/textureresource/loadasync(contentsof:withname:))

# loadAsync(contentsOf:withName:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Asynchronously loads a texture resource from a URL.

## Declaration

```swift
@MainActor @preconcurrency static func loadAsync(contentsOf url: URL, withName resourceName: String? = nil) -> LoadRequest<TextureResource>
```

## Parameters

- `url`: The path or address of the file to load.
- `resourceName`: A unique name the method assigns to the resource it loads, for use in network synchronization.

<a id="return-value"></a>

## Return Value

A load operation that publishes the resource.

<a id="discussion"></a>

## Discussion

RealityKit uses the resource name to distinguish resources locally, and to match texture resources between networked peers. Specify a unique name for each texture resource you load or generate.

## See Also

### Loading a texture

- [init(named:in:)](init%28named_in_%29.md): Asynchronously loads a texture resource from a bundle.
- [init(named:in:options:)](init%28named_in_options_%29.md): Asynchronously loads a texture resource from a bundle with options.
- [init(contentsOf:withName:options:)](init%28contentsof_withname_options_%29.md): Asynchronously creates a texture resource from a file URL with creation options.
- [init(contentsOf:withName:)](init%28contentsof_withname_%29.md): Asynchronously creates a texture resource from a file URL.
- [load(named:in:)](load%28named_in_%29.md): Returns a texture resource by synchronously loading it from a bundle.
- [load(named:in:options:)](load%28named_in_options_%29.md): Returns a texture resource by synchronously loading it from a bundle with options.
- [load(contentsOf:withName:options:)](load%28contentsof_withname_options_%29.md): Synchronously loads a texture resource from a URL with options.
- [load(contentsOf:withName:)](load%28contentsof_withname_%29.md): Synchronously loads a texture resource from a URL.
- [loadAsync(named:in:)](loadasync%28named_in_%29.md): Deprecated. Returns a load request that creates a texture resource by asynchronously loading it from a bundle.
- [loadAsync(named:in:options:)](loadasync%28named_in_options_%29.md): Deprecated. Returns a load request that creates a texture resource by asynchronously loading it from a bundle with options.
