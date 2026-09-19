> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/totalfilecountmetric

# TotalFileCountMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A metric that measures the number of files attributed to the app.

## Declaration

```swift
struct TotalFileCountMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.totalFileCount(\_:)](metricresult/totalfilecount%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

This value is a daily snapshot, not a cumulative sum over the reporting interval.

## Topics

### Measurements

- [binaryFileCount](totalfilecountmetric/binaryfilecount.md): The total number of your app’s binary files.
- [dataFileCount](totalfilecountmetric/datafilecount.md): The total number of data files in your app’s container(s).

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
- [TotalDiskSpaceCapacityMetric](totaldiskspacecapacitymetric.md): A metric that measures disk capacity and usage on the device.
- [TotalFileSizeMetric](totalfilesizemetric.md): A metric that measures the sizes of files attributed to the app.
