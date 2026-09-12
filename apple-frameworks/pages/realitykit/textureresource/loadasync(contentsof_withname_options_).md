> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/loadasync(contentsof:withname:options:)](https://developer.apple.com/documentation/realitykit/textureresource/loadasync(contentsof:withname:options:))

# loadAsync(contentsOf:withName:options:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Asynchronously loads a texture resource from a URL with options.

## Declaration

```swift
@MainActor @preconcurrency static func loadAsync(contentsOf url: URL, withName resourceName: String? = nil, options: TextureResource.CreateOptions) -> LoadRequest<TextureResource>
```

## Parameters

- `url`: The path or address of the file to load.
- `resourceName`: A unique name the method assigns to the resource it loads, for use in network synchronization.
- `options`: A configuration for generating the texture.

<a id="return-value"></a>

## Return Value

A load operation that publishes the resource.

<a id="discussion"></a>

## Discussion

RealityKit uses the resource name to distinguish resources locally, and to match texture resources between networked peers. Specify a unique name for each texture resource you load or generate.

## See Also

### Deprecated

- [generate(from:withName:options:)](generate%28from_withname_options_%29.md): Deprecated. Synchronously creates a texture resource from an in-memory Core Graphics image.
- [generateAsync(from:withName:options:)](generateasync%28from_withname_options_%29.md): Deprecated. Asynchronously generates a texture resource from an in-memory Core Graphics image.
- [replaceAsync(withImage:options:)](replaceasync%28withimage_options_%29.md): Deprecated. Asynchronously replaces the texture with a Core Graphics image.
- [generate(from:named:options:)](generate%28from_named_options_%29.md): Asynchronously generates a texture resource from an in-memory Core Graphics image.
