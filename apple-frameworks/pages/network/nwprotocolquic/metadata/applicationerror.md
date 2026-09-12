> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolquic/metadata/applicationerror](https://developer.apple.com/documentation/network/nwprotocolquic/metadata/applicationerror)

# applicationError

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The QUIC application error code to send for the connection, or received from the peer.

## Declaration

```swift
var applicationError: NWProtocolQUIC.ApplicationError { get set }
```

## See Also

### Handling Errors

- [NWProtocolQUIC.ApplicationError](../applicationerror.md): A QUIC application error code.
- [streamApplicationErrorCode](streamapplicationerrorcode.md): The QUIC application error code to send for the stream, or received from the peer.
