> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/maxtotalthreadspermeshthreadgroup](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/maxtotalthreadspermeshthreadgroup)

# maxTotalThreadsPerMeshThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The largest number of threads the pipeline state can have in a single mesh shader threadgroup.

## Declaration

```swift
var maxTotalThreadsPerMeshThreadgroup: Int { get }
```

## See Also

### Checking mesh shader memory requirements

- [maxTotalThreadgroupsPerMeshGrid](maxtotalthreadgroupspermeshgrid.md): The largest number of threadgroups the pipeline state can have in a single mesh shader grid.
- [meshThreadExecutionWidth](meshthreadexecutionwidth.md): The number of threads the render pass applies to a SIMD group for a mesh shader.

# maxTotalThreadsPerMeshThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The largest number of threads the pipeline state can have in a single mesh shader threadgroup.

## Declaration

```objectivec
@property (readonly) NSUInteger maxTotalThreadsPerMeshThreadgroup;
```

## See Also

### Checking mesh shader memory requirements

- [maxTotalThreadgroupsPerMeshGrid](maxtotalthreadgroupspermeshgrid.md): The largest number of threadgroups the pipeline state can have in a single mesh shader grid.
- [meshThreadExecutionWidth](meshthreadexecutionwidth.md): The number of threads the render pass applies to a SIMD group for a mesh shader.
