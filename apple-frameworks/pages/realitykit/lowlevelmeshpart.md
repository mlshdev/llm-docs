> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshpart](https://developer.apple.com/documentation/realitykit/lowlevelmeshpart)

# LowLevelMeshPart

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that describes a range of primitives to draw from a mesh resource.

## Declaration

```swift
final class LowLevelMeshPart
```

<a id="overview"></a>

## Overview

A mesh part selects a contiguous range of indices from the mesh’s index buffer and associates it with a primitive type, winding order, and bounding volume.

Create a `LowLevelMeshPart` using [makeMeshPart(resource:indexOffset:indexCount:primitive:windingOrder:bounds:)](lowlevelrendercontext/makemeshpart%28resource_indexoffset_indexcount_primitive_windingorder_bounds_%29.md).

## Topics

### Configuring the geometry

- [primitive](lowlevelmeshpart/primitive.md): The geometric primitive to use when rendering this part.
- [windingOrder](lowlevelmeshpart/windingorder.md): The winding order of front-facing polygons.
- [setIndexRange(indexOffset:indexCount:)](lowlevelmeshpart/setindexrange%28indexoffset_indexcount_%29.md): Updates the first index and index count for this mesh part.

### Instance Properties

- [bounds](lowlevelmeshpart/bounds.md): The bounding volume of this mesh part, in model space.
- [indexCount](lowlevelmeshpart/indexcount.md): The number of indices to use for this part.
- [indexOffset](lowlevelmeshpart/indexoffset.md): The byte offset of the first index.
- [resource](lowlevelmeshpart/resource.md): The mesh resource whose index and vertex buffers this part draws from.

## See Also

### GPU resources

- [LowLevelMeshResource](lowlevelmeshresource.md): A container for vertex and index data in a custom format.
- [LowLevelMeshInstance](lowlevelmeshinstance.md): A single drawable object pairing a mesh part with a compiled pipeline state, optional per-draw argument tables, a transform, and a sort category.
- [LowLevelMeshInstanceArray](lowlevelmeshinstancearray.md): A fixed-capacity collection of mesh instances submitted to the renderer.
- [LowLevelInstanceTransformResource](lowlevelinstancetransformresource.md): A GPU-managed buffer that stores an array of per-instance transforms for GPU instancing.
- [LowLevelBufferResource](lowlevelbufferresource.md): A GPU-managed buffer for arbitrary per-draw data such as uniforms and custom parameters.
- [LowLevelBufferSlice](lowlevelbufferslice.md): A reference to a sub-range of a buffer resource, used to bind a region of a buffer to an argument table slot.
- [LowLevelTextureResource](lowleveltextureresource.md): A container for texture data in a custom format.
- [LowLevelMaterialResource](lowlevelmaterialresource.md): A compiled material composed of three independently-replaceable shader functions.
- [LowLevelDeviceResource](lowleveldeviceresource.md): Encapsulates a GPU device resource created by the application. On visionOS, resources must be allocated in shared memory that can be used by the renderer process. Once a device resource is in use by the renderer, changing its contents is unsafe and undefined.
- [BoundingSphereBox](boundingspherebox.md): A combined bounding volume consisting of a bounding sphere and an optional axis-aligned bounding box.
