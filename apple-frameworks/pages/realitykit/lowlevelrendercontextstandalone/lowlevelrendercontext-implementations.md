> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/lowlevelrendercontext-implementations](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/lowlevelrendercontext-implementations)

# LowLevelRenderContext Implementations

**Framework:** RealityKit  
**Kind:** API Collection

## Topics

### Instance Properties

- [device](device.md): The Metal device that backs this render context.

### Instance Methods

- [makeArgumentTable(descriptor:buffers:textures:)](makeargumenttable%28descriptor_buffers_textures_%29.md): Creates an argument table that binds the provided buffer slices and textures.
- [makeBufferResource(descriptor:)](makebufferresource%28descriptor_%29.md): Creates a GPU-managed buffer resource from the given descriptor.
- [makeDefaultGeometryModifier()](makedefaultgeometrymodifier%28%29.md): Returns a pass-through geometry modifier that performs no vertex transformation.
- [makeGeometryModifier(descriptor:)](makegeometrymodifier%28descriptor_%29.md): Synchronous variant of [makeGeometryModifier(descriptor:)](makegeometrymodifier%28descriptor_%29.md). Blocks the current thread until compilation completes.
- [makeGeometryModifier(descriptor:)](makegeometrymodifier%28descriptor_%29-4p20q.md): Asynchronously creates a geometry modifier from a user-authored Metal function described by the given descriptor.
- [makeGeometryModifier(descriptor:)](makegeometrymodifier%28descriptor_%29-6cl2f.md): Synchronous variant of [makeGeometryModifier(descriptor:)](makegeometrymodifier%28descriptor_%29-6cl2f.md). Blocks the current thread until compilation completes.
- [makeInstanceTransformResource(instanceCapacity:)](makeinstancetransformresource%28instancecapacity_%29.md): Creates a transform buffer resource for GPU instancing.
- [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29.md): Synchronous variant of [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29.md). Blocks the current thread until compilation completes.
- [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-2qjge.md): Synchronous variant of [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-2qjge.md). Blocks the current thread until compilation completes.
- [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-8pruc.md): Asynchronously compiles a material resource from a geometry modifier, surface shader, and lighting function.
- [makeMeshInstance(meshPart:pipeline:geometryArguments:surfaceArguments:lightingArguments:transform:sortCategory:)](makemeshinstance%28meshpart_pipeline_geometryarguments_surfacearguments_lightingarguments_transform_sortcategory_%29.md): Creates a drawable mesh instance pairing a mesh part with a compiled pipeline state and optional per-draw argument tables.
- [makeMeshInstanceArray(renderTargets:count:)](makemeshinstancearray%28rendertargets_count_%29.md): Creates a fixed-capacity ordered collection of mesh instances for the given render targets.
- [makeMeshPart(resource:indexOffset:indexCount:primitive:windingOrder:bounds:)](makemeshpart%28resource_indexoffset_indexcount_primitive_windingorder_bounds_%29.md): Creates a mesh part that selects a contiguous range of indices from a mesh resource.
- [makeMeshResource(descriptor:)](makemeshresource%28descriptor_%29.md): Creates a mesh resource from the given descriptor.
- [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29.md): Synchronous variant of [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29.md). Blocks the current thread until compilation completes.
- [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29-550yp.md): Synchronous variant of [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29-550yp.md). Blocks the current thread until compilation completes.
- [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29-9x6v9.md): Asynchronously compiles a Metal render pipeline state from the given descriptor.
- [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29.md): Synchronous variant of [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29.md). Blocks the current thread until compilation completes.
- [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29-3f0mt.md): Asynchronously creates a simple surface shader using a built-in tint color or texture implementation, as described by the given descriptor.
- [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29-6filb.md): Synchronous variant of [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29-6filb.md). Blocks the current thread until compilation completes.
- [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29.md): Synchronous variant of [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29.md). Blocks the current thread until compilation completes.
- [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29-35raz.md): Synchronous variant of [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29-35raz.md). Blocks the current thread until compilation completes.
- [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29-9hqo9.md): Asynchronously creates a custom surface shader from a user-authored Metal function descriptor.
- [makeTextureResource(descriptor:)](maketextureresource%28descriptor_%29.md): Creates a texture resource from the given descriptor.
- [waitForCommandBuffer(\_:)](waitforcommandbuffer%28__%29.md): Adds a command buffer that the renderer should wait on before using resources for rendering.
