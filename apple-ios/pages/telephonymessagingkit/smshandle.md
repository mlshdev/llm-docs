> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/smshandle](https://developer.apple.com/documentation/telephonymessagingkit/smshandle)

# SMSHandle

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents an SMS address.

## Declaration

```swift
struct SMSHandle
```

## Mentioned In

- [Creating a carrier messaging app](creating-a-carrier-messaging-app.md)

## Topics

### Creating a handle

- [init(phoneNumber:)](smshandle/init%28phonenumber_%29.md): Initializes a handle instance with the given phone number.

### Accessing handle properties

- [phoneNumber](smshandle/phonenumber.md): The phone number for this handle.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing message properties

- [cellularServiceID](smsmessage/cellularserviceid.md): The cellular service identifier associated with the message.
- [CellularServiceID](cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [handle](smsmessage/handle.md): A handle that represents the originator of an incoming message or the destination of an outgoing message.
- [messageID](smsmessage/messageid.md): A message identifier for the message.
- [SMSMessageID](smsmessageid.md): A structure that represents an SMS message identifier.
