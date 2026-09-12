> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/memoryexceptiondiagnostic](https://developer.apple.com/documentation/metrickit/memoryexceptiondiagnostic)

# MemoryExceptionDiagnostic

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A diagnostic MetricKit generates when your app or extension terminates because it exceeds the memory limit.

## Declaration

```swift
struct MemoryExceptionDiagnostic
```

## Mentioned In

- [Analyzing app performance with MetricKit](analyzing-app-performance-with-metrickit.md)

## Topics

### Call stack

- [callStackTree](memoryexceptiondiagnostic/callstacktree.md): The call stack tree that caused the memory exception.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### CPU and memory metrics

- [CPUTimeMetric](cputimemetric.md): A metric that measures the total CPU time used by the app.
- [CPUInstructionsCountMetric](cpuinstructionscountmetric.md): A metric that measures the total number of CPU instructions the app executed.
- [CPUExceptionDiagnostic](cpuexceptiondiagnostic.md): A diagnostic for a fatal or nonfatal CPU exception.
- [PeakMemoryMetric](peakmemorymetric.md): A metric that measures peak memory footprint.
- [SuspendedMemoryMetric](suspendedmemorymetric.md): A metric that measures average suspended memory footprint with statistical data.
