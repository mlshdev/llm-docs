> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/disposition/interworkingdelivered](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/disposition/interworkingdelivered)

# RCSMessage.Disposition.interworkingDelivered

**Framework:** TelephonyMessagingKit  
**Kind:** Case  
**Availability:** iOS 26.0+

The carrier used a non-CPM technology to deliver the message.

## Declaration

```swift
case interworkingDelivered
```

<a id="discussion"></a>

## Discussion

This disposition indicates that the carrier used a technology like SMS or MMS to deliver the message.

## See Also

### Accessing disposition values

- [RCSMessage.Disposition.delivered](delivered.md): The carrier delivered the message.
- [RCSMessage.Disposition.deliveryFailed](deliveryfailed.md): The carrier failed to deliver the message.
- [RCSMessage.Disposition.displayed](displayed.md): The recipient device displayed the message.
- [RCSMessage.Disposition.interworkingFailed](interworkingfailed.md): The carrier attempted to use a non-CPM technology to deliver the message, but failed.
- [RCSMessage.Disposition.deliveryFailedDueToDecryptionFailure](deliveryfailedduetodecryptionfailure.md): The recipient device was unable to decrypt the encrypted message.
