> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelinstancetransformresource](https://developer.apple.com/documentation/realitykit/lowlevelinstancetransformresource)

# LowLevelInstanceTransformResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A GPU-managed buffer that stores an array of per-instance transforms for GPU instancing.

## Declaration

```swift
final class LowLevelInstanceTransformResource
```

<a id="overview"></a>

## Overview

Assign a `LowLevelInstanceTransformResource` to a [LowLevelMeshInstance](lowlevelmeshinstance.md) via [setInstanceTransforms(\_:)](lowlevelmeshinstance/setinstancetransforms%28__%29.md) to issue a single instanced draw call that renders multiple copies of the mesh. Each entry in the buffer is a `float4x4` model-to-local transform. The renderer computes the final world transform for each instance as `meshInstance.transform * instanceTransforms[i]`.

Create a `LowLevelInstanceTransformResource` using [makeInstanceTransformResource(instanceCapacity:)](lowlevelrendercontext/makeinstancetransformresource%28instancecapacity_%29.md).

> **Important**

> After creation, [instanceCount](lowlevelinstancetransformresource/instancecount.md) is `0`. Set it to the number of transforms you write before rendering.

## Topics

### Inspecting instance counts

- [instanceCount](lowlevelinstancetransformresource/instancecount.md): The number of active instances to draw.
- [instanceCapacity](lowlevelinstancetransformresource/instancecapacity.md): The maximum number of instances the buffer holds.

### Reading transform data

- [read(\_:)](lowlevelinstancetransformresource/read%28__%29.md): Reads the current transform data synchronously on the CPU.
- [read(commandBuffer:)](lowlevelinstancetransformresource/read%28commandbuffer_%29.md): Returns a Metal buffer containing the current transform data for GPU read operations.

### Replacing transform data

- [replace(\_:)](lowlevelinstancetransformresource/replace%28__%29.md): Replaces all transform data synchronously on the CPU.
- [replace(commandBuffer:)](lowlevelinstancetransformresource/replace%28commandbuffer_%29.md): Returns a Metal buffer you populate on the GPU with the new transform data.

### Instance Methods

- [update(\_:)](lowlevelinstancetransformresource/update%28__%29.md): Updates the transform data in place synchronously on the CPU.

## See Also

### GPU resources

- [LowLevelMeshResource](lowlevelmeshresource.md): A container for vertex and index data in a custom format.
- [LowLevelMeshPart](lowlevelmeshpart.md): An object that describes a range of primitives to draw from a mesh resource.
- [LowLevelMeshInstance](lowlevelmeshinstance.md): A single drawable object pairing a mesh part with a compiled pipeline state, optional per-draw argument tables, a transform, and a sort category.
- [LowLevelMeshInstanceArray](lowlevelmeshinstancearray.md): A fixed-capacity collection of mesh instances submitted to the renderer.
- [LowLevelBufferResource](lowlevelbufferresource.md): A GPU-managed buffer for arbitrary per-draw data such as uniforms and custom parameters.
- [LowLevelBufferSlice](lowlevelbufferslice.md): A reference to a sub-range of a buffer resource, used to bind a region of a buffer to an argument table slot.
- [LowLevelTextureResource](lowleveltextureresource.md): A container for texture data in a custom format.
- [LowLevelMaterialResource](lowlevelmaterialresource.md): A compiled material composed of three independently-replaceable shader functions.
- [LowLevelDeviceResource](lowleveldeviceresource.md): Encapsulates a GPU device resource created by the application. On visionOS, resources must be allocated in shared memory that can be used by the renderer process. Once a device resource is in use by the renderer, changing its contents is unsafe and undefined.
- [BoundingSphereBox](boundingspherebox.md): A combined bounding volume consisting of a bounding sphere and an optional axis-aligned bounding box.
