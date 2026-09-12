> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_session_cancel_handler_t-65b6f](https://developer.apple.com/documentation/xpc/xpc_session_cancel_handler_t-65b6f)

# xpc_session_cancel_handler_t

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 16.0+ (deprecated in 17.0) · macOS 13.0+ (deprecated in 14.0)

> See XPCSession initializer

## Declaration

```swift
typealias xpc_session_cancel_handler_t = (xpc_rich_error_t) -> Void
```

## See Also

### Managing life cycle

- [xpc_session_activate(\_:\_:)](xpc_session_activate%28____%29.md): Deprecated.
- [xpc_session_cancel(\_:)](xpc_session_cancel%28__%29.md): Deprecated.
- [xpc_session_set_cancel_handler(\_:\_:)](xpc_session_set_cancel_handler%28____%29.md): Deprecated.
- [xpc_session_set_incoming_message_handler(\_:\_:)](xpc_session_set_incoming_message_handler%28____%29.md): Deprecated. Sets a handler to receive incoming messages for a session.
- [xpc_session_incoming_message_handler_t](xpc_session_incoming_message_handler_t-elj.md): Deprecated.
