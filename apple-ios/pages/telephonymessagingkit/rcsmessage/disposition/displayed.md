> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/disposition/displayed

# RCSMessage.Disposition.displayed

**Framework:** TelephonyMessagingKit  
**Kind:** Case  
**Availability:** iOS 26.0+

The recipient device displayed the message.

## Declaration

```swift
case displayed
```

## See Also

### Accessing disposition values

- [RCSMessage.Disposition.delivered](delivered.md): The carrier delivered the message.
- [RCSMessage.Disposition.deliveryFailed](deliveryfailed.md): The carrier failed to deliver the message.
- [RCSMessage.Disposition.interworkingDelivered](interworkingdelivered.md): The carrier used a non-CPM technology to deliver the message.
- [RCSMessage.Disposition.interworkingFailed](interworkingfailed.md): The carrier attempted to use a non-CPM technology to deliver the message, but failed.
- [RCSMessage.Disposition.deliveryFailedDueToDecryptionFailure](deliveryfailedduetodecryptionfailure.md): The recipient device was unable to decrypt the encrypted message.
