> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueue/removeresidencysets(_:)](https://developer.apple.com/documentation/metal/mtl4commandqueue/removeresidencysets(_:))

# removeResidencySets(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Removes multiple residency sets from a command queue’s list, which means Metal doesn’t apply them to the queue’s command buffers as you commit them.

## Declaration

```swift
func removeResidencySets(_ residencySets: [any MTLResidencySet])
```

## Parameters

- `residencySets`: An array of residency sets, each of which contains resource allocations, such as [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), and [MTLHeap](../mtlheap.md) instances.

<a id="discussion"></a>

## Discussion

The method doesn’t remove the residency sets from command buffers the queue owns with an [status](../mtlcommandbuffer/status.md) property that’s equal to [MTLCommandBufferStatus.committed](../mtlcommandbufferstatus/committed.md) or [MTLCommandBufferStatus.scheduled](../mtlcommandbufferstatus/scheduled.md).

See [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md) and [MTLResidencySet](../mtlresidencyset.md) for more information.
