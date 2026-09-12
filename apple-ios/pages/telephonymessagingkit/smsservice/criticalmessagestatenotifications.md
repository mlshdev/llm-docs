> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/smsservice/criticalmessagestatenotifications](https://developer.apple.com/documentation/telephonymessagingkit/smsservice/criticalmessagestatenotifications)

# criticalMessageStateNotifications

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

An asynchronous sequence of critical message state notifications.

## Declaration

```swift
final var criticalMessageStateNotifications: some AsyncSequence<SMSService.CriticalMessageStateNotification, Never> { get throws }
```

<a id="discussion"></a>

## Discussion

This sequence tracks messages sent with the Critical Messaging API, as described in [Sending SMS messages from an app](../../messages/critical-messaging-api.md).

## See Also

### Handling critical state changes

- [SMSService.CriticalMessageStateNotification](criticalmessagestatenotification.md): A structure that contains information about a critical SMS message.
