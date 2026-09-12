> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommoncounterset/stageutilization](https://developer.apple.com/documentation/metal/mtlcommoncounterset/stageutilization)

# stageUtilization (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The common name for the counter set that contains hardware utilization measurements from various render stages.

## Declaration

```swift
static let stageUtilization: MTLCommonCounterSet
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="discussion"></a>

## Discussion

The stage utilization counter set contains the following counters:

- [totalCycles](../mtlcommoncounter/totalcycles.md)
- [vertexCycles](../mtlcommoncounter/vertexcycles.md)
- [fragmentCycles](../mtlcommoncounter/fragmentcycles.md)
- [tessellationCycles](../mtlcommoncounter/tessellationcycles.md)
- [postTessellationVertexCycles](../mtlcommoncounter/posttessellationvertexcycles.md)
- [renderTargetWriteCycles](../mtlcommoncounter/rendertargetwritecycles.md)

Use this name to check whether a GPU device supports the corresponding counter set (see [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md)).

## See Also

### Common counter set names

- [timestamp](timestamp.md): The common name for the counter set that contains the timestamp counter.
- [statistic](statistic.md): The common name for the counter set that contains GPU workload statistics.

# MTLCommonCounterSetStageUtilization (Objective-C)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The common name for the counter set that contains hardware utilization measurements from various render stages.

## Declaration

```objectivec
extern MTLCommonCounterSet MTLCommonCounterSetStageUtilization;
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="discussion"></a>

## Discussion

The stage utilization counter set contains the following counters:

- [MTLCommonCounterTotalCycles](../mtlcommoncounter/totalcycles.md)
- [MTLCommonCounterVertexCycles](../mtlcommoncounter/vertexcycles.md)
- [MTLCommonCounterFragmentCycles](../mtlcommoncounter/fragmentcycles.md)
- [MTLCommonCounterTessellationCycles](../mtlcommoncounter/tessellationcycles.md)
- [MTLCommonCounterPostTessellationVertexCycles](../mtlcommoncounter/posttessellationvertexcycles.md)
- [MTLCommonCounterRenderTargetWriteCycles](../mtlcommoncounter/rendertargetwritecycles.md)

Use this name to check whether a GPU device supports the corresponding counter set (see [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md)).

## See Also

### Common counter set names

- [MTLCommonCounterSetTimestamp](timestamp.md): The common name for the counter set that contains the timestamp counter.
- [MTLCommonCounterSetStatistic](statistic.md): The common name for the counter set that contains GPU workload statistics.
