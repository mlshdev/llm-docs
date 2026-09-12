> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/replace(withdrawables:)](https://developer.apple.com/documentation/realitykit/textureresource/replace(withdrawables:))

# replace(withDrawables:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Dynamically replaces the texture with a drawable queue.

## Declaration

```swift
@MainActor @preconcurrency func replace(withDrawables drawableQueue: TextureResource.DrawableQueue)
```

## See Also

### Modifying the texture

- [replace(withImage:options:)](replace%28withimage_options_%29.md): Dynamically replaces the texture with a Core Graphics image.
- [replace(using:options:)](replace%28using_options_%29.md): Asynchronously replaces the texture with a Core Graphics image.
- [replace(with:)](replace%28with_%29.md): Replaces a texture resource with a low-level texture.
