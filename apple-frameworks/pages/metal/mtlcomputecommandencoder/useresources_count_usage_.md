> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/useresources:count:usage:](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/useresources:count:usage:)

# useResources:count:usage:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Ensures kernel calls that the system encodes in subsequent commands have access to multiple resources.

## Declaration

```objectivec
- (void) useResources:(id<MTLResource> const[]) resources count:(NSUInteger) count usage:(MTLResourceUsage) usage;
```

## Parameters

- `resources`: An array of [MTLResource](../mtlresource.md) instances used in one or more argument buffers.
- `count`: The number of resources in the array.
- `usage`: All the applicable access types the compute pass’s use of these resources, including [MTLResourceUsageRead](../mtlresourceusage/read.md) and [MTLResourceUsageWrite](../mtlresourceusage/write.md). Your resource usage type applies to all resources passed to this method call.

  For applicable resources, you may be able to prevent the GPU from unnecessarily decompressing color attachments on some devices by setting `usage` to [MTLResourceUsageRead](../mtlresourceusage/read.md).

<a id="discussion"></a>

## Discussion

You can make many resources *resident* (available in GPU memory) for the remaining duration of the compute pass by calling this method. Call the method before encoding function calls that may access these `resources` through an argument buffer. The method ensures the resource is in a format that’s compatible with the kernels that depend on it.

> **Note**

>  You don’t need to call this method if you bind a resource for compute kernels to access.

The method also informs Metal when to apply hazard tracking for a resource you create with [MTLHazardTrackingModeTracked](../mtlhazardtrackingmode/tracked.md). For a resource you create with [MTLHazardTrackingModeUntracked](../mtlhazardtrackingmode/untracked.md), you need to apply an [MTLFence](../mtlfence.md) or an [MTLEvent](../mtlevent.md) to account for potential reading and writing hazards.

You can reconfigure an individual resource’s `usage` options for subsequent draw calls with the [useResource:usage:](useresource%28__usage_%29.md) method.

Apps typically call this method for a resource in an argument buffer as a part of their *bindless* implementation. For more information about argument buffers and bindless implementations, see [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md) and [Go bindless with Metal 3](https://developer.apple.com/videos/play/wwdc2022/10101/), respectively.

## See Also

### Making indirect resources resident

- [useResource:usage:](useresource%28__usage_%29.md): Ensures kernel calls that the system encodes in subsequent commands have access to a resource.
- [useHeap:](useheap%28__%29.md): Ensures the shaders in the render pass’s subsequent draw commands have access to all of the resources you allocate from a heap.
- [useHeaps:count:](useheaps_count_.md): Ensures the shaders in the render pass’s subsequent draw commands have access to all of the resources you allocate from multiple heaps.
