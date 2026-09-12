> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveltexture/replace(deviceresource:using:)](https://developer.apple.com/documentation/realitykit/lowleveltexture/replace(deviceresource:using:))

# replace(deviceResource:using:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Replaces this object’s underlying texture with an existing [LowLevelDeviceResource](../lowleveldeviceresource.md) created and managed by the application.

## Declaration

```swift
@MainActor func replace(deviceResource: LowLevelDeviceResource, using commandBuffer: (any MTLCommandBuffer)? = nil)
```

## Parameters

- `deviceResource`: The underlying texture this object should refer to.
- `commandBuffer`: The [MTLCommandBuffer](../../metal/mtlcommandbuffer.md) you intend to use for texture modifications. RealityKit waits for the command buffer to complete before utilizing the texture for rendering.

<a id="discussion"></a>

## Discussion

While it’s valid to replace a LowLevelTexture with an externally-managed texture having different dimensions, the LowLevelTexture will remember its initial size and calling replace(using:) to obtain a new MTLTexture will respect the initial size.
