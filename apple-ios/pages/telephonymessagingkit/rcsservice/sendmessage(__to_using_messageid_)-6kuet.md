> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/sendmessage(_:to:using:messageid:)-6kuet](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/sendmessage(_:to:using:messageid:)-6kuet)

# sendMessage(\_:to:using:messageID:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+

Sends a reaction message to a specified destination.

## Declaration

```swift
final func sendMessage(_ content: RCSMessage.Reaction, to destination: RCSHandle, using cellularServiceID: CellularServiceID, messageID: RCSMessageID) async throws
```

## Parameters

- `content`: The content of the message to send, as an instance of [RCSMessage.Reaction](../rcsmessage/reaction.md).
- `destination`: The destination handle to send the message to.
- `cellularServiceID`: The service identifier to use for the message.
- `messageID`: The message identifier to use for the message.

<a id="discussion"></a>

## Discussion

> **Throws**

>  If the reaction content is not a valid emoji sequence, this method throws [RCSService.Error.invalidArgument](error/invalidargument.md).
