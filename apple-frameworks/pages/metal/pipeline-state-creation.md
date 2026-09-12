> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/pipeline-state-creation](https://developer.apple.com/documentation/metal/pipeline-state-creation)

# Pipeline state creation (Swift)

**Framework:** Metal  
**Kind:** API Collection

Create pipeline states for render and compute passes, samplers, depth and stencil states, and indirect command buffers.

<a id="overview"></a>

## Overview

Use these methods to create instances of various state types for a render or compute pass (see [Render passes](render-passes.md) and [Compute passes](compute-passes.md), respectively).

You can create multiple [MTLRenderPipelineState](mtlrenderpipelinestate.md) instances for a single render pass encoder ([MTLRenderCommandEncoder](mtlrendercommandencoder.md)) that each apply to different types of render commands. For example, a single render pass can render primitives with vertices, then meshes, and finish with a tile shader command, each with a different pipeline. To create these pipelines, configure instances of [MTLRenderPipelineDescriptor](mtlrenderpipelinedescriptor.md), [MTLMeshRenderPipelineDescriptor](mtlmeshrenderpipelinedescriptor.md), and [MTLTileRenderPipelineDescriptor](mtltilerenderpipelinedescriptor.md). Then pass those descriptors to the [makeRenderPipelineState(descriptor:completionHandler:)](mtldevice/makerenderpipelinestate%28descriptor_completionhandler_%29.md), [makeRenderPipelineState(descriptor:options:completionHandler:)](mtldevice/makerenderpipelinestate%28descriptor_options_completionhandler_%29-1wvya.md) and [makeRenderPipelineState(tileDescriptor:options:completionHandler:)](mtldevice/makerenderpipelinestate%28tiledescriptor_options_completionhandler_%29.md) methods (or a counterpart method), respectively.

> **Important**

>  Only create reflection (see [MTLRenderPipelineReflection](mtlrenderpipelinereflection.md)) instances if you need them, because each one can require a significant amount of memory.

## Topics

### Creating render pipeline states with vertex shaders

- [makeRenderPipelineState(descriptor:)](mtldevice/makerenderpipelinestate%28descriptor_%29.md): Synchronously creates a render pipeline state.
- [makeRenderPipelineState(descriptor:completionHandler:)](mtldevice/makerenderpipelinestate%28descriptor_completionhandler_%29.md): Asynchronously creates a render pipeline state.
- [makeRenderPipelineState(descriptor:options:)](mtldevice/makerenderpipelinestate%28descriptor_options_%29-89vxc.md): Synchronously creates a render pipeline state and reflection information in a tuple.
- [makeRenderPipelineState(descriptor:options:reflection:)](mtldevice/makerenderpipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a render pipeline state and reflection information.
- [makeRenderPipelineState(descriptor:options:completionHandler:)](mtldevice/makerenderpipelinestate%28descriptor_options_completionhandler_%29-5gdww.md): Asynchronously creates a render pipeline state and reflection information.

### Creating render pipeline states with mesh shaders

- [makeRenderPipelineState(descriptor:options:)](mtldevice/makerenderpipelinestate%28descriptor_options_%29-yrak.md): Synchronously creates a mesh render pipeline state and reflection information in a tuple.
- [makeRenderPipelineState(descriptor:options:completionHandler:)](mtldevice/makerenderpipelinestate%28descriptor_options_completionhandler_%29-1wvya.md): Asynchronously creates a mesh render pipeline state and reflection information.

### Creating tile render pipeline states

- [makeRenderPipelineState(tileDescriptor:options:)](mtldevice/makerenderpipelinestate%28tiledescriptor_options_%29.md): Synchronously creates a tile shader’s render pipeline state and reflection information in a tuple.
- [makeRenderPipelineState(tileDescriptor:options:reflection:)](mtldevice/makerenderpipelinestate%28tiledescriptor_options_reflection_%29.md): Synchronously creates a tile shader’s render pipeline state and reflection information.
- [makeRenderPipelineState(tileDescriptor:options:completionHandler:)](mtldevice/makerenderpipelinestate%28tiledescriptor_options_completionhandler_%29.md): Asynchronously creates a tile shader’s render pipeline state and reflection information.

### Creating compute pipeline states

- [makeComputePipelineState(descriptor:options:reflection:)](mtldevice/makecomputepipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection information.
- [makeComputePipelineState(descriptor:options:completionHandler:)](mtldevice/makecomputepipelinestate%28descriptor_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection information.
- [makeComputePipelineState(function:)](mtldevice/makecomputepipelinestate%28function_%29.md): Synchronously creates a compute pipeline state with a function instance.
- [makeComputePipelineState(function:completionHandler:)](mtldevice/makecomputepipelinestate%28function_completionhandler_%29.md): Asynchronously creates a compute pipeline state with a function instance.
- [makeComputePipelineState(function:options:reflection:)](mtldevice/makecomputepipelinestate%28function_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection with a function instance.
- [makeComputePipelineState(function:options:completionHandler:)](mtldevice/makecomputepipelinestate%28function_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection with a function instance.

### Creating depth and stencil states

- [makeDepthStencilState(descriptor:)](mtldevice/makedepthstencilstate%28descriptor_%29.md): Creates a depth-stencil state instance.

### Supporting types

- [MTLNewRenderPipelineStateCompletionHandler](mtlnewrenderpipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline.
- [MTLNewRenderPipelineStateWithReflectionCompletionHandler](mtlnewrenderpipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline and reflection information.
- [MTLNewComputePipelineStateCompletionHandler](mtlnewcomputepipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline.
- [MTLNewComputePipelineStateWithReflectionCompletionHandler](mtlnewcomputepipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline and reflection information.

## See Also

### Working with GPU devices

- [Device inspection](device-inspection.md): Locate and identify a GPU and the features it supports, and sample its counters.
- [Work submission](work-submission.md): Create queues that submit work to the GPU or load assets into GPU resources, and indirect command buffers that group your frequent commands together.
- [Resource creation](resource-creation.md): Load assets with input/output queues and make various resource instances, such as buffers, textures, acceleration structures, and memory heaps.
- [Shader library and archive creation](shader-library-and-archive-creation.md): Create static and dynamic shader libraries, and binary shader archives.

# Pipeline state creation (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

Create pipeline states for render and compute passes, samplers, depth and stencil states, and indirect command buffers.

<a id="overview"></a>

## Overview

Use these methods to create instances of various state types for a render or compute pass (see [Render passes](render-passes.md) and [Compute passes](compute-passes.md), respectively).

You can create multiple [MTLRenderPipelineState](mtlrenderpipelinestate.md) instances for a single render pass encoder ([MTLRenderCommandEncoder](mtlrendercommandencoder.md)) that each apply to different types of render commands. For example, a single render pass can render primitives with vertices, then meshes, and finish with a tile shader command, each with a different pipeline. To create these pipelines, configure instances of [MTLRenderPipelineDescriptor](mtlrenderpipelinedescriptor.md), [MTLMeshRenderPipelineDescriptor](mtlmeshrenderpipelinedescriptor.md), and [MTLTileRenderPipelineDescriptor](mtltilerenderpipelinedescriptor.md). Then pass those descriptors to the [newRenderPipelineStateWithDescriptor:completionHandler:](mtldevice/makerenderpipelinestate%28descriptor_completionhandler_%29.md), [newRenderPipelineStateWithMeshDescriptor:options:completionHandler:](mtldevice/makerenderpipelinestate%28descriptor_options_completionhandler_%29-1wvya.md) and [newRenderPipelineStateWithTileDescriptor:options:completionHandler:](mtldevice/makerenderpipelinestate%28tiledescriptor_options_completionhandler_%29.md) methods (or a counterpart method), respectively.

> **Important**

>  Only create reflection (see [MTLRenderPipelineReflection](mtlrenderpipelinereflection.md)) instances if you need them, because each one can require a significant amount of memory.

## Topics

### Creating render pipeline states with vertex shaders

- [newRenderPipelineStateWithDescriptor:error:](mtldevice/makerenderpipelinestate%28descriptor_%29.md): Synchronously creates a render pipeline state.
- [newRenderPipelineStateWithDescriptor:completionHandler:](mtldevice/makerenderpipelinestate%28descriptor_completionhandler_%29.md): Asynchronously creates a render pipeline state.
- [newRenderPipelineStateWithDescriptor:options:reflection:error:](mtldevice/makerenderpipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a render pipeline state and reflection information.
- [newRenderPipelineStateWithDescriptor:options:completionHandler:](mtldevice/makerenderpipelinestate%28descriptor_options_completionhandler_%29-5gdww.md): Asynchronously creates a render pipeline state and reflection information.

### Creating render pipeline states with mesh shaders

- [newRenderPipelineStateWithMeshDescriptor:options:reflection:error:](mtldevice/newrenderpipelinestatewithmeshdescriptor_options_reflection_error_.md): Synchronously creates a mesh render pipeline state and reflection information.
- [newRenderPipelineStateWithMeshDescriptor:options:completionHandler:](mtldevice/makerenderpipelinestate%28descriptor_options_completionhandler_%29-1wvya.md): Asynchronously creates a mesh render pipeline state and reflection information.

### Creating tile render pipeline states

- [newRenderPipelineStateWithTileDescriptor:options:reflection:error:](mtldevice/makerenderpipelinestate%28tiledescriptor_options_reflection_%29.md): Synchronously creates a tile shader’s render pipeline state and reflection information.
- [newRenderPipelineStateWithTileDescriptor:options:completionHandler:](mtldevice/makerenderpipelinestate%28tiledescriptor_options_completionhandler_%29.md): Asynchronously creates a tile shader’s render pipeline state and reflection information.

### Creating compute pipeline states

- [newComputePipelineStateWithDescriptor:options:reflection:error:](mtldevice/makecomputepipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection information.
- [newComputePipelineStateWithDescriptor:options:completionHandler:](mtldevice/makecomputepipelinestate%28descriptor_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection information.
- [newComputePipelineStateWithFunction:error:](mtldevice/makecomputepipelinestate%28function_%29.md): Synchronously creates a compute pipeline state with a function instance.
- [newComputePipelineStateWithFunction:completionHandler:](mtldevice/makecomputepipelinestate%28function_completionhandler_%29.md): Asynchronously creates a compute pipeline state with a function instance.
- [newComputePipelineStateWithFunction:options:reflection:error:](mtldevice/makecomputepipelinestate%28function_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection with a function instance.
- [newComputePipelineStateWithFunction:options:completionHandler:](mtldevice/makecomputepipelinestate%28function_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection with a function instance.

### Creating depth and stencil states

- [newDepthStencilStateWithDescriptor:](mtldevice/makedepthstencilstate%28descriptor_%29.md): Creates a depth-stencil state instance.

### Supporting types

- [MTLNewRenderPipelineStateCompletionHandler](mtlnewrenderpipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline.
- [MTLNewRenderPipelineStateWithReflectionCompletionHandler](mtlnewrenderpipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline and reflection information.
- [MTLNewComputePipelineStateCompletionHandler](mtlnewcomputepipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline.
- [MTLNewComputePipelineStateWithReflectionCompletionHandler](mtlnewcomputepipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline and reflection information.

## See Also

### Working with GPU devices

- [Device inspection](device-inspection.md): Locate and identify a GPU and the features it supports, and sample its counters.
- [Work submission](work-submission.md): Create queues that submit work to the GPU or load assets into GPU resources, and indirect command buffers that group your frequent commands together.
- [Resource creation](resource-creation.md): Load assets with input/output queues and make various resource instances, such as buffers, textures, acceleration structures, and memory heaps.
- [Shader library and archive creation](shader-library-and-archive-creation.md): Create static and dynamic shader libraries, and binary shader archives.
