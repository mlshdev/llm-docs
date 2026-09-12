> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/tracking-the-resource-residency-of-argument-buffers](https://developer.apple.com/documentation/metal/tracking-the-resource-residency-of-argument-buffers)

# Tracking the resource residency of argument buffers (Swift)

**Framework:** Metal  
**Kind:** Article

Optimize resource performance within an argument buffer.

<a id="overview"></a>

## Overview

The Metal driver can’t automatically track the residency of argument buffer resources, but you can track it manually.

<a id="Track-argument-buffer-resource-residency-manually"></a>

### Track argument buffer resource residency manually

Call an [MTLRenderCommandEncoder](mtlrendercommandencoder.md) or [MTLComputeCommandEncoder](mtlcomputecommandencoder.md) method:

- For individual resources, call [useResource(\_:usage:stages:)](mtlrendercommandencoder/useresource%28__usage_stages_%29.md) or [useResource(\_:usage:)](mtlcomputecommandencoder/useresource%28__usage_%29.md).
- For all resources in a heap, call [useHeap(\_:stages:)](mtlrendercommandencoder/useheap%28__stages_%29.md) or [useHeap(\_:)](mtlcomputecommandencoder/useheap%28__%29.md).

These methods perform two important functions:

- They add argument buffer resources to the set of resources that the render or compute pass needs resident.
- They ensure that argument buffer resources are in a format that’s compatible with the required function operation, as an [MTLResourceUsage](mtlresourceusage.md) value specifies.

The methods with a `stages` parameter also insert dependency hazards, similar to [MTLFence](mtlfence.md) instances for that stage.

Call these methods before issuing any draw or dispatch calls that may access the specified resources.

> **Note**

>  To track resource access and dependency hazards, use [MTLFence](mtlfence.md) instances.
>
> If all the required resources aren’t resident when executing a render or compute pass, the associated [MTLCommandBuffer](mtlcommandbuffer.md) instance fails.

## See Also

### Argument buffers

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md): Optimize your app’s performance by grouping your resources into argument buffers.
- [Managing groups of resources with argument buffers](managing-groups-of-resources-with-argument-buffers.md): Create argument buffers to organize related resources.
- [Indexing argument buffers](indexing-argument-buffers.md): Assign resource indices within an argument buffer.
- [Rendering terrain dynamically with argument buffers](rendering-terrain-dynamically-with-argument-buffers.md): Use argument buffers to render terrain in real time with a GPU-driven pipeline.
- [Encoding argument buffers on the GPU](encoding-argument-buffers-on-the-gpu.md): Use a compute pass to encode an argument buffer and access its arguments in a subsequent render pass.
- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [MTLArgumentDescriptor](mtlargumentdescriptor.md): A representation of an argument within an argument buffer.
- [MTLArgumentEncoder](mtlargumentencoder.md): An interface you can use to encode argument data into an argument buffer.
- [MTLAttributeStrideStatic](mtlattributestridestatic.md)

# Tracking the resource residency of argument buffers (Objective-C)

**Framework:** Metal  
**Kind:** Article

Optimize resource performance within an argument buffer.

<a id="overview"></a>

## Overview

The Metal driver can’t automatically track the residency of argument buffer resources, but you can track it manually.

<a id="Track-argument-buffer-resource-residency-manually"></a>

### Track argument buffer resource residency manually

Call an [MTLRenderCommandEncoder](mtlrendercommandencoder.md) or [MTLComputeCommandEncoder](mtlcomputecommandencoder.md) method:

- For individual resources, call [useResource:usage:stages:](mtlrendercommandencoder/useresource%28__usage_stages_%29.md) or [useResource:usage:](mtlcomputecommandencoder/useresource%28__usage_%29.md).
- For all resources in a heap, call [useHeap:stages:](mtlrendercommandencoder/useheap%28__stages_%29.md) or [useHeap:](mtlcomputecommandencoder/useheap%28__%29.md).

These methods perform two important functions:

- They add argument buffer resources to the set of resources that the render or compute pass needs resident.
- They ensure that argument buffer resources are in a format that’s compatible with the required function operation, as an [MTLResourceUsage](mtlresourceusage.md) value specifies.

The methods with a `stages` parameter also insert dependency hazards, similar to [MTLFence](mtlfence.md) instances for that stage.

Call these methods before issuing any draw or dispatch calls that may access the specified resources.

> **Note**

>  To track resource access and dependency hazards, use [MTLFence](mtlfence.md) instances.
>
> If all the required resources aren’t resident when executing a render or compute pass, the associated [MTLCommandBuffer](mtlcommandbuffer.md) instance fails.

## See Also

### Argument buffers

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md): Optimize your app’s performance by grouping your resources into argument buffers.
- [Managing groups of resources with argument buffers](managing-groups-of-resources-with-argument-buffers.md): Create argument buffers to organize related resources.
- [Indexing argument buffers](indexing-argument-buffers.md): Assign resource indices within an argument buffer.
- [Rendering terrain dynamically with argument buffers](rendering-terrain-dynamically-with-argument-buffers.md): Use argument buffers to render terrain in real time with a GPU-driven pipeline.
- [Encoding argument buffers on the GPU](encoding-argument-buffers-on-the-gpu.md): Use a compute pass to encode an argument buffer and access its arguments in a subsequent render pass.
- [Using argument buffers with resource heaps](using-argument-buffers-with-resource-heaps.md): Reduce CPU overhead by using arrays inside argument buffers and combining them with resource heaps.
- [MTLArgumentDescriptor](mtlargumentdescriptor.md): A representation of an argument within an argument buffer.
- [MTLArgumentEncoder](mtlargumentencoder.md): An interface you can use to encode argument data into an argument buffer.
- [MTLAttributeStrideStatic](mtlattributestridestatic.md)
