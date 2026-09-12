> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/dispatchthreads(indirectbuffer:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/dispatchthreads(indirectbuffer:))

# dispatchThreads(indirectBuffer:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a compute dispatch command with an arbitrarily sized grid, using an indirect buffer for arguments.

## Declaration

```swift
func dispatchThreads(indirectBuffer: MTLGPUAddress)
```

## Parameters

- `indirectBuffer`: GPUAddress of a [MTLBuffer](../mtlbuffer.md) instance providing arguments. Lay out the data in this buffer as described in the [MTLDispatchThreadsIndirectArguments](../mtldispatchthreadsindirectarguments.md) structure. This address requires 4-byte alignment.

## See Also

### Running dispatch commands

- [dispatchThreads(threadsPerGrid:threadsPerThreadgroup:)](dispatchthreads%28threadspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command using an arbitrarily-sized grid.
- [dispatchThreadgroups(threadgroupsPerGrid:threadsPerThreadgroup:)](dispatchthreadgroups%28threadgroupspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries.
- [dispatchThreadgroups(indirectBuffer:threadsPerThreadgroup:)](dispatchthreadgroups%28indirectbuffer_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries, using an indirect buffer for arguments.

# dispatchThreadsWithIndirectBuffer: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a compute dispatch command with an arbitrarily sized grid, using an indirect buffer for arguments.

## Declaration

```objectivec
- (void) dispatchThreadsWithIndirectBuffer:(MTLGPUAddress) indirectBuffer;
```

## Parameters

- `indirectBuffer`: GPUAddress of a [MTLBuffer](../mtlbuffer.md) instance providing arguments. Lay out the data in this buffer as described in the [MTLDispatchThreadsIndirectArguments](../mtldispatchthreadsindirectarguments.md) structure. This address requires 4-byte alignment.

## See Also

### Running dispatch commands

- [dispatchThreads:threadsPerThreadgroup:](dispatchthreads%28threadspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command using an arbitrarily-sized grid.
- [dispatchThreadgroups:threadsPerThreadgroup:](dispatchthreadgroups%28threadgroupspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries.
- [dispatchThreadgroupsWithIndirectBuffer:threadsPerThreadgroup:](dispatchthreadgroups%28indirectbuffer_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries, using an indirect buffer for arguments.
