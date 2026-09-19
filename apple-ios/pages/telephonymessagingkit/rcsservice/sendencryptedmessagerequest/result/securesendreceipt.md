> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/sendencryptedmessagerequest/result/securesendreceipt

# secureSendReceipt

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

The send receipt of the message.

## Declaration

```swift
let secureSendReceipt: RCSMessage.SecureSendReceipt?
```

<a id="discussion"></a>

## Discussion

Use this to re-send a message when the recipient device fails to decrypt the message.

## See Also

### Inspecting result properties

- [RCSMessage.SecureSendReceipt](../../../rcsmessage/securesendreceipt.md): A structure that contains the security context of an end-to-end encrypted message.
