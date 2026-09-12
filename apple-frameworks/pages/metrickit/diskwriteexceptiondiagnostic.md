> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/diskwriteexceptiondiagnostic](https://developer.apple.com/documentation/metrickit/diskwriteexceptiondiagnostic)

# DiskWriteExceptionDiagnostic

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A diagnostic for a disk write exception.

## Declaration

```swift
struct DiskWriteExceptionDiagnostic
```

<a id="Discussion"></a>

## Discussion

Disk write exceptions occur when your app writes data to disk at an excessive rate. The diagnostic includes a [CallStackTree](callstacktree.md) to identify the responsible code path, and `totalBytesWritten` to quantify the I/O.

## Topics

### Call stack

- [callStackTree](diskwriteexceptiondiagnostic/callstacktree.md): The application call stack tree associated with the excessive disk writes.

### Disk write details

- [totalBytesWritten](diskwriteexceptiondiagnostic/totalbyteswritten.md): Total bytes written during the exception period.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Disk metrics

- [LogicalDiskWritesMetric](logicaldiskwritesmetric.md): A metric that measures the total data written to disk.
- [TotalDiskSpaceCapacityMetric](totaldiskspacecapacitymetric.md): A metric that measures disk capacity and usage on the device.
- [TotalFileCountMetric](totalfilecountmetric.md): A metric that measures the number of files attributed to the app.
- [TotalFileSizeMetric](totalfilesizemetric.md): A metric that measures the sizes of files attributed to the app.
