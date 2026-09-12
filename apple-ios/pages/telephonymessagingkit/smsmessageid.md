> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/smsmessageid](https://developer.apple.com/documentation/telephonymessagingkit/smsmessageid)

# SMSMessageID

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents an SMS message identifier.

## Declaration

```swift
struct SMSMessageID
```

## Topics

### Creating a message ID

- [init(rawValue:)](smsmessageid/init%28rawvalue_%29.md): Initializes an message identifier with the given rawValue.

### Describing a message ID

- [description](smsmessageid/description.md): A textual representation of the identifier.

### Working with raw values

- [rawValue](smsmessageid/rawvalue.md): The identifier of an SMS message.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing message properties

- [cellularServiceID](smsmessage/cellularserviceid.md): The cellular service identifier associated with the message.
- [CellularServiceID](cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [handle](smsmessage/handle.md): A handle that represents the originator of an incoming message or the destination of an outgoing message.
- [SMSHandle](smshandle.md): A structure that represents an SMS address.
- [messageID](smsmessage/messageid.md): A message identifier for the message.
