> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueue/updatebuffermappings:heap:operations:count:](https://developer.apple.com/documentation/metal/mtl4commandqueue/updatebuffermappings:heap:operations:count:)

# updateBufferMappings:heap:operations:count:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Updates multiple regions within a placement sparse buffer to alias specific tiles from a Metal heap.

## Declaration

```objectivec
- (void) updateBufferMappings:(id<MTLBuffer>) buffer heap:(id<MTLHeap>) heap operations:(const MTL4UpdateSparseBufferMappingOperation[]) operations count:(NSUInteger) count;
```

## Parameters

- `buffer`: A placement sparse [MTLBuffer](../mtlbuffer.md).
- `heap`: An [MTLHeap](../mtlheap.md) you allocate with type [MTLHeapTypePlacement](../mtlheaptype/placement.md).
- `operations`: An array of [MTL4UpdateSparseBufferMappingOperation](../mtl4updatesparsebuffermappingoperation.md) instances to perform.
- `count`: Number of operations to perform.

<a id="discussion"></a>

## Discussion

You can provide a `nil` parameter to the `heap` argument only when you perform unmap operations. Otherwise, you are responsible for ensuring parameter `heap` references an [MTLHeap](../mtlheap.md) that has a [maxCompatiblePlacementSparsePageSize](../mtlheapdescriptor/maxcompatibleplacementsparsepagesize.md) of at least the buffer’s `placementSparsePageSize` you assign when creating the sparse buffer via [newBufferWithLength:options:placementSparsePageSize:](../mtldevice/makebuffer%28length_options_placementsparsepagesize_%29.md).
