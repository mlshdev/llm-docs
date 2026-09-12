> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/datatransferreport/pathreport](https://developer.apple.com/documentation/network/nwconnection/datatransferreport/pathreport)

# NWConnection.DataTransferReport.PathReport

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A report that contains details about data transfer over a single network path.

## Declaration

```swift
struct PathReport
```

## Topics

### Identifying Paths

- [interface](pathreport/interface.md): The network interface this path used.

### Inspecting Application Metrics

- [receivedApplicationByteCount](pathreport/receivedapplicationbytecount.md): The number of bytes the connection delivered.
- [sentApplicationByteCount](pathreport/sentapplicationbytecount.md): The number of bytes sent on the connection.

### Inspecting Transport Metrics

- [receivedTransportByteCount](pathreport/receivedtransportbytecount.md): The number of bytes the transport protocol delivered.
- [receivedTransportDuplicateByteCount](pathreport/receivedtransportduplicatebytecount.md): The number of duplicated bytes the transport protocol detected.
- [receivedTransportOutOfOrderByteCount](pathreport/receivedtransportoutoforderbytecount.md): The number of bytes the transport protocol received out of order.
- [sentTransportByteCount](pathreport/senttransportbytecount.md): The number of bytes sent into the transport protocol.
- [retransmittedTransportByteCount](pathreport/retransmittedtransportbytecount.md): The number of bytes the transport protocol retransmitted.
- [transportSmoothedRTT](pathreport/transportsmoothedrtt.md): The smoothed round-trip time the transport protocol measured.
- [transportMinimumRTT](pathreport/transportminimumrtt.md): The minimum round-trip time the transport protocol measured.
- [transportRTTVariance](pathreport/transportrttvariance.md): The variance of the round-trip time the transport protocol measured.

### Inspecting Packet Metrics

- [receivedIPPacketCount](pathreport/receivedippacketcount.md): The number of IP packets the connection received.
- [sentIPPacketCount](pathreport/sentippacketcount.md): The number of IP packets the connection sent.

### Instance Properties

- [radioType](pathreport/radiotype.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Examining Data Transfer

- [aggregatePathReport](aggregatepathreport.md): A report that sums counts across all network paths.
- [pathReports](pathreports.md): An array of reports for each network path the connection used.
