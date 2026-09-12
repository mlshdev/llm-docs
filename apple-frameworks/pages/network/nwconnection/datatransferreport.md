> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/datatransferreport](https://developer.apple.com/documentation/network/nwconnection/datatransferreport)

# NWConnection.DataTransferReport

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A report that provides metrics about data being sent and received on a connection.

## Declaration

```swift
struct DataTransferReport
```

## Topics

### Examining Data Transfer

- [aggregatePathReport](datatransferreport/aggregatepathreport.md): A report that sums counts across all network paths.
- [pathReports](datatransferreport/pathreports.md): An array of reports for each network path the connection used.
- [NWConnection.DataTransferReport.PathReport](datatransferreport/pathreport.md): A report that contains details about data transfer over a single network path.

### Summarizing Reports

- [duration](datatransferreport/duration.md): The duration of the data transfer report, from when it was started to when it was collected.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Collecting Connection Metrics

- [Collecting Network Connection Metrics](../collecting-network-connection-metrics.md): Use reports to understand how DNS and protocol handshakes impact connection establishment.
- [requestEstablishmentReport(queue:completion:)](requestestablishmentreport%28queue_completion_%29.md): Requests a copy of the connection’s establishment report once the connection is in the ready state.
- [NWConnection.EstablishmentReport](establishmentreport.md): A report that provides metrics about the establishment of a connection.
- [startDataTransferReport()](startdatatransferreport%28%29.md): Begins a new data transfer report, which can later be collected.
- [NWConnection.PendingDataTransferReport](pendingdatatransferreport.md): An outstanding data transfer report that has yet to be collected.
