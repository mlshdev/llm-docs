> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwprotocolquic/metadata/streamapplicationerrorcode

# streamApplicationErrorCode

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The QUIC application error code to send for the stream, or received from the peer.

## Declaration

```swift
var streamApplicationErrorCode: UInt64 { get set }
```

## See Also

### Handling Errors

- [applicationError](applicationerror.md): The QUIC application error code to send for the connection, or received from the peer.
- [NWProtocolQUIC.ApplicationError](../applicationerror.md): A QUIC application error code.
