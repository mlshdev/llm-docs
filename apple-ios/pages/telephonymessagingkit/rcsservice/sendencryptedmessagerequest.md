> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/sendencryptedmessagerequest](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/sendencryptedmessagerequest)

# RCSService.SendEncryptedMessageRequest

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.5+

A structure that represents a request to send an encrypted message.

## Declaration

```swift
struct SendEncryptedMessageRequest
```

## Topics

### Creating a request

- [init(content:destination:cellularServiceID:messageID:)](sendencryptedmessagerequest/init%28content_destination_cellularserviceid_messageid_%29-3ox0y.md): Creates a new send encrypted message request with the given parameters.
- [init(content:destination:cellularServiceID:messageID:)](sendencryptedmessagerequest/init%28content_destination_cellularserviceid_messageid_%29-6dm2z.md): Creates a new send encrypted message request with the given parameters.
- [init(content:destination:cellularServiceID:messageID:)](sendencryptedmessagerequest/init%28content_destination_cellularserviceid_messageid_%29-jqfv.md): Creates a new send encrypted message request with the given parameters.

### Inspecting receipts

- [secureSendReceipt](sendencryptedmessagerequest/securesendreceipt.md): The send receipt of the original message.
- [RCSMessage.SecureSendReceipt](../rcsmessage/securesendreceipt.md): A structure that contains the security context of an end-to-end encrypted message.

### Supporting types

- [RCSService.SendEncryptedMessageRequest.Result](sendencryptedmessagerequest/result.md): A structure that represents the result of sending an encrypted message.

### Initializers

- [init(content:destination:cellularServiceID:messageID:)](sendencryptedmessagerequest/init%28content_destination_cellularserviceid_messageid_%29-8lk8q.md): Creates a new send encrypted message request with the given parameters.
- [init(content:destination:cellularServiceID:messageID:)](sendencryptedmessagerequest/init%28content_destination_cellularserviceid_messageid_%29-9lffd.md): Creates a new send encrypted message request with the given parameters.
- [init(content:destination:cellularServiceID:messageID:)](sendencryptedmessagerequest/init%28content_destination_cellularserviceid_messageid_%29-9ns32.md): Creates a new send encrypted message request with the given parameters.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending encrypted messages

- [sendEncryptedMessageRequest(\_:)](sendencryptedmessagerequest%28__%29.md): Sends an encrypted message to a specified destination.
- [RCSService.SendEncryptedMessageRequest.Result](sendencryptedmessagerequest/result.md): A structure that represents the result of sending an encrypted message.
