> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/disposition/interworkingfailed](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/disposition/interworkingfailed)

# RCSMessage.Disposition.interworkingFailed

**Framework:** TelephonyMessagingKit  
**Kind:** Case  
**Availability:** iOS 26.0+

The carrier attempted to use a non-CPM technology to deliver the message, but failed.

## Declaration

```swift
case interworkingFailed
```

<a id="discussion"></a>

## Discussion

This disposition indicates that the carrier attempted to use a technology like SMS or MMS to deliver the message.

## See Also

### Accessing disposition values

- [RCSMessage.Disposition.delivered](delivered.md): The carrier delivered the message.
- [RCSMessage.Disposition.deliveryFailed](deliveryfailed.md): The carrier failed to deliver the message.
- [RCSMessage.Disposition.displayed](displayed.md): The recipient device displayed the message.
- [RCSMessage.Disposition.interworkingDelivered](interworkingdelivered.md): The carrier used a non-CPM technology to deliver the message.
- [RCSMessage.Disposition.deliveryFailedDueToDecryptionFailure](deliveryfailedduetodecryptionfailure.md): The recipient device was unable to decrypt the encrypted message.
