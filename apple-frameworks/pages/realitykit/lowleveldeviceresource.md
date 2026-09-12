> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeviceresource](https://developer.apple.com/documentation/realitykit/lowleveldeviceresource)

# LowLevelDeviceResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Encapsulates a GPU device resource created by the application. On visionOS, resources must be allocated in shared memory that can be used by the renderer process. Once a device resource is in use by the renderer, changing its contents is unsafe and undefined.

## Declaration

```swift
final class LowLevelDeviceResource
```

## Topics

### Creating a device resource

- [init(textureDescriptor:iosurface:plane:)](lowleveldeviceresource/init%28texturedescriptor_iosurface_plane_%29.md): Creates a new [LowLevelDeviceResource](lowleveldeviceresource.md) from the specified `IOSurface`.
- [init(sharedTextureHandle:)](lowleveldeviceresource/init%28sharedtexturehandle_%29.md): Creates a new [LowLevelDeviceResource](lowleveldeviceresource.md) from the specified Metal shared texture handle. Throws if an MTLTexture cannot be created from the specified handle.

### Initializers

- [init(texture:)](lowleveldeviceresource/init%28texture_%29.md): Creates a new [LowLevelDeviceResource](lowleveldeviceresource.md) from the specified Metal texture. This is not available on visionOS; device resources on this platform must be initialized from a shared texture using `init(sharedTextureHandle:)` instead.

## See Also

### GPU resources

- [LowLevelMeshResource](lowlevelmeshresource.md): A container for vertex and index data in a custom format.
- [LowLevelMeshPart](lowlevelmeshpart.md): An object that describes a range of primitives to draw from a mesh resource.
- [LowLevelMeshInstance](lowlevelmeshinstance.md): A single drawable object pairing a mesh part with a compiled pipeline state, optional per-draw argument tables, a transform, and a sort category.
- [LowLevelMeshInstanceArray](lowlevelmeshinstancearray.md): A fixed-capacity collection of mesh instances submitted to the renderer.
- [LowLevelInstanceTransformResource](lowlevelinstancetransformresource.md): A GPU-managed buffer that stores an array of per-instance transforms for GPU instancing.
- [LowLevelBufferResource](lowlevelbufferresource.md): A GPU-managed buffer for arbitrary per-draw data such as uniforms and custom parameters.
- [LowLevelBufferSlice](lowlevelbufferslice.md): A reference to a sub-range of a buffer resource, used to bind a region of a buffer to an argument table slot.
- [LowLevelTextureResource](lowleveltextureresource.md): A container for texture data in a custom format.
- [LowLevelMaterialResource](lowlevelmaterialresource.md): A compiled material composed of three independently-replaceable shader functions.
- [BoundingSphereBox](boundingspherebox.md): A combined bounding volume consisting of a bounding sphere and an optional axis-aligned bounding box.
