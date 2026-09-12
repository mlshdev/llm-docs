> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommoncounterset/timestamp](https://developer.apple.com/documentation/metal/mtlcommoncounterset/timestamp)

# timestamp (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The common name for the counter set that contains the timestamp counter.

## Declaration

```swift
static let timestamp: MTLCommonCounterSet
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="discussion"></a>

## Discussion

The [timestamp](timestamp.md) counter set contains the [timestamp](../mtlcommoncounter/timestamp.md) counter. Use this name to check whether a GPU device supports the corresponding counter set (see [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md)).

## See Also

### Common counter set names

- [stageUtilization](stageutilization.md): The common name for the counter set that contains hardware utilization measurements from various render stages.
- [statistic](statistic.md): The common name for the counter set that contains GPU workload statistics.

# MTLCommonCounterSetTimestamp (Objective-C)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The common name for the counter set that contains the timestamp counter.

## Declaration

```objectivec
extern MTLCommonCounterSet MTLCommonCounterSetTimestamp;
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="discussion"></a>

## Discussion

The [MTLCommonCounterSetTimestamp](timestamp.md) counter set contains the [MTLCommonCounterTimestamp](../mtlcommoncounter/timestamp.md) counter. Use this name to check whether a GPU device supports the corresponding counter set (see [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md)).

## See Also

### Common counter set names

- [MTLCommonCounterSetStageUtilization](stageutilization.md): The common name for the counter set that contains hardware utilization measurements from various render stages.
- [MTLCommonCounterSetStatistic](statistic.md): The common name for the counter set that contains GPU workload statistics.
