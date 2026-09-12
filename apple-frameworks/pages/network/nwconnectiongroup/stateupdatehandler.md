> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/stateupdatehandler](https://developer.apple.com/documentation/network/nwconnectiongroup/stateupdatehandler)

# stateUpdateHandler

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A handler that receives connection group state updates.

## Declaration

```swift
@preconcurrency final var stateUpdateHandler: (@Sendable (NWConnectionGroup.State) -> Void)? { get set }
```

## See Also

### Managing Groups

- [NWConnectionGroup.State](state-swift.enum.md): States that indicate whether you can use a connection group to send and receive messages.
- [state](state-swift.property.md): The current state of the connection group.
- [cancel()](cancel%28%29.md): Cancels the connection group object and leaves the network group.
