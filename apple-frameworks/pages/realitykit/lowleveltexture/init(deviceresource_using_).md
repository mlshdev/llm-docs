> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveltexture/init(deviceresource:using:)](https://developer.apple.com/documentation/realitykit/lowleveltexture/init(deviceresource:using:))

# init(deviceResource:using:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a low-level texture from an existing [LowLevelDeviceResource](../lowleveldeviceresource.md) created and managed by the application.

## Declaration

```swift
@MainActor convenience init(deviceResource: LowLevelDeviceResource, using commandBuffer: (any MTLCommandBuffer)? = nil) throws
```

## Parameters

- `deviceResource`: The underlying texture this object should refer to.
- `commandBuffer`: The [MTLCommandBuffer](../../metal/mtlcommandbuffer.md) you intend to use for texture modifications. RealityKit waits for the command buffer to complete before utilizing the texture for rendering.
