> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession/cancel(reason:)](https://developer.apple.com/documentation/xpc/xpcsession/cancel(reason:))

# cancel(reason:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Cancels a session, discarding any unsent messages.

## Declaration

```swift
func cancel(reason: String)
```

## Parameters

- `reason`: A description that explains why cancellation occured.

<a id="Discussion"></a>

## Discussion

When you cancel a session, it discards any unsent messages and invalidates its connection. If there are messages awaiting replies, the session calls the reply handlers with an appropriate [XPCRichError](../xpcricherror.md).

## See Also

### Managing the life cycle

- [activate()](activate%28%29.md): Activates a session so you can send messages.
- [setIncomingMessageHandler(\_:)](setincomingmessagehandler%28__%29-2ukdh.md): Sets a closure to receive incoming decodable messages for a session.
- [setIncomingMessageHandler(\_:)](setincomingmessagehandler%28__%29-5lu26.md): Sets a closure to receive incoming received messages for a session.
- [setIncomingMessageHandler(\_:)](setincomingmessagehandler%28__%29-75ou9.md): Sets a closure to receive incoming dictionary messages for a session.
- [setCancellationHandler(\_:)](setcancellationhandler%28__%29.md): Sets a closure the session calls when it’s canceled.
