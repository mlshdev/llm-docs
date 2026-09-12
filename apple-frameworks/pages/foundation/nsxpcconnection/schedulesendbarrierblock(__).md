> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection/schedulesendbarrierblock(_:)](https://developer.apple.com/documentation/foundation/nsxpcconnection/schedulesendbarrierblock(_:))

# scheduleSendBarrierBlock(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Add a barrier block to execute on the connection.

## Declaration

```swift
func scheduleSendBarrierBlock(_ block: @escaping () -> Void)
```

## Parameters

- `block`: A block or closure to execute. This block takes no parameters and returns no value.

<a id="Discussion"></a>

## Discussion

This barrier block runs after any outstanding send commands complete. However, the remote process isn’t guaranteed to receive the sent messages by the time the block executes. If you need to ensure the remote process received a message, wait for a reply from the process.

## See Also

### Managing connection state

- [activate()](activate%28%29.md): Activates the connection.
- [resume()](resume%28%29.md): Starts or resumes handling of messages on a connection.
- [invalidate()](invalidate%28%29.md): Invalidates the connection.
- [suspend()](suspend%28%29.md): Suspends the connection.
- [interruptionHandler](interruptionhandler.md): An interruption handler that is called if the remote process exits or crashes.
- [invalidationHandler](invalidationhandler.md): An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.
- [current()](current%28%29.md): Returns the current connection, in the context of a call to a method on your exported object.

# scheduleSendBarrierBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Add a barrier block to execute on the connection.

## Declaration

```objectivec
- (void) scheduleSendBarrierBlock:(void (^)()) block;
```

## Parameters

- `block`: A block or closure to execute. This block takes no parameters and returns no value.

<a id="Discussion"></a>

## Discussion

This barrier block runs after any outstanding send commands complete. However, the remote process isn’t guaranteed to receive the sent messages by the time the block executes. If you need to ensure the remote process received a message, wait for a reply from the process.

## See Also

### Managing connection state

- [activate](activate%28%29.md): Activates the connection.
- [resume](resume%28%29.md): Starts or resumes handling of messages on a connection.
- [invalidate](invalidate%28%29.md): Invalidates the connection.
- [suspend](suspend%28%29.md): Suspends the connection.
- [interruptionHandler](interruptionhandler.md): An interruption handler that is called if the remote process exits or crashes.
- [invalidationHandler](invalidationhandler.md): An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.
- [currentConnection](current%28%29.md): Returns the current connection, in the context of a call to a method on your exported object.
