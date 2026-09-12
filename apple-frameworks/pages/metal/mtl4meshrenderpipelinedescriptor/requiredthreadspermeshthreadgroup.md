> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4meshrenderpipelinedescriptor/requiredthreadspermeshthreadgroup](https://developer.apple.com/documentation/metal/mtl4meshrenderpipelinedescriptor/requiredthreadspermeshthreadgroup)

# requiredThreadsPerMeshThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the required number of mesh threads-per-threadgroup when drawing with a mesh shader pipeline you create from this descriptor.

## Declaration

```swift
var requiredThreadsPerMeshThreadgroup: MTLSize { get set }
```

<a id="discussion"></a>

## Discussion

This argument is optional, unless this pipeline uses `CooperativeTensors`, in which case you are responsible for providing it.

When this value is set to non-zero, you are responsible for ensuring the parameter `threadsPerMeshThreadgroup` in any mesh dispatch draw calls that use this mesh render pipeline, such as [drawMeshThreadgroups(threadgroupsPerGrid:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](../mtl4rendercommandencoder/drawmeshthreadgroups%28threadgroupspergrid_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md), match it.

Setting this value to a size of 0 in every dimension disables this property.

# requiredThreadsPerMeshThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the required number of mesh threads-per-threadgroup when drawing with a mesh shader pipeline you create from this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLSize requiredThreadsPerMeshThreadgroup;
```

<a id="discussion"></a>

## Discussion

This argument is optional, unless this pipeline uses `CooperativeTensors`, in which case you are responsible for providing it.

When this value is set to non-zero, you are responsible for ensuring the parameter `threadsPerMeshThreadgroup` in any mesh dispatch draw calls that use this mesh render pipeline, such as [drawMeshThreadgroups:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](../mtl4rendercommandencoder/drawmeshthreadgroups%28threadgroupspergrid_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md), match it.

Setting this value to a size of 0 in every dimension disables this property.
