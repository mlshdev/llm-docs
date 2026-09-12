> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsmessageid](https://developer.apple.com/documentation/telephonymessagingkit/mmsmessageid)

# MMSMessageID

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents an MMS message identifier.

## Declaration

```swift
struct MMSMessageID
```

## Topics

### Creating a message ID

- [init(rawValue:)](mmsmessageid/init%28rawvalue_%29.md): Initializes an message identifier with the given raw value.

### Describing a message ID

- [description](mmsmessageid/description.md): A textual representation of the identifier.

### Working with raw values

- [rawValue](mmsmessageid/rawvalue.md): The identifier of an MMS message.

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

### Receiving messages

- [CellularServiceID](cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [incomingMessageNotifications](mmsservice/incomingmessagenotifications.md): An asynchronous sequence of incoming message notifications produced by the service.
- [MMSService.IncomingMessageNotification](mmsservice/incomingmessagenotification.md): A structure that contains information about an incoming MMS message.
