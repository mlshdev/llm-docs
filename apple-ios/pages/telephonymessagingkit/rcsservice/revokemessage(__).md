> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/revokemessage(_:)](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/revokemessage(_:))

# revokeMessage(\_:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Requests revocation of an RCS message.

## Declaration

```swift
final func revokeMessage(_ request: RCSService.RevokeMessageRequest) async throws -> Bool
```

## Parameters

- `request`: The request that contains the message to be revoked.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether sending the request to the carrier network succeeded.

<a id="discussion"></a>

## Discussion

The RCS specification requires that you revoke a message when delivery fails or times out, and fall back to sending the message with SMS or MMS.

> **Throws**

>  If the session is no longer valid, this method throws [TelephonyMessagingSession.Error.invalidSession](../telephonymessagingsession/error/invalidsession.md). If the method can’t resolve the handle in the request, it throws [RCSService.Error.invalidArgument](error/invalidargument.md). If the method can’t process the revoke request for other reasons it throws [RCSService.Error.internalError](error/internalerror.md).

## See Also

### Revoking messages

- [RCSService.RevokeMessageRequest](revokemessagerequest.md): A structure that respresents a request to revoke a previously sent message.
