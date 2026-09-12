> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_get_context(_:)](https://developer.apple.com/documentation/xpc/xpc_connection_get_context(_:))

# xpc_connection_get_context(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the context for the connection.

## Declaration

```swift
func xpc_connection_get_context(_ connection: xpc_connection_t) -> UnsafeMutableRawPointer?
```

## Parameters

- `connection`: The connection which is to be examined.

<a id="return-value"></a>

## Return Value

The context associated with the connection. `NULL` if there has been no context associated with the object.

## See Also

### Context

- [xpc_connection_set_context(\_:\_:)](xpc_connection_set_context%28____%29.md): Sets a context on the connection.
- [xpc_connection_set_finalizer_f(\_:\_:)](xpc_connection_set_finalizer_f%28____%29.md): Sets the finalizer for the connection.
- [xpc_finalizer_t](xpc_finalizer_t.md): A function to invoke when tearing down a connection and freeing its context.

# xpc_connection_get_context (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the context for the connection.

## Declaration

```objectivec
extern void *xpc_connection_get_context(xpc_connection_t connection);
```

## Parameters

- `connection`: The connection which is to be examined.

<a id="return-value"></a>

## Return Value

The context associated with the connection. `NULL` if there has been no context associated with the object.

## See Also

### Context

- [xpc_connection_set_context](xpc_connection_set_context%28____%29.md): Sets a context on the connection.
- [xpc_connection_set_finalizer_f](xpc_connection_set_finalizer_f%28____%29.md): Sets the finalizer for the connection.
- [xpc_finalizer_t](xpc_finalizer_t.md): A function to invoke when tearing down a connection and freeing its context.
