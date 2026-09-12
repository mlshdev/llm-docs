> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder](https://developer.apple.com/documentation/metal/mtlrendercommandencoder)

# MTLRenderCommandEncoder (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes configuration and draw commands for a single render pass into a command buffer.

## Declaration

```swift
protocol MTLRenderCommandEncoder : MTLCommandEncoder
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Improving rendering performance with vertex amplification](improving-rendering-performance-with-vertex-amplification.md)
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)
- [Setting up a command structure](setting-up-a-command-structure.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)
- [Tracking the resource residency of argument buffers](tracking-the-resource-residency-of-argument-buffers.md)

<a id="overview"></a>

## Overview

A render pass draws a scene, or a component within a scene, to its render *attachments*, the outputs of a render pass. You can render to those outputs with various approaches, including techniques that apply the following:

- Primitive drawing
- Mesh drawing
- Ray tracing
- Dispatching tile shaders

To create an [MTLRenderCommandEncoder](mtlrendercommandencoder.md) instance, call the [makeRenderCommandEncoder(descriptor:)](mtlcommandbuffer/makerendercommandencoder%28descriptor_%29.md) method of an [MTLCommandBuffer](mtlcommandbuffer.md) instance, or the [makeRenderCommandEncoder()](mtlparallelrendercommandencoder/makerendercommandencoder%28%29.md) method of an [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md) instance.

To configure the render pass for your first drawing commands, start with a pipeline state by passing an [MTLRenderPipelineState](mtlrenderpipelinestate.md) instance to the encoder’s [setRenderPipelineState(\_:)](mtlrendercommandencoder/setrenderpipelinestate%28__%29.md) method. You create the pipeline states your render pass needs, typically ahead of time, by calling one or more [MTLDevice](mtldevice.md) methods (see [Pipeline state creation](pipeline-state-creation.md)).

> **Tip**

>  Avoid visual stutter by creating pipeline states at a noncritical time, such as during launch, because of the time it can take to make them.

Configure other encoder settings by calling the methods on the [Render pass configuration](render-pass-configuration.md) page. For example, you may need to configure the pass’s viewport, its scissor rectangle, and the settings for depth and stencil tests.

Assign resources, such as buffers and textures, for the shaders that depend on them. For more information, see the shader-specific pages in the resource preparation section, such as [Vertex shader resource preparation commands](vertex-shader-resource-preparation-commands.md) and [Fragment shader resource preparation commands](fragment-shader-resource-preparation-commands.md). If your shaders access resources through an argument buffer, make those resources *resident* in GPU memory by calling the methods on the [Argument buffer resource preparation commands](argument-buffer-resource-preparation-commands.md) page.

Encode drawing commands after you configure the state and resources the commands depend on. The encoder maintains its current state and applies it to all subsequent draw commands. For drawing commands that need different states or resources, reconfigure the render pass appropriately and then encode those draw commands. Repeat the process for each batch of drawing commands that depend on the same render pass configuration and resources.

When you finish encoding the render pass’s commands, finalize it into the command buffer by calling the encoder’s [endEncoding()](mtlcommandencoder/endencoding%28%29.md) method.

<a id="Command-stages"></a>

### Command stages

Most render commands apply to one or more stages within a pass. The following table shows which stages apply to each command:

| Function | MTLStages |
| --- | --- |
| [drawPrimitives(type:vertexStart:vertexCount:)](mtlrendercommandencoder/drawprimitives%28type_vertexstart_vertexcount_%29.md) | [vertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawPrimitives(type:vertexStart:vertexCount:instanceCount:)](mtlrendercommandencoder/drawprimitives%28type_vertexstart_vertexcount_instancecount_%29.md) | [vertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawPrimitives(type:vertexStart:vertexCount:instanceCount:baseInstance:)](mtlrendercommandencoder/drawprimitives%28type_vertexstart_vertexcount_instancecount_baseinstance_%29.md) | [vertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawPrimitives(type:indirectBuffer:indirectBufferOffset:)](mtlrendercommandencoder/drawprimitives%28type_indirectbuffer_indirectbufferoffset_%29.md) | [vertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawIndexedPrimitives(type:indexCount:indexType:indexBuffer:indexBufferOffset:)](mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_%29.md) | [vertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawIndexedPrimitives(type:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:)](mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_%29.md) | [vertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawIndexedPrimitives(type:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:baseVertex:baseInstance:)](mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_basevertex_baseinstance_%29.md) | [vertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawIndexedPrimitives(type:indexType:indexBuffer:indexBufferOffset:indirectBuffer:indirectBufferOffset:)](mtlrendercommandencoder/drawindexedprimitives%28type_indextype_indexbuffer_indexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md) | [vertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawMeshThreads(\_:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](mtlrendercommandencoder/drawmeshthreads%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md) | [object](mtlstages/object.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[mesh](mtlstages/mesh.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawMeshThreadgroups(\_:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](mtlrendercommandencoder/drawmeshthreadgroups%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md) | [object](mtlstages/object.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[mesh](mtlstages/mesh.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawMeshThreadgroups(indirectBuffer:indirectBufferOffset:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](mtlrendercommandencoder/drawmeshthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md) | [object](mtlstages/object.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[mesh](mtlstages/mesh.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawPatches(numberOfPatchControlPoints:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:instanceCount:baseInstance:)](mtlrendercommandencoder/drawpatches%28numberofpatchcontrolpoints_patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_instancecount_baseinstance_%29.md) | [vertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawPatches(numberOfPatchControlPoints:patchIndexBuffer:patchIndexBufferOffset:indirectBuffer:indirectBufferOffset:)](mtlrendercommandencoder/drawpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md) | [vertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawIndexedPatches(numberOfPatchControlPoints:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:instanceCount:baseInstance:)](mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_instancecount_base~12f3c1a5.md) | [vertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [drawIndexedPatches(numberOfPatchControlPoints:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:indirectBuffer:indirectBufferOffset:)](mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md) | [vertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[fragment](mtlstages/fragment.md) |
| [dispatchThreadsPerTile(\_:)](mtlrendercommandencoder/dispatchthreadspertile%28__%29.md) | [tile](mtlstages/tile.md) |
| [executeCommandsInBuffer(\_:range:)](mtlrendercommandencoder/executecommandsinbuffer%28__range_%29.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[executeCommandsInBuffer:withRange:](mtlrendercommandencoder/executecommandsinbuffer_withrange_.md) | None |
| [executeCommandsInBuffer(\_:indirectBuffer:offset:)](mtlrendercommandencoder/executecommandsinbuffer%28__indirectbuffer_offset_%29.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[executeCommandsInBuffer:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/executecommandsinbuffer_indirectbuffer_indirectbufferoffset_.md) | None |
| [sampleCounters(sampleBuffer:sampleIndex:barrier:)](mtlrendercommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md) | None |

Draw commands don’t apply to [fragment](mtlstages/fragment.md) when the [MTLRenderPipelineState](mtlrenderpipelinestate.md) for the draw disables rasterization. See [isRasterizationEnabled](mtlrenderpipelinedescriptor/israsterizationenabled.md).

Mesh draw commands don’t apply to [object](mtlstages/object.md) when the [MTLRenderPipelineState](mtlrenderpipelinestate.md) for the draw doesn’t have an object shader.

The [executeCommandsInBuffer(\_:range:)](mtlrendercommandencoder/executecommandsinbuffer%28__range_%29.md) and [executeCommandsInBuffer(\_:indirectBuffer:offset:)](mtlrendercommandencoder/executecommandsinbuffer%28__indirectbuffer_offset_%29.md) commands don’t apply to any stage, which means you can’t use a barrier to wait for all commands in an indirect command buffer to complete. However, each command within the [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md) applies to the same stages as when you encode the equivalent command directly.

> **Note**

> [MTLRenderStages](mtlrenderstages.md) and its values have the same functionality as [MTLStages](mtlstages.md) and its corresponding stage values.

For more information about stages and synchronization, see [MTLStages](mtlstages.md) and [Resource synchronization](resource-synchronization.md).

## Topics

### Configuration commands

Manage the render pass’s overall state.

- [Render pass configuration](render-pass-configuration.md): Set a render pass’s pipeline state, attachment actions, viewports, and so on, that affect subsequent drawing commands.

### Resource preparation commands

Load buffers, textures, and other resources into GPU memory for each shader type, including mesh, object, vertex, fragment, and tile shaders.

- [Mesh and object shader resource preparation commands](mesh-and-object-shader-resource-preparation-commands.md): Assign resources to mesh and object shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Vertex shader resource preparation commands](vertex-shader-resource-preparation-commands.md): Assign resources to vertex shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Fragment shader resource preparation commands](fragment-shader-resource-preparation-commands.md): Assign resources to fragment shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Tile shaders resource preparation commands](tile-shaders-resource-preparation-commands.md): Assign resources to tile shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Argument buffer resource preparation commands](argument-buffer-resource-preparation-commands.md): Load individual resources and multiple resources within a heap into GPU memory so that they’re available to shaders through argument buffers.

### Drawing with vertices

Render primitives with vertex shaders.

- [drawPrimitives(type:vertexStart:vertexCount:)](mtlrendercommandencoder/drawprimitives%28type_vertexstart_vertexcount_%29.md): Encodes a draw command that renders an instance of a geometric primitive.
- [drawPrimitives(type:vertexStart:vertexCount:instanceCount:)](mtlrendercommandencoder/drawprimitives%28type_vertexstart_vertexcount_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive.
- [drawPrimitives(type:vertexStart:vertexCount:instanceCount:baseInstance:)](mtlrendercommandencoder/drawprimitives%28type_vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive that starts with a custom instance identification number.
- [drawPrimitives(type:indirectBuffer:indirectBufferOffset:)](mtlrendercommandencoder/drawprimitives%28type_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indirect arguments.

### Drawing with indexed vertices

Render indexed primitives with vertex shaders.

- [drawIndexedPrimitives(type:indexCount:indexType:indexBuffer:indexBufferOffset:)](mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_%29.md): Encodes a draw command that renders an instance of a geometric primitive with indexed vertices.
- [drawIndexedPrimitives(type:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:)](mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices.
- [drawIndexedPrimitives(type:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:baseVertex:baseInstance:)](mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_basevertex_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices, starting with a custom vertex and instance.
- [drawIndexedPrimitives(type:indexType:indexBuffer:indexBufferOffset:indirectBuffer:indirectBufferOffset:)](mtlrendercommandencoder/drawindexedprimitives%28type_indextype_indexbuffer_indexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices and indirect arguments.

### Drawing with meshes

Render meshes with mesh and object shaders.

- [drawMeshThreads(\_:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](mtlrendercommandencoder/drawmeshthreads%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threads.
- [drawMeshThreadgroups(\_:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](mtlrendercommandencoder/drawmeshthreadgroups%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threadgroups.
- [drawMeshThreadgroups(indirectBuffer:indirectBufferOffset:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](mtlrendercommandencoder/drawmeshthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with indirect arguments.

### Drawing with tessellation patches

Render tessellated geometry with control points.

- [drawPatches(numberOfPatchControlPoints:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:instanceCount:baseInstance:)](mtlrendercommandencoder/drawpatches%28numberofpatchcontrolpoints_patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of tessellated patches.
- [drawPatches(numberOfPatchControlPoints:patchIndexBuffer:patchIndexBufferOffset:indirectBuffer:indirectBufferOffset:)](mtlrendercommandencoder/drawpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of tessellated patches with indirect arguments.

### Drawing with indexed tessellation patches

Render tessellated geometry with indexed control points.

- [drawIndexedPatches(numberOfPatchControlPoints:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:instanceCount:baseInstance:)](mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_instancecount_base~12f3c1a5.md): Encodes a draw command that renders multiple instances of tessellated patches with a control point index buffer.
- [drawIndexedPatches(numberOfPatchControlPoints:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:indirectBuffer:indirectBufferOffset:)](mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of tessellated patches with a control point index buffer and indirect arguments.

### Drawing with tile shaders

Dispatch tile shaders within a render pass.

- [dispatchThreadsPerTile(\_:)](mtlrendercommandencoder/dispatchthreadspertile%28__%29.md): Encodes a command that invokes GPU functions from the encoder’s current tile render pipeline state.
- [tileWidth](mtlrendercommandencoder/tilewidth.md): The width of the tiles, in pixels, for the render command encoder.
- [tileHeight](mtlrendercommandencoder/tileheight.md): The height of the tiles, in pixels, for the render command encoder.

### Preventing resource access conflicts

Address hazards for untracked resources with fences and barriers.

- [waitForFence(\_:before:)](mtlrendercommandencoder/waitforfence%28__before_%29.md): Encodes a command that instructs the GPU to pause before starting one or more stages of the render pass until a pass updates a fence.
- [updateFence(\_:after:)](mtlrendercommandencoder/updatefence%28__after_%29.md): Encodes a command that instructs the GPU to update a fence after one or more stages, which can unblock other passes waiting for the fence.
- [memoryBarrier(resources:after:before:)](mtlrendercommandencoder/memorybarrier%28resources_after_before_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resources.
- [memoryBarrier(scope:after:before:)](mtlrendercommandencoder/memorybarrier%28scope_after_before_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resource types.

### Running commands from indirect command buffers

Invoke commands within an indirect command buffer.

- [executeCommandsInBuffer(\_:range:)](mtlrendercommandencoder/executecommandsinbuffer%28__range_%29.md): Encodes a command that runs a range of commands from an indirect command buffer (ICB).
- [executeCommandsInBuffer(\_:indirectBuffer:offset:)](mtlrendercommandencoder/executecommandsinbuffer%28__indirectbuffer_offset_%29.md): Encodes a command that runs an indirect range of commands from an indirect command buffer (ICB).

### Sampling counters

Capture runtime data from GPU hardware counters.

- [sampleCounters(sampleBuffer:sampleIndex:barrier:)](mtlrendercommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md): Encodes a command that samples hardware counters during the render pass and stores the data into a counter sample buffer.

### Deprecated

Replace older symbols in this group with their newer equivalents.

- [Deprecated symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [MTLCommandEncoder](mtlcommandencoder.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Encoding a render pass

- [MTL4RenderCommandEncoder](mtl4rendercommandencoder.md): Encodes configuration and draw commands for a single render pass into a command buffer.
- [MTL4RenderEncoderOptions](mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTLTriangleFillMode](mtltrianglefillmode.md): Specifies how to rasterize triangle and triangle strip primitives.
- [MTLWinding](mtlwinding.md): The vertex winding rule that determines a front-facing primitive.
- [MTLCullMode](mtlcullmode.md): The mode that determines whether to perform culling and which type of primitive to cull.
- [MTLPrimitiveType](mtlprimitivetype.md): The geometric primitive type for drawing commands.
- [MTLIndexType](mtlindextype.md): The index type for an index buffer that references vertices of geometric primitives.
- [MTLDepthClipMode](mtldepthclipmode.md): The mode that determines how to deal with fragments outside of the near or far planes.
- [MTLVisibilityResultMode](mtlvisibilityresultmode.md): The mode that determines what, if anything, the GPU writes to the results buffer, after the GPU executes the render pass.
- [MTLVisibilityResultType](mtlvisibilityresulttype.md): This enumeration controls if Metal accumulates visibility results between render encoders or resets them.

# MTLRenderCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes configuration and draw commands for a single render pass into a command buffer.

## Declaration

```objectivec
@protocol MTLRenderCommandEncoder <MTLCommandEncoder>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Improving rendering performance with vertex amplification](improving-rendering-performance-with-vertex-amplification.md)
- [Sampling GPU data into counter sample buffers](sampling-gpu-data-into-counter-sample-buffers.md)
- [Setting up a command structure](setting-up-a-command-structure.md)
- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)
- [Tracking the resource residency of argument buffers](tracking-the-resource-residency-of-argument-buffers.md)

