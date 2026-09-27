> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/smsservice/incomingmessagenotification

# SMSService.IncomingMessageNotification

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains information about an incoming SMS message.

## Declaration

```swift
struct IncomingMessageNotification
```

## Topics

### Inspecting notification properties

- [message](incomingmessagenotification/message.md): The incoming message.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving messages

- [incomingMessageNotifications](incomingmessagenotifications.md): An asynchronous sequence of incoming message notifications produced by this service.
