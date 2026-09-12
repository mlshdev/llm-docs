> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/generate(from:named:options:)](https://developer.apple.com/documentation/realitykit/textureresource/generate(from:named:options:))

# generate(from:named:options:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** tvOS 26.0+

Asynchronously generates a texture resource from an in-memory Core Graphics image.

## Declaration

```swift
@MainActor @preconcurrency static func generate(from cgImage: CGImage, named resourceName: String? = nil, options: TextureResource.CreateOptions) async throws -> TextureResource
```

## Parameters

- `cgImage`: The source image.
- `resourceName`: A unique name for syncing the texture resource across the network. The name is empty if you don’t include one.
- `options`: A configuration for generating the texture.

<a id="return-value"></a>

## Return Value

A texture resource.

<a id="discussion"></a>

## Discussion

This method creates a texture resource from an existing [CGImage](../../coregraphics/cgimage.md) with specific options. RealityKit uses the resource name to identify resources, and to match texture resources between networked peers. Specify a unique name for each texture resource you load or generate.

## See Also

### Deprecated

- [generate(from:withName:options:)](generate%28from_withname_options_%29.md): Deprecated. Synchronously creates a texture resource from an in-memory Core Graphics image.
- [generateAsync(from:withName:options:)](generateasync%28from_withname_options_%29.md): Deprecated. Asynchronously generates a texture resource from an in-memory Core Graphics image.
- [replaceAsync(withImage:options:)](replaceasync%28withimage_options_%29.md): Deprecated. Asynchronously replaces the texture with a Core Graphics image.
- [loadAsync(contentsOf:withName:options:)](loadasync%28contentsof_withname_options_%29.md): Deprecated. Asynchronously loads a texture resource from a URL with options.
