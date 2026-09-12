> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_suspend(_:)](https://developer.apple.com/documentation/xpc/xpc_connection_suspend(_:))

# xpc_connection_suspend(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Suspends the connection so the event handler block doesn’t fire and the connection doesn’t attempt to send any messages it has in its queue.

## Declaration

```swift
func xpc_connection_suspend(_ connection: xpc_connection_t)
```

## Parameters

- `connection`: The connection object which is to be manipulated.

<a id="Discussion"></a>

## Discussion

All calls to [xpc_connection_suspend(\_:)](xpc_connection_suspend%28__%29.md) must be balanced with calls to [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md) before releasing the last reference to the connection.

Suspension is asynchronous and non-preemptive, and therefore this method will not interrupt the execution of an already-running event handler block. If the event handler is executing at the time of this call, it will finish, and then the connection will be suspended before the next scheduled invocation of the event handler. The XPC runtime guarantees this non-preemptiveness even for concurrent target queues.

Connection event handlers are non-reentrant, so it is safe to call [xpc_connection_suspend(\_:)](xpc_connection_suspend%28__%29.md) from within the event handler block.

## See Also

### Life cycle

- [xpc_main(\_:)](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
- [xpc_connection_activate(\_:)](xpc_connection_activate%28__%29.md): Activates a new connection.
- [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md): Resumes a suspended connection.
- [xpc_connection_cancel(\_:)](xpc_connection_cancel%28__%29.md): Cancels the connection and ensures that its event handler doesn’t fire again.
- [xpc_transaction_begin()](xpc_transaction_begin%28%29.md): Informs the XPC runtime when a transaction begins, indicating that the service isn’t idle.
- [xpc_transaction_end()](xpc_transaction_end%28%29.md): Informs the XPC runtime when a transaction ends.
- [xpc_connection_copy_invalidation_reason(\_:)](xpc_connection_copy_invalidation_reason%28__%29.md)

# xpc_connection_suspend (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Suspends the connection so the event handler block doesn’t fire and the connection doesn’t attempt to send any messages it has in its queue.

## Declaration

```objectivec
extern void xpc_connection_suspend(xpc_connection_t connection);
```

## Parameters

- `connection`: The connection object which is to be manipulated.

<a id="Discussion"></a>

## Discussion

All calls to [xpc_connection_suspend](xpc_connection_suspend%28__%29.md) must be balanced with calls to [xpc_connection_resume](xpc_connection_resume%28__%29.md) before releasing the last reference to the connection.

Suspension is asynchronous and non-preemptive, and therefore this method will not interrupt the execution of an already-running event handler block. If the event handler is executing at the time of this call, it will finish, and then the connection will be suspended before the next scheduled invocation of the event handler. The XPC runtime guarantees this non-preemptiveness even for concurrent target queues.

Connection event handlers are non-reentrant, so it is safe to call [xpc_connection_suspend](xpc_connection_suspend%28__%29.md) from within the event handler block.

## See Also

### Life cycle

- [xpc_main](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
- [xpc_connection_activate](xpc_connection_activate%28__%29.md): Activates a new connection.
- [xpc_connection_resume](xpc_connection_resume%28__%29.md): Resumes a suspended connection.
- [xpc_connection_cancel](xpc_connection_cancel%28__%29.md): Cancels the connection and ensures that its event handler doesn’t fire again.
- [xpc_transaction_begin](xpc_transaction_begin%28%29.md): Informs the XPC runtime when a transaction begins, indicating that the service isn’t idle.
- [xpc_transaction_end](xpc_transaction_end%28%29.md): Informs the XPC runtime when a transaction ends.
- [xpc_connection_copy_invalidation_reason](xpc_connection_copy_invalidation_reason%28__%29.md)
