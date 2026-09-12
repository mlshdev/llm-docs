> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/use(_:count:usage:stages:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/use(_:count:usage:stages:))

# use(\_:count:usage:stages:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · tvOS 13.0+ (deprecated in 16.0) · visionOS

Ensures the shaders in the render pass’s subsequent draw commands have access to multiple resources.

> Call [useResources(\_:usage:stages:)](useresources%28__usage_stages_%29.md) instead.

## Declaration

```swift
func use(_ resources: UnsafePointer<any MTLResource>, count: Int, usage: MTLResourceUsage, stages: MTLRenderStages)
```

## Parameters

- `resources`: A pointer to a C array of [MTLResource](../mtlresource.md) instances that subsequent draw commands depend on.
- `count`: The number of elements in `resources`.
- `usage`: All the applicable access types the render pass’s shaders use for `resource`, including [read](../mtlresourceusage/read.md) and [write](../mtlresourceusage/write.md).

  For applicable resources, you may be able to prevent the GPU from unnecessarily decompressing color attachments on some devices by setting `usage` to [read](../mtlresourceusage/read.md).
- `stages`: All the render stages that depend on elements in `resources`, including [object](../mtlrenderstages/object.md), [mesh](../mtlrenderstages/mesh.md), [vertex](../mtlrenderstages/vertex.md), [fragment](../mtlrenderstages/fragment.md), and [tile](../mtlrenderstages/tile.md).

<a id="discussion"></a>

## Discussion

You can make multiple resources *resident* (available in GPU memory) for the remaining duration of the render pass by calling this method. Call the method before encoding draw calls that may access the elements of `resources` through an argument buffer. The method ensures each resource is in a format that’s compatible with the shaders that depend on it.

> **Note**

>  You don’t need to call this method if you bind a resource to a shader stage.

For example, you can explicitly bind resources for the vertex stage with the methods in the [Vertex shader resource preparation commands](../vertex-shader-resource-preparation-commands.md) collection.

The method also informs Metal when to apply hazard tracking for the resources you create with [MTLHazardTrackingMode.tracked](../mtlhazardtrackingmode/tracked.md). For resources you create with [MTLHazardTrackingMode.untracked](../mtlhazardtrackingmode/untracked.md), you need to apply an [MTLFence](../mtlfence.md) or an [MTLEvent](../mtlevent.md) to account for potential reading and writing hazards.

You can reconfigure an individual resource’s `usage` options for subsequent draw calls in the same render pass by calling this method again.

Apps typically call the method for resources in an argument buffer as a part of their *bindless* implementation. For more information about argument buffers and bindless implementations, see [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md) and [Go bindless with Metal 3](https://developer.apple.com/videos/play/wwdc2022/10101/), respectively.

## See Also

### Deprecated methods

- [useResource(\_:usage:)](useresource%28__usage_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to a resource.
- [use(\_:usage:stages:)](use%28__usage_stages_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to a resource.
- [useResources(\_:usage:)](useresources%28__usage_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to multiple resources.
- [useHeap(\_:)](useheap%28__%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from a heap.
- [use(\_:stages:)](use%28__stages_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from a heap.
- [useHeaps(\_:)](useheaps%28__%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from multiple heaps.
- [use(\_:count:stages:)](use%28__count_stages_%29.md): Deprecated. Ensures the shaders in the render pass’s subsequent draw commands have access to the resources you allocate from multiple heaps.
- [textureBarrier()](texturebarrier%28%29.md): Deprecated. Adds a barrier, which forces any texture read operations to wait until write operations to the same texture finish.
