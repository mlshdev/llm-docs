> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/totalfilesizemetric](https://developer.apple.com/documentation/metrickit/totalfilesizemetric)

# TotalFileSizeMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A metric that measures the sizes of files attributed to the app.

## Declaration

```swift
struct TotalFileSizeMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.totalFileSize(\_:)](metricresult/totalfilesize%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

This value is a daily snapshot, not a cumulative sum over the reporting interval.

## Topics

### Measurements

- [binaryFileSize](totalfilesizemetric/binaryfilesize.md): The total size of disk space your app’s binary files occupy.
- [cacheFolderSize](totalfilesizemetric/cachefoldersize.md): The total size of your application’s cache folder.
- [cloneSize](totalfilesizemetric/clonesize.md): The total size of all clone files that are attributed to your app.
- [dataFileSize](totalfilesizemetric/datafilesize.md): The total size of disk space your app uses for storing data files.

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
- [TotalFileCountMetric](totalfilecountmetric.md): A metric that measures the number of files attributed to the app.
