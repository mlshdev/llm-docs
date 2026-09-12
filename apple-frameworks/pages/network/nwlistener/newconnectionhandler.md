> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/newconnectionhandler](https://developer.apple.com/documentation/network/nwlistener/newconnectionhandler)

# newConnectionHandler

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A handler that receives inbound connections.

## Declaration

```swift
@preconcurrency final var newConnectionHandler: (@Sendable (NWConnection) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

Upon receiving a new connection, you should set update handlers on the connection and start it in order to accept it. If you want to reject the connection, cancel the connection.

## See Also

### Receiving Connections

- [newConnectionLimit](newconnectionlimit.md): The remaining number of inbound connections to deliver before rejecting connections.
- [InfiniteConnectionLimit](infiniteconnectionlimit.md): A static value to indicate that inbound connections should not be limited.
