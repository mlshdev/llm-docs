> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_session_copy_description](https://developer.apple.com/documentation/xpc/xpc_session_copy_description)

# xpc_session_copy_description

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Copies the description string of a session.

## Declaration

```objectivec
extern char *xpc_session_copy_description(xpc_session_t session);
```

## Parameters

- `session`: The session to get the description from.

<a id="return-value"></a>

## Return Value

A string that describes the session.

<a id="Discussion"></a>

## Discussion

To dispose of the string when it’s no longer needed, call `free()`.

## See Also

### Creating a session

- [xpc_session_create_xpc_service](xpc_session_create_xpc_service.md): Establishes a connection to an XPC service with the name you specify.
- [xpc_session_create_mach_service](xpc_session_create_mach_service.md): Establishes a connection to a launch agent or launch daemon with the name you specify.
- [xpc_session_create_flags_t](xpc_session_create_flags_t-c.enum.md): Options that specify how to create inactive or privileged sessions.
- [xpc_session_set_target_queue](xpc_session_set_target_queue.md): Sets the target dispatch queue on an inactive session for processing messages.
