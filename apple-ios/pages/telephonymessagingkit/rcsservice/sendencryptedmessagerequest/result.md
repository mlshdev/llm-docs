> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/sendencryptedmessagerequest/result](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/sendencryptedmessagerequest/result)

# RCSService.SendEncryptedMessageRequest.Result

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.5+

A structure that represents the result of sending an encrypted message.

## Declaration

```swift
struct Result
```

## Topics

### Inspecting result properties

- [secureSendReceipt](result/securesendreceipt.md): The send receipt of the message.
- [RCSMessage.SecureSendReceipt](../../rcsmessage/securesendreceipt.md): A structure that contains the security context of an end-to-end encrypted message.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending encrypted messages

- [sendEncryptedMessageRequest(\_:)](../sendencryptedmessagerequest%28__%29.md): Sends an encrypted message to a specified destination.
- [RCSService.SendEncryptedMessageRequest](../sendencryptedmessagerequest.md): A structure that represents a request to send an encrypted message.
