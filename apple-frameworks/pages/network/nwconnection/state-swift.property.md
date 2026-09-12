> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/state-swift.property](https://developer.apple.com/documentation/network/nwconnection/state-swift.property)

# state

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The current state of the connection.

## Declaration

```swift
final var state: NWConnection.State { get }
```

## See Also

### Handling State Updates

- [NWConnection.State](state-swift.enum.md): States indicating whether a connection can be used to send and receive data.
- [stateUpdateHandler](stateupdatehandler.md): A handler that receives connection state updates.
