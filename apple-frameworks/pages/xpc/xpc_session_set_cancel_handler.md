> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_session_set_cancel_handler](https://developer.apple.com/documentation/xpc/xpc_session_set_cancel_handler)

# xpc_session_set_cancel_handler

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets a handler the session calls when it’s canceled.

## Declaration

```objectivec
extern void xpc_session_set_cancel_handler(xpc_session_t session, xpc_session_cancel_handler_t cancel_handler);
```

## Parameters

- `session`: The session to set the handler on.
- `cancel_handler`: The block the session calls when it’s canceled.

<a id="Discussion"></a>

## Discussion

The `session` you pass to this method must be inactive. To create an inactive session, use the [XPC_SESSION_CREATE_INACTIVE](xpc_session_create_flags_t-c.enum/xpc_session_create_inactive.md) flag when you call [xpc_session_create_xpc_service](xpc_session_create_xpc_service.md) or [xpc_session_create_mach_service](xpc_session_create_mach_service.md). If the session already has a cancellation handler, this method replaces it.

## See Also

### Managing life cycle

- [xpc_session_activate](xpc_session_activate.md): Activates a session so you can send messages.
- [xpc_session_set_incoming_message_handler](xpc_session_set_incoming_message_handler.md): Sets a handler to receive incoming messages for a session.
- [xpc_session_incoming_message_handler_t](xpc_session_incoming_message_handler_t-3eb2a.md): A closure that receives an incoming message for a session.
- [xpc_session_cancel](xpc_session_cancel.md): Cancels a session, discarding any unsent messages.
- [xpc_session_cancel_handler_t](xpc_session_cancel_handler_t-7y2lv.md): A block the session calls when it’s canceled.
