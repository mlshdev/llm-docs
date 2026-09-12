> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_listener_activate](https://developer.apple.com/documentation/xpc/xpc_listener_activate)

# xpc_listener_activate

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

Activates an inactive listener.

## Declaration

```objectivec
extern bool xpc_listener_activate(xpc_listener_t listener, xpc_rich_error_t*error_out);
```

## Parameters

- `listener`: The inactive listener to activate.
- `error_out`: If provided, a pointer that receives an error if activation fails.

<a id="return-value"></a>

## Return Value

`YES` if the listener was activated; otherwise `NO`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Don’t call [xpc_listener_activate](xpc_listener_activate.md) with a listener that’s already active.

If you create an inactive listener using the [XPC_LISTENER_CREATE_INACTIVE](xpc_listener_create_flags_t/xpc_listener_create_inactive.md) flag, be sure to activate it before releasing the last reference to the listener. Releasing the last reference to an inactive listener crashes.

If activation fails, the system automatically cancels the listener.

## See Also

### Managing the life cycle

- [xpc_listener_cancel](xpc_listener_cancel.md): Cancels a listener.
- [xpc_listener_reject_peer](xpc_listener_reject_peer.md): Rejects an incoming peer session request.
