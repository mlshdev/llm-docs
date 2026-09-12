> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/state-swift.property](https://developer.apple.com/documentation/network/nwconnectiongroup/state-swift.property)

# state

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The current state of the connection group.

## Declaration

```swift
final var state: NWConnectionGroup.State { get }
```

## See Also

### Managing Groups

- [stateUpdateHandler](stateupdatehandler.md): A handler that receives connection group state updates.
- [NWConnectionGroup.State](state-swift.enum.md): States that indicate whether you can use a connection group to send and receive messages.
- [cancel()](cancel%28%29.md): Cancels the connection group object and leaves the network group.
