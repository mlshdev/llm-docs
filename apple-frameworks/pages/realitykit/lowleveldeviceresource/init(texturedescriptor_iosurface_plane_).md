> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeviceresource/init(texturedescriptor:iosurface:plane:)](https://developer.apple.com/documentation/realitykit/lowleveldeviceresource/init(texturedescriptor:iosurface:plane:))

# init(textureDescriptor:iosurface:plane:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a new [LowLevelDeviceResource](../lowleveldeviceresource.md) from the specified `IOSurface`.

## Declaration

```swift
init(textureDescriptor: MTLTextureDescriptor, iosurface: IOSurfaceRef, plane: Int) throws
```

## Parameters

- `textureDescriptor`: A description of the properties for the texture.
- `iosurface`: The underlying IOSurface for this memory resource.
- `plane`: The plane within the IOSurface to use.

<a id="discussion"></a>

## Discussion

> **Throws**

> If a the texture descriptor is incompatible with the specified IOSurface

## See Also

### Creating a device resource

- [init(sharedTextureHandle:)](init%28sharedtexturehandle_%29.md): Creates a new [LowLevelDeviceResource](../lowleveldeviceresource.md) from the specified Metal shared texture handle. Throws if an MTLTexture cannot be created from the specified handle.
