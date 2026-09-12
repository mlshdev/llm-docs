> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/meshthreadexecutionwidth](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/meshthreadexecutionwidth)

# meshThreadExecutionWidth (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The number of threads the render pass applies to a SIMD group for a mesh shader.

## Declaration

```swift
var meshThreadExecutionWidth: Int { get }
```

<a id="discussion"></a>

## Discussion

You can access the value of this property in your shader code by adding an integer parameter with the `[[threads_per_simdgroup]]` attribute. For more information about this attribute, see the [Metal Shading Language Specification (PDF)](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).

## See Also

### Checking mesh shader memory requirements

- [maxTotalThreadsPerMeshThreadgroup](maxtotalthreadspermeshthreadgroup.md): The largest number of threads the pipeline state can have in a single mesh shader threadgroup.
- [maxTotalThreadgroupsPerMeshGrid](maxtotalthreadgroupspermeshgrid.md): The largest number of threadgroups the pipeline state can have in a single mesh shader grid.

# meshThreadExecutionWidth (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The number of threads the render pass applies to a SIMD group for a mesh shader.

## Declaration

```objectivec
@property (readonly) NSUInteger meshThreadExecutionWidth;
```

<a id="discussion"></a>

## Discussion

You can access the value of this property in your shader code by adding an integer parameter with the `[[threads_per_simdgroup]]` attribute. For more information about this attribute, see the [Metal Shading Language Specification (PDF)](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).

## See Also

### Checking mesh shader memory requirements

- [maxTotalThreadsPerMeshThreadgroup](maxtotalthreadspermeshthreadgroup.md): The largest number of threads the pipeline state can have in a single mesh shader threadgroup.
- [maxTotalThreadgroupsPerMeshGrid](maxtotalthreadgroupspermeshgrid.md): The largest number of threadgroups the pipeline state can have in a single mesh shader grid.
