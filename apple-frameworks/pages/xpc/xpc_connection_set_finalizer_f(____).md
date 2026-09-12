> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_set_finalizer_f(_:_:)](https://developer.apple.com/documentation/xpc/xpc_connection_set_finalizer_f(_:_:))

# xpc_connection_set_finalizer_f(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the finalizer for the connection.

## Declaration

```swift
func xpc_connection_set_finalizer_f(_ connection: xpc_connection_t, _ finalizer: xpc_finalizer_t?)
```

## Parameters

- `connection`: The connection on which to set the finalizer.
- `finalizer`: The function that will be invoked when the connection’s retain count has dropped to zero and is being torn down.

<a id="Discussion"></a>

## Discussion

For many uses of context objects, this API allows for a convenient shorthand for freeing them. For example, for a context object allocated with `malloc(3)`:

```swift
xpc_connection_set_finalizer_f(object, free);
```

## See Also

### Context

- [xpc_connection_set_context(\_:\_:)](xpc_connection_set_context%28____%29.md): Sets a context on the connection.
- [xpc_connection_get_context(\_:)](xpc_connection_get_context%28__%29.md): Returns the context for the connection.
- [xpc_finalizer_t](xpc_finalizer_t.md): A function to invoke when tearing down a connection and freeing its context.

# xpc_connection_set_finalizer_f (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the finalizer for the connection.

## Declaration

```objectivec
extern void xpc_connection_set_finalizer_f(xpc_connection_t connection, xpc_finalizer_t finalizer);
```

## Parameters

- `connection`: The connection on which to set the finalizer.
- `finalizer`: The function that will be invoked when the connection’s retain count has dropped to zero and is being torn down.

<a id="Discussion"></a>

## Discussion

For many uses of context objects, this API allows for a convenient shorthand for freeing them. For example, for a context object allocated with `malloc(3)`:

```swift
xpc_connection_set_finalizer_f(object, free);
```

## See Also

### Context

- [xpc_connection_set_context](xpc_connection_set_context%28____%29.md): Sets a context on the connection.
- [xpc_connection_get_context](xpc_connection_get_context%28__%29.md): Returns the context for the connection.
- [xpc_finalizer_t](xpc_finalizer_t.md): A function to invoke when tearing down a connection and freeing its context.
