> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/dispatchthreads(threadspergrid:threadsperthreadgroup:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/dispatchthreads(threadspergrid:threadsperthreadgroup:))

# dispatchThreads(threadsPerGrid:threadsPerThreadgroup:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a compute dispatch command using an arbitrarily-sized grid.

## Declaration

```swift
func dispatchThreads(threadsPerGrid: MTLSize, threadsPerThreadgroup: MTLSize)
```

## Parameters

- `threadsPerGrid`: An [MTLSize](../mtlsize.md) instance that represents the number of threads in the grid, in each dimension.
- `threadsPerThreadgroup`: An [MTLSize](../mtlsize.md) instance that represents the number of threads in one threadgroup, in each dimension.

## See Also

### Running dispatch commands

- [dispatchThreads(indirectBuffer:)](dispatchthreads%28indirectbuffer_%29.md): Encodes a compute dispatch command with an arbitrarily sized grid, using an indirect buffer for arguments.
- [dispatchThreadgroups(threadgroupsPerGrid:threadsPerThreadgroup:)](dispatchthreadgroups%28threadgroupspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries.
- [dispatchThreadgroups(indirectBuffer:threadsPerThreadgroup:)](dispatchthreadgroups%28indirectbuffer_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries, using an indirect buffer for arguments.

# dispatchThreads:threadsPerThreadgroup: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a compute dispatch command using an arbitrarily-sized grid.

## Declaration

```objectivec
- (void) dispatchThreads:(MTLSize) threadsPerGrid threadsPerThreadgroup:(MTLSize) threadsPerThreadgroup;
```

## Parameters

- `threadsPerGrid`: An [MTLSize](../mtlsize.md) instance that represents the number of threads in the grid, in each dimension.
- `threadsPerThreadgroup`: An [MTLSize](../mtlsize.md) instance that represents the number of threads in one threadgroup, in each dimension.

## See Also

### Running dispatch commands

- [dispatchThreadsWithIndirectBuffer:](dispatchthreads%28indirectbuffer_%29.md): Encodes a compute dispatch command with an arbitrarily sized grid, using an indirect buffer for arguments.
- [dispatchThreadgroups:threadsPerThreadgroup:](dispatchthreadgroups%28threadgroupspergrid_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries.
- [dispatchThreadgroupsWithIndirectBuffer:threadsPerThreadgroup:](dispatchthreadgroups%28indirectbuffer_threadsperthreadgroup_%29.md): Encodes a compute dispatch command with a grid that aligns to threadgroup boundaries, using an indirect buffer for arguments.
