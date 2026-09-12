> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/message](https://developer.apple.com/documentation/network/nwconnectiongroup/message)

# NWConnectionGroup.Message

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An object that represents a message that you send or receive within a group, and that contains protocol metadata and send properties.

## Declaration

```swift
class Message
```

## Topics

### Inspecting Received Messages

- [remoteEndpoint](message/remoteendpoint.md): The endpoint that originates the message you receive.
- [localEndpoint](message/localendpoint.md): The local address and port you use to receive the message.
- [path](message/path.md): The network path on which you receive the message.

### Replying to Received Messages

- [reply(content:message:)](message/reply%28content_message_%29.md): Sends a reply to the specific endpoint that originates a group message you receive.
- [extractConnection()](message/extractconnection%28%29.md): Converts a message you receive from an endpoint into a connection object that you use for long-term communication with that endpoint.

### Sending Messages

- [default](message/default.md): A static object you use to send a message with default properties.
- [init(identifier:expiration:priority:isFinal:antecedent:metadata:)](message/init%28identifier_expiration_priority_isfinal_antecedent_metadata_%29.md): Initializes a custom message context you use to send data.

### Initializers

- [init(nw:)](message/init%28nw_%29.md)

### Instance Methods

- [metadata(definition:)](message/metadata%28definition_%29.md)

## Relationships

### Inherits From

- [NWConnection.ContentContext](../nwconnection/contentcontext.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending and Receiving Group Messages

- [setReceiveHandler(maximumMessageSize:rejectOversizedMessages:handler:)](setreceivehandler%28maximummessagesize_rejectoversizedmessages_handler_%29.md): Sets a handler that receives inbound messages from members of the group.
- [send(content:to:message:completion:)](send%28content_to_message_completion_%29.md): Sends data to the entire group, or to a specific member of the group.
