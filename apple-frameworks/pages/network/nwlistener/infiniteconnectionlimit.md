> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/infiniteconnectionlimit](https://developer.apple.com/documentation/network/nwlistener/infiniteconnectionlimit)

# InfiniteConnectionLimit

**Framework:** Network  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A static value to indicate that inbound connections should not be limited.

## Declaration

```swift
static let InfiniteConnectionLimit: Int
```

## See Also

### Receiving Connections

- [newConnectionHandler](newconnectionhandler.md): A handler that receives inbound connections.
- [newConnectionLimit](newconnectionlimit.md): The remaining number of inbound connections to deliver before rejecting connections.
