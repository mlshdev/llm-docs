> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection/invalidationhandler](https://developer.apple.com/documentation/foundation/nsxpcconnection/invalidationhandler)

# invalidationHandler (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.

## Declaration

```swift
var invalidationHandler: (() -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

This handler is invoked on the same queue as reply messages and other handlers, and is always executed last (after the interruption handler, if required). You may not send messages over the connection from within an invalidation handler block.

## See Also

### Managing connection state

- [activate()](activate%28%29.md): Activates the connection.
- [resume()](resume%28%29.md): Starts or resumes handling of messages on a connection.
- [invalidate()](invalidate%28%29.md): Invalidates the connection.
- [suspend()](suspend%28%29.md): Suspends the connection.
- [interruptionHandler](interruptionhandler.md): An interruption handler that is called if the remote process exits or crashes.
- [current()](current%28%29.md): Returns the current connection, in the context of a call to a method on your exported object.
- [scheduleSendBarrierBlock(\_:)](schedulesendbarrierblock%28__%29.md): Add a barrier block to execute on the connection.

# invalidationHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.

## Declaration

```objectivec
@property (copy, nullable) void (^invalidationHandler)();
```

<a id="Discussion"></a>

## Discussion

This handler is invoked on the same queue as reply messages and other handlers, and is always executed last (after the interruption handler, if required). You may not send messages over the connection from within an invalidation handler block.

## See Also

### Managing connection state

- [activate](activate%28%29.md): Activates the connection.
- [resume](resume%28%29.md): Starts or resumes handling of messages on a connection.
- [invalidate](invalidate%28%29.md): Invalidates the connection.
- [suspend](suspend%28%29.md): Suspends the connection.
- [interruptionHandler](interruptionhandler.md): An interruption handler that is called if the remote process exits or crashes.
- [currentConnection](current%28%29.md): Returns the current connection, in the context of a call to a method on your exported object.
- [scheduleSendBarrierBlock:](schedulesendbarrierblock%28__%29.md): Add a barrier block to execute on the connection.
