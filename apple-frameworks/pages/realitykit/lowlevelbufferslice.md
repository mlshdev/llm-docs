> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelbufferslice](https://developer.apple.com/documentation/realitykit/lowlevelbufferslice)

# LowLevelBufferSlice

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A reference to a sub-range of a buffer resource, used to bind a region of a buffer to an argument table slot.

## Declaration

```swift
struct LowLevelBufferSlice
```

## Topics

### Creating a buffer slice

- [init(buffer:offset:size:)](lowlevelbufferslice/init%28buffer_offset_size_%29.md): Creates a slice referencing a sub-range of the given buffer.

### Accessing the buffer region

- [buffer](lowlevelbufferslice/buffer.md): The buffer this slice references.
- [size](lowlevelbufferslice/size.md): The size of this slice, in bytes.

### Adjusting the offset

- [setOffset(\_:)](lowlevelbufferslice/setoffset%28__%29.md): Updates the byte offset of this slice.

### Instance Properties

- [offset](lowlevelbufferslice/offset.md): The byte offset into `buffer` at which this slice begins.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### GPU resources

- [LowLevelMeshResource](lowlevelmeshresource.md): A container for vertex and index data in a custom format.
- [LowLevelMeshPart](lowlevelmeshpart.md): An object that describes a range of primitives to draw from a mesh resource.
- [LowLevelMeshInstance](lowlevelmeshinstance.md): A single drawable object pairing a mesh part with a compiled pipeline state, optional per-draw argument tables, a transform, and a sort category.
- [LowLevelMeshInstanceArray](lowlevelmeshinstancearray.md): A fixed-capacity collection of mesh instances submitted to the renderer.
- [LowLevelInstanceTransformResource](lowlevelinstancetransformresource.md): A GPU-managed buffer that stores an array of per-instance transforms for GPU instancing.
- [LowLevelBufferResource](lowlevelbufferresource.md): A GPU-managed buffer for arbitrary per-draw data such as uniforms and custom parameters.
- [LowLevelTextureResource](lowleveltextureresource.md): A container for texture data in a custom format.
- [LowLevelMaterialResource](lowlevelmaterialresource.md): A compiled material composed of three independently-replaceable shader functions.
- [LowLevelDeviceResource](lowleveldeviceresource.md): Encapsulates a GPU device resource created by the application. On visionOS, resources must be allocated in shared memory that can be used by the renderer process. Once a device resource is in use by the renderer, changing its contents is unsafe and undefined.
- [BoundingSphereBox](boundingspherebox.md): A combined bounding volume consisting of a bounding sphere and an optional axis-aligned bounding box.
