> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext)

# LowLevelRenderContext

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An entry point for creating rendering resources and compiling materials.

## Declaration

```swift
protocol LowLevelRenderContext : AnyObject
```

<a id="overview"></a>

## Overview

Use a `LowLevelRenderContext` to construct meshes, textures, buffers, argument tables, materials, and pipeline states. These objects are assembled into a [LowLevelMeshInstanceArray](lowlevelmeshinstancearray.md) consumed each frame by [LowLevelRenderer](lowlevelrenderer.md).

## Topics

### Accessing the render context

- [device](lowlevelrendercontext/device.md): The Metal device that backs this render context.
- [shaderGraph](lowlevelrendercontext/shadergraph.md): The ShaderGraph function creation interface for this render context.

### Creating resources

- [makeBufferResource(descriptor:)](lowlevelrendercontext/makebufferresource%28descriptor_%29.md): Creates a GPU-managed buffer resource from the given descriptor.
- [makeTextureResource(descriptor:)](lowlevelrendercontext/maketextureresource%28descriptor_%29.md): Creates a texture resource from the given descriptor.
- [makeMaterialResource(descriptor:)](lowlevelrendercontext/makematerialresource%28descriptor_%29-8hizx.md): Synchronous variant of [makeMaterialResource(descriptor:)](lowlevelrendercontext/makematerialresource%28descriptor_%29-8hizx.md). Blocks the current thread until compilation completes.
- [makeMaterialResource(descriptor:)](lowlevelrendercontext/makematerialresource%28descriptor_%29-9nufj.md): Asynchronously compiles a material resource from a geometry modifier, surface shader, and lighting function.

### Creating meshes

- [makeMeshResource(descriptor:)](lowlevelrendercontext/makemeshresource%28descriptor_%29.md): Creates a mesh resource from the given descriptor.
- [makeMeshPart(resource:indexOffset:indexCount:primitive:windingOrder:bounds:)](lowlevelrendercontext/makemeshpart%28resource_indexoffset_indexcount_primitive_windingorder_bounds_%29.md): Creates a mesh part that selects a contiguous range of indices from a mesh resource.
- [makeMeshInstance(meshPart:pipeline:geometryArguments:surfaceArguments:lightingArguments:transform:sortCategory:)](lowlevelrendercontext/makemeshinstance%28meshpart_pipeline_geometryarguments_surfacearguments_lightingarguments_transform_sortcategory_%29.md): Creates a drawable mesh instance pairing a mesh part with a compiled pipeline state and optional per-draw argument tables.
- [makeMeshInstanceArray(renderTargets:count:)](lowlevelrendercontext/makemeshinstancearray%28rendertargets_count_%29.md): Creates a fixed-capacity ordered collection of mesh instances for the given render targets.
- [makeInstanceTransformResource(instanceCapacity:)](lowlevelrendercontext/makeinstancetransformresource%28instancecapacity_%29.md): Creates a transform buffer resource for GPU instancing.

### Creating pipeline state

- [makeRenderPipelineState(descriptor:)](lowlevelrendercontext/makerenderpipelinestate%28descriptor_%29-7j32p.md): Synchronous variant of [makeRenderPipelineState(descriptor:)](lowlevelrendercontext/makerenderpipelinestate%28descriptor_%29-7j32p.md). Blocks the current thread until compilation completes.
- [makeRenderPipelineState(descriptor:)](lowlevelrendercontext/makerenderpipelinestate%28descriptor_%29-55ty6.md): Asynchronously compiles a Metal render pipeline state from the given descriptor.
- [makeArgumentTable(descriptor:buffers:textures:)](lowlevelrendercontext/makeargumenttable%28descriptor_buffers_textures_%29.md): Creates an argument table that binds the provided buffer slices and textures.

### Creating surface shaders

