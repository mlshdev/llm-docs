> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_transaction_end()](https://developer.apple.com/documentation/xpc/xpc_transaction_end())

# xpc_transaction_end() (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.7+

Informs the XPC runtime when a transaction ends.

## Declaration

```swift
func xpc_transaction_end()
```

<a id="Discussion"></a>

## Discussion

As described in [xpc_transaction_begin()](xpc_transaction_begin%28%29.md), this API may be used interchangeably with `vproc_transaction_end()`.

See the discussion for [xpc_transaction_begin()](xpc_transaction_begin%28%29.md) for details regarding the XPC runtime’s idle-exit policy.

## See Also

### Life cycle

- [xpc_main(\_:)](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
- [xpc_connection_activate(\_:)](xpc_connection_activate%28__%29.md): Activates a new connection.
- [xpc_connection_suspend(\_:)](xpc_connection_suspend%28__%29.md): Suspends the connection so the event handler block doesn’t fire and the connection doesn’t attempt to send any messages it has in its queue.
- [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md): Resumes a suspended connection.
- [xpc_connection_cancel(\_:)](xpc_connection_cancel%28__%29.md): Cancels the connection and ensures that its event handler doesn’t fire again.
- [xpc_transaction_begin()](xpc_transaction_begin%28%29.md): Informs the XPC runtime when a transaction begins, indicating that the service isn’t idle.
- [xpc_connection_copy_invalidation_reason(\_:)](xpc_connection_copy_invalidation_reason%28__%29.md)

# xpc_transaction_end (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.7+

Informs the XPC runtime when a transaction ends.

## Declaration

```objectivec
extern void xpc_transaction_end();
```

<a id="Discussion"></a>

## Discussion

As described in [xpc_transaction_begin](xpc_transaction_begin%28%29.md), this API may be used interchangeably with `vproc_transaction_end()`.

See the discussion for [xpc_transaction_begin](xpc_transaction_begin%28%29.md) for details regarding the XPC runtime’s idle-exit policy.

## See Also

### Life cycle

- [xpc_main](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
- [xpc_connection_activate](xpc_connection_activate%28__%29.md): Activates a new connection.
- [xpc_connection_suspend](xpc_connection_suspend%28__%29.md): Suspends the connection so the event handler block doesn’t fire and the connection doesn’t attempt to send any messages it has in its queue.
- [xpc_connection_resume](xpc_connection_resume%28__%29.md): Resumes a suspended connection.
- [xpc_connection_cancel](xpc_connection_cancel%28__%29.md): Cancels the connection and ensures that its event handler doesn’t fire again.
- [xpc_transaction_begin](xpc_transaction_begin%28%29.md): Informs the XPC runtime when a transaction begins, indicating that the service isn’t idle.
- [xpc_connection_copy_invalidation_reason](xpc_connection_copy_invalidation_reason%28__%29.md)
