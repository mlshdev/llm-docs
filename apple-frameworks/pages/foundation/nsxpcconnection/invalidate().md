> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection/invalidate()](https://developer.apple.com/documentation/foundation/nsxpcconnection/invalidate())

# invalidate() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invalidates the connection.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

When you call this method, all outstanding reply blocks, error handling blocks, and invalidation blocks are called on the message handling queue. The connection must be invalidated before it is deallocated. After a connection is invalidated, no more messages may be sent or received.

## See Also

### Managing connection state

- [activate()](activate%28%29.md): Activates the connection.
- [resume()](resume%28%29.md): Starts or resumes handling of messages on a connection.
- [suspend()](suspend%28%29.md): Suspends the connection.
- [interruptionHandler](interruptionhandler.md): An interruption handler that is called if the remote process exits or crashes.
- [invalidationHandler](invalidationhandler.md): An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.
- [current()](current%28%29.md): Returns the current connection, in the context of a call to a method on your exported object.
- [scheduleSendBarrierBlock(\_:)](schedulesendbarrierblock%28__%29.md): Add a barrier block to execute on the connection.

# invalidate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invalidates the connection.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="Discussion"></a>

## Discussion

When you call this method, all outstanding reply blocks, error handling blocks, and invalidation blocks are called on the message handling queue. The connection must be invalidated before it is deallocated. After a connection is invalidated, no more messages may be sent or received.

## See Also

### Managing connection state

- [activate](activate%28%29.md): Activates the connection.
- [resume](resume%28%29.md): Starts or resumes handling of messages on a connection.
- [suspend](suspend%28%29.md): Suspends the connection.
- [interruptionHandler](interruptionhandler.md): An interruption handler that is called if the remote process exits or crashes.
- [invalidationHandler](invalidationhandler.md): An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.
- [currentConnection](current%28%29.md): Returns the current connection, in the context of a call to a method on your exported object.
- [scheduleSendBarrierBlock:](schedulesendbarrierblock%28__%29.md): Add a barrier block to execute on the connection.
