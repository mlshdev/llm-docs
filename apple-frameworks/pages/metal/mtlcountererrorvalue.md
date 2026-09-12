> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountererrorvalue](https://developer.apple.com/documentation/metal/mtlcountererrorvalue)

# MTLCounterErrorValue (Swift)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A sentinel value for an entry in a counter sample buffer that indicates the entry’s data is invalid.

## Declaration

```swift
var MTLCounterErrorValue: UInt64 { get }
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="discussion"></a>

## Discussion

A GPU driver typically sets entries to this value when it encounters an error resolving a counter’s data. The driver also uses this value for counters it doesn’t support within a counter set (see [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md)).

## See Also

### Counter sample data output

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md): Inspect and use the data within a GPU’s counter sample buffer by resolving it into a standard format.
- [MTLCounterResultTimestamp](mtlcounterresulttimestamp.md): The data structure for storing the data you resolve from a timestamp counter set.
- [MTLCounterResultStatistic](mtlcounterresultstatistic.md): The data structure for storing the data you resolve from a statistic counter set.
- [MTLCounterResultStageUtilization](mtlcounterresultstageutilization.md): The data structure for storing the data you resolve from a stage-utilization counter set.

# MTLCounterErrorValue (Objective-C)

**Framework:** Metal  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A sentinel value for an entry in a counter sample buffer that indicates the entry’s data is invalid.

## Declaration

```objectivec
#define MTLCounterErrorValue
```

## Mentioned In

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="discussion"></a>

## Discussion

A GPU driver typically sets entries to this value when it encounters an error resolving a counter’s data. The driver also uses this value for counters it doesn’t support within a counter set (see [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md)).

## See Also

### Counter sample data output

- [Converting a GPU’s counter data into a readable format](converting-a-gpus-counter-data-into-a-readable-format.md): Inspect and use the data within a GPU’s counter sample buffer by resolving it into a standard format.
- [MTLCounterResultTimestamp](mtlcounterresulttimestamp.md): The data structure for storing the data you resolve from a timestamp counter set.
- [MTLCounterResultStatistic](mtlcounterresultstatistic.md): The data structure for storing the data you resolve from a statistic counter set.
- [MTLCounterResultStageUtilization](mtlcounterresultstageutilization.md): The data structure for storing the data you resolve from a stage-utilization counter set.
