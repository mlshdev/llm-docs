> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/copyasync(to:completionhandler:)](https://developer.apple.com/documentation/realitykit/textureresource/copyasync(to:completionhandler:))

# copyAsync(to:completionHandler:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 26.0+ · visionOS 1.0+ (deprecated in 1.0)

Asynchronously copies texture data to another texture.

## Declaration

```swift
@MainActor @preconcurrency func copyAsync(to texture: any MTLTexture, completionHandler: @escaping @MainActor ((any Error)?) -> Void)
```

## Parameters

- `texture`: The target texture for copying the data. It needs to have the same width and height as [TextureResource](../textureresource.md), and [shaderWrite](../../metal/mtltextureusage/shaderwrite.md) usage.
- `completionHandler`: The system calls this closure after it finishes copying the data, with a `nil` error if it succeeds.

<a id="discussion"></a>

## Discussion

This function is asynchronous. It returns immediately and runs in the background, calling `completionHandler` when it finishes or errors. This method copies all available mipmap sizes to `texture`.

It’s recommended that you provide a value for [semantic](createoptions/semantic.md) when creating this resource. Specifying a semantic enables RealityKit to select an appropriate pixel format for the target texture.

## See Also

### Copying the texture

- [copy(to:)](copy%28to_%29-jfbi.md): Copies texture data to another texture.
