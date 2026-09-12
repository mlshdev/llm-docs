> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/datatransferreport/pathreport/transportsmoothedrtt](https://developer.apple.com/documentation/network/nwconnection/datatransferreport/pathreport/transportsmoothedrtt)

# transportSmoothedRTT

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The smoothed round-trip time the transport protocol measured.

## Declaration

```swift
let transportSmoothedRTT: TimeInterval
```

## See Also

### Inspecting Transport Metrics

- [receivedTransportByteCount](receivedtransportbytecount.md): The number of bytes the transport protocol delivered.
- [receivedTransportDuplicateByteCount](receivedtransportduplicatebytecount.md): The number of duplicated bytes the transport protocol detected.
- [receivedTransportOutOfOrderByteCount](receivedtransportoutoforderbytecount.md): The number of bytes the transport protocol received out of order.
- [sentTransportByteCount](senttransportbytecount.md): The number of bytes sent into the transport protocol.
- [retransmittedTransportByteCount](retransmittedtransportbytecount.md): The number of bytes the transport protocol retransmitted.
- [transportMinimumRTT](transportminimumrtt.md): The minimum round-trip time the transport protocol measured.
- [transportRTTVariance](transportrttvariance.md): The variance of the round-trip time the transport protocol measured.
