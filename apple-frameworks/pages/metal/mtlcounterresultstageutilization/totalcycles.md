> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterresultstageutilization/totalcycles](https://developer.apple.com/documentation/metal/mtlcounterresultstageutilization/totalcycles)

# totalCycles (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The total number of cycles the GPU uses to run a pass.

## Declaration

```swift
var totalCycles: UInt64
```

## See Also

### Stage utilization values

- [vertexCycles](vertexcycles.md): The number of cycles the GPU uses to run vertex shaders during a pass.
- [tessellationCycles](tessellationcycles.md): The number of cycles the GPU uses to run the tessellation stage during a pass.
- [postTessellationVertexCycles](posttessellationvertexcycles.md): The number of cycles the GPU uses to run post-tessellation vertex shaders during a pass.
- [fragmentCycles](fragmentcycles.md): The number of cycles the GPU uses to run fragment shaders during a pass.
- [renderTargetCycles](rendertargetcycles.md): The number of cycles the GPU uses to write data to render targets during a render pass.

# totalCycles (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The total number of cycles the GPU uses to run a pass.

## Declaration

```objectivec
uint64_t totalCycles;
```

## See Also

### Stage utilization values

- [vertexCycles](vertexcycles.md): The number of cycles the GPU uses to run vertex shaders during a pass.
- [tessellationCycles](tessellationcycles.md): The number of cycles the GPU uses to run the tessellation stage during a pass.
- [postTessellationVertexCycles](posttessellationvertexcycles.md): The number of cycles the GPU uses to run post-tessellation vertex shaders during a pass.
- [fragmentCycles](fragmentcycles.md): The number of cycles the GPU uses to run fragment shaders during a pass.
- [renderTargetCycles](rendertargetcycles.md): The number of cycles the GPU uses to write data to render targets during a render pass.
