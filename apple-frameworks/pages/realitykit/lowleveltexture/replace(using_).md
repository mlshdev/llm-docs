> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveltexture/replace(using:)](https://developer.apple.com/documentation/realitykit/lowleveltexture/replace(using:))

# replace(using:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Retrieves a Metal texture that your app’s shaders can write to when they run on a GPU.

## Declaration

```swift
@MainActor func replace(using commandBuffer: any MTLCommandBuffer) -> any MTLTexture
```

## Parameters

- `commandBuffer`: The [MTLCommandBuffer](../../metal/mtlcommandbuffer.md) you intend to use for texture modifications. RealityKit waits for the command buffer to complete before utilizing the texture for rendering.

<a id="discussion"></a>

## Discussion

The buffer’s contents are in an uninitialized state.
