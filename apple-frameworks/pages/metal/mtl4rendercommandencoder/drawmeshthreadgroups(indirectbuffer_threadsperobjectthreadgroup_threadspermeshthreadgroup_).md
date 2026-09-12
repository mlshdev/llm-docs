> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/drawmeshthreadgroups(indirectbuffer:threadsperobjectthreadgroup:threadspermeshthreadgroup:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/drawmeshthreadgroups(indirectbuffer:threadsperobjectthreadgroup:threadspermeshthreadgroup:))

# drawMeshThreadgroups(indirectBuffer:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a draw command that invokes a mesh shader and, optionally, an object shader with indirect arguments.

## Declaration

```swift
func drawMeshThreadgroups(indirectBuffer: MTLGPUAddress, threadsPerObjectThreadgroup: MTLSize, threadsPerMeshThreadgroup: MTLSize)
```

## Parameters

- `indirectBuffer`: GPUAddress of an [MTLBuffer](../mtlbuffer.md) instance with data that matches the layout of the [MTLDispatchThreadgroupsIndirectArguments](../mtldispatchthreadgroupsindirectarguments.md) structure. This address requires 4-byte alignment.
- `threadsPerObjectThreadgroup`: A [MTLSize](../mtlsize.md) instance that represents the number of threads in an object shader threadgroup, if applicable.
- `threadsPerMeshThreadgroup`: A [MTLSize](../mtlsize.md) instance that represents the number of threads in a mesh shader threadgroup.

<a id="discussion"></a>

## Discussion

This method enables you to determine the number of threadgroups per grid indirectly, in the GPU timeline. Metal expects this buffer’s contents to match the layout of structure [MTLDispatchThreadgroupsIndirectArguments](../mtldispatchthreadgroupsindirectarguments.md). You are responsible for ensuring the address of this buffer has 4-byte alignment.

Use an instance of [MTLResidencySet](../mtlresidencyset.md) to mark residency of the indirect buffer that the `indirectBuffer` parameter references.

## See Also

### Drawing with meshes

- [drawMeshThreads(threadsPerGrid:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](drawmeshthreads%28threadspergrid_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threads.
- [drawMeshThreadgroups(threadgroupsPerGrid:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](drawmeshthreadgroups%28threadgroupspergrid_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threadgroups.

# drawMeshThreadgroupsWithIndirectBuffer:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a draw command that invokes a mesh shader and, optionally, an object shader with indirect arguments.

## Declaration

```objectivec
- (void) drawMeshThreadgroupsWithIndirectBuffer:(MTLGPUAddress) indirectBuffer threadsPerObjectThreadgroup:(MTLSize) threadsPerObjectThreadgroup threadsPerMeshThreadgroup:(MTLSize) threadsPerMeshThreadgroup;
```

## Parameters

- `indirectBuffer`: GPUAddress of an [MTLBuffer](../mtlbuffer.md) instance with data that matches the layout of the [MTLDispatchThreadgroupsIndirectArguments](../mtldispatchthreadgroupsindirectarguments.md) structure. This address requires 4-byte alignment.
- `threadsPerObjectThreadgroup`: A [MTLSize](../mtlsize.md) instance that represents the number of threads in an object shader threadgroup, if applicable.
- `threadsPerMeshThreadgroup`: A [MTLSize](../mtlsize.md) instance that represents the number of threads in a mesh shader threadgroup.

<a id="discussion"></a>

## Discussion

This method enables you to determine the number of threadgroups per grid indirectly, in the GPU timeline. Metal expects this buffer’s contents to match the layout of structure [MTLDispatchThreadgroupsIndirectArguments](../mtldispatchthreadgroupsindirectarguments.md). You are responsible for ensuring the address of this buffer has 4-byte alignment.

Use an instance of [MTLResidencySet](../mtlresidencyset.md) to mark residency of the indirect buffer that the `indirectBuffer` parameter references.

## See Also

### Drawing with meshes

- [drawMeshThreads:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](drawmeshthreads%28threadspergrid_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threads.
- [drawMeshThreadgroups:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](drawmeshthreadgroups%28threadgroupspergrid_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md): Encodes a draw command that invokes a mesh shader and, optionally, an object shader with a grid of threadgroups.
