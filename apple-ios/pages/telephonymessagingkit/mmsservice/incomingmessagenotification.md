> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/incomingmessagenotification](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/incomingmessagenotification)

# MMSService.IncomingMessageNotification

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains information about an incoming MMS message.

## Declaration

```swift
struct IncomingMessageNotification
```

## Topics

### Inspecting notification properties

- [message](incomingmessagenotification/message.md): The incoming message.

### Deprecated properties

- [cellularServiceID](incomingmessagenotification/cellularserviceid.md): Deprecated. The cellular service identifier associated with the notification.
- [messageID](incomingmessagenotification/messageid.md): Deprecated. The identifier of the incoming message.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving messages

- [CellularServiceID](../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [MMSMessageID](../mmsmessageid.md): A structure that represents an MMS message identifier.
- [incomingMessageNotifications](incomingmessagenotifications.md): An asynchronous sequence of incoming message notifications produced by the service.
