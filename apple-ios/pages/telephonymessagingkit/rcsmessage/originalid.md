> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/originalid](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/originalid)

# originalID

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

The original message ID of this message.

## Declaration

```swift
let originalID: RCSMessageID?
```

<a id="discussion"></a>

## Discussion

A non-nil value indicates that this message was re-sent.

## See Also

### Accessing message properties

- [cellularServiceID](cellularserviceid.md): The cellular service identifier associated with the message.
- [CellularServiceID](../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [handle](handle.md): The handle associated with the sender or receiver of the message.
- [RCSHandle](../rcshandle.md): An enumeration that represents an RCS destination or sender.
- [id](id.md): A message identifier for the message.
- [RCSMessageID](../rcsmessageid.md): A structure that represents an RCS message identifier.
