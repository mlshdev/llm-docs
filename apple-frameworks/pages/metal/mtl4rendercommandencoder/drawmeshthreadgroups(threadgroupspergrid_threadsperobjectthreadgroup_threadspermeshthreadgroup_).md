> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/drawmeshthreadgroups(threadgroupspergrid:threadsperobjectthreadgroup:threadspermeshthreadgroup:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/drawmeshthreadgroups(threadgroupspergrid:threadsperobjectthreadgroup:threadspermeshthreadgroup:))

# drawMeshThreadgroups(threadgroupsPerGrid:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threadgroups.

## Declaration

```swift
func drawMeshThreadgroups(threadgroupsPerGrid: MTLSize, threadsPerObjectThreadgroup: MTLSize, threadsPerMeshThreadgroup: MTLSize)
```

## Parameters

- `threadgroupsPerGrid`: A [MTLSize](../mtlsize.md) instance that represents the number of threadgroups for each grid dimension.
- `threadsPerObjectThreadgroup`: A [MTLSize](../mtlsize.md) instance that represents the number of threads in an object shader threadgroup, if applicable.
- `threadsPerMeshThreadgroup`: A [MTLSize](../mtlsize.md) instance that represents the number of threads in a mesh shader threadgroup.

## See Also

### Drawing with meshes

- [drawMeshThreads(threadsPerGrid:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](drawmeshthreads%28threadspergrid_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threads.
- [drawMeshThreadgroups(indirectBuffer:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](drawmeshthreadgroups%28indirectbuffer_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with indirect arguments.

# drawMeshThreadgroups:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threadgroups.

## Declaration

```objectivec
- (void) drawMeshThreadgroups:(MTLSize) threadgroupsPerGrid threadsPerObjectThreadgroup:(MTLSize) threadsPerObjectThreadgroup threadsPerMeshThreadgroup:(MTLSize) threadsPerMeshThreadgroup;
```

## Parameters

- `threadgroupsPerGrid`: A [MTLSize](../mtlsize.md) instance that represents the number of threadgroups for each grid dimension.
- `threadsPerObjectThreadgroup`: A [MTLSize](../mtlsize.md) instance that represents the number of threads in an object shader threadgroup, if applicable.
- `threadsPerMeshThreadgroup`: A [MTLSize](../mtlsize.md) instance that represents the number of threads in a mesh shader threadgroup.

## See Also

### Drawing with meshes

- [drawMeshThreads:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](drawmeshthreads%28threadspergrid_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threads.
- [drawMeshThreadgroupsWithIndirectBuffer:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](drawmeshthreadgroups%28indirectbuffer_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with indirect arguments.
