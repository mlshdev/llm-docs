> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/copy(to:)](https://developer.apple.com/documentation/realitykit/textureresource/copy(to:))

# copy(to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Asynchronously copies texture data to another texture.

## Declaration

```swift
@MainActor @preconcurrency func copy(to texture: any MTLTexture) async throws
```

## Parameters

- `texture`: The target texture for copying the data. It needs to have the same width and height as [TextureResource](../textureresource.md), and [shaderWrite](../../metal/mtltextureusage/shaderwrite.md) usage.

<a id="discussion"></a>

## Discussion

This method copies all available mipmap sizes to `texture`.

It’s recommended that you provide a value for [semantic](createoptions/semantic.md) when creating this resource. Specifying a semantic enables RealityKit to select an appropriate pixel format for the target texture.
