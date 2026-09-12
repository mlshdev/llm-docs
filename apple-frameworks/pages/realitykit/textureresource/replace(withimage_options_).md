> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/replace(withimage:options:)](https://developer.apple.com/documentation/realitykit/textureresource/replace(withimage:options:))

# replace(withImage:options:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Dynamically replaces the texture with a Core Graphics image.

## Declaration

```swift
@MainActor @preconcurrency func replace(withImage cgImage: CGImage, options: TextureResource.CreateOptions) throws
```

## Parameters

- `cgImage`: The source image.
- `options`: Options that specify the type of texture to create.

<a id="discussion"></a>

## Discussion

This method blocks until the resource updates. Don’t use this method for updates at frame-rate frequency. For frequent texture changes, see [replace(withDrawables:)](replace%28withdrawables_%29.md). If you have an attached [TextureResource.DrawableQueue](drawablequeue-swift.class.md) on this resource, this function detaches it.

To  ensure consistent usage of this texture resource, pass the same semantic in `options` that you use to create the resource.

> **Note**

> The contents of a modified texture resource don’t sync between network clients.

## See Also

### Modifying the texture

- [replace(withDrawables:)](replace%28withdrawables_%29.md): Dynamically replaces the texture with a drawable queue.
- [replace(using:options:)](replace%28using_options_%29.md): Asynchronously replaces the texture with a Core Graphics image.
- [replace(with:)](replace%28with_%29.md): Replaces a texture resource with a low-level texture.
