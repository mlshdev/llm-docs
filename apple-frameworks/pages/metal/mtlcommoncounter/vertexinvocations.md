> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommoncounter/vertexinvocations](https://developer.apple.com/documentation/metal/mtlcommoncounter/vertexinvocations)

# vertexInvocations (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The common name for the counter that tracks the number of times a render pass calls any vertex shader.

## Declaration

```swift
static let vertexInvocations: MTLCommonCounter
```

## See Also

### Common counter names

- [timestamp](timestamp.md): The common name for the counter that tracks the current time.
- [tessellationInputPatches](tessellationinputpatches.md): The common name for the counter that tracks the number of tessellation patches a render pass sends to the tessellation stage.
- [postTessellationVertexInvocations](posttessellationvertexinvocations.md): The common name for the counter that tracks the number of vertices a render pass sends to a post-tessellation vertex shader.
- [clipperInvocations](clipperinvocations.md): The common name for the counter that tracks the number of primitives a render pass sends to the clip stage.
- [clipperPrimitivesOut](clipperprimitivesout.md): The common name for the counter that tracks the number of primitives the clip stage produces during a render pass.
- [fragmentInvocations](fragmentinvocations.md): The common name for the counter that tracks the number of times a render pass calls fragment shaders.
- [fragmentsPassed](fragmentspassed.md): The common name for the counter that tracks the number of fragments a render pass sends to the visibility and blend stages.
- [computeKernelInvocations](computekernelinvocations.md): The common name for the counter that tracks the number of times a pass invokes any compute kernel.
- [totalCycles](totalcycles.md): The common name for the counter that tracks the total number of cycles the GPU uses to run a pass.
- [vertexCycles](vertexcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run vertex shaders during a pass.
- [postTessellationVertexCycles](posttessellationvertexcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run post-tessellation vertex shaders during a pass.
- [fragmentCycles](fragmentcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run fragment shaders during a pass.
- [tessellationCycles](tessellationcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run the tessellation stage during a pass.
- [renderTargetWriteCycles](rendertargetwritecycles.md): The common name for the counter that tracks the number of cycles the GPU uses to write data to render targets during a render pass.

# MTLCommonCounterVertexInvocations (Objective-C)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The common name for the counter that tracks the number of times a render pass calls any vertex shader.

## Declaration

```objectivec
extern MTLCommonCounter MTLCommonCounterVertexInvocations;
```

## See Also

### Common counter names

- [MTLCommonCounterTimestamp](timestamp.md): The common name for the counter that tracks the current time.
- [MTLCommonCounterTessellationInputPatches](tessellationinputpatches.md): The common name for the counter that tracks the number of tessellation patches a render pass sends to the tessellation stage.
- [MTLCommonCounterPostTessellationVertexInvocations](posttessellationvertexinvocations.md): The common name for the counter that tracks the number of vertices a render pass sends to a post-tessellation vertex shader.
- [MTLCommonCounterClipperInvocations](clipperinvocations.md): The common name for the counter that tracks the number of primitives a render pass sends to the clip stage.
- [MTLCommonCounterClipperPrimitivesOut](clipperprimitivesout.md): The common name for the counter that tracks the number of primitives the clip stage produces during a render pass.
- [MTLCommonCounterFragmentInvocations](fragmentinvocations.md): The common name for the counter that tracks the number of times a render pass calls fragment shaders.
- [MTLCommonCounterFragmentsPassed](fragmentspassed.md): The common name for the counter that tracks the number of fragments a render pass sends to the visibility and blend stages.
- [MTLCommonCounterComputeKernelInvocations](computekernelinvocations.md): The common name for the counter that tracks the number of times a pass invokes any compute kernel.
- [MTLCommonCounterTotalCycles](totalcycles.md): The common name for the counter that tracks the total number of cycles the GPU uses to run a pass.
- [MTLCommonCounterVertexCycles](vertexcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run vertex shaders during a pass.
- [MTLCommonCounterPostTessellationVertexCycles](posttessellationvertexcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run post-tessellation vertex shaders during a pass.
- [MTLCommonCounterFragmentCycles](fragmentcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run fragment shaders during a pass.
- [MTLCommonCounterTessellationCycles](tessellationcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run the tessellation stage during a pass.
- [MTLCommonCounterRenderTargetWriteCycles](rendertargetwritecycles.md): The common name for the counter that tracks the number of cycles the GPU uses to write data to render targets during a render pass.
