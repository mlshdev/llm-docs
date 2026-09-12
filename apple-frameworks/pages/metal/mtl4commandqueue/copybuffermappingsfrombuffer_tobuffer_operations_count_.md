> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueue/copybuffermappingsfrombuffer:tobuffer:operations:count:](https://developer.apple.com/documentation/metal/mtl4commandqueue/copybuffermappingsfrombuffer:tobuffer:operations:count:)

# copyBufferMappingsFromBuffer:toBuffer:operations:count:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Copies multiple offsets within a source placement sparse buffer to a destination placement sparse buffer.

## Declaration

```objectivec
- (void) copyBufferMappingsFromBuffer:(id<MTLBuffer>) sourceBuffer toBuffer:(id<MTLBuffer>) destinationBuffer operations:(const MTL4CopySparseBufferMappingOperation[]) operations count:(NSUInteger) count;
```

## Parameters

- `sourceBuffer`: The source placement sparse [MTLBuffer](../mtlbuffer.md).
- `destinationBuffer`: The destination placement sparse [MTLBuffer](../mtlbuffer.md).
- `operations`: An array of [MTL4CopySparseBufferMappingOperation](../mtl4copysparsebuffermappingoperation.md) instances to perform.
- `count`: Number of operations to perform.

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the source destination sparse buffers have the same `placementSparsePageSize` when you create them via [newBufferWithLength:options:placementSparsePageSize:](../mtldevice/makebuffer%28length_options_placementsparsepagesize_%29.md).

Additionally, you are responsible for ensuring both the source and destination sparse buffers don’t use the same aliased tiles at the same time.

> **Note**

> If a sparse texture and a sparse buffer share the same backing tiles, these don’t provide you with meaningful views of the other resource’s data.
