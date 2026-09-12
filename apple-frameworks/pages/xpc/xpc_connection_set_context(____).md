> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_set_context(_:_:)](https://developer.apple.com/documentation/xpc/xpc_connection_set_context(_:_:))

# xpc_connection_set_context(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets a context on the connection.

## Declaration

```swift
func xpc_connection_set_context(_ connection: xpc_connection_t, _ context: UnsafeMutableRawPointer?)
```

## Parameters

- `connection`: The connection which is to be manipulated.
- `context`: The context to associate with the connection.

<a id="Discussion"></a>

## Discussion

If you must manage the memory of the context object, you must set a finalizer to dispose of it. If this method is called on a connection which already has context associated with it, the finalizer will NOT be invoked. The finalizer is only invoked when the connection is being deallocated.

It is recommended that, instead of changing the actual context pointer associated with the object, you instead change the state of the context object itself.

## See Also

### Context

- [xpc_connection_get_context(\_:)](xpc_connection_get_context%28__%29.md): Returns the context for the connection.
- [xpc_connection_set_finalizer_f(\_:\_:)](xpc_connection_set_finalizer_f%28____%29.md): Sets the finalizer for the connection.
- [xpc_finalizer_t](xpc_finalizer_t.md): A function to invoke when tearing down a connection and freeing its context.

# xpc_connection_set_context (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets a context on the connection.

## Declaration

```objectivec
extern void xpc_connection_set_context(xpc_connection_t connection, void *context);
```

## Parameters

- `connection`: The connection which is to be manipulated.
- `context`: The context to associate with the connection.

<a id="Discussion"></a>

## Discussion

If you must manage the memory of the context object, you must set a finalizer to dispose of it. If this method is called on a connection which already has context associated with it, the finalizer will NOT be invoked. The finalizer is only invoked when the connection is being deallocated.

It is recommended that, instead of changing the actual context pointer associated with the object, you instead change the state of the context object itself.

## See Also

### Context

- [xpc_connection_get_context](xpc_connection_get_context%28__%29.md): Returns the context for the connection.
- [xpc_connection_set_finalizer_f](xpc_connection_set_finalizer_f%28____%29.md): Sets the finalizer for the connection.
- [xpc_finalizer_t](xpc_finalizer_t.md): A function to invoke when tearing down a connection and freeing its context.
