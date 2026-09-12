> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandqueue/addresidencysets(_:)](https://developer.apple.com/documentation/metal/mtlcommandqueue/addresidencysets(_:))

# addResidencySets(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS

Applies multiple residency sets to a queue, which Metal applies to the queue’s command buffers as you commit them.

## Declaration

```swift
func addResidencySets(_ residencySets: [any MTLResidencySet])
```

## Parameters

- `residencySets`: An array of residency sets, each of which contains resource allocations, such as [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), and [MTLHeap](../mtlheap.md) instances.

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

Each command queue can maintain a list of up to 32 different residency sets. See [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md) and [MTLResidencySet](../mtlresidencyset.md) for more information.

## See Also

### Attaching residency sets

- [addResidencySet(\_:)](addresidencyset%28__%29.md): Applies a residency set to a queue, which Metal applies to the queue’s command buffers as you commit them.
