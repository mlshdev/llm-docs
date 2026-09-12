> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/smsservice/incomingmessagenotifications](https://developer.apple.com/documentation/telephonymessagingkit/smsservice/incomingmessagenotifications)

# incomingMessageNotifications

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

An asynchronous sequence of incoming message notifications produced by this service.

## Declaration

```swift
final var incomingMessageNotifications: some AsyncSequence<SMSService.IncomingMessageNotification, Never> { get throws }
```

<a id="discussion"></a>

## Discussion

Iterate over this sequence with a `for`-`await`-`in` loop to receive [SMSService.IncomingMessageNotification](incomingmessagenotification.md) instances that indicate the arrival of incoming messages.

## See Also

### Receiving messages

- [SMSService.IncomingMessageNotification](incomingmessagenotification.md): A structure that contains information about an incoming SMS message.
