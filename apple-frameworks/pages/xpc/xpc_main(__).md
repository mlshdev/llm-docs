> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_main(_:)](https://developer.apple.com/documentation/xpc/xpc_main(_:))

# xpc_main(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** Mac Catalyst 5.0+ · macOS 10.7+

Starts listening for incoming connections and processes them with the specified event handler.

## Declaration

```swift
func xpc_main(_ handler: xpc_connection_handler_t) -> Never
```

## Parameters

- `handler`: The handler to accept new connections with.

<a id="Discussion"></a>

## Discussion

This is the springboard into the XPC service runtime. This function sets up your service bundle’s listener connection and manages it automatically. After this initial setup, this function calls [dispatchMain()](../dispatch/dispatchmain%28%29.md). You may override this behavior by setting the [RunLoopType](../bundleresources/information-property-list/xpcservice/runlooptype.md) key in your XPC service bundle’s `Info.plist` under the `XPCService` dictionary.

## See Also

### Life cycle

- [xpc_connection_activate(\_:)](xpc_connection_activate%28__%29.md): Activates a new connection.
- [xpc_connection_suspend(\_:)](xpc_connection_suspend%28__%29.md): Suspends the connection so the event handler block doesn’t fire and the connection doesn’t attempt to send any messages it has in its queue.
- [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md): Resumes a suspended connection.
- [xpc_connection_cancel(\_:)](xpc_connection_cancel%28__%29.md): Cancels the connection and ensures that its event handler doesn’t fire again.
- [xpc_transaction_begin()](xpc_transaction_begin%28%29.md): Informs the XPC runtime when a transaction begins, indicating that the service isn’t idle.
- [xpc_transaction_end()](xpc_transaction_end%28%29.md): Informs the XPC runtime when a transaction ends.
- [xpc_connection_copy_invalidation_reason(\_:)](xpc_connection_copy_invalidation_reason%28__%29.md)

# xpc_main (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** Mac Catalyst 5.0+ · macOS 10.7+

Starts listening for incoming connections and processes them with the specified event handler.

## Declaration

```objectivec
extern void xpc_main(xpc_connection_handler_t handler);
```

## Parameters

- `handler`: The handler to accept new connections with.

<a id="Discussion"></a>

## Discussion

This is the springboard into the XPC service runtime. This function sets up your service bundle’s listener connection and manages it automatically. After this initial setup, this function calls [dispatch_main](../dispatch/dispatchmain%28%29.md). You may override this behavior by setting the [RunLoopType](../bundleresources/information-property-list/xpcservice/runlooptype.md) key in your XPC service bundle’s `Info.plist` under the `XPCService` dictionary.

## See Also

### Life cycle

- [xpc_connection_activate](xpc_connection_activate%28__%29.md): Activates a new connection.
- [xpc_connection_suspend](xpc_connection_suspend%28__%29.md): Suspends the connection so the event handler block doesn’t fire and the connection doesn’t attempt to send any messages it has in its queue.
- [xpc_connection_resume](xpc_connection_resume%28__%29.md): Resumes a suspended connection.
- [xpc_connection_cancel](xpc_connection_cancel%28__%29.md): Cancels the connection and ensures that its event handler doesn’t fire again.
- [xpc_transaction_begin](xpc_transaction_begin%28%29.md): Informs the XPC runtime when a transaction begins, indicating that the service isn’t idle.
- [xpc_transaction_end](xpc_transaction_end%28%29.md): Informs the XPC runtime when a transaction ends.
- [xpc_connection_copy_invalidation_reason](xpc_connection_copy_invalidation_reason%28__%29.md)
