> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpc_listener_reject_peer

# xpc_listener_reject_peer

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

Rejects an incoming peer session request.

## Declaration

```objectivec
extern void xpc_listener_reject_peer(xpc_session_t peer, const char *reason);
```

## Parameters

- `peer`: The peer session request attempting to connect to the listener. This must be a session received in [xpc_listener_incoming_session_handler_t](xpc_listener_incoming_session_handler_t.md).
- `reason`: A description of why the listener rejected the peer session request.

<a id="Discussion"></a>

## Discussion

This function calls [xpc_session_cancel](xpc_session_cancel.md) with the peer session, and you can’t use the session after rejecting it.

## See Also

### Managing the life cycle

- [xpc_listener_activate](xpc_listener_activate.md): Activates an inactive listener.
- [xpc_listener_cancel](xpc_listener_cancel.md): Cancels a listener.
