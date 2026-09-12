> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/disposition/deliveryfailedduetodecryptionfailure](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/disposition/deliveryfailedduetodecryptionfailure)

# RCSMessage.Disposition.deliveryFailedDueToDecryptionFailure

**Framework:** TelephonyMessagingKit  
**Kind:** Case  
**Availability:** iOS 26.5+

The recipient device was unable to decrypt the encrypted message.

## Declaration

```swift
case deliveryFailedDueToDecryptionFailure
```

## See Also

### Accessing disposition values

- [RCSMessage.Disposition.delivered](delivered.md): The carrier delivered the message.
- [RCSMessage.Disposition.deliveryFailed](deliveryfailed.md): The carrier failed to deliver the message.
- [RCSMessage.Disposition.displayed](displayed.md): The recipient device displayed the message.
- [RCSMessage.Disposition.interworkingDelivered](interworkingdelivered.md): The carrier used a non-CPM technology to deliver the message.
- [RCSMessage.Disposition.interworkingFailed](interworkingfailed.md): The carrier attempted to use a non-CPM technology to deliver the message, but failed.
