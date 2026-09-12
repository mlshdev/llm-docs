> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/setreceivehandler(maximummessagesize:rejectoversizedmessages:handler:)](https://developer.apple.com/documentation/network/nwconnectiongroup/setreceivehandler(maximummessagesize:rejectoversizedmessages:handler:))

# setReceiveHandler(maximumMessageSize:rejectOversizedMessages:handler:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sets a handler that receives inbound messages from members of the group.

## Declaration

```swift
@preconcurrency final func setReceiveHandler(maximumMessageSize: Int = Int.max, rejectOversizedMessages: Bool = true, handler: (@Sendable (NWConnectionGroup.Message, Data?, Bool) -> Void)?)
```

## See Also

### Sending and Receiving Group Messages

- [send(content:to:message:completion:)](send%28content_to_message_completion_%29.md): Sends data to the entire group, or to a specific member of the group.
- [NWConnectionGroup.Message](message.md): An object that represents a message that you send or receive within a group, and that contains protocol metadata and send properties.
