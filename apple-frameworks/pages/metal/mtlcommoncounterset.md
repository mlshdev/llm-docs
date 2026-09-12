> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommoncounterset](https://developer.apple.com/documentation/metal/mtlcommoncounterset)

# MTLCommonCounterSet (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The name of a specific counter set that a GPU device can support.

## Declaration

```swift
struct MTLCommonCounterSet
```

## Mentioned In

- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md)

<a id="overview"></a>

## Overview

This type defines the constants that let a GPU device declare which counter sets it supports.

> **Important**

>  Some GPUs may only support some of the counters within a counter set.

For more information, see [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md).

## Topics

### Common counter set names

- [timestamp](mtlcommoncounterset/timestamp.md): The common name for the counter set that contains the timestamp counter.
- [stageUtilization](mtlcommoncounterset/stageutilization.md): The common name for the counter set that contains hardware utilization measurements from various render stages.
- [statistic](mtlcommoncounterset/statistic.md): The common name for the counter set that contains GPU workload statistics.

### Swift support

- [init(rawValue:)](mtlcommoncounterset/init%28rawvalue_%29.md): Creates a common counter set name from a raw value.

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
- [MTLCounter](mtlcounter.md): An individual counter a GPU device lists within one of its counter sets.
- [MTLCommonCounter](mtlcommoncounter.md): The name of a specific counter that can appear in a GPU device’s counter sets.

# MTLCommonCounterSet (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The name of a specific counter set that a GPU device can support.

## Declaration

```objectivec
typedef NSString * const MTLCommonCounterSet;
```

## Mentioned In

- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md)

<a id="overview"></a>

## Overview

This type defines the constants that let a GPU device declare which counter sets it supports.

> **Important**

>  Some GPUs may only support some of the counters within a counter set.

For more information, see [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md).

## Topics

### Common counter set names

- [MTLCommonCounterSetTimestamp](mtlcommoncounterset/timestamp.md): The common name for the counter set that contains the timestamp counter.
- [MTLCommonCounterSetStageUtilization](mtlcommoncounterset/stageutilization.md): The common name for the counter set that contains hardware utilization measurements from various render stages.
- [MTLCommonCounterSetStatistic](mtlcommoncounterset/statistic.md): The common name for the counter set that contains GPU workload statistics.

## See Also

### Counters and counter sets

- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md): Check whether a GPU produces the runtime performance data you want to sample.
- [MTLCounterSet](mtlcounterset.md): A collection of individual counters a GPU device supports for a counter set.
- [MTLCounter](mtlcounter.md): An individual counter a GPU device lists within one of its counter sets.
- [MTLCommonCounter](mtlcommoncounter.md): The name of a specific counter that can appear in a GPU device’s counter sets.
