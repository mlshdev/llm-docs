> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection/interruptionhandler](https://developer.apple.com/documentation/foundation/nsxpcconnection/interruptionhandler)

# interruptionHandler (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interruption handler that is called if the remote process exits or crashes.

## Declaration

```swift
var interruptionHandler: (() -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

It may be possible to re-establish the connection by simply sending another message. The handler is invoked on the same queue as reply messages and other handlers, and it is always executed after any other messages or reply block handlers (except for the invalidation handler).

## See Also

### Managing connection state

- [activate()](activate%28%29.md): Activates the connection.
- [resume()](resume%28%29.md): Starts or resumes handling of messages on a connection.
- [invalidate()](invalidate%28%29.md): Invalidates the connection.
- [suspend()](suspend%28%29.md): Suspends the connection.
- [invalidationHandler](invalidationhandler.md): An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.
- [current()](current%28%29.md): Returns the current connection, in the context of a call to a method on your exported object.
- [scheduleSendBarrierBlock(\_:)](schedulesendbarrierblock%28__%29.md): Add a barrier block to execute on the connection.

# interruptionHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interruption handler that is called if the remote process exits or crashes.

## Declaration

```objectivec
@property (copy, nullable) void (^interruptionHandler)();
```

<a id="Discussion"></a>

## Discussion

It may be possible to re-establish the connection by simply sending another message. The handler is invoked on the same queue as reply messages and other handlers, and it is always executed after any other messages or reply block handlers (except for the invalidation handler).

## See Also

### Managing connection state

- [activate](activate%28%29.md): Activates the connection.
- [resume](resume%28%29.md): Starts or resumes handling of messages on a connection.
- [invalidate](invalidate%28%29.md): Invalidates the connection.
- [suspend](suspend%28%29.md): Suspends the connection.
- [invalidationHandler](invalidationhandler.md): An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.
- [currentConnection](current%28%29.md): Returns the current connection, in the context of a call to a method on your exported object.
- [scheduleSendBarrierBlock:](schedulesendbarrierblock%28__%29.md): Add a barrier block to execute on the connection.
