> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcreceivedmessage/handoffreply(to:_:)](https://developer.apple.com/documentation/xpc/xpcreceivedmessage/handoffreply(to:_:))

# handoffReply(to:\_:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Informs the system when message processing and response continues in a separate dispatch queue.

## Declaration

```swift
@preconcurrency func handoffReply(to queue: DispatchQueue, _ continuation: @escaping @Sendable () -> Void) -> (any Encodable)?
```

## Parameters

- `queue`: The dispatch queue where message processing continues. The queue must be an immutible queue hierarchy.
- `continuation`: The closure to perform on `queue`.

<a id="return-value"></a>

## Return Value

This method always returns `nil`, allowing a message handler closure to return a value.

<a id="Discussion"></a>

## Discussion

You can only call this method from the context of a message handler closure, or from a continuation closure passed to [handoffReply(to:\_:)](handoffreply%28to___%29.md).

## See Also

### Replying to messages

- [expectsReply](expectsreply.md): A Boolean value that indicates if the client that sent the message expects a reply.
- [reply(\_:)](reply%28__%29.md): Sends a reply to the originator of the message.