<a id="overview"></a>

## Overview

A render pass draws a scene, or a component within a scene, to its render *attachments*, the outputs of a render pass. You can render to those outputs with various approaches, including techniques that apply the following:

- Primitive drawing
- Mesh drawing
- Ray tracing
- Dispatching tile shaders

To create an [MTLRenderCommandEncoder](mtlrendercommandencoder.md) instance, call the [renderCommandEncoderWithDescriptor:](mtlcommandbuffer/makerendercommandencoder%28descriptor_%29.md) method of an [MTLCommandBuffer](mtlcommandbuffer.md) instance, or the [renderCommandEncoder](mtlparallelrendercommandencoder/makerendercommandencoder%28%29.md) method of an [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md) instance.

To configure the render pass for your first drawing commands, start with a pipeline state by passing an [MTLRenderPipelineState](mtlrenderpipelinestate.md) instance to the encoder’s [setRenderPipelineState:](mtlrendercommandencoder/setrenderpipelinestate%28__%29.md) method. You create the pipeline states your render pass needs, typically ahead of time, by calling one or more [MTLDevice](mtldevice.md) methods (see [Pipeline state creation](pipeline-state-creation.md)).

> **Tip**

>  Avoid visual stutter by creating pipeline states at a noncritical time, such as during launch, because of the time it can take to make them.

