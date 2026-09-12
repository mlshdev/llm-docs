> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeviceresource/init(texture:)](https://developer.apple.com/documentation/realitykit/lowleveldeviceresource/init(texture:))

# init(texture:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Creates a new [LowLevelDeviceResource](../lowleveldeviceresource.md) from the specified Metal texture. This is not available on visionOS; device resources on this platform must be initialized from a shared texture using `init(sharedTextureHandle:)` instead.

## Declaration

```swift
init(texture: any MTLTexture)
```

## Parameters

- `texture`: The underlying texture for this memory resource.
