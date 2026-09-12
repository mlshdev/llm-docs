> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/useresources(_:usage:stages:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/useresources(_:usage:stages:))

# useResources(\_:usage:stages:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS

Ensures the shaders in the render pass’s subsequent draw commands have access to multiple resources.

## Declaration

```swift
func useResources(_ resources: [any MTLResource], usage: MTLResourceUsage, stages: MTLRenderStages)
```

## Parameters

- `resources`: An array of [MTLResource](../mtlresource.md) instances that subsequent draw commands depend on.
- `usage`: All the applicable access types the render pass’s shaders use for the resource, including [read](../mtlresourceusage/read.md) and [write](../mtlresourceusage/write.md).

  For applicable resources, you may be able to prevent the GPU from unnecessarily decompressing color attachments on some devices by setting `usage` to [read](../mtlresourceusage/read.md).
- `stages`: All the render stages that depend on the elements in `resources`, including [object](../mtlrenderstages/object.md), [mesh](../mtlrenderstages/mesh.md), [vertex](../mtlrenderstages/vertex.md), [fragment](../mtlrenderstages/fragment.md), and [tile](../mtlrenderstages/tile.md).

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

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

### Loading individual resources for argument buffers

- [useResource(\_:usage:stages:)](useresource%28__usage_stages_%29.md): Ensures the shaders in the render pass’s subsequent draw commands have access to a resource.
