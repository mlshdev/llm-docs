> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectrendercommand](https://developer.apple.com/documentation/metal/mtlindirectrendercommand)

# MTLIndirectRenderCommand (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A render command in an indirect command buffer.

## Declaration

```swift
protocol MTLIndirectRenderCommand : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Don’t implement this protocol; you get instances of this type by asking an [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md) for them.

Use this instance to reset or encode a command. You need to reset a command before encoding a new command.

## Topics

### Setting command arguments

- [setRenderPipelineState(\_:)](mtlindirectrendercommand/setrenderpipelinestate%28__%29.md): Sets the render pipeline state for the command.
- [setVertexBuffer(\_:offset:at:)](mtlindirectrendercommand/setvertexbuffer%28__offset_at_%29.md): Sets a vertex buffer argument for the command.
- [setFragmentBuffer(\_:offset:at:)](mtlindirectrendercommand/setfragmentbuffer%28__offset_at_%29.md): Sets a fragment buffer argument for the command.

### Encoding a drawing command

- [drawPrimitives(\_:vertexStart:vertexCount:instanceCount:baseInstance:)](mtlindirectrendercommand/drawprimitives%28__vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a command to render a number of instances of primitives using vertex data in contiguous array elements, starting from the base instance.
- [drawIndexedPrimitives(\_:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:baseVertex:baseInstance:)](mtlindirectrendercommand/drawindexedprimitives%28__indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_basevertex_baseinstance_%29.md): Encodes a command to render a number of instances of primitives using an index list specified in a buffer, starting from the base vertex of the base instance.
- [drawPatches(\_:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:instanceCount:baseInstance:tessellationFactorBuffer:tessellationFactorBufferOffset:tessellationFactorBufferInstanceStride:)](mtlindirectrendercommand/drawpatches%28__patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_instancecount_baseinstance_tessellationfactorbuffer_tessellationfactorbufferoffset_tessellationfactorbuf~ba3eb562.md): Encodes a command to render a number of instances of tessellated patches.
- [drawIndexedPatches(\_:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:instanceCount:baseInstance:tessellationFactorBuffer:tessellationFactorBufferOffset:tessellationFactorBufferInstanceStride:)](mtlindirectrendercommand/drawindexedpatches%28__patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_instancecount_baseinstance_tessellationfact~1368a335.md): Encodes a command to render a number of instances of tessellated patches, using a control point index buffer.

### Resetting a command

- [reset()](mtlindirectrendercommand/reset%28%29.md): Resets the command to its default state.

### Instance Methods

- [clearBarrier()](mtlindirectrendercommand/clearbarrier%28%29.md)
- [drawMeshThreadgroups(\_:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](mtlindirectrendercommand/drawmeshthreadgroups%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md)
- [drawMeshThreads(\_:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](mtlindirectrendercommand/drawmeshthreads%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md)
- [setBarrier()](mtlindirectrendercommand/setbarrier%28%29.md)
- [setCullMode(\_:)](mtlindirectrendercommand/setcullmode%28__%29.md)
- [setDepthBias(\_:slopeScale:clamp:)](mtlindirectrendercommand/setdepthbias%28__slopescale_clamp_%29.md)
- [setDepthClipMode(\_:)](mtlindirectrendercommand/setdepthclipmode%28__%29.md)
- [setDepthStencilState(\_:)](mtlindirectrendercommand/setdepthstencilstate%28__%29.md)
- [setFrontFacing(\_:)](mtlindirectrendercommand/setfrontfacing%28__%29.md)
- [setMeshBuffer(\_:offset:at:)](mtlindirectrendercommand/setmeshbuffer%28__offset_at_%29.md)
- [setObjectBuffer(\_:offset:at:)](mtlindirectrendercommand/setobjectbuffer%28__offset_at_%29.md)
- [setObjectThreadgroupMemoryLength(\_:index:)](mtlindirectrendercommand/setobjectthreadgroupmemorylength%28__index_%29.md)
- [setTriangleFillMode(\_:)](mtlindirectrendercommand/settrianglefillmode%28__%29.md)
- [setVertexBuffer(\_:offset:attributeStride:at:)](mtlindirectrendercommand/setvertexbuffer%28__offset_attributestride_at_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Render compute commands

- [MTLDrawPatchIndirectArguments](mtldrawpatchindirectarguments.md): The data layout required for drawing patches via indirect buffer calls.
- [MTLDrawPrimitivesIndirectArguments](mtldrawprimitivesindirectarguments.md): The data layout required for drawing primitives via indirect buffer calls.
- [MTLDrawIndexedPrimitivesIndirectArguments](mtldrawindexedprimitivesindirectarguments.md): The data layout required for drawing indexed primitives via indirect buffer calls.

# MTLIndirectRenderCommand (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A render command in an indirect command buffer.

## Declaration

```objectivec
@protocol MTLIndirectRenderCommand <NSObject>
```

<a id="overview"></a>

## Overview

Don’t implement this protocol; you get instances of this type by asking an [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md) for them.

Use this instance to reset or encode a command. You need to reset a command before encoding a new command.

## Topics

### Setting command arguments

- [setRenderPipelineState:](mtlindirectrendercommand/setrenderpipelinestate%28__%29.md): Sets the render pipeline state for the command.
- [setVertexBuffer:offset:atIndex:](mtlindirectrendercommand/setvertexbuffer%28__offset_at_%29.md): Sets a vertex buffer argument for the command.
- [setFragmentBuffer:offset:atIndex:](mtlindirectrendercommand/setfragmentbuffer%28__offset_at_%29.md): Sets a fragment buffer argument for the command.

### Encoding a drawing command

- [drawPrimitives:vertexStart:vertexCount:instanceCount:baseInstance:](mtlindirectrendercommand/drawprimitives%28__vertexstart_vertexcount_instancecount_baseinstance_%29.md): Encodes a command to render a number of instances of primitives using vertex data in contiguous array elements, starting from the base instance.
- [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset:instanceCount:baseVertex:baseInstance:](mtlindirectrendercommand/drawindexedprimitives%28__indexcount_indextype_indexbuffer_indexbufferoffset_instancecount_basevertex_baseinstance_%29.md): Encodes a command to render a number of instances of primitives using an index list specified in a buffer, starting from the base vertex of the base instance.
- [drawPatches:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:instanceCount:baseInstance:tessellationFactorBuffer:tessellationFactorBufferOffset:tessellationFactorBufferInstanceStride:](mtlindirectrendercommand/drawpatches%28__patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_instancecount_baseinstance_tessellationfactorbuffer_tessellationfactorbufferoffset_tessellationfactorbuf~ba3eb562.md): Encodes a command to render a number of instances of tessellated patches.
- [drawIndexedPatches:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:instanceCount:baseInstance:tessellationFactorBuffer:tessellationFactorBufferOffset:tessellationFactorBufferInstanceStride:](mtlindirectrendercommand/drawindexedpatches%28__patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_instancecount_baseinstance_tessellationfact~1368a335.md): Encodes a command to render a number of instances of tessellated patches, using a control point index buffer.

### Resetting a command

- [reset](mtlindirectrendercommand/reset%28%29.md): Resets the command to its default state.

### Instance Methods

- [clearBarrier](mtlindirectrendercommand/clearbarrier%28%29.md)
- [drawMeshThreadgroups:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](mtlindirectrendercommand/drawmeshthreadgroups%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md)
- [drawMeshThreads:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](mtlindirectrendercommand/drawmeshthreads%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md)
- [setBarrier](mtlindirectrendercommand/setbarrier%28%29.md)
- [setCullMode:](mtlindirectrendercommand/setcullmode%28__%29.md)
- [setDepthBias:slopeScale:clamp:](mtlindirectrendercommand/setdepthbias%28__slopescale_clamp_%29.md)
- [setDepthClipMode:](mtlindirectrendercommand/setdepthclipmode%28__%29.md)
- [setDepthStencilState:](mtlindirectrendercommand/setdepthstencilstate%28__%29.md)
- [setFrontFacingWinding:](mtlindirectrendercommand/setfrontfacing%28__%29.md)
- [setMeshBuffer:offset:atIndex:](mtlindirectrendercommand/setmeshbuffer%28__offset_at_%29.md)
- [setObjectBuffer:offset:atIndex:](mtlindirectrendercommand/setobjectbuffer%28__offset_at_%29.md)
- [setObjectThreadgroupMemoryLength:atIndex:](mtlindirectrendercommand/setobjectthreadgroupmemorylength%28__index_%29.md)
- [setTriangleFillMode:](mtlindirectrendercommand/settrianglefillmode%28__%29.md)
- [setVertexBuffer:offset:attributeStride:atIndex:](mtlindirectrendercommand/setvertexbuffer%28__offset_attributestride_at_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Render compute commands

- [MTLDrawPatchIndirectArguments](mtldrawpatchindirectarguments.md): The data layout required for drawing patches via indirect buffer calls.
- [MTLDrawPrimitivesIndirectArguments](mtldrawprimitivesindirectarguments.md): The data layout required for drawing primitives via indirect buffer calls.
- [MTLDrawIndexedPrimitivesIndirectArguments](mtldrawindexedprimitivesindirectarguments.md): The data layout required for drawing indexed primitives via indirect buffer calls.
