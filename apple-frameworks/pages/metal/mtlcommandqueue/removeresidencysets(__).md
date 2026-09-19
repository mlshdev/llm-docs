> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlcommandqueue/removeresidencysets(_:)

# removeResidencySets(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS

Removes multiple residency sets from a command queue’s list, which means Metal doesn’t apply them to the queue’s command buffers as you commit them.

## Declaration

```swift
func removeResidencySets(_ residencySets: [any MTLResidencySet])
```

## Parameters

- `residencySets`: An array of residency sets, each of which contains resource allocations, such as [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), and [MTLHeap](../mtlheap.md) instances.

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

The method doesn’t remove the residency sets from command buffers the queue owns with a [status](../mtlcommandbuffer/status.md) property that’s equal to [MTLCommandBufferStatus.committed](../mtlcommandbufferstatus/committed.md) or [MTLCommandBufferStatus.scheduled](../mtlcommandbufferstatus/scheduled.md).

See [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md) and [MTLResidencySet](../mtlresidencyset.md) for more information.

## See Also

### Detaching residency sets

- [removeResidencySet(\_:)](removeresidencyset%28__%29.md): Removes a residency set from a command queue’s list, which means Metal doesn’t apply it to the queue’s command buffers as you commit them.
