> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection/resume()](https://developer.apple.com/documentation/foundation/nsxpcconnection/resume())

# resume() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts or resumes handling of messages on a connection.

## Declaration

```swift
func resume()
```

<a id="Discussion"></a>

## Discussion

All connections start suspended. You must resume them before they start processing received messages or sending messages through the [remoteObjectProxy()](../nsxpcproxycreating/remoteobjectproxy%28%29.md) object.

## See Also

### Managing connection state

- [activate()](activate%28%29.md): Activates the connection.
- [invalidate()](invalidate%28%29.md): Invalidates the connection.
- [suspend()](suspend%28%29.md): Suspends the connection.
- [interruptionHandler](interruptionhandler.md): An interruption handler that is called if the remote process exits or crashes.
- [invalidationHandler](invalidationhandler.md): An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.
- [current()](current%28%29.md): Returns the current connection, in the context of a call to a method on your exported object.
- [scheduleSendBarrierBlock(\_:)](schedulesendbarrierblock%28__%29.md): Add a barrier block to execute on the connection.

# resume (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts or resumes handling of messages on a connection.

## Declaration

```objectivec
- (void) resume;
```

<a id="Discussion"></a>

## Discussion

All connections start suspended. You must resume them before they start processing received messages or sending messages through the [remoteObjectProxy](../nsxpcproxycreating/remoteobjectproxy%28%29.md) object.

## See Also

### Managing connection state

- [activate](activate%28%29.md): Activates the connection.
- [invalidate](invalidate%28%29.md): Invalidates the connection.
- [suspend](suspend%28%29.md): Suspends the connection.
- [interruptionHandler](interruptionhandler.md): An interruption handler that is called if the remote process exits or crashes.
- [invalidationHandler](invalidationhandler.md): An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.
- [currentConnection](current%28%29.md): Returns the current connection, in the context of a call to a method on your exported object.
- [scheduleSendBarrierBlock:](schedulesendbarrierblock%28__%29.md): Add a barrier block to execute on the connection.
