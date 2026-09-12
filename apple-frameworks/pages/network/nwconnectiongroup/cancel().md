> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/cancel()](https://developer.apple.com/documentation/network/nwconnectiongroup/cancel())

# cancel()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Cancels the connection group object and leaves the network group.

## Declaration

```swift
final func cancel()
```

## See Also

### Managing Groups

- [stateUpdateHandler](stateupdatehandler.md): A handler that receives connection group state updates.
- [NWConnectionGroup.State](state-swift.enum.md): States that indicate whether you can use a connection group to send and receive messages.
- [state](state-swift.property.md): The current state of the connection group.
