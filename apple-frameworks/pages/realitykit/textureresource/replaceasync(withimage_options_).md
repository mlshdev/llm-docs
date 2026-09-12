> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/replaceasync(withimage:options:)](https://developer.apple.com/documentation/realitykit/textureresource/replaceasync(withimage:options:))

# replaceAsync(withImage:options:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Asynchronously replaces the texture with a Core Graphics image.

## Declaration

```swift
@MainActor @preconcurrency func replaceAsync(withImage cgImage: CGImage, options: TextureResource.CreateOptions) -> LoadRequest<TextureResource>
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

### Deprecated

- [generate(from:withName:options:)](generate%28from_withname_options_%29.md): Deprecated. Synchronously creates a texture resource from an in-memory Core Graphics image.
- [generateAsync(from:withName:options:)](generateasync%28from_withname_options_%29.md): Deprecated. Asynchronously generates a texture resource from an in-memory Core Graphics image.
- [generate(from:named:options:)](generate%28from_named_options_%29.md): Asynchronously generates a texture resource from an in-memory Core Graphics image.
- [loadAsync(contentsOf:withName:options:)](loadasync%28contentsof_withname_options_%29.md): Deprecated. Asynchronously loads a texture resource from a URL with options.
