> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/smsservice/incomingmessagenotifications

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
