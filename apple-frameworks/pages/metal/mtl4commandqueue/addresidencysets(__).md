> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueue/addresidencysets(_:)](https://developer.apple.com/documentation/metal/mtl4commandqueue/addresidencysets(_:))

# addResidencySets(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Applies multiple residency sets to a queue, which Metal applies to the queue’s command buffers as you commit them.

## Declaration

```swift
func addResidencySets(_ residencySets: [any MTLResidencySet])
```

## Parameters

- `residencySets`: An array of residency sets, each of which contains resource allocations, such as [MTLBuffer](../mtlbuffer.md), [MTLTexture](../mtltexture.md), and [MTLHeap](../mtlheap.md) instances.

<a id="discussion"></a>

## Discussion

Each command queue can maintain a list of up to 32 different residency sets. See [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md) and [MTLResidencySet](../mtlresidencyset.md) for more information.
