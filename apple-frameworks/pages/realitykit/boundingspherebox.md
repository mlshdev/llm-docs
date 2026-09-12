> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingspherebox](https://developer.apple.com/documentation/realitykit/boundingspherebox)

# BoundingSphereBox

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A combined bounding volume consisting of a bounding sphere and an optional axis-aligned bounding box.

## Declaration

```swift
@frozen struct BoundingSphereBox
```

<a id="overview"></a>

## Overview

`BoundingSphereBox` represents the culling bounds of a [LowLevelMeshInstance](lowlevelmeshinstance.md). When `halfExtents` is set, the renderer uses the tighter box bounds for culling; otherwise it falls back to the bounding sphere.

## Topics

### Creating a bounding volume

- [init(center:radius:)](boundingspherebox/init%28center_radius_%29.md): Creates a bounding sphere with the given center and radius.
- [init(center:halfExtents:)](boundingspherebox/init%28center_halfextents_%29.md): Creates a bounding box with the given center and half-extents, with a circumscribed sphere.
- [init(center:fullExtents:)](boundingspherebox/init%28center_fullextents_%29.md): Creates a bounding box with the given center and full extents, with a circumscribed sphere.
- [init(boxMin:boxMax:)](boundingspherebox/init%28boxmin_boxmax_%29.md): Creates a bounding box from minimum and maximum corner positions, with a circumscribed sphere.

### Accessing the dimensions

- [center](boundingspherebox/center.md): The center of the bounding volume in model space.
- [halfExtents](boundingspherebox/halfextents.md): The half-extents of the optional axis-aligned bounding box.
- [fullExtents](boundingspherebox/fullextents.md): The full extents of the optional axis-aligned bounding box.

### Instance Properties

- [radius](boundingspherebox/radius.md): The bounding sphere radius.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [LowLevelDeviceResource](lowleveldeviceresource.md): Encapsulates a GPU device resource created by the application. On visionOS, resources must be allocated in shared memory that can be used by the renderer process. Once a device resource is in use by the renderer, changing its contents is unsafe and undefined.
