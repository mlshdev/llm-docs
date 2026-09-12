> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterresultstageutilization/rendertargetcycles](https://developer.apple.com/documentation/metal/mtlcounterresultstageutilization/rendertargetcycles)

# renderTargetCycles (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The number of cycles the GPU uses to write data to render targets during a render pass.

## Declaration

```swift
var renderTargetCycles: UInt64
```

## See Also

### Stage utilization values

- [totalCycles](totalcycles.md): The total number of cycles the GPU uses to run a pass.
- [vertexCycles](vertexcycles.md): The number of cycles the GPU uses to run vertex shaders during a pass.
- [tessellationCycles](tessellationcycles.md): The number of cycles the GPU uses to run the tessellation stage during a pass.
- [postTessellationVertexCycles](posttessellationvertexcycles.md): The number of cycles the GPU uses to run post-tessellation vertex shaders during a pass.
- [fragmentCycles](fragmentcycles.md): The number of cycles the GPU uses to run fragment shaders during a pass.

# renderTargetCycles (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of cycles the GPU uses to write data to render targets during a render pass.

## Declaration

```objectivec
uint64_t renderTargetCycles;
```

## See Also

### Stage utilization values

- [totalCycles](totalcycles.md): The total number of cycles the GPU uses to run a pass.
- [vertexCycles](vertexcycles.md): The number of cycles the GPU uses to run vertex shaders during a pass.
- [tessellationCycles](tessellationcycles.md): The number of cycles the GPU uses to run the tessellation stage during a pass.
- [postTessellationVertexCycles](posttessellationvertexcycles.md): The number of cycles the GPU uses to run post-tessellation vertex shaders during a pass.
- [fragmentCycles](fragmentcycles.md): The number of cycles the GPU uses to run fragment shaders during a pass.
