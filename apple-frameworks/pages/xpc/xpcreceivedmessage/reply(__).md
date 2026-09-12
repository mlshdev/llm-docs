> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcreceivedmessage/reply(_:)](https://developer.apple.com/documentation/xpc/xpcreceivedmessage/reply(_:))

# reply(\_:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Sends a reply to the originator of the message.

## Declaration

```swift
func reply<Message>(_ object: Message) where Message : Encodable
```

## Parameters

- `object`: A message to send back to the client that sent the original message.

<a id="Discussion"></a>

## Discussion

When a listener receives an [XPCReceivedMessage](../xpcreceivedmessage.md), the message keeps track of the client that sent it. This function sends the specified reply message back to the originating client.

Don’t call this function more than once on a single message, and don’t call it on a message that wasn’t received from a client. Calling it more than once or sending a reply using a message that wasn’t received triggers an API misuse crash.

## See Also

### Replying to messages

- [expectsReply](expectsreply.md): A Boolean value that indicates if the client that sent the message expects a reply.
- [handoffReply(to:\_:)](handoffreply%28to___%29.md): Informs the system when message processing and response continues in a separate dispatch queue.
