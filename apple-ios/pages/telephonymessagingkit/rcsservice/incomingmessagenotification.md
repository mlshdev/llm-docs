> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/incomingmessagenotification](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/incomingmessagenotification)

# RCSService.IncomingMessageNotification

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains information about an incoming RCS message.

## Declaration

```swift
struct IncomingMessageNotification
```

## Topics

### Inspecting notification properties

- [message](incomingmessagenotification/message.md): The message contained in this notification.
- [groupContext](incomingmessagenotification/groupcontext.md): The group context associated with this message.
- [RCSGroupContext](../rcsgroupcontext.md): Structure containing information about a message’s group.
- [suggestions](incomingmessagenotification/suggestions.md): An array of suggestions associated with the message.
- [RCSService.Business.Suggestion](business/suggestion.md): Enumeration representing a suggestion from a business.

### Instance Properties

- [requestedDispositions](incomingmessagenotification/requesteddispositions.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving messages

- [incomingMessageNotifications](incomingmessagenotifications.md): An asynchronous sequence of incoming message notifications produced by this service.
- [RCSMessage](../rcsmessage.md): A structure that contains an RCS message’s content and metadata.
