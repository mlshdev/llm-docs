> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/smsservice/criticalmessagestatenotification/messageid

# messageID

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The identifier of the critical message.

## Declaration

```swift
let messageID: SMSMessageID
```

## See Also

### Accessing message properties

- [cellularServiceID](cellularserviceid.md): The cellular service identifier associated with the notification.
- [state](state-swift.property.md): The state of the critical message.
- [SMSService.CriticalMessageStateNotification.State](state-swift.enum.md): An enumeration of possible states of a critical message.
