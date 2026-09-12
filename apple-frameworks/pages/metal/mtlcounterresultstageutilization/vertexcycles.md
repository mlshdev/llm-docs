> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterresultstageutilization/vertexcycles](https://developer.apple.com/documentation/metal/mtlcounterresultstageutilization/vertexcycles)

# vertexCycles (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The number of cycles the GPU uses to run vertex shaders during a pass.

## Declaration

```swift
var vertexCycles: UInt64
```

## See Also

### Stage utilization values

- [totalCycles](totalcycles.md): The total number of cycles the GPU uses to run a pass.
- [tessellationCycles](tessellationcycles.md): The number of cycles the GPU uses to run the tessellation stage during a pass.
- [postTessellationVertexCycles](posttessellationvertexcycles.md): The number of cycles the GPU uses to run post-tessellation vertex shaders during a pass.
- [fragmentCycles](fragmentcycles.md): The number of cycles the GPU uses to run fragment shaders during a pass.
- [renderTargetCycles](rendertargetcycles.md): The number of cycles the GPU uses to write data to render targets during a render pass.

# vertexCycles (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of cycles the GPU uses to run vertex shaders during a pass.

## Declaration

```objectivec
uint64_t vertexCycles;
```

## See Also

### Stage utilization values

- [totalCycles](totalcycles.md): The total number of cycles the GPU uses to run a pass.
- [tessellationCycles](tessellationcycles.md): The number of cycles the GPU uses to run the tessellation stage during a pass.
- [postTessellationVertexCycles](posttessellationvertexcycles.md): The number of cycles the GPU uses to run post-tessellation vertex shaders during a pass.
- [fragmentCycles](fragmentcycles.md): The number of cycles the GPU uses to run fragment shaders during a pass.
- [renderTargetCycles](rendertargetcycles.md): The number of cycles the GPU uses to write data to render targets during a render pass.
