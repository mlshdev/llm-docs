> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommoncounter](https://developer.apple.com/documentation/metal/mtlcommoncounter)

# MTLCommonCounter (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The name of a specific counter that can appear in a GPU device’s counter sets.

## Declaration

```swift
struct MTLCommonCounter
```

## Mentioned In

- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md)

<a id="overview"></a>

## Overview

This type defines the constants that let a GPU device declare which counters it supports within a counter set. For more information, see [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md).

## Topics

### Common counter names

- [timestamp](mtlcommoncounter/timestamp.md): The common name for the counter that tracks the current time.
- [tessellationInputPatches](mtlcommoncounter/tessellationinputpatches.md): The common name for the counter that tracks the number of tessellation patches a render pass sends to the tessellation stage.
- [vertexInvocations](mtlcommoncounter/vertexinvocations.md): The common name for the counter that tracks the number of times a render pass calls any vertex shader.
- [postTessellationVertexInvocations](mtlcommoncounter/posttessellationvertexinvocations.md): The common name for the counter that tracks the number of vertices a render pass sends to a post-tessellation vertex shader.
- [clipperInvocations](mtlcommoncounter/clipperinvocations.md): The common name for the counter that tracks the number of primitives a render pass sends to the clip stage.
- [clipperPrimitivesOut](mtlcommoncounter/clipperprimitivesout.md): The common name for the counter that tracks the number of primitives the clip stage produces during a render pass.
- [fragmentInvocations](mtlcommoncounter/fragmentinvocations.md): The common name for the counter that tracks the number of times a render pass calls fragment shaders.
- [fragmentsPassed](mtlcommoncounter/fragmentspassed.md): The common name for the counter that tracks the number of fragments a render pass sends to the visibility and blend stages.
- [computeKernelInvocations](mtlcommoncounter/computekernelinvocations.md): The common name for the counter that tracks the number of times a pass invokes any compute kernel.
- [totalCycles](mtlcommoncounter/totalcycles.md): The common name for the counter that tracks the total number of cycles the GPU uses to run a pass.
- [vertexCycles](mtlcommoncounter/vertexcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run vertex shaders during a pass.
- [postTessellationVertexCycles](mtlcommoncounter/posttessellationvertexcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run post-tessellation vertex shaders during a pass.
- [fragmentCycles](mtlcommoncounter/fragmentcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run fragment shaders during a pass.
- [tessellationCycles](mtlcommoncounter/tessellationcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run the tessellation stage during a pass.
- [renderTargetWriteCycles](mtlcommoncounter/rendertargetwritecycles.md): The common name for the counter that tracks the number of cycles the GPU uses to write data to render targets during a render pass.

### Swift support

- [init(rawValue:)](mtlcommoncounter/init%28rawvalue_%29.md): Creates a common counter name from a raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Counters and counter sets

- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md): Check whether a GPU produces the runtime performance data you want to sample.
- [MTLCounterSet](mtlcounterset.md): A collection of individual counters a GPU device supports for a counter set.
- [MTLCommonCounterSet](mtlcommoncounterset.md): The name of a specific counter set that a GPU device can support.
- [MTLCounter](mtlcounter.md): An individual counter a GPU device lists within one of its counter sets.

# MTLCommonCounter (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The name of a specific counter that can appear in a GPU device’s counter sets.

## Declaration

```objectivec
typedef NSString * const MTLCommonCounter;
```

## Mentioned In

- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md)

<a id="overview"></a>

## Overview

This type defines the constants that let a GPU device declare which counters it supports within a counter set. For more information, see [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md).

## Topics

### Common counter names

- [MTLCommonCounterTimestamp](mtlcommoncounter/timestamp.md): The common name for the counter that tracks the current time.
- [MTLCommonCounterTessellationInputPatches](mtlcommoncounter/tessellationinputpatches.md): The common name for the counter that tracks the number of tessellation patches a render pass sends to the tessellation stage.
- [MTLCommonCounterVertexInvocations](mtlcommoncounter/vertexinvocations.md): The common name for the counter that tracks the number of times a render pass calls any vertex shader.
- [MTLCommonCounterPostTessellationVertexInvocations](mtlcommoncounter/posttessellationvertexinvocations.md): The common name for the counter that tracks the number of vertices a render pass sends to a post-tessellation vertex shader.
- [MTLCommonCounterClipperInvocations](mtlcommoncounter/clipperinvocations.md): The common name for the counter that tracks the number of primitives a render pass sends to the clip stage.
- [MTLCommonCounterClipperPrimitivesOut](mtlcommoncounter/clipperprimitivesout.md): The common name for the counter that tracks the number of primitives the clip stage produces during a render pass.
- [MTLCommonCounterFragmentInvocations](mtlcommoncounter/fragmentinvocations.md): The common name for the counter that tracks the number of times a render pass calls fragment shaders.
- [MTLCommonCounterFragmentsPassed](mtlcommoncounter/fragmentspassed.md): The common name for the counter that tracks the number of fragments a render pass sends to the visibility and blend stages.
- [MTLCommonCounterComputeKernelInvocations](mtlcommoncounter/computekernelinvocations.md): The common name for the counter that tracks the number of times a pass invokes any compute kernel.
- [MTLCommonCounterTotalCycles](mtlcommoncounter/totalcycles.md): The common name for the counter that tracks the total number of cycles the GPU uses to run a pass.
- [MTLCommonCounterVertexCycles](mtlcommoncounter/vertexcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run vertex shaders during a pass.
- [MTLCommonCounterPostTessellationVertexCycles](mtlcommoncounter/posttessellationvertexcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run post-tessellation vertex shaders during a pass.
- [MTLCommonCounterFragmentCycles](mtlcommoncounter/fragmentcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run fragment shaders during a pass.
- [MTLCommonCounterTessellationCycles](mtlcommoncounter/tessellationcycles.md): The common name for the counter that tracks the number of cycles the GPU uses to run the tessellation stage during a pass.
- [MTLCommonCounterRenderTargetWriteCycles](mtlcommoncounter/rendertargetwritecycles.md): The common name for the counter that tracks the number of cycles the GPU uses to write data to render targets during a render pass.

## See Also

### Counters and counter sets

- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md): Check whether a GPU produces the runtime performance data you want to sample.
- [MTLCounterSet](mtlcounterset.md): A collection of individual counters a GPU device supports for a counter set.
- [MTLCommonCounterSet](mtlcommoncounterset.md): The name of a specific counter set that a GPU device can support.
- [MTLCounter](mtlcounter.md): An individual counter a GPU device lists within one of its counter sets.
