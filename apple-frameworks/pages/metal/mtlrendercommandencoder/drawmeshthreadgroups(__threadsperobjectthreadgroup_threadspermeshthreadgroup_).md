> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/drawmeshthreadgroups(_:threadsperobjectthreadgroup:threadspermeshthreadgroup:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/drawmeshthreadgroups(_:threadsperobjectthreadgroup:threadspermeshthreadgroup:))

# drawMeshThreadgroups(\_:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threadgroups.

## Declaration

```swift
func drawMeshThreadgroups(_ threadgroupsPerGrid: MTLSize, threadsPerObjectThreadgroup: MTLSize, threadsPerMeshThreadgroup: MTLSize)
```

## Parameters

- `threadgroupsPerGrid`: An [MTLSize](../mtlsize.md) instance that represents the number of threadgroups for each grid dimension.
- `threadsPerObjectThreadgroup`: An [MTLSize](../mtlsize.md) instance that represents the number of threads in an object shader threadgroup, if applicable.
- `threadsPerMeshThreadgroup`: An [MTLSize](../mtlsize.md) instance that represents the number of threads in a mesh shader threadgroup.

## See Also

### Drawing with meshes

- [drawMeshThreads(\_:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](drawmeshthreads%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threads.
- [drawMeshThreadgroups(indirectBuffer:indirectBufferOffset:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](drawmeshthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with indirect arguments.

# drawMeshThreadgroups:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threadgroups.

## Declaration

```objectivec
- (void) drawMeshThreadgroups:(MTLSize) threadgroupsPerGrid threadsPerObjectThreadgroup:(MTLSize) threadsPerObjectThreadgroup threadsPerMeshThreadgroup:(MTLSize) threadsPerMeshThreadgroup;
```

## Parameters

- `threadgroupsPerGrid`: An [MTLSize](../mtlsize.md) instance that represents the number of threadgroups for each grid dimension.
- `threadsPerObjectThreadgroup`: An [MTLSize](../mtlsize.md) instance that represents the number of threads in an object shader threadgroup, if applicable.
- `threadsPerMeshThreadgroup`: An [MTLSize](../mtlsize.md) instance that represents the number of threads in a mesh shader threadgroup.

## See Also

### Drawing with meshes

- [drawMeshThreads:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](drawmeshthreads%28__threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threads.
- [drawMeshThreadgroupsWithIndirectBuffer:indirectBufferOffset:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](drawmeshthreadgroups%28indirectbuffer_indirectbufferoffset_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with indirect arguments.
