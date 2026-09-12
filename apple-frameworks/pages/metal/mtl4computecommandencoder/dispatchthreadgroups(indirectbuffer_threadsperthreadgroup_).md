> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/dispatchthreadgroups(indirectbuffer:threadsperthreadgroup:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/dispatchthreadgroups(indirectbuffer:threadsperthreadgroup:))

# dispatchThreadgroups(indirectBuffer:threadsPerThreadgroup:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries, using an indirect buffer for arguments.

## Declaration

```swift
func dispatchThreadgroups(indirectBuffer: MTLGPUAddress, threadsPerThreadgroup: MTLSize)
```

## Parameters

- `indirectBuffer`: GPUAddress of a [MTLBuffer](../mtlbuffer.md) instance providing compute parameters. Lay out the data in this buffer as described in the [MTLDispatchThreadgroupsIndirectArguments](../mtldispatchthreadgroupsindirectarguments.md) structure. This address requires 4-byte alignment.
- `threadsPerThreadgroup`: A [MTLSize](../mtlsize.md) instance that represents the number of threads in one threadgroup, in each dimension.

<a id="discussion"></a>

## Discussion

This method allows you to supply the threadgroups-per-grid counts indirectly via an [MTLBuffer](../mtlbuffer.md) index. This enables you to calculate this value in the GPU timeline from a shader function, enabling GPU-driven workflows.

Metal assumes that the buffer contents correspond to the layout of struct [MTLDispatchThreadgroupsIndirectArguments](../mtldispatchthreadgroupsindirectarguments.md). You are responsible for ensuring this address aligns to 4-bytes.

Use an instance of [MTLResidencySet](../mtlresidencyset.md) to mark residency of the indirect buffer that the `indirectBuffer` parameter references.

## See Also

### Running dispatch commands

- [dispatchThreads(threadsPerGrid:threadsPerThreadgroup:)](dispatchthreads%28threadspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command using an arbitrarily-sized grid.
- [dispatchThreads(indirectBuffer:)](dispatchthreads%28indirectbuffer_%29.md): Encodes a compute dispatch command with an arbitrarily sized grid, using an indirect buffer for arguments.
- [dispatchThreadgroups(threadgroupsPerGrid:threadsPerThreadgroup:)](dispatchthreadgroups%28threadgroupspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries.

# dispatchThreadgroupsWithIndirectBuffer:threadsPerThreadgroup: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries, using an indirect buffer for arguments.

## Declaration

```objectivec
- (void) dispatchThreadgroupsWithIndirectBuffer:(MTLGPUAddress) indirectBuffer threadsPerThreadgroup:(MTLSize) threadsPerThreadgroup;
```

## Parameters

- `indirectBuffer`: GPUAddress of a [MTLBuffer](../mtlbuffer.md) instance providing compute parameters. Lay out the data in this buffer as described in the [MTLDispatchThreadgroupsIndirectArguments](../mtldispatchthreadgroupsindirectarguments.md) structure. This address requires 4-byte alignment.
- `threadsPerThreadgroup`: A [MTLSize](../mtlsize.md) instance that represents the number of threads in one threadgroup, in each dimension.

<a id="discussion"></a>

## Discussion

This method allows you to supply the threadgroups-per-grid counts indirectly via an [MTLBuffer](../mtlbuffer.md) index. This enables you to calculate this value in the GPU timeline from a shader function, enabling GPU-driven workflows.

Metal assumes that the buffer contents correspond to the layout of struct [MTLDispatchThreadgroupsIndirectArguments](../mtldispatchthreadgroupsindirectarguments.md). You are responsible for ensuring this address aligns to 4-bytes.

Use an instance of [MTLResidencySet](../mtlresidencyset.md) to mark residency of the indirect buffer that the `indirectBuffer` parameter references.

## See Also

### Running dispatch commands

- [dispatchThreads:threadsPerThreadgroup:](dispatchthreads%28threadspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command using an arbitrarily-sized grid.
- [dispatchThreadsWithIndirectBuffer:](dispatchthreads%28indirectbuffer_%29.md): Encodes a compute dispatch command with an arbitrarily sized grid, using an indirect buffer for arguments.
- [dispatchThreadgroups:threadsPerThreadgroup:](dispatchthreadgroups%28threadgroupspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries.
