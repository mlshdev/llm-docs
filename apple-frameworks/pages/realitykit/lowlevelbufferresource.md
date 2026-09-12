> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelbufferresource](https://developer.apple.com/documentation/realitykit/lowlevelbufferresource)

# LowLevelBufferResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A GPU-managed buffer for arbitrary per-draw data such as uniforms and custom parameters.

## Declaration

```swift
final class LowLevelBufferResource
```

<a id="overview"></a>

## Overview

Buffer contents can be read and written synchronously on the CPU via span-based accessors, or on the GPU by writing to a `MTLBuffer` returned by `replace(commandBuffer:)`.

Create a `LowLevelBufferResource` using [makeBufferResource(descriptor:)](lowlevelrendercontext/makebufferresource%28descriptor_%29.md).

## Topics

### Inspecting the descriptor

- [descriptor](lowlevelbufferresource/descriptor-swift.property.md): The descriptor used to create this buffer resource.
- [LowLevelBufferResource.Descriptor](lowlevelbufferresource/descriptor-swift.struct.md): The capacity and alignment requirements for a buffer resource.

### Reading buffer contents

- [read(commandBuffer:)](lowlevelbufferresource/read%28commandbuffer_%29.md): Returns a Metal buffer containing the current contents of the buffer resource for GPU read operations.
- [read(\_:)](lowlevelbufferresource/read%28__%29.md): Reads the current contents of the buffer resource synchronously on the CPU.

### Replacing buffer contents

- [replace(commandBuffer:)](lowlevelbufferresource/replace%28commandbuffer_%29.md): Returns a Metal buffer you populate on the GPU with the new contents of the buffer resource.
- [replace(\_:)](lowlevelbufferresource/replace%28__%29.md): Replaces the entire contents of the buffer resource synchronously on the CPU.

### Instance Methods

- [update(\_:)](lowlevelbufferresource/update%28__%29.md): Updates the buffer resource in place synchronously on the CPU.

## See Also

### GPU resources

- [LowLevelMeshResource](lowlevelmeshresource.md): A container for vertex and index data in a custom format.
- [LowLevelMeshPart](lowlevelmeshpart.md): An object that describes a range of primitives to draw from a mesh resource.
- [LowLevelMeshInstance](lowlevelmeshinstance.md): A single drawable object pairing a mesh part with a compiled pipeline state, optional per-draw argument tables, a transform, and a sort category.
- [LowLevelMeshInstanceArray](lowlevelmeshinstancearray.md): A fixed-capacity collection of mesh instances submitted to the renderer.
- [LowLevelInstanceTransformResource](lowlevelinstancetransformresource.md): A GPU-managed buffer that stores an array of per-instance transforms for GPU instancing.
- [LowLevelBufferSlice](lowlevelbufferslice.md): A reference to a sub-range of a buffer resource, used to bind a region of a buffer to an argument table slot.
- [LowLevelTextureResource](lowleveltextureresource.md): A container for texture data in a custom format.
- [LowLevelMaterialResource](lowlevelmaterialresource.md): A compiled material composed of three independently-replaceable shader functions.
- [LowLevelDeviceResource](lowleveldeviceresource.md): Encapsulates a GPU device resource created by the application. On visionOS, resources must be allocated in shared memory that can be used by the renderer process. Once a device resource is in use by the renderer, changing its contents is unsafe and undefined.
- [BoundingSphereBox](boundingspherebox.md): A combined bounding volume consisting of a bounding sphere and an optional axis-aligned bounding box.
