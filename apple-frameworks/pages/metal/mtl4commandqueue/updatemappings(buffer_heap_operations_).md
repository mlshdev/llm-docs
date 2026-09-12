> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueue/updatemappings(buffer:heap:operations:)](https://developer.apple.com/documentation/metal/mtl4commandqueue/updatemappings(buffer:heap:operations:))

# updateMappings(buffer:heap:operations:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Updates multiple regions within a placement sparse buffer to alias specific tiles from a Metal heap.

## Declaration

```swift
func updateMappings(buffer: any MTLBuffer, heap: (any MTLHeap)?, operations: [MTL4UpdateSparseBufferMappingOperation])
```

## Parameters

- `buffer`: A placement sparse [MTLBuffer](../mtlbuffer.md).
- `heap`: An [MTLHeap](../mtlheap.md) you allocate with type [MTLHeapType.placement](../mtlheaptype/placement.md).
- `operations`: An array of [MTL4UpdateSparseBufferMappingOperation](../mtl4updatesparsebuffermappingoperation.md) instances to perform.

<a id="discussion"></a>

## Discussion

You can provide a `nil` parameter to the `heap` argument only when you perform unmap operations. Otherwise, you are responsible for ensuring parameter `heap` references an [MTLHeap](../mtlheap.md) that has a [maxCompatiblePlacementSparsePageSize](../mtlheapdescriptor/maxcompatibleplacementsparsepagesize.md) of at least the buffer’s `placementSparsePageSize` you assign when creating the sparse buffer via [makeBuffer(length:options:placementSparsePageSize:)](../mtldevice/makebuffer%28length_options_placementsparsepagesize_%29.md).
