> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/pendingdatatransferreport](https://developer.apple.com/documentation/network/nwconnection/pendingdatatransferreport)

# NWConnection.PendingDataTransferReport

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An outstanding data transfer report that has yet to be collected.

## Declaration

```swift
class PendingDataTransferReport
```

## Topics

### Collecting Reports

- [collect(queue:completion:)](pendingdatatransferreport/collect%28queue_completion_%29.md): Stops an outstanding data transfer report and delivers the result.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Collecting Connection Metrics

- [Collecting Network Connection Metrics](../collecting-network-connection-metrics.md): Use reports to understand how DNS and protocol handshakes impact connection establishment.
- [requestEstablishmentReport(queue:completion:)](requestestablishmentreport%28queue_completion_%29.md): Requests a copy of the connection’s establishment report once the connection is in the ready state.
- [NWConnection.EstablishmentReport](establishmentreport.md): A report that provides metrics about the establishment of a connection.
- [startDataTransferReport()](startdatatransferreport%28%29.md): Begins a new data transfer report, which can later be collected.
- [NWConnection.DataTransferReport](datatransferreport.md): A report that provides metrics about data being sent and received on a connection.
