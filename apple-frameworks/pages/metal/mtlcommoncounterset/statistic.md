> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommoncounterset/statistic](https://developer.apple.com/documentation/metal/mtlcommoncounterset/statistic)

# statistic (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The common name for the counter set that contains GPU workload statistics.

## Declaration

```swift
static let statistic: MTLCommonCounterSet
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="discussion"></a>

## Discussion

The statistics counter set contains the following counters:

- [computeKernelInvocations](../mtlcommoncounter/computekernelinvocations.md)
- [vertexInvocations](../mtlcommoncounter/vertexinvocations.md)
- [fragmentInvocations](../mtlcommoncounter/fragmentinvocations.md)
- [fragmentsPassed](../mtlcommoncounter/fragmentspassed.md)
- [tessellationInputPatches](../mtlcommoncounter/tessellationinputpatches.md)
- [postTessellationVertexInvocations](../mtlcommoncounter/posttessellationvertexinvocations.md)
- [clipperInvocations](../mtlcommoncounter/clipperinvocations.md)
- [clipperPrimitivesOut](../mtlcommoncounter/clipperprimitivesout.md)

Use this name to check whether a GPU device supports the corresponding counter set (see [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md)).

## See Also

### Common counter set names

- [timestamp](timestamp.md): The common name for the counter set that contains the timestamp counter.
- [stageUtilization](stageutilization.md): The common name for the counter set that contains hardware utilization measurements from various render stages.

# MTLCommonCounterSetStatistic (Objective-C)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The common name for the counter set that contains GPU workload statistics.

## Declaration

```objectivec
extern MTLCommonCounterSet MTLCommonCounterSetStatistic;
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="discussion"></a>

## Discussion

The statistics counter set contains the following counters:

- [MTLCommonCounterComputeKernelInvocations](../mtlcommoncounter/computekernelinvocations.md)
- [MTLCommonCounterVertexInvocations](../mtlcommoncounter/vertexinvocations.md)
- [MTLCommonCounterFragmentInvocations](../mtlcommoncounter/fragmentinvocations.md)
- [MTLCommonCounterFragmentsPassed](../mtlcommoncounter/fragmentspassed.md)
- [MTLCommonCounterTessellationInputPatches](../mtlcommoncounter/tessellationinputpatches.md)
- [MTLCommonCounterPostTessellationVertexInvocations](../mtlcommoncounter/posttessellationvertexinvocations.md)
- [MTLCommonCounterClipperInvocations](../mtlcommoncounter/clipperinvocations.md)
- [MTLCommonCounterClipperPrimitivesOut](../mtlcommoncounter/clipperprimitivesout.md)

Use this name to check whether a GPU device supports the corresponding counter set (see [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md)).

## See Also

### Common counter set names

- [MTLCommonCounterSetTimestamp](timestamp.md): The common name for the counter set that contains the timestamp counter.
- [MTLCommonCounterSetStageUtilization](stageutilization.md): The common name for the counter set that contains hardware utilization measurements from various render stages.
