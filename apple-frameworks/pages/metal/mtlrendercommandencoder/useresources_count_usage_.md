> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/useresources:count:usage:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/useresources:count:usage:)

# useResources:count:usage:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.13+ (deprecated in 13.0) · tvOS 11.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Ensures the shaders in the render pass’s subsequent draw commands have access to multiple resources.

> Call [useResources:count:usage:stages:](useresources_count_usage_stages_.md) instead.

## Declaration

```objectivec
- (void) useResources:(id<MTLResource> const[]) resources count:(NSUInteger) count usage:(MTLResourceUsage) usage;
```

## Parameters

- `resources`: A pointer to a C array of [MTLResource](../mtlresource.md) instances that subsequent draw commands depend on.
- `count`: The number of elements in `resources`.
- `usage`: All the applicable access types the render pass’s shaders use for `resources`, including [MTLResourceUsageRead](../mtlresourceusage/read.md) and [MTLResourceUsageWrite](../mtlresourceusage/write.md).

  For applicable resources, you may be able to prevent the GPU from unnecessarily decompressing color attachments on some devices by setting `usage` to [MTLResourceUsageRead](../mtlresourceusage/read.md).

<a id="discussion"></a>

## Discussion

You can make multiple resources *resident* (available in GPU memory) for the remaining duration of the render pass by calling this method. Call the method before encoding draw calls that may access the elements of `resources` through an argument buffer. The method ensures each resource is in a format that’s compatible with the shaders that depend on it.

> **Note**

>  You don’t need to call this method if you bind a resource to a shader stage.

For example, you can explicitly bind resources for the vertex stage with the methods in the [Vertex shader resource preparation commands](../vertex-shader-resource-preparation-commands.md) collection.

The method also informs Metal when to apply hazard tracking for the resources you create with [MTLHazardTrackingModeTracked](../mtlhazardtrackingmode/tracked.md). For resources you create with [MTLHazardTrackingModeUntracked](../mtlhazardtrackingmode/untracked.md), you need to apply an [MTLFence](../mtlfence.md) or an [MTLEvent](../mtlevent.md) to account for potential reading and writing hazards.

You can reconfigure an individual resource’s `usage` options for subsequent draw calls in the same render pass by calling this method again.

Apps typically call the method for resources in an argument buffer as a part of their *bindless* implementation. For more information about argument buffers and bindless implementations, see [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md) and [Go bindless with Metal 3](https://developer.apple.com/videos/play/wwdc2022/10101/), respectively.

## See Also

### Deprecated methods

- [useResource:usage:](useresource%28__usage_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to a resource.
- [useHeap:](useheap%28__%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from a heap.
- [useHeaps:count:](useheaps_count_.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from multiple heaps.
- [textureBarrier](texturebarrier%28%29.md): Deprecated. Adds a barrier, which forces any texture read operations to wait until write operations to the same texture finish.
