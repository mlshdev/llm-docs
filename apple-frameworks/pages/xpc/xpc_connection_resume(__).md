> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_resume(_:)](https://developer.apple.com/documentation/xpc/xpc_connection_resume(_:))

# xpc_connection_resume(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Resumes a suspended connection.

## Declaration

```swift
func xpc_connection_resume(_ connection: xpc_connection_t)
```

## Parameters

- `connection`: The connection object which is to be manipulated.

<a id="Discussion"></a>

## Discussion

In order for a connection to become live, every call to [xpc_connection_suspend(\_:)](xpc_connection_suspend%28__%29.md) must be balanced with a call to [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md) after the initial call to [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md). After the initial resume of the connection, calling [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md) more times than [xpc_connection_suspend(\_:)](xpc_connection_suspend%28__%29.md) has been called is considered an error.

## See Also

### Life cycle

- [xpc_main(\_:)](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
- [xpc_connection_activate(\_:)](xpc_connection_activate%28__%29.md): Activates a new connection.
- [xpc_connection_suspend(\_:)](xpc_connection_suspend%28__%29.md): Suspends the connection so the event handler block doesn’t fire and the connection doesn’t attempt to send any messages it has in its queue.
- [xpc_connection_cancel(\_:)](xpc_connection_cancel%28__%29.md): Cancels the connection and ensures that its event handler doesn’t fire again.
- [xpc_transaction_begin()](xpc_transaction_begin%28%29.md): Informs the XPC runtime when a transaction begins, indicating that the service isn’t idle.
- [xpc_transaction_end()](xpc_transaction_end%28%29.md): Informs the XPC runtime when a transaction ends.
- [xpc_connection_copy_invalidation_reason(\_:)](xpc_connection_copy_invalidation_reason%28__%29.md)

# xpc_connection_resume (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Resumes a suspended connection.

## Declaration

```objectivec
extern void xpc_connection_resume(xpc_connection_t connection);
```

## Parameters

- `connection`: The connection object which is to be manipulated.

<a id="Discussion"></a>

## Discussion

In order for a connection to become live, every call to [xpc_connection_suspend](xpc_connection_suspend%28__%29.md) must be balanced with a call to [xpc_connection_resume](xpc_connection_resume%28__%29.md) after the initial call to [xpc_connection_resume](xpc_connection_resume%28__%29.md). After the initial resume of the connection, calling [xpc_connection_resume](xpc_connection_resume%28__%29.md) more times than [xpc_connection_suspend](xpc_connection_suspend%28__%29.md) has been called is considered an error.

## See Also

### Life cycle

- [xpc_main](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
- [xpc_connection_activate](xpc_connection_activate%28__%29.md): Activates a new connection.
- [xpc_connection_suspend](xpc_connection_suspend%28__%29.md): Suspends the connection so the event handler block doesn’t fire and the connection doesn’t attempt to send any messages it has in its queue.
- [xpc_connection_cancel](xpc_connection_cancel%28__%29.md): Cancels the connection and ensures that its event handler doesn’t fire again.
- [xpc_transaction_begin](xpc_transaction_begin%28%29.md): Informs the XPC runtime when a transaction begins, indicating that the service isn’t idle.
- [xpc_transaction_end](xpc_transaction_end%28%29.md): Informs the XPC runtime when a transaction ends.
- [xpc_connection_copy_invalidation_reason](xpc_connection_copy_invalidation_reason%28__%29.md)
