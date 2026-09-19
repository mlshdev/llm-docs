> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowleveldeviceresource/init(sharedtexturehandle:)

# init(sharedTextureHandle:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a new [LowLevelDeviceResource](../lowleveldeviceresource.md) from the specified Metal shared texture handle. Throws if an MTLTexture cannot be created from the specified handle.

## Declaration

```swift
init(sharedTextureHandle: MTLSharedTextureHandle) throws
```

## Parameters

- `sharedTextureHandle`: The underlying shared texture handle for this memory resource.

<a id="discussion"></a>

## Discussion

> **Throws**

> If a MTLTexture couldn’t be created from the specified handle.

## See Also

### Creating a device resource

- [init(textureDescriptor:iosurface:plane:)](init%28texturedescriptor_iosurface_plane_%29.md): Creates a new [LowLevelDeviceResource](../lowleveldeviceresource.md) from the specified `IOSurface`.
