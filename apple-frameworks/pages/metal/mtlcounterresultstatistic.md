> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterresultstatistic](https://developer.apple.com/documentation/metal/mtlcounterresultstatistic)

# MTLCounterResultStatistic (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The data structure for storing the data you resolve from a statistic counter set.

## Declaration

```swift
struct MTLCounterResultStatistic
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="overview"></a>

## Overview

For steps that explain how to resolve data from a counter set, such as [statistic](mtlcommoncounterset/statistic.md), see [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md).

## Topics

### Statistics values

- [tessellationInputPatches](mtlcounterresultstatistic/tessellationinputpatches.md): The number of tessellation patches a render pass sends to the tessellation stage.
- [vertexInvocations](mtlcounterresultstatistic/vertexinvocations.md): The number of times a render pass calls any vertex shader.
- [postTessellationVertexInvocations](mtlcounterresultstatistic/posttessellationvertexinvocations.md): The number of vertices a render pass sends to a post-tessellation vertex shader.
- [clipperInvocations](mtlcounterresultstatistic/clipperinvocations.md): The number of primitives a render pass sends to the clip stage.
- [clipperPrimitivesOut](mtlcounterresultstatistic/clipperprimitivesout.md): The number of primitives the clip stage produces during a render pass.
- [fragmentInvocations](mtlcounterresultstatistic/fragmentinvocations.md): The number of times a render pass calls fragment shaders.
- [fragmentsPassed](mtlcounterresultstatistic/fragmentspassed.md): The number of fragments a render pass sends to the visibility and blend stages because they pass the scissor, depth, and stencil tests.
- [computeKernelInvocations](mtlcounterresultstatistic/computekernelinvocations.md): The number of times a pass calls any compute kernel.

### Swift support

- [init()](mtlcounterresultstatistic/init%28%29.md): Creates a default statistics result.
- [init(tessellationInputPatches:vertexInvocations:postTessellationVertexInvocations:clipperInvocations:clipperPrimitivesOut:fragmentInvocations:fragmentsPassed:computeKernelInvocations:)](mtlcounterresultstatistic/init%28tessellationinputpatches_vertexinvocations_posttessellationvertexinvocations_clipperinvocations_clipperprimitivesout_fragmentinvocations_fragmentspassed_computekernelinvocatio~3af97d29.md): Creates a statistics result from statistic values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Counter sample data output

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md): Inspect and use the data within a GPU’s counter sample buffer by resolving it into a standard format.
- [MTLCounterResultTimestamp](mtlcounterresulttimestamp.md): The data structure for storing the data you resolve from a timestamp counter set.
- [MTLCounterResultStageUtilization](mtlcounterresultstageutilization.md): The data structure for storing the data you resolve from a stage-utilization counter set.
- [MTLCounterErrorValue](mtlcountererrorvalue.md): A sentinel value for an entry in a counter sample buffer that indicates the entry’s data is invalid.

# MTLCounterResultStatistic (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data structure for storing the data you resolve from a statistic counter set.

## Declaration

```objectivec
typedef struct { ... } MTLCounterResultStatistic;
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="overview"></a>

## Overview

For steps that explain how to resolve data from a counter set, such as [MTLCommonCounterSetStatistic](mtlcommoncounterset/statistic.md), see [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md).

## Topics

### Statistics values

- [tessellationInputPatches](mtlcounterresultstatistic/tessellationinputpatches.md): The number of tessellation patches a render pass sends to the tessellation stage.
- [vertexInvocations](mtlcounterresultstatistic/vertexinvocations.md): The number of times a render pass calls any vertex shader.
- [postTessellationVertexInvocations](mtlcounterresultstatistic/posttessellationvertexinvocations.md): The number of vertices a render pass sends to a post-tessellation vertex shader.
- [clipperInvocations](mtlcounterresultstatistic/clipperinvocations.md): The number of primitives a render pass sends to the clip stage.
- [clipperPrimitivesOut](mtlcounterresultstatistic/clipperprimitivesout.md): The number of primitives the clip stage produces during a render pass.
- [fragmentInvocations](mtlcounterresultstatistic/fragmentinvocations.md): The number of times a render pass calls fragment shaders.
- [fragmentsPassed](mtlcounterresultstatistic/fragmentspassed.md): The number of fragments a render pass sends to the visibility and blend stages because they pass the scissor, depth, and stencil tests.
- [computeKernelInvocations](mtlcounterresultstatistic/computekernelinvocations.md): The number of times a pass calls any compute kernel.

## See Also

### Counter sample data output

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md): Inspect and use the data within a GPU’s counter sample buffer by resolving it into a standard format.
- [MTLCounterResultTimestamp](mtlcounterresulttimestamp.md): The data structure for storing the data you resolve from a timestamp counter set.
- [MTLCounterResultStageUtilization](mtlcounterresultstageutilization.md): The data structure for storing the data you resolve from a stage-utilization counter set.
- [MTLCounterErrorValue](mtlcountererrorvalue.md): A sentinel value for an entry in a counter sample buffer that indicates the entry’s data is invalid.
