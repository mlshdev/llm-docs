> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/peakmemorymetric](https://developer.apple.com/documentation/metrickit/peakmemorymetric)

# PeakMemoryMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A metric that measures peak memory footprint.

## Declaration

```swift
struct PeakMemoryMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.peakMemory(\_:)](metricresult/peakmemory%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

## Topics

### Measurements

- [value](peakmemorymetric/value.md): Peak memory footprint.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### CPU and memory metrics

- [CPUTimeMetric](cputimemetric.md): A metric that measures the total CPU time used by the app.
- [CPUInstructionsCountMetric](cpuinstructionscountmetric.md): A metric that measures the total number of CPU instructions the app executed.
- [CPUExceptionDiagnostic](cpuexceptiondiagnostic.md): A diagnostic for a fatal or nonfatal CPU exception.
- [SuspendedMemoryMetric](suspendedmemorymetric.md): A metric that measures average suspended memory footprint with statistical data.
- [MemoryExceptionDiagnostic](memoryexceptiondiagnostic.md): A diagnostic MetricKit generates when your app or extension terminates because it exceeds the memory limit.
