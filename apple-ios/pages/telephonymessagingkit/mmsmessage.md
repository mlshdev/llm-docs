> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsmessage](https://developer.apple.com/documentation/telephonymessagingkit/mmsmessage)

# MMSMessage

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains the data of an MMS message.

## Declaration

```swift
struct MMSMessage
```

## Topics

### Creating an MMS message

- [init(cellularServiceID:messageID:content:)](mmsmessage/init%28cellularserviceid_messageid_content_%29.md): Initializes an MMS message for sending to a receipient.

### Accessing message content

- [content](mmsmessage/content.md): The body content of the message.
- [MMSContent](mmscontent.md): A structure that holds the content of an MMS message.

### Accessing message properties

- [cellularServiceID](mmsmessage/cellularserviceid.md): The cellular service identifier associated with the message.
- [CellularServiceID](cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [messageID](mmsmessage/messageid.md): A message identifier for the message.
- [MMSMessageID](mmsmessageid.md): A structure that represents an MMS message identifier.
- [totalSize](mmsmessage/totalsize.md): The total size of the message.
- [description](mmsmessage/description.md): A textual representation of the message.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending messages

- [sendMessage(\_:)](mmsservice/sendmessage%28__%29.md): Sends an MMS message to the given destination.
