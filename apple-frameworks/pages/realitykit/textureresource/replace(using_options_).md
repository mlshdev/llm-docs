> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/replace(using:options:)](https://developer.apple.com/documentation/realitykit/textureresource/replace(using:options:))

# replace(using:options:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Asynchronously replaces the texture with a Core Graphics image.

## Declaration

```swift
@MainActor @preconcurrency func replace(using cgImage: CGImage, options: TextureResource.CreateOptions) async throws
```

## Parameters

- `cgImage`: The source image.
- `options`: Options that specify the type of texture to create. To preserve `TextureResource` usage, specify the same semantic.

<a id="discussion"></a>

## Discussion

Don’t use this method for updates at frame-rate frequency. For frequent texture changes, see [replace(withDrawables:)](replace%28withdrawables_%29.md). To ensure consistent usage of this texture resource, pass the same semantic in `options` that you use to create the resource.

> **Note**

> The contents of a modified texture resource don’t sync between network clients.

## See Also

### Modifying the texture

- [replace(withDrawables:)](replace%28withdrawables_%29.md): Dynamically replaces the texture with a drawable queue.
- [replace(withImage:options:)](replace%28withimage_options_%29.md): Dynamically replaces the texture with a Core Graphics image.
- [replace(with:)](replace%28with_%29.md): Replaces a texture resource with a low-level texture.