- [makeSurfaceShader(descriptor:)](lowlevelrendercontext/makesurfaceshader%28descriptor_%29-66tq8.md): Synchronous variant of [makeSurfaceShader(descriptor:)](lowlevelrendercontext/makesurfaceshader%28descriptor_%29-66tq8.md). Blocks the current thread until compilation completes.
- [makeSurfaceShader(descriptor:)](lowlevelrendercontext/makesurfaceshader%28descriptor_%29-9kdy6.md): Asynchronously creates a custom surface shader from a user-authored Metal function descriptor.
- [makeSimpleSurfaceShader(descriptor:)](lowlevelrendercontext/makesimplesurfaceshader%28descriptor_%29-74vhb.md): Synchronous variant of [makeSimpleSurfaceShader(descriptor:)](lowlevelrendercontext/makesimplesurfaceshader%28descriptor_%29-74vhb.md). Blocks the current thread until compilation completes.
- [makeSimpleSurfaceShader(descriptor:)](lowlevelrendercontext/makesimplesurfaceshader%28descriptor_%29-14ppx.md): Asynchronously creates a simple surface shader using a built-in tint color or texture implementation, as described by the given descriptor.

### Creating geometry modifiers

- [makeGeometryModifier(descriptor:)](lowlevelrendercontext/makegeometrymodifier%28descriptor_%29-307ec.md): Synchronous variant of [makeGeometryModifier(descriptor:)](lowlevelrendercontext/makegeometrymodifier%28descriptor_%29-307ec.md). Blocks the current thread until compilation completes.
- [makeGeometryModifier(descriptor:)](lowlevelrendercontext/makegeometrymodifier%28descriptor_%29-9tq7q.md): Asynchronously creates a geometry modifier from a user-authored Metal function described by the given descriptor.
- [makeDefaultGeometryModifier()](lowlevelrendercontext/makedefaultgeometrymodifier%28%29.md): Returns a pass-through geometry modifier that performs no vertex transformation.

### Synchronizing command buffers

- [waitForCommandBuffer(\_:)](lowlevelrendercontext/waitforcommandbuffer%28__%29.md): Adds a command buffer that the renderer should wait on before using resources for rendering.

### Instance Properties

- [lighting](lowlevelrendercontext/lighting.md): The lighting function creation interface for this context.

### Instance Methods

- [makeGeometryModifier(descriptor:)](lowlevelrendercontext/makegeometrymodifier%28descriptor_%29.md): Synchronous variant of [makeGeometryModifier(descriptor:)](lowlevelrendercontext/makegeometrymodifier%28descriptor_%29.md). Blocks the current thread until compilation completes.
- [makeMaterialResource(descriptor:)](lowlevelrendercontext/makematerialresource%28descriptor_%29.md): Synchronous variant of [makeMaterialResource(descriptor:)](lowlevelrendercontext/makematerialresource%28descriptor_%29.md). Blocks the current thread until compilation completes.
- [makeRenderPipelineState(descriptor:)](lowlevelrendercontext/makerenderpipelinestate%28descriptor_%29.md): Synchronous variant of [makeRenderPipelineState(descriptor:)](lowlevelrendercontext/makerenderpipelinestate%28descriptor_%29.md). Blocks the current thread until compilation completes.
- [makeSimpleSurfaceShader(descriptor:)](lowlevelrendercontext/makesimplesurfaceshader%28descriptor_%29.md): Synchronous variant of [makeSimpleSurfaceShader(descriptor:)](lowlevelrendercontext/makesimplesurfaceshader%28descriptor_%29.md). Blocks the current thread until compilation completes.
- [makeSurfaceShader(descriptor:)](lowlevelrendercontext/makesurfaceshader%28descriptor_%29.md): Synchronous variant of [makeSurfaceShader(descriptor:)](lowlevelrendercontext/makesurfaceshader%28descriptor_%29.md). Blocks the current thread until compilation completes.

## Relationships

### Conforming Types

- [LowLevelRenderContextStandalone](lowlevelrendercontextstandalone.md)

## See Also

### Render contexts

- [LowLevelRenderer](lowlevelrenderer.md): A renderer that encodes draw calls for a collection of mesh instances into a Metal command buffer.
- [LowLevelRenderContextLighting](lowlevelrendercontextlighting.md): The interface for creating lighting functions for use in materials.
- [LowLevelRenderContextShaderGraph](lowlevelrendercontextshadergraph.md): The interface for creating Metal shader functions from a ShaderGraph.
- [LowLevelRenderContextStandalone](lowlevelrendercontextstandalone.md): A standalone Metal-backed render context for creating low-level rendering resources.
- [LowLevelRenderContextError](lowlevelrendercontexterror.md): An error thrown when binding or updating a low-level rendering resource fails.
- [LowLevelRendererError](lowlevelrenderererror.md): An error thrown when creating or configuring a renderer.
