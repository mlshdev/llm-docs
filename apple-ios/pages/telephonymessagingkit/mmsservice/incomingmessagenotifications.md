> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/incomingmessagenotifications](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/incomingmessagenotifications)

# incomingMessageNotifications

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

An asynchronous sequence of incoming message notifications produced by the service.

## Declaration

```swift
final var incomingMessageNotifications: some AsyncSequence<MMSService.IncomingMessageNotification, Never> { get throws }
```

<a id="discussion"></a>

## Discussion

Iterate over this sequence with a `for`-`await`-`in` loop to receive [MMSService.IncomingMessageNotification](incomingmessagenotification.md) instances that indicate the arrival of incoming messages.

## See Also

### Receiving messages

- [CellularServiceID](../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [MMSMessageID](../mmsmessageid.md): A structure that represents an MMS message identifier.
- [MMSService.IncomingMessageNotification](incomingmessagenotification.md): A structure that contains information about an incoming MMS message.
