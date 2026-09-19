> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/sendencryptedmessagerequest/securesendreceipt

# secureSendReceipt

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

The send receipt of the original message.

## Declaration

```swift
var secureSendReceipt: RCSMessage.SecureSendReceipt?
```

<a id="discussion"></a>

## Discussion

Set this after receiving an [RCSMessage.DispositionNotification](../../rcsmessage/dispositionnotification.md) message whose disposition is [RCSMessage.Disposition.deliveryFailedDueToDecryptionFailure](../../rcsmessage/disposition/deliveryfailedduetodecryptionfailure.md).

## See Also

### Inspecting receipts

- [RCSMessage.SecureSendReceipt](../../rcsmessage/securesendreceipt.md): A structure that contains the security context of an end-to-end encrypted message.
