> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession/setcancellationhandler(_:)](https://developer.apple.com/documentation/xpc/xpcsession/setcancellationhandler(_:))

# setCancellationHandler(\_:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Sets a closure the session calls when it’s canceled.

## Declaration

```swift
@preconcurrency func setCancellationHandler(_ cancellationHandler: @escaping @Sendable (XPCRichError) -> Void)
```

## Parameters

- `cancellationHandler`: A closure that receives an error indicating why the session was canceled.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Only call this method on an inactive session.

## See Also

### Managing the life cycle

- [activate()](activate%28%29.md): Activates a session so you can send messages.
- [setIncomingMessageHandler(\_:)](setincomingmessagehandler%28__%29-2ukdh.md): Sets a closure to receive incoming decodable messages for a session.
- [setIncomingMessageHandler(\_:)](setincomingmessagehandler%28__%29-5lu26.md): Sets a closure to receive incoming received messages for a session.
- [setIncomingMessageHandler(\_:)](setincomingmessagehandler%28__%29-75ou9.md): Sets a closure to receive incoming dictionary messages for a session.
- [cancel(reason:)](cancel%28reason_%29.md): Cancels a session, discarding any unsent messages.
