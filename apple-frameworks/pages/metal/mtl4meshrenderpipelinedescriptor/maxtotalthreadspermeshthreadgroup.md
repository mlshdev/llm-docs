> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4meshrenderpipelinedescriptor/maxtotalthreadspermeshthreadgroup](https://developer.apple.com/documentation/metal/mtl4meshrenderpipelinedescriptor/maxtotalthreadspermeshthreadgroup)

# maxTotalThreadsPerMeshThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the largest number of threads the pipeline state can execute in a single mesh shader threadgroup dispatch.

## Declaration

```swift
var maxTotalThreadsPerMeshThreadgroup: Int { get set }
```

<a id="discussion"></a>

## Discussion

This number represents the maximum size of the product of the components of parameter `threadsPerMeshThreadgroup` that Metal can use when drawing with this pipeline in mesh shader dispatch methods, such as [drawMeshThreadgroups(threadgroupsPerGrid:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:)](../mtl4rendercommandencoder/drawmeshthreadgroups%28threadgroupspergrid_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md).

The compiler’s optimizer can use the value of this property to generate more efficient code, specifically when the value doesn’t exceed the thread execution width of the underlying GPU.

The default value of this property is `0`, thish indicates that the Metal Shader Language attribute `[[max_total_threads_per_threadgroup]]` you attache to the pipeline’s mesh shader function determines the value of this property.

When you specify both the `[[max_total_threads_per_threadgroup(N)]]` attribute and this property, you are responsible for making sure these values match.

Additionally, you are responsible for ensuring this value doesn’t exceed the “maximum threads per threadgroup” device limit documented in the “Metal Feature Set Tables” PDF: [https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf).

# maxTotalThreadsPerMeshThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the largest number of threads the pipeline state can execute in a single mesh shader threadgroup dispatch.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxTotalThreadsPerMeshThreadgroup;
```

<a id="discussion"></a>

## Discussion

This number represents the maximum size of the product of the components of parameter `threadsPerMeshThreadgroup` that Metal can use when drawing with this pipeline in mesh shader dispatch methods, such as [drawMeshThreadgroups:threadsPerObjectThreadgroup:threadsPerMeshThreadgroup:](../mtl4rendercommandencoder/drawmeshthreadgroups%28threadgroupspergrid_threadsperobjectthreadgroup_threadspermeshthreadgroup_%29.md).

The compiler’s optimizer can use the value of this property to generate more efficient code, specifically when the value doesn’t exceed the thread execution width of the underlying GPU.

The default value of this property is `0`, thish indicates that the Metal Shader Language attribute `[[max_total_threads_per_threadgroup]]` you attache to the pipeline’s mesh shader function determines the value of this property.

When you specify both the `[[max_total_threads_per_threadgroup(N)]]` attribute and this property, you are responsible for making sure these values match.

Additionally, you are responsible for ensuring this value doesn’t exceed the “maximum threads per threadgroup” device limit documented in the “Metal Feature Set Tables” PDF: [https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf).
