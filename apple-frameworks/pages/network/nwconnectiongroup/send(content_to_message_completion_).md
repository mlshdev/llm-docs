> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/send(content:to:message:completion:)](https://developer.apple.com/documentation/network/nwconnectiongroup/send(content:to:message:completion:))

# send(content:to:message:completion:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sends data to the entire group, or to a specific member of the group.

## Declaration

```swift
@preconcurrency final func send(content: Data?, to: NWEndpoint? = nil, message: NWConnectionGroup.Message = .default, completion: @escaping (NWError?) -> Void)
```

## Parameters

- `content`: The data to send.
- `to`: An optional endpoint that specifies a member of the group that receives the data. If the endpoint is `nil`, the data will be sent to the entire group.
- `message`: The metadata that defines how the message is sent.
- `completion`: A completion that notifies you when the connection group has processed and sent the data.

## See Also

### Sending and Receiving Group Messages

- [setReceiveHandler(maximumMessageSize:rejectOversizedMessages:handler:)](setreceivehandler%28maximummessagesize_rejectoversizedmessages_handler_%29.md): Sets a handler that receives inbound messages from members of the group.
- [NWConnectionGroup.Message](message.md): An object that represents a message that you send or receive within a group, and that contains protocol metadata and send properties.
