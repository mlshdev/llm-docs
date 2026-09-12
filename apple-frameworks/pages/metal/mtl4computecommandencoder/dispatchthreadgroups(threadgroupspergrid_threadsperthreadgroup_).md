> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/dispatchthreadgroups(threadgroupspergrid:threadsperthreadgroup:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/dispatchthreadgroups(threadgroupspergrid:threadsperthreadgroup:))

# dispatchThreadgroups(threadgroupsPerGrid:threadsPerThreadgroup:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries.

## Declaration

```swift
func dispatchThreadgroups(threadgroupsPerGrid: MTLSize, threadsPerThreadgroup: MTLSize)
```

## Parameters

- `threadgroupsPerGrid`: An [MTLSize](../mtlsize.md) instance that represents the number of threadgroups in the grid, in each dimension.
- `threadsPerThreadgroup`: An [MTLSize](../mtlsize.md) instance that represents the number of threads in one threadgroup, in each dimension.

## See Also

### Running dispatch commands

- [dispatchThreads(threadsPerGrid:threadsPerThreadgroup:)](dispatchthreads%28threadspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command using an arbitrarily-sized grid.
- [dispatchThreads(indirectBuffer:)](dispatchthreads%28indirectbuffer_%29.md): Encodes a compute dispatch command with an arbitrarily sized grid, using an indirect buffer for arguments.
- [dispatchThreadgroups(indirectBuffer:threadsPerThreadgroup:)](dispatchthreadgroups%28indirectbuffer_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries, using an indirect buffer for arguments.

# dispatchThreadgroups:threadsPerThreadgroup: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries.

## Declaration

```objectivec
- (void) dispatchThreadgroups:(MTLSize) threadgroupsPerGrid threadsPerThreadgroup:(MTLSize) threadsPerThreadgroup;
```

## Parameters

- `threadgroupsPerGrid`: An [MTLSize](../mtlsize.md) instance that represents the number of threadgroups in the grid, in each dimension.
- `threadsPerThreadgroup`: An [MTLSize](../mtlsize.md) instance that represents the number of threads in one threadgroup, in each dimension.

## See Also

### Running dispatch commands

- [dispatchThreads:threadsPerThreadgroup:](dispatchthreads%28threadspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command using an arbitrarily-sized grid.
- [dispatchThreadsWithIndirectBuffer:](dispatchthreads%28indirectbuffer_%29.md): Encodes a compute dispatch command with an arbitrarily sized grid, using an indirect buffer for arguments.
- [dispatchThreadgroupsWithIndirectBuffer:threadsPerThreadgroup:](dispatchthreadgroups%28indirectbuffer_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries, using an indirect buffer for arguments.
