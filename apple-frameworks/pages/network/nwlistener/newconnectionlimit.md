> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/newconnectionlimit](https://developer.apple.com/documentation/network/nwlistener/newconnectionlimit)

# newConnectionLimit

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The remaining number of inbound connections to deliver before rejecting connections.

## Declaration

```swift
final var newConnectionLimit: Int { get set }
```

<a id="Discussion"></a>

## Discussion

When the new connection limit is set to a non-infinite value, it will decrement for every received connection. Once the value hits zero, new connections will be queued and eventually blocked, until you raise the limit. This allows you to limit the rate of inbound connections you handle.

By default, the limit is [InfiniteConnectionLimit](infiniteconnectionlimit.md). When the limit is infinite, it does not decrement but allows all inbound connections.

## See Also

### Receiving Connections

- [newConnectionHandler](newconnectionhandler.md): A handler that receives inbound connections.
- [InfiniteConnectionLimit](infiniteconnectionlimit.md): A static value to indicate that inbound connections should not be limited.
