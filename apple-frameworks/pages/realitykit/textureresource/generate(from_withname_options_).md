> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/generate(from:withname:options:)](https://developer.apple.com/documentation/realitykit/textureresource/generate(from:withname:options:))

# generate(from:withName:options:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Synchronously creates a texture resource from an in-memory Core Graphics image.

## Declaration

```swift
@MainActor @preconcurrency static func generate(from cgImage: CGImage, withName resourceName: String? = nil, options: TextureResource.CreateOptions) throws -> TextureResource
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

This method creates a texture resource from an existing [CGImage](../../coregraphics/cgimage.md) with specific options.

RealityKit uses the resource name to identify resources, and to match texture resources between networked peers. Specify a unique name for each texture resource you load or generate.

## See Also

### Deprecated

- [generateAsync(from:withName:options:)](generateasync%28from_withname_options_%29.md): Deprecated. Asynchronously generates a texture resource from an in-memory Core Graphics image.
- [replaceAsync(withImage:options:)](replaceasync%28withimage_options_%29.md): Deprecated. Asynchronously replaces the texture with a Core Graphics image.
- [generate(from:named:options:)](generate%28from_named_options_%29.md): Asynchronously generates a texture resource from an in-memory Core Graphics image.
- [loadAsync(contentsOf:withName:options:)](loadasync%28contentsof_withname_options_%29.md): Deprecated. Asynchronously loads a texture resource from a URL with options.
