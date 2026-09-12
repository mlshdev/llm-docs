> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshinstance](https://developer.apple.com/documentation/realitykit/lowlevelmeshinstance)

# LowLevelMeshInstance

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A single drawable object pairing a mesh part with a compiled pipeline state, optional per-draw argument tables, a transform, and a sort category.

## Declaration

```swift
final class LowLevelMeshInstance
```

<a id="overview"></a>

## Overview

Create a `LowLevelMeshInstance` using [makeMeshInstance(meshPart:pipeline:geometryArguments:surfaceArguments:lightingArguments:transform:sortCategory:)](lowlevelrendercontext/makemeshinstance%28meshpart_pipeline_geometryarguments_surfacearguments_lightingarguments_transform_sortcategory_%29.md).

Transform, bounds, sort category, and triangle fill mode can be updated after creation; the renderer picks up changes automatically before the next `render(using:_:)` call.

To draw multiple copies of the mesh in a single draw call, assign a [LowLevelInstanceTransformResource](lowlevelinstancetransformresource.md) via [setInstanceTransforms(\_:)](lowlevelmeshinstance/setinstancetransforms%28__%29.md).

## Topics

### Configuring the geometry and pipeline

- [meshPart](lowlevelmeshinstance/meshpart.md): The mesh part this instance draws.
- [pipeline](lowlevelmeshinstance/pipeline.md): The compiled pipeline state used to render this instance.

### Positioning instances

- [instanceTransforms](lowlevelmeshinstance/instancetransforms.md): The transform buffer for GPU instancing, or `nil` for single-instance rendering.
- [setInstanceTransforms(\_:)](lowlevelmeshinstance/setinstancetransforms%28__%29.md): Assigns or clears the transform buffer for GPU instancing.

### Providing shader arguments

- [surfaceArguments](lowlevelmeshinstance/surfacearguments.md): The optional argument table for the surface shader stage.
- [geometryArguments](lowlevelmeshinstance/geometryarguments.md): The optional argument table for the geometry modifier stage.
- [lightingArguments](lowlevelmeshinstance/lightingarguments.md): The optional argument table for the lighting function stage.

### Sorting instances

- [sortCategory](lowlevelmeshinstance/sortcategory-swift.property.md): The sort category of this mesh instance.
- [LowLevelMeshInstance.SortCategory](lowlevelmeshinstance/sortcategory-swift.enum.md): The sort category of this mesh instance.

### Instance Properties

- [bounds](lowlevelmeshinstance/bounds.md): The bounds of this mesh instance, in model space, or `nil` to derive bounds from the mesh part.
- [transform](lowlevelmeshinstance/transform.md): The local-to-world transform applied to this mesh instance.
- [triangleFillMode](lowlevelmeshinstance/trianglefillmode.md): The fill mode used when rasterizing this mesh instance’s triangles.

## See Also

### GPU resources

- [LowLevelMeshResource](lowlevelmeshresource.md): A container for vertex and index data in a custom format.
- [LowLevelMeshPart](lowlevelmeshpart.md): An object that describes a range of primitives to draw from a mesh resource.
- [LowLevelMeshInstanceArray](lowlevelmeshinstancearray.md): A fixed-capacity collection of mesh instances submitted to the renderer.
- [LowLevelInstanceTransformResource](lowlevelinstancetransformresource.md): A GPU-managed buffer that stores an array of per-instance transforms for GPU instancing.
- [LowLevelBufferResource](lowlevelbufferresource.md): A GPU-managed buffer for arbitrary per-draw data such as uniforms and custom parameters.
- [LowLevelBufferSlice](lowlevelbufferslice.md): A reference to a sub-range of a buffer resource, used to bind a region of a buffer to an argument table slot.
- [LowLevelTextureResource](lowleveltextureresource.md): A container for texture data in a custom format.
- [LowLevelMaterialResource](lowlevelmaterialresource.md): A compiled material composed of three independently-replaceable shader functions.
- [LowLevelDeviceResource](lowleveldeviceresource.md): Encapsulates a GPU device resource created by the application. On visionOS, resources must be allocated in shared memory that can be used by the renderer process. Once a device resource is in use by the renderer, changing its contents is unsafe and undefined.
- [BoundingSphereBox](boundingspherebox.md): A combined bounding volume consisting of a bounding sphere and an optional axis-aligned bounding box.