Configure other encoder settings by calling the methods on the [Render pass configuration](render-pass-configuration.md) page. For example, you may need to configure the pass’s viewport, its scissor rectangle, and the settings for depth and stencil tests.

Assign resources, such as buffers and textures, for the shaders that depend on them. For more information, see the shader-specific pages in the resource preparation section, such as [Vertex shader resource preparation commands](vertex-shader-resource-preparation-commands.md) and [Fragment shader resource preparation commands](fragment-shader-resource-preparation-commands.md). If your shaders access resources through an argument buffer, make those resources *resident* in GPU memory by calling the methods on the [Argument buffer resource preparation commands](argument-buffer-resource-preparation-commands.md) page.

Encode drawing commands after you configure the state and resources the commands depend on. The encoder maintains its current state and applies it to all subsequent draw commands. For drawing commands that need different states or resources, reconfigure the render pass appropriately and then encode those draw commands. Repeat the process for each batch of drawing commands that depend on the same render pass configuration and resources.

When you finish encoding the render pass’s commands, finalize it into the command buffer by calling the encoder’s [endEncoding](mtlcommandencoder/endencoding%28%29.md) method.

<a id="Command-stages"></a>

### Command stages

Most render commands apply to one or more stages within a pass. The following table shows which stages apply to each command:

