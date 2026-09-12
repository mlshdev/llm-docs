> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterresulttimestamp](https://developer.apple.com/documentation/metal/mtlcounterresulttimestamp)

# MTLCounterResultTimestamp (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The data structure for storing the data you resolve from a timestamp counter set.

## Declaration

```swift
struct MTLCounterResultTimestamp
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="overview"></a>

## Overview

For steps that explain how to resolve data from a counter set, such as [timestamp](mtlcounterresulttimestamp/timestamp.md), see [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md).

## Topics

### Timestamp values

- [timestamp](mtlcounterresulttimestamp/timestamp.md): A timestamp value from a GPU at a particular point in time during an operation, typically at the beginning or ending of a render stage.

### Swift support

- [init()](mtlcounterresulttimestamp/init%28%29.md): Creates a default timestamp result.
- [init(timestamp:)](mtlcounterresulttimestamp/init%28timestamp_%29.md): Creates a timestamp result from a value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Counter sample data output

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md): Inspect and use the data within a GPU’s counter sample buffer by resolving it into a standard format.
- [MTLCounterResultStatistic](mtlcounterresultstatistic.md): The data structure for storing the data you resolve from a statistic counter set.
- [MTLCounterResultStageUtilization](mtlcounterresultstageutilization.md): The data structure for storing the data you resolve from a stage-utilization counter set.
- [MTLCounterErrorValue](mtlcountererrorvalue.md): A sentinel value for an entry in a counter sample buffer that indicates the entry’s data is invalid.

# MTLCounterResultTimestamp (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data structure for storing the data you resolve from a timestamp counter set.

## Declaration

```objectivec
typedef struct { ... } MTLCounterResultTimestamp;
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="overview"></a>

## Overview

For steps that explain how to resolve data from a counter set, such as [timestamp](mtlcounterresulttimestamp/timestamp.md), see [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md).

## Topics

### Timestamp values

- [timestamp](mtlcounterresulttimestamp/timestamp.md): A timestamp value from a GPU at a particular point in time during an operation, typically at the beginning or ending of a render stage.

## See Also

### Counter sample data output

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md): Inspect and use the data within a GPU’s counter sample buffer by resolving it into a standard format.
- [MTLCounterResultStatistic](mtlcounterresultstatistic.md): The data structure for storing the data you resolve from a statistic counter set.
- [MTLCounterResultStageUtilization](mtlcounterresultstageutilization.md): The data structure for storing the data you resolve from a stage-utilization counter set.
- [MTLCounterErrorValue](mtlcountererrorvalue.md): A sentinel value for an entry in a counter sample buffer that indicates the entry’s data is invalid.
