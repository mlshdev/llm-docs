> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandqueue/removeresidencyset(_:)](https://developer.apple.com/documentation/metal/mtlcommandqueue/removeresidencyset(_:))

# removeResidencySet(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Removes a residency set from a command queue’s list, which means Metal doesn’t apply it to the queue’s command buffers as you commit them.

## Declaration

```swift
func removeResidencySet(_ residencySet: any MTLResidencySet)
```

## Parameters

- `residencySet`: A residency set that contains resource allocations, such as [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), and [MTLHeap](../mtlheap.md) instances.

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

The method doesn’t remove the residency set from command buffers the queue owns with a [status](../mtlcommandbuffer/status.md) property that’s equal to [MTLCommandBufferStatus.committed](../mtlcommandbufferstatus/committed.md) or [MTLCommandBufferStatus.scheduled](../mtlcommandbufferstatus/scheduled.md).

See [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md) and [MTLResidencySet](../mtlresidencyset.md) for more information.

## See Also

### Detaching residency sets

- [removeResidencySets(\_:)](removeresidencysets%28__%29.md): Removes multiple residency sets from a command queue’s list, which means Metal doesn’t apply them to the queue’s command buffers as you commit them.

# removeResidencySet: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Removes a residency set from a command queue’s list, which means Metal doesn’t apply it to the queue’s command buffers as you commit them.

## Declaration

```objectivec
- (void) removeResidencySet:(id<MTLResidencySet>) residencySet;
```

## Parameters

- `residencySet`: A residency set that contains resource allocations, such as [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), and [MTLHeap](../mtlheap.md) instances.

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

The method doesn’t remove the residency set from command buffers the queue owns with a [status](../mtlcommandbuffer/status.md) property that’s equal to [MTLCommandBufferStatusCommitted](../mtlcommandbufferstatus/committed.md) or [MTLCommandBufferStatusScheduled](../mtlcommandbufferstatus/scheduled.md).

See [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md) and [MTLResidencySet](../mtlresidencyset.md) for more information.

## See Also

### Detaching residency sets

- [removeResidencySets:count:](removeresidencysets_count_.md): Removes multiple residency sets from a command queue’s list, which means Metal doesn’t apply them to the queue’s command buffers as you commit them.
