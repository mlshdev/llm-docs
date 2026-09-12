> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession/activate()](https://developer.apple.com/documentation/xpc/xpcsession/activate())

# activate()

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Activates a session so you can send messages.

## Declaration

```swift
func activate() throws
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Don’t call [activate()](activate%28%29.md) on a session that’s already active.

If you create an inactive session using the [inactive](initializationoptions/inactive.md) initialization option, you must activate the session before deinitialization. Deinitializing an inactive session causes the process to crash.

If activation fails, this method automatically cancels the session and throws a [XPCRichError](../xpcricherror.md) that describes the reason activation failed.

## See Also

### Managing the life cycle

- [setIncomingMessageHandler(\_:)](setincomingmessagehandler%28__%29-2ukdh.md): Sets a closure to receive incoming decodable messages for a session.
- [setIncomingMessageHandler(\_:)](setincomingmessagehandler%28__%29-5lu26.md): Sets a closure to receive incoming received messages for a session.
- [setIncomingMessageHandler(\_:)](setincomingmessagehandler%28__%29-75ou9.md): Sets a closure to receive incoming dictionary messages for a session.
- [cancel(reason:)](cancel%28reason_%29.md): Cancels a session, discarding any unsent messages.
- [setCancellationHandler(\_:)](setcancellationhandler%28__%29.md): Sets a closure the session calls when it’s canceled.
