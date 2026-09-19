> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/sendmessage(_:to:using:messageid:)-61imq

# sendMessage(\_:to:using:messageID:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+

Sends a reply message to a specified destination.

## Declaration

```swift
final func sendMessage(_ content: RCSMessage.Reply, to destination: RCSHandle, using cellularServiceID: CellularServiceID, messageID: RCSMessageID) async throws
```

## Parameters

- `content`: The content of the message to send, as an instance of [RCSMessage.Reply](../rcsmessage/reply.md).
- `destination`: The destination handle to send the message to.
- `cellularServiceID`: The service identifier to use for the message.
- `messageID`: The message identifier to use for the message.
