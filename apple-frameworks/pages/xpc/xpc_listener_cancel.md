> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_listener_cancel](https://developer.apple.com/documentation/xpc/xpc_listener_cancel)

# xpc_listener_cancel

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

Cancels a listener.

## Declaration

```objectivec
extern void xpc_listener_cancel(xpc_listener_t listener);
```

## Parameters

- `listener`: The listener to cancel.

<a id="Discussion"></a>

## Discussion

Typically you don’t need to explicitly cancel a listener. When the server process exits, the system automatically cancels the listener. In rare circumstances, such as part of a testing infrastructure, you may want to cancel a listener to ensure it doesn’t receive any new messages. Be aware that canceling a listener causes peers attempting to connect to the service to hang.

## See Also

### Managing the life cycle

- [xpc_listener_activate](xpc_listener_activate.md): Activates an inactive listener.
- [xpc_listener_reject_peer](xpc_listener_reject_peer.md): Rejects an incoming peer session request.
