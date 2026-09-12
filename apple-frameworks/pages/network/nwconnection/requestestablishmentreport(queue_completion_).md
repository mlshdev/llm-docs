> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/requestestablishmentreport(queue:completion:)](https://developer.apple.com/documentation/network/nwconnection/requestestablishmentreport(queue:completion:))

# requestEstablishmentReport(queue:completion:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Requests a copy of the connection’s establishment report once the connection is in the ready state.

## Declaration

```swift
@preconcurrency final func requestEstablishmentReport(queue: DispatchQueue, completion: @escaping @Sendable (NWConnection.EstablishmentReport?) -> Void)
```

## See Also

### Collecting Connection Metrics

- [Collecting Network Connection Metrics](../collecting-network-connection-metrics.md): Use reports to understand how DNS and protocol handshakes impact connection establishment.
- [NWConnection.EstablishmentReport](establishmentreport.md): A report that provides metrics about the establishment of a connection.
- [startDataTransferReport()](startdatatransferreport%28%29.md): Begins a new data transfer report, which can later be collected.
- [NWConnection.PendingDataTransferReport](pendingdatatransferreport.md): An outstanding data transfer report that has yet to be collected.
- [NWConnection.DataTransferReport](datatransferreport.md): A report that provides metrics about data being sent and received on a connection.
