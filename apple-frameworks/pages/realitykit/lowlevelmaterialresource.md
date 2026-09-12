> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource)

# LowLevelMaterialResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A compiled material composed of three independently-replaceable shader functions.

## Declaration

```swift
final class LowLevelMaterialResource
```

<a id="overview"></a>

## Overview

A `LowLevelMaterialResource` combines a `GeometryModifier` shader function, a `SurfaceShader` function, and a `LightingFunction` (lighting evaluation). Each function can receive per-draw parameters through its own `LowLevelArgumentTable`, described by `LowLevelArgumentTable.Descriptor`.

Create a `LowLevelMaterialResource` by building a [LowLevelMaterialResource.Descriptor](lowlevelmaterialresource/descriptor.md) from the three shader functions and passing it to [makeMaterialResource(descriptor:)](lowlevelrendercontext/makematerialresource%28descriptor_%29.md).

## Topics

### Describing the material

- [LowLevelMaterialResource.Descriptor](lowlevelmaterialresource/descriptor.md): The geometry modifier, surface shader, and lighting function for a material.
- [LowLevelMaterialResource.SimpleSurfaceDescriptor](lowlevelmaterialresource/simplesurfacedescriptor.md): The configuration for a built-in surface shader that applies a tint color, a texture, or both.

### Configuring the shaders

- [surface](lowlevelmaterialresource/surface.md): The compiled fragment-stage surface shader.
- [LowLevelMaterialResource.SurfaceShader](lowlevelmaterialresource/surfaceshader.md): A compiled Metal function that implements the surface shader function.
- [geometry](lowlevelmaterialresource/geometry.md): The compiled vertex-stage geometry modifier.
- [LowLevelMaterialResource.GeometryModifier](lowlevelmaterialresource/geometrymodifier.md): A compiled Metal function that implements the geometry modifier function.
- [LowLevelMaterialResource.LightingFunction](lowlevelmaterialresource/lightingfunction.md): A compiled Metal function that evaluates lighting.
- [LowLevelMaterialResource.Function](lowlevelmaterialresource/function.md): A compiled shader function that can receive per-draw parameters via an argument table.

### Reading shader graph output

- [LowLevelMaterialResource.ShaderGraphOutput](lowlevelmaterialresource/shadergraphoutput.md): The compiled Metal shader functions derived from a ShaderGraph.

### Instance Properties

- [lighting](lowlevelmaterialresource/lighting.md): The compiled lighting evaluation function.

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
- [LowLevelDeviceResource](lowleveldeviceresource.md): Encapsulates a GPU device resource created by the application. On visionOS, resources must be allocated in shared memory that can be used by the renderer process. Once a device resource is in use by the renderer, changing its contents is unsafe and undefined.
- [BoundingSphereBox](boundingspherebox.md): A combined bounding volume consisting of a bounding sphere and an optional axis-aligned bounding box.
