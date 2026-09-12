> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource)

# LowLevelMeshResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A container for vertex and index data in a custom format.

## Declaration

```swift
final class LowLevelMeshResource
```

<a id="overview"></a>

## Overview

Use `LowLevelMeshResource` when you want to bring your own vertex format to the renderer or update your data frequently. Vertex and index data can be written directly on the CPU through span-based accessors, or on the GPU by writing to a `MTLBuffer` returned by `replaceVertices(at:commandBuffer:)` / `replaceIndices(commandBuffer:)`.

Create a `LowLevelMeshResource` using [makeMeshResource(descriptor:)](lowlevelrendercontext/makemeshresource%28descriptor_%29.md).

## Topics

### Describing the mesh layout

- [descriptor](lowlevelmeshresource/descriptor-swift.property.md): The descriptor used to create this mesh resource.
- [LowLevelMeshResource.Descriptor](lowlevelmeshresource/descriptor-swift.struct.md): An object that describes the data format and layout of the buffers in a low-level mesh.
- [LowLevelMeshResource.Layout](lowlevelmeshresource/layout.md): An object that describes a set of attributes that share a buffer index, offset, and stride.
- [LowLevelMeshResource.Attribute](lowlevelmeshresource/attribute.md): An object that determines how to store vertex attribute data in memory and map it to RealityKit custom shader attributes.
- [LowLevelMeshResource.VertexSemantic](lowlevelmeshresource/vertexsemantic.md): The intended usage of a vertex attribute.

### Accessing vertex data

- [readVertices(at:\_:)](lowlevelmeshresource/readvertices%28at___%29.md): Reads the current contents of a vertex buffer synchronously on the CPU.
- [updateVertices(at:\_:)](lowlevelmeshresource/updatevertices%28at___%29.md): Updates a vertex buffer in place synchronously on the CPU.
- [replaceVertices(at:\_:)](lowlevelmeshresource/replacevertices%28at___%29.md): Replaces the entire contents of a vertex buffer synchronously on the CPU.
- [readVertices(at:commandBuffer:)](lowlevelmeshresource/readvertices%28at_commandbuffer_%29.md): Returns a Metal buffer containing the current contents of the vertex buffer for GPU read operations.
- [replaceVertices(at:commandBuffer:)](lowlevelmeshresource/replacevertices%28at_commandbuffer_%29.md): Returns a Metal buffer you populate on the GPU with the new contents of the vertex buffer.

### Accessing index data

- [readIndices(\_:)](lowlevelmeshresource/readindices%28__%29.md): Reads the current contents of the index buffer synchronously on the CPU.
- [updateIndices(\_:)](lowlevelmeshresource/updateindices%28__%29.md): Updates the index buffer in place synchronously on the CPU.
- [replaceIndices(\_:)](lowlevelmeshresource/replaceindices%28__%29.md): Replaces the entire contents of the index buffer synchronously on the CPU.
- [readIndices(commandBuffer:)](lowlevelmeshresource/readindices%28commandbuffer_%29.md): Returns a Metal buffer containing the current contents of the index buffer for GPU read operations.
- [replaceIndices(commandBuffer:)](lowlevelmeshresource/replaceindices%28commandbuffer_%29.md): Returns a Metal buffer you populate on the GPU with the new contents of the index buffer.

## See Also

### GPU resources

- [LowLevelMeshPart](lowlevelmeshpart.md): An object that describes a range of primitives to draw from a mesh resource.
- [LowLevelMeshInstance](lowlevelmeshinstance.md): A single drawable object pairing a mesh part with a compiled pipeline state, optional per-draw argument tables, a transform, and a sort category.
- [LowLevelMeshInstanceArray](lowlevelmeshinstancearray.md): A fixed-capacity collection of mesh instances submitted to the renderer.
- [LowLevelInstanceTransformResource](lowlevelinstancetransformresource.md): A GPU-managed buffer that stores an array of per-instance transforms for GPU instancing.
- [LowLevelBufferResource](lowlevelbufferresource.md): A GPU-managed buffer for arbitrary per-draw data such as uniforms and custom parameters.
- [LowLevelBufferSlice](lowlevelbufferslice.md): A reference to a sub-range of a buffer resource, used to bind a region of a buffer to an argument table slot.
- [LowLevelTextureResource](lowleveltextureresource.md): A container for texture data in a custom format.
- [LowLevelMaterialResource](lowlevelmaterialresource.md): A compiled material composed of three independently-replaceable shader functions.
- [LowLevelDeviceResource](lowleveldeviceresource.md): Encapsulates a GPU device resource created by the application. On visionOS, resources must be allocated in shared memory that can be used by the renderer process. Once a device resource is in use by the renderer, changing its contents is unsafe and undefined.
- [BoundingSphereBox](boundingspherebox.md): A combined bounding volume consisting of a bounding sphere and an optional axis-aligned bounding box.
