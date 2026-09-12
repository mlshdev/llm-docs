> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/logicaldiskwritesmetric](https://developer.apple.com/documentation/metrickit/logicaldiskwritesmetric)

# LogicalDiskWritesMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric that measures the total data written to disk.

## Declaration

```swift
struct LogicalDiskWritesMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.logicalDiskWrites(\_:)](metricresult/logicaldiskwrites%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

## Topics

### Measurements

- [value](logicaldiskwritesmetric/value.md): The total amount of data written to disk or other long term storage.

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

- [DiskWriteExceptionDiagnostic](diskwriteexceptiondiagnostic.md): A diagnostic for a disk write exception.
- [TotalDiskSpaceCapacityMetric](totaldiskspacecapacitymetric.md): A metric that measures disk capacity and usage on the device.
- [TotalFileCountMetric](totalfilecountmetric.md): A metric that measures the number of files attributed to the app.
- [TotalFileSizeMetric](totalfilesizemetric.md): A metric that measures the sizes of files attributed to the app.