| Function | MTLStages |
| --- | --- |
| [drawPrimitives:vertexStart:vertexCount:](mtlrendercommandencoder/drawprimitives%28type_vertexstart_vertexcount_%29.md) | [MTLStageVertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawPrimitives:vertexStart:vertexCount:instanceCount:](mtlrendercommandencoder/drawprimitives%28type_vertexstart_vertexcount_instancecount_%29.md) | [MTLStageVertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawPrimitives:vertexStart:vertexCount:instanceCount:baseInstance:](mtlrendercommandencoder/drawprimitives%28type_vertexstart_vertexcount_instancecount_baseinstance_%29.md) | [MTLStageVertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawPrimitives:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/drawprimitives%28type_indirectbuffer_indirectbufferoffset_%29.md) | [MTLStageVertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset:](mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_%29.md) | [MTLStageVertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:](mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_%29.md) | [MTLStageVertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:baseVertex:baseInstance:](mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_basevertex_baseinstance_%29.md) | [MTLStageVertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawIndexedPrimitives:indexType:indexBuffer:indexBufferOffset:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/drawindexedprimitives%28type_indextype_indexbuffer_indexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md) | [MTLStageVertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawMeshThreads:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](mtlrendercommandencoder/drawmeshthreads%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md) | [MTLStageObject](mtlstages/object.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageMesh](mtlstages/mesh.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawMeshThreadgroups:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](mtlrendercommandencoder/drawmeshthreadgroups%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md) | [MTLStageObject](mtlstages/object.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageMesh](mtlstages/mesh.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawMeshThreadgroupsWithIndirectBuffer:indirectBufferOffset:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](mtlrendercommandencoder/drawmeshthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md) | [MTLStageObject](mtlstages/object.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageMesh](mtlstages/mesh.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawPatches:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:instanceCount:baseInstance:](mtlrendercommandencoder/drawpatches%28numberofpatchcontrolpoints_patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_instancecount_baseinstance_%29.md) | [MTLStageVertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawPatches:patchIndexBuffer:patchIndexBufferOffset:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/drawpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md) | [MTLStageVertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawIndexedPatches:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:instanceCount:baseInstance:](mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_instancecount_base~12f3c1a5.md) | [MTLStageVertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [drawIndexedPatches:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md) | [MTLStageVertex](mtlstages/vertex.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[MTLStageFragment](mtlstages/fragment.md) |
| [dispatchThreadsPerTile:](mtlrendercommandencoder/dispatchthreadspertile%28__%29.md) | [MTLStageTile](mtlstages/tile.md) |
| [executeCommandsInBuffer(\_:range:)](mtlrendercommandencoder/executecommandsinbuffer%28__range_%29.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[executeCommandsInBuffer:withRange:](mtlrendercommandencoder/executecommandsinbuffer_withrange_.md) | None |
| [executeCommandsInBuffer(\_:indirectBuffer:offset:)](mtlrendercommandencoder/executecommandsinbuffer%28__indirectbuffer_offset_%29.md)![](https://developer.apple.com/images/com.apple.metal/spacer.png)[executeCommandsInBuffer:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/executecommandsinbuffer_indirectbuffer_indirectbufferoffset_.md) | None |
| [sampleCountersInBuffer:atSampleIndex:withBarrier:](mtlrendercommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md) | None |

Draw commands don’t apply to [MTLStageFragment](mtlstages/fragment.md) when the [MTLRenderPipelineState](mtlrenderpipelinestate.md) for the draw disables rasterization. See [rasterizationEnabled](mtlrenderpipelinedescriptor/israsterizationenabled.md).

Mesh draw commands don’t apply to [MTLStageObject](mtlstages/object.md) when the [MTLRenderPipelineState](mtlrenderpipelinestate.md) for the draw doesn’t have an object shader.

The [executeCommandsInBuffer(\_:range:)](mtlrendercommandencoder/executecommandsinbuffer%28__range_%29.md) and [executeCommandsInBuffer(\_:indirectBuffer:offset:)](mtlrendercommandencoder/executecommandsinbuffer%28__indirectbuffer_offset_%29.md) commands don’t apply to any stage, which means you can’t use a barrier to wait for all commands in an indirect command buffer to complete. However, each command within the [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md) applies to the same stages as when you encode the equivalent command directly.

> **Note**

> [MTLRenderStages](mtlrenderstages.md) and its values have the same functionality as [MTLStages](mtlstages.md) and its corresponding stage values.

For more information about stages and synchronization, see [MTLStages](mtlstages.md) and [Resource synchronization](resource-synchronization.md).

## Topics

### Configuration commands

Manage the render pass’s overall state.

- [Render pass configuration](render-pass-configuration.md): Set a render pass’s pipeline state, attachment actions, viewports, and so on, that affect subsequent drawing commands.

### Resource preparation commands

Load buffers, textures, and other resources into GPU memory for each shader type, including mesh, object, vertex, fragment, and tile shaders.

- [Mesh and object shader resource preparation commands](mesh-and-object-shader-resource-preparation-commands.md): Assign resources to mesh and object shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Vertex shader resource preparation commands](vertex-shader-resource-preparation-commands.md): Assign resources to vertex shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Fragment shader resource preparation commands](fragment-shader-resource-preparation-commands.md): Assign resources to fragment shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Tile shaders resource preparation commands](tile-shaders-resource-preparation-commands.md): Assign resources to tile shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Argument buffer resource preparation commands](argument-buffer-resource-preparation-commands.md): Load individual resources and multiple resources within a heap into GPU memory so that they’re available to shaders through argument buffers.

