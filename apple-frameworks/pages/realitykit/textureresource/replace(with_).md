> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/replace(with:)](https://developer.apple.com/documentation/realitykit/textureresource/replace(with:))

# replace(with:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Replaces a texture resource with a low-level texture.

## Declaration

```swift
@MainActor @preconcurrency func replace(with texture: LowLevelTexture)
```

## Parameters

- `texture`: The texture data that defines the resource.

<a id="discussion"></a>

## Discussion

> **Warning**

> It’s more efficient to use [replace(using:)](../lowleveltexture/replace%28using_%29.md) to update a [LowLevelTexture](../lowleveltexture.md) on the GPU than it is to update the `TextureResource`. Prefer to update the `LowLevelTexture` directly instead.

> **Note**

> This method marks the asset as mutated, preventing newly loaded entities from sharing the texture.

## See Also

### Modifying the texture

- [replace(withDrawables:)](replace%28withdrawables_%29.md): Dynamically replaces the texture with a drawable queue.
- [replace(withImage:options:)](replace%28withimage_options_%29.md): Dynamically replaces the texture with a Core Graphics image.
- [replace(using:options:)](replace%28using_options_%29.md): Asynchronously replaces the texture with a Core Graphics image.
