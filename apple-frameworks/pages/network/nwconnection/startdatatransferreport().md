> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/startdatatransferreport()](https://developer.apple.com/documentation/network/nwconnection/startdatatransferreport())

# startDataTransferReport()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Begins a new data transfer report, which can later be collected.

## Declaration

```swift
final func startDataTransferReport() -> NWConnection.PendingDataTransferReport
```

## See Also

### Collecting Connection Metrics

- [Collecting Network Connection Metrics](../collecting-network-connection-metrics.md): Use reports to understand how DNS and protocol handshakes impact connection establishment.
- [requestEstablishmentReport(queue:completion:)](requestestablishmentreport%28queue_completion_%29.md): Requests a copy of the connection’s establishment report once the connection is in the ready state.
- [NWConnection.EstablishmentReport](establishmentreport.md): A report that provides metrics about the establishment of a connection.
- [NWConnection.PendingDataTransferReport](pendingdatatransferreport.md): An outstanding data transfer report that has yet to be collected.
- [NWConnection.DataTransferReport](datatransferreport.md): A report that provides metrics about data being sent and received on a connection.