### Drawing with vertices

Render primitives with vertex shaders.

- [drawPrimitives:vertexStart:vertexCount:](mtlrendercommandencoder/drawprimitives%28type_vertexstart_vertexcount_%29.md): Encodes a draw command that renders an instance of a geometric primitive.
- [drawPrimitives:vertexStart:vertexCount:instanceCount:](mtlrendercommandencoder/drawprimitives%28type_vertexstart_vertexcount_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive.
- [drawPrimitives:vertexStart:vertexCount:instanceCount:baseInstance:](mtlrendercommandencoder/drawprimitives%28type_vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive that starts with a custom instance identification number.
- [drawPrimitives:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/drawprimitives%28type_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indirect arguments.

### Drawing with indexed vertices

Render indexed primitives with vertex shaders.

- [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset:](mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_%29.md): Encodes a draw command that renders an instance of a geometric primitive with indexed vertices.
- [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:](mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices.
- [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:baseVertex:baseInstance:](mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_basevertex_baseinstance_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices, starting with a custom vertex and instance.
- [drawIndexedPrimitives:indexType:indexBuffer:indexBufferOffset:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/drawindexedprimitives%28type_indextype_indexbuffer_indexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of a geometric primitive with indexed vertices and indirect arguments.

### Drawing with meshes

Render meshes with mesh and object shaders.

- [drawMeshThreads:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](mtlrendercommandencoder/drawmeshthreads%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threads.
- [drawMeshThreadgroups:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](mtlrendercommandencoder/drawmeshthreadgroups%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threadgroups.
- [drawMeshThreadgroupsWithIndirectBuffer:indirectBufferOffset:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](mtlrendercommandencoder/drawmeshthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with indirect arguments.

### Drawing with tessellation patches

Render tessellated geometry with control points.

- [drawPatches:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:instanceCount:baseInstance:](mtlrendercommandencoder/drawpatches%28numberofpatchcontrolpoints_patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_instancecount_baseinstance_%29.md): Encodes a draw command that renders multiple instances of tessellated patches.
- [drawPatches:patchIndexBuffer:patchIndexBufferOffset:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/drawpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of tessellated patches with indirect arguments.

### Drawing with indexed tessellation patches

Render tessellated geometry with indexed control points.

- [drawIndexedPatches:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:instanceCount:baseInstance:](mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_instancecount_base~12f3c1a5.md): Encodes a draw command that renders multiple instances of tessellated patches with a control point index buffer.
- [drawIndexedPatches:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of tessellated patches with a control point index buffer and indirect arguments.

### Drawing with tile shaders

Dispatch tile shaders within a render pass.

- [dispatchThreadsPerTile:](mtlrendercommandencoder/dispatchthreadspertile%28__%29.md): Encodes a command that invokes GPU functions from the encoder’s current tile render pipeline state.
- [tileWidth](mtlrendercommandencoder/tilewidth.md): The width of the tiles, in pixels, for the render command encoder.
- [tileHeight](mtlrendercommandencoder/tileheight.md): The height of the tiles, in pixels, for the render command encoder.

### Preventing resource access conflicts

Address hazards for untracked resources with fences and barriers.

- [waitForFence:beforeStages:](mtlrendercommandencoder/waitforfence%28__before_%29.md): Encodes a command that instructs the GPU to pause before starting one or more stages of the render pass until a pass updates a fence.
- [updateFence:afterStages:](mtlrendercommandencoder/updatefence%28__after_%29.md): Encodes a command that instructs the GPU to update a fence after one or more stages, which can unblock other passes waiting for the fence.
- [memoryBarrierWithResources:count:afterStages:beforeStages:](mtlrendercommandencoder/memorybarrierwithresources_count_afterstages_beforestages_.md): Creates a memory barrier that enforces the order of write and read operations for specific resources.
- [memoryBarrierWithScope:afterStages:beforeStages:](mtlrendercommandencoder/memorybarrier%28scope_after_before_%29.md): Creates a memory barrier that enforces the order of write and read operations for specific resource types.

### Running commands from indirect command buffers

Invoke commands within an indirect command buffer.

- [executeCommandsInBuffer:withRange:](mtlrendercommandencoder/executecommandsinbuffer_withrange_.md): Encodes a command that runs a range of commands from an indirect command buffer (ICB).
- [executeCommandsInBuffer:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/executecommandsinbuffer_indirectbuffer_indirectbufferoffset_.md): Encodes a command that runs an indirect range of commands from an indirect command buffer (ICB).

### Sampling counters

Capture runtime data from GPU hardware counters.

- [sampleCountersInBuffer:atSampleIndex:withBarrier:](mtlrendercommandencoder/samplecounters%28samplebuffer_sampleindex_barrier_%29.md): Encodes a command that samples hardware counters during the render pass and stores the data into a counter sample buffer.

### Deprecated

Replace older symbols in this group with their newer equivalents.

- [Deprecated symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [MTLCommandEncoder](mtlcommandencoder.md)

## See Also

### Encoding a render pass

- [MTL4RenderCommandEncoder](mtl4rendercommandencoder.md): Encodes configuration and draw commands for a single render pass into a command buffer.
- [MTL4RenderEncoderOptions](mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTLTriangleFillMode](mtltrianglefillmode.md): Specifies how to rasterize triangle and triangle strip primitives.
- [MTLWinding](mtlwinding.md): The vertex winding rule that determines a front-facing primitive.
- [MTLCullMode](mtlcullmode.md): The mode that determines whether to perform culling and which type of primitive to cull.
- [MTLPrimitiveType](mtlprimitivetype.md): The geometric primitive type for drawing commands.
- [MTLIndexType](mtlindextype.md): The index type for an index buffer that references vertices of geometric primitives.
- [MTLDepthClipMode](mtldepthclipmode.md): The mode that determines how to deal with fragments outside of the near or far planes.
- [MTLVisibilityResultMode](mtlvisibilityresultmode.md): The mode that determines what, if anything, the GPU writes to the results buffer, after the GPU executes the render pass.
- [MTLVisibilityResultType](mtlvisibilityresulttype.md): This enumeration controls if Metal accumulates visibility results between render encoders or resets them.
