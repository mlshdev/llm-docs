> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_finalizer_t](https://developer.apple.com/documentation/xpc/xpc_finalizer_t)

# xpc_finalizer_t (Swift)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A function to invoke when tearing down a connection and freeing its context.

## Declaration

```swift
typealias xpc_finalizer_t = (UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `value`: The context object that is to be disposed of.

<a id="Discussion"></a>

## Discussion

It is not safe to reference the connection from within this function.

## See Also

### Context

- [xpc_connection_set_context(\_:\_:)](xpc_connection_set_context%28____%29.md): Sets a context on the connection.
- [xpc_connection_get_context(\_:)](xpc_connection_get_context%28__%29.md): Returns the context for the connection.
- [xpc_connection_set_finalizer_f(\_:\_:)](xpc_connection_set_finalizer_f%28____%29.md): Sets the finalizer for the connection.

# xpc_finalizer_t (Objective-C)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A function to invoke when tearing down a connection and freeing its context.

## Declaration

```objectivec
typedef void (*)(void *) xpc_finalizer_t;
```

## Parameters

- `value`: The context object that is to be disposed of.

<a id="Discussion"></a>

## Discussion

It is not safe to reference the connection from within this function.

## See Also

### Context

- [xpc_connection_set_context](xpc_connection_set_context%28____%29.md): Sets a context on the connection.
- [xpc_connection_get_context](xpc_connection_get_context%28__%29.md): Returns the context for the connection.
- [xpc_connection_set_finalizer_f](xpc_connection_set_finalizer_f%28____%29.md): Sets the finalizer for the connection.
