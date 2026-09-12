> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/smsservice/criticalmessagestatenotification/state-swift.enum](https://developer.apple.com/documentation/telephonymessagingkit/smsservice/criticalmessagestatenotification/state-swift.enum)

# SMSService.CriticalMessageStateNotification.State

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

An enumeration of possible states of a critical message.

## Declaration

```swift
enum State
```

## Topics

### Inspecting message states

- [SMSService.CriticalMessageStateNotification.State.sent](state-swift.enum/sent.md): The service sent the message successfully.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing message properties

- [cellularServiceID](cellularserviceid.md): The cellular service identifier associated with the notification.
- [messageID](messageid.md): The identifier of the critical message.
- [state](state-swift.property.md): The state of the critical message.
