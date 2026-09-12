> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_activate(_:)](https://developer.apple.com/documentation/xpc/xpc_connection_activate(_:))

# xpc_connection_activate(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Activates a new connection.

## Declaration

```swift
func xpc_connection_activate(_ connection: xpc_connection_t)
```

<a id="Discussion"></a>

## Discussion

Connections start in an inactive state, so you must call [xpc_connection_activate(\_:)](xpc_connection_activate%28__%29.md) on a connection before it will send or receive any messages.

Calling [xpc_connection_activate(\_:)](xpc_connection_activate%28__%29.md) on an active connection has no effect. Releasing the last reference on an inactive connection that was created with a call to one of the `xpc_connection_create` functions is undefined.

For backward compatibility reasons, [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md) on an inactive and not otherwise suspended XPC connection has the same effect as calling [xpc_connection_activate(\_:)](xpc_connection_activate%28__%29.md). For new code, using [xpc_connection_activate(\_:)](xpc_connection_activate%28__%29.md) is preferred.

## See Also

### Life cycle

- [xpc_main(\_:)](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
- [xpc_connection_suspend(\_:)](xpc_connection_suspend%28__%29.md): Suspends the connection so the event handler block doesn’t fire and the connection doesn’t attempt to send any messages it has in its queue.
- [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md): Resumes a suspended connection.
- [xpc_connection_cancel(\_:)](xpc_connection_cancel%28__%29.md): Cancels the connection and ensures that its event handler doesn’t fire again.
- [xpc_transaction_begin()](xpc_transaction_begin%28%29.md): Informs the XPC runtime when a transaction begins, indicating that the service isn’t idle.
- [xpc_transaction_end()](xpc_transaction_end%28%29.md): Informs the XPC runtime when a transaction ends.
- [xpc_connection_copy_invalidation_reason(\_:)](xpc_connection_copy_invalidation_reason%28__%29.md)

# xpc_connection_activate (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Activates a new connection.

## Declaration

```objectivec
extern void xpc_connection_activate(xpc_connection_t connection);
```

<a id="Discussion"></a>

## Discussion

Connections start in an inactive state, so you must call [xpc_connection_activate](xpc_connection_activate%28__%29.md) on a connection before it will send or receive any messages.

Calling [xpc_connection_activate](xpc_connection_activate%28__%29.md) on an active connection has no effect. Releasing the last reference on an inactive connection that was created with a call to one of the `xpc_connection_create` functions is undefined.

For backward compatibility reasons, [xpc_connection_resume](xpc_connection_resume%28__%29.md) on an inactive and not otherwise suspended XPC connection has the same effect as calling [xpc_connection_activate](xpc_connection_activate%28__%29.md). For new code, using [xpc_connection_activate](xpc_connection_activate%28__%29.md) is preferred.

## See Also

### Life cycle

- [xpc_main](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
- [xpc_connection_suspend](xpc_connection_suspend%28__%29.md): Suspends the connection so the event handler block doesn’t fire and the connection doesn’t attempt to send any messages it has in its queue.
- [xpc_connection_resume](xpc_connection_resume%28__%29.md): Resumes a suspended connection.
- [xpc_connection_cancel](xpc_connection_cancel%28__%29.md): Cancels the connection and ensures that its event handler doesn’t fire again.
- [xpc_transaction_begin](xpc_transaction_begin%28%29.md): Informs the XPC runtime when a transaction begins, indicating that the service isn’t idle.
- [xpc_transaction_end](xpc_transaction_end%28%29.md): Informs the XPC runtime when a transaction ends.
- [xpc_connection_copy_invalidation_reason](xpc_connection_copy_invalidation_reason%28__%29.md)
