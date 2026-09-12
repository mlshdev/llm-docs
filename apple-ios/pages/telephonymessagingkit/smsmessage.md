> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/smsmessage](https://developer.apple.com/documentation/telephonymessagingkit/smsmessage)

# SMSMessage

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains the data of an SMS message.

## Declaration

```swift
struct SMSMessage
```

## Topics

### Creating an SMS message

- [init(cellularServiceID:handle:messageID:content:)](smsmessage/init%28cellularserviceid_handle_messageid_content_%29.md): Initializes an SMS Message for sending to a receipient.

### Accessing message content

- [content](smsmessage/content.md): The textual content of the message.
- [SMSContent](smscontent.md): A structure that holds the content of an SMS message.

### Accessing message properties

- [cellularServiceID](smsmessage/cellularserviceid.md): The cellular service identifier associated with the message.
- [CellularServiceID](cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [handle](smsmessage/handle.md): A handle that represents the originator of an incoming message or the destination of an outgoing message.
- [SMSHandle](smshandle.md): A structure that represents an SMS address.
- [messageID](smsmessage/messageid.md): A message identifier for the message.
- [SMSMessageID](smsmessageid.md): A structure that represents an SMS message identifier.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending messages

- [sendMessage(\_:)](smsservice/sendmessage%28__%29.md): Sends an SMS message to the given destination.
