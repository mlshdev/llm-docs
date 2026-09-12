> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/smsservice/criticalmessagestatenotification](https://developer.apple.com/documentation/telephonymessagingkit/smsservice/criticalmessagestatenotification)

# SMSService.CriticalMessageStateNotification

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains information about a critical SMS message.

## Declaration

```swift
struct CriticalMessageStateNotification
```

## Topics

### Accessing message properties

- [cellularServiceID](criticalmessagestatenotification/cellularserviceid.md): The cellular service identifier associated with the notification.
- [messageID](criticalmessagestatenotification/messageid.md): The identifier of the critical message.
- [state](criticalmessagestatenotification/state-swift.property.md): The state of the critical message.
- [SMSService.CriticalMessageStateNotification.State](criticalmessagestatenotification/state-swift.enum.md): An enumeration of possible states of a critical message.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling critical state changes

- [criticalMessageStateNotifications](criticalmessagestatenotifications.md): An asynchronous sequence of critical message state notifications.
