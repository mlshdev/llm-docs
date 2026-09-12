> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcreceivedmessage/expectsreply](https://developer.apple.com/documentation/xpc/xpcreceivedmessage/expectsreply)

# expectsReply

**Framework:** XPC  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A Boolean value that indicates if the client that sent the message expects a reply.

## Declaration

```swift
var expectsReply: Bool { get }
```

## See Also

### Replying to messages

- [reply(\_:)](reply%28__%29.md): Sends a reply to the originator of the message.
- [handoffReply(to:\_:)](handoffreply%28to___%29.md): Informs the system when message processing and response continues in a separate dispatch queue.
