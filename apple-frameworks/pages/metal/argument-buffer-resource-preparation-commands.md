> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/argument-buffer-resource-preparation-commands](https://developer.apple.com/documentation/metal/argument-buffer-resource-preparation-commands)

# Argument buffer resource preparation commands (Swift)

**Framework:** Metal  
**Kind:** API Collection

Load individual resources and multiple resources within a heap into GPU memory so that they’re available to shaders through argument buffers.

<a id="overview"></a>

## Overview

These methods encode commands that load resources into GPU memory, making them accessible to your shaders through argument buffers. To load an individual resource, call the [useResource(\_:usage:stages:)](mtlrendercommandencoder/useresource%28__usage_stages_%29.md) method, or another resource-based method. Alternatively, you can load all the resources within a heap by calling the [useHeap(\_:stages:)](mtlrendercommandencoder/useheap%28__stages_%29.md) method or another heap-based method.

> **Important**

>  The heap-based methods don’t provide a `usage` parameter (see [MTLResourceUsage](mtlresourceusage.md)) and set the usage for the resources within each heap to [read](mtlresourceusage/read.md).

To give shaders write or read/write access to specific resources within a heap, call a resource-based method after the heap-based method. Metal combines usage modes you set for a resource through both heap and resource methods.

For more information, see [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md).

## Topics

### Loading individual resources for argument buffers

- [useResource(\_:usage:stages:)](mtlrendercommandencoder/useresource%28__usage_stages_%29.md): Ensures the shaders in the render pass’s subsequent draw commands have access to a resource.
- [useResources(\_:usage:stages:)](mtlrendercommandencoder/useresources%28__usage_stages_%29.md): Ensures the shaders in the render pass’s subsequent draw commands have access to multiple resources.

### Loading heaps and the resources they contain for argument buffers

- [useHeap(\_:stages:)](mtlrendercommandencoder/useheap%28__stages_%29.md): Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from a heap.
- [useHeaps(\_:stages:)](mtlrendercommandencoder/useheaps%28__stages_%29.md): Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from multiple heaps.

## See Also

### Resource preparation commands

- [Mesh and object shader resource preparation commands](mesh-and-object-shader-resource-preparation-commands.md): Assign resources to mesh and object shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Vertex shader resource preparation commands](vertex-shader-resource-preparation-commands.md): Assign resources to vertex shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Fragment shader resource preparation commands](fragment-shader-resource-preparation-commands.md): Assign resources to fragment shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Tile shaders resource preparation commands](tile-shaders-resource-preparation-commands.md): Assign resources to tile shaders, including buffers, textures, acceleration structures, sampler states, and function tables.

# Argument buffer resource preparation commands (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

Load individual resources and multiple resources within a heap into GPU memory so that they’re available to shaders through argument buffers.

<a id="overview"></a>

## Overview

These methods encode commands that load resources into GPU memory, making them accessible to your shaders through argument buffers. To load an individual resource, call the [useResource:usage:stages:](mtlrendercommandencoder/useresource%28__usage_stages_%29.md) method, or another resource-based method. Alternatively, you can load all the resources within a heap by calling the [useHeap:stages:](mtlrendercommandencoder/useheap%28__stages_%29.md) method or another heap-based method.

> **Important**

>  The heap-based methods don’t provide a `usage` parameter (see [MTLResourceUsage](mtlresourceusage.md)) and set the usage for the resources within each heap to [MTLResourceUsageRead](mtlresourceusage/read.md).

To give shaders write or read/write access to specific resources within a heap, call a resource-based method after the heap-based method. Metal combines usage modes you set for a resource through both heap and resource methods.

For more information, see [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md).

## Topics

### Loading individual resources for argument buffers

- [useResource:usage:stages:](mtlrendercommandencoder/useresource%28__usage_stages_%29.md): Ensures the shaders in the render pass’s subsequent draw commands have access to a resource.
- [useResources:count:usage:stages:](mtlrendercommandencoder/useresources_count_usage_stages_.md): Ensures the shaders in the render pass’s subsequent draw commands have access to multiple resources.

### Loading heaps and the resources they contain for argument buffers

- [useHeap:stages:](mtlrendercommandencoder/useheap%28__stages_%29.md): Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from a heap.
- [useHeaps:count:stages:](mtlrendercommandencoder/useheaps_count_stages_.md): Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from multiple heaps.

## See Also

### Resource preparation commands

- [Mesh and object shader resource preparation commands](mesh-and-object-shader-resource-preparation-commands.md): Assign resources to mesh and object shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Vertex shader resource preparation commands](vertex-shader-resource-preparation-commands.md): Assign resources to vertex shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Fragment shader resource preparation commands](fragment-shader-resource-preparation-commands.md): Assign resources to fragment shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Tile shaders resource preparation commands](tile-shaders-resource-preparation-commands.md): Assign resources to tile shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
