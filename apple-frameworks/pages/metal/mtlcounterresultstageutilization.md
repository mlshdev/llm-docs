> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterresultstageutilization](https://developer.apple.com/documentation/metal/mtlcounterresultstageutilization)

# MTLCounterResultStageUtilization (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The data structure for storing the data you resolve from a stage-utilization counter set.

## Declaration

```swift
struct MTLCounterResultStageUtilization
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="overview"></a>

## Overview

For steps that explain how to resolve data from a counter set, such as [stageUtilization](mtlcommoncounterset/stageutilization.md), see [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md).

## Topics

### Stage utilization values

- [totalCycles](mtlcounterresultstageutilization/totalcycles.md): The total number of cycles the GPU uses to run a pass.
- [vertexCycles](mtlcounterresultstageutilization/vertexcycles.md): The number of cycles the GPU uses to run vertex shaders during a pass.
- [tessellationCycles](mtlcounterresultstageutilization/tessellationcycles.md): The number of cycles the GPU uses to run the tessellation stage during a pass.
- [postTessellationVertexCycles](mtlcounterresultstageutilization/posttessellationvertexcycles.md): The number of cycles the GPU uses to run post-tessellation vertex shaders during a pass.
- [fragmentCycles](mtlcounterresultstageutilization/fragmentcycles.md): The number of cycles the GPU uses to run fragment shaders during a pass.
- [renderTargetCycles](mtlcounterresultstageutilization/rendertargetcycles.md): The number of cycles the GPU uses to write data to render targets during a render pass.

### Swift support

- [init()](mtlcounterresultstageutilization/init%28%29.md): Creates a default stage-utilization result.
- [init(totalCycles:vertexCycles:tessellationCycles:postTessellationVertexCycles:fragmentCycles:renderTargetCycles:)](mtlcounterresultstageutilization/init%28totalcycles_vertexcycles_tessellationcycles_posttessellationvertexcycles_fragmentcycles_rendertargetcycles_%29.md): Creates a stage-utilization result from utilization values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Counter sample data output

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md): Inspect and use the data within a GPU’s counter sample buffer by resolving it into a standard format.
- [MTLCounterResultTimestamp](mtlcounterresulttimestamp.md): The data structure for storing the data you resolve from a timestamp counter set.
- [MTLCounterResultStatistic](mtlcounterresultstatistic.md): The data structure for storing the data you resolve from a statistic counter set.
- [MTLCounterErrorValue](mtlcountererrorvalue.md): A sentinel value for an entry in a counter sample buffer that indicates the entry’s data is invalid.

# MTLCounterResultStageUtilization (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data structure for storing the data you resolve from a stage-utilization counter set.

## Declaration

```objectivec
typedef struct { ... } MTLCounterResultStageUtilization;
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="overview"></a>

## Overview

For steps that explain how to resolve data from a counter set, such as [MTLCommonCounterSetStageUtilization](mtlcommoncounterset/stageutilization.md), see [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md).

## Topics

### Stage utilization values

- [totalCycles](mtlcounterresultstageutilization/totalcycles.md): The total number of cycles the GPU uses to run a pass.
- [vertexCycles](mtlcounterresultstageutilization/vertexcycles.md): The number of cycles the GPU uses to run vertex shaders during a pass.
- [tessellationCycles](mtlcounterresultstageutilization/tessellationcycles.md): The number of cycles the GPU uses to run the tessellation stage during a pass.
- [postTessellationVertexCycles](mtlcounterresultstageutilization/posttessellationvertexcycles.md): The number of cycles the GPU uses to run post-tessellation vertex shaders during a pass.
- [fragmentCycles](mtlcounterresultstageutilization/fragmentcycles.md): The number of cycles the GPU uses to run fragment shaders during a pass.
- [renderTargetCycles](mtlcounterresultstageutilization/rendertargetcycles.md): The number of cycles the GPU uses to write data to render targets during a render pass.

## See Also

### Counter sample data output

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md): Inspect and use the data within a GPU’s counter sample buffer by resolving it into a standard format.
- [MTLCounterResultTimestamp](mtlcounterresulttimestamp.md): The data structure for storing the data you resolve from a timestamp counter set.
- [MTLCounterResultStatistic](mtlcounterresultstatistic.md): The data structure for storing the data you resolve from a statistic counter set.
- [MTLCounterErrorValue](mtlcountererrorvalue.md): A sentinel value for an entry in a counter sample buffer that indicates the entry’s data is invalid.
