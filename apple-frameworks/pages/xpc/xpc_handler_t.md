> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_handler_t](https://developer.apple.com/documentation/xpc/xpc_handler_t)

# xpc_handler_t (Swift)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The type of block that the XPC connection APIs accept.

## Declaration

```swift
typealias xpc_handler_t = (xpc_object_t) -> Void
```

<a id="Discussion"></a>

## Discussion

You aren’t responsible for releasing the event object.

## See Also

### Event handling

- [xpc_connection_set_event_handler(\_:\_:)](xpc_connection_set_event_handler%28____%29.md): Sets the event handler block for the connection.
- [xpc_connection_handler_t](xpc_connection_handler_t.md): The type of the function to invoke for a bundled XPC service when there’s a new connection on the service.

# xpc_handler_t (Objective-C)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The type of block that the XPC connection APIs accept.

## Declaration

```objectivec
typedef void (^)(NSObject<OS_xpc_object> *) xpc_handler_t;
```

<a id="Discussion"></a>

## Discussion

You aren’t responsible for releasing the event object.

## See Also

### Event handling

- [xpc_connection_set_event_handler](xpc_connection_set_event_handler%28____%29.md): Sets the event handler block for the connection.
- [xpc_connection_handler_t](xpc_connection_handler_t.md): The type of the function to invoke for a bundled XPC service when there’s a new connection on the service.
