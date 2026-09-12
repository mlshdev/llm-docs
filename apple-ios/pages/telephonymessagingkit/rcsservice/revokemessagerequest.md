> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/revokemessagerequest](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/revokemessagerequest)

# RCSService.RevokeMessageRequest

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that respresents a request to revoke a previously sent message.

## Declaration

```swift
struct RevokeMessageRequest
```

## Topics

### Creating a revoke request

- [init(cellularServiceID:handle:messageID:)](revokemessagerequest/init%28cellularserviceid_handle_messageid_%29.md)

### Accessing request properties

- [cellularServiceID](revokemessagerequest/cellularserviceid.md): The service identifier to use for this request.
- [handle](revokemessagerequest/handle.md): A handle associated with the message to revoke.
- [messageID](revokemessagerequest/messageid.md): The message identifier to revoke.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Revoking messages

- [revokeMessage(\_:)](revokemessage%28__%29.md): Requests revocation of an RCS message.
