> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_listener_copy_description](https://developer.apple.com/documentation/xpc/xpc_listener_copy_description)

# xpc_listener_copy_description

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

Copies the description string of a listener.

## Declaration

```objectivec
extern char *xpc_listener_copy_description(xpc_listener_t listener);
```

## Parameters

- `listener`: The listener to get the description from.

<a id="return-value"></a>

## Return Value

A string that describes the listener.

<a id="Discussion"></a>

## Discussion

To dispose of the string when it’s no longer needed, call `free()`.

## See Also

### Creating a listener

- [xpc_listener_create](xpc_listener_create.md): Creates the server side of an XPC service using the specified service name.
- [xpc_listener_create_flags_t](xpc_listener_create_flags_t.md): Options that control the listener’s configuration.
- [xpc_listener_incoming_session_handler_t](xpc_listener_incoming_session_handler_t.md): A block that receives an incoming peer session request from a client.
