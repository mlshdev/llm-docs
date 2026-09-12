> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshinstancearray](https://developer.apple.com/documentation/realitykit/lowlevelmeshinstancearray)

# LowLevelMeshInstanceArray

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A fixed-capacity collection of mesh instances submitted to the renderer.

## Declaration

```swift
final class LowLevelMeshInstanceArray
```

<a id="overview"></a>

## Overview

Instances are placed by index via `setMeshInstance(_:index:)`. Create arrays using [makeMeshInstanceArray(renderTargets:count:)](lowlevelrendercontext/makemeshinstancearray%28rendertargets_count_%29.md) and assign them to the renderer with [setMeshInstances(\_:at:)](lowlevelrenderer/setmeshinstances%28__at_%29.md).

## Topics

### Setting mesh instances

- [setMeshInstance(\_:index:)](lowlevelmeshinstancearray/setmeshinstance%28__index_%29.md): Assigns a mesh instance to the slot at the given index, or clears the slot if the instance is nil.
- [count](lowlevelmeshinstancearray/count.md): The number of instance slots in this array.

### Accessing render targets

- [renderTargets](lowlevelmeshinstancearray/rendertargets.md): The set of render target descriptors this array is compatible with.

### Iterating over instances

- [LowLevelMeshInstanceArray.Iterator](lowlevelmeshinstancearray/iterator.md): An iterator over the mesh instance slots.

### Default Implementations

- [Collection Implementations](lowlevelmeshinstancearray/collection-implementations.md)
- [Sequence Implementations](lowlevelmeshinstancearray/sequence-implementations.md)

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### GPU resources

- [LowLevelMeshResource](lowlevelmeshresource.md): A container for vertex and index data in a custom format.
- [LowLevelMeshPart](lowlevelmeshpart.md): An object that describes a range of primitives to draw from a mesh resource.
- [LowLevelMeshInstance](lowlevelmeshinstance.md): A single drawable object pairing a mesh part with a compiled pipeline state, optional per-draw argument tables, a transform, and a sort category.
- [LowLevelInstanceTransformResource](lowlevelinstancetransformresource.md): A GPU-managed buffer that stores an array of per-instance transforms for GPU instancing.
- [LowLevelBufferResource](lowlevelbufferresource.md): A GPU-managed buffer for arbitrary per-draw data such as uniforms and custom parameters.
- [LowLevelBufferSlice](lowlevelbufferslice.md): A reference to a sub-range of a buffer resource, used to bind a region of a buffer to an argument table slot.
- [LowLevelTextureResource](lowleveltextureresource.md): A container for texture data in a custom format.
- [LowLevelMaterialResource](lowlevelmaterialresource.md): A compiled material composed of three independently-replaceable shader functions.
- [LowLevelDeviceResource](lowleveldeviceresource.md): Encapsulates a GPU device resource created by the application. On visionOS, resources must be allocated in shared memory that can be used by the renderer process. Once a device resource is in use by the renderer, changing its contents is unsafe and undefined.
- [BoundingSphereBox](boundingspherebox.md): A combined bounding volume consisting of a bounding sphere and an optional axis-aligned bounding box.
