> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/maxtotalthreadgroupspermeshgrid

# maxTotalThreadgroupsPerMeshGrid (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The largest number of threadgroups the pipeline state can have in a single mesh shader grid.

## Declaration

```swift
var maxTotalThreadgroupsPerMeshGrid: Int { get }
```

## See Also

### Checking mesh shader memory requirements

- [maxTotalThreadsPerMeshThreadgroup](maxtotalthreadspermeshthreadgroup.md): The largest number of threads the pipeline state can have in a single mesh shader threadgroup.
- [meshThreadExecutionWidth](meshthreadexecutionwidth.md): The number of threads the render pass applies to a SIMD group for a mesh shader.

# maxTotalThreadgroupsPerMeshGrid (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The largest number of threadgroups the pipeline state can have in a single mesh shader grid.

## Declaration

```objectivec
@property (readonly) NSUInteger maxTotalThreadgroupsPerMeshGrid;
```

## See Also

### Checking mesh shader memory requirements

- [maxTotalThreadsPerMeshThreadgroup](maxtotalthreadspermeshthreadgroup.md): The largest number of threads the pipeline state can have in a single mesh shader threadgroup.
- [meshThreadExecutionWidth](meshthreadexecutionwidth.md): The number of threads the render pass applies to a SIMD group for a mesh shader.
