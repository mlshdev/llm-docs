> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/totaldiskspacecapacitymetric](https://developer.apple.com/documentation/metrickit/totaldiskspacecapacitymetric)

# TotalDiskSpaceCapacityMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A metric that measures disk capacity and usage on the device.

## Declaration

```swift
struct TotalDiskSpaceCapacityMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.totalDiskSpaceCapacity(\_:)](metricresult/totaldiskspacecapacity%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

This value is a daily snapshot, not a cumulative sum over the reporting interval.

## Topics

### Measurements

- [capacity](totaldiskspacecapacitymetric/capacity.md): The total disk space capacity of the current device.
- [spaceUsed](totaldiskspacecapacitymetric/spaceused.md): The total amount of used disk storage on the current device.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Disk metrics

- [LogicalDiskWritesMetric](logicaldiskwritesmetric.md): A metric that measures the total data written to disk.
- [DiskWriteExceptionDiagnostic](diskwriteexceptiondiagnostic.md): A diagnostic for a disk write exception.
- [TotalFileCountMetric](totalfilecountmetric.md): A metric that measures the number of files attributed to the app.
- [TotalFileSizeMetric](totalfilesizemetric.md): A metric that measures the sizes of files attributed to the app.
