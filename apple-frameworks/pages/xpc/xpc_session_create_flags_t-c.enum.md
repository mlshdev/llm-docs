> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_session_create_flags_t-c.enum](https://developer.apple.com/documentation/xpc/xpc_session_create_flags_t-c.enum)

# xpc_session_create_flags_t

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that specify how to create inactive or privileged sessions.

## Declaration

```objectivec
typedef enum { ... } xpc_session_create_flags_t;
```

## Topics

### Configuration options

- [XPC_SESSION_CREATE_NONE](xpc_session_create_flags_t-c.enum/xpc_session_create_none.md): Configures a new session with default settings.
- [XPC_SESSION_CREATE_INACTIVE](xpc_session_create_flags_t-c.enum/xpc_session_create_inactive.md): Configures a new session in an inactive state.
- [XPC_SESSION_CREATE_MACH_PRIVILEGED](xpc_session_create_flags_t-c.enum/xpc_session_create_mach_privileged.md): Indicates the session is connecting to a service in the privileged Mach bootstrap.

## See Also

### Creating a session

- [xpc_session_create_xpc_service](xpc_session_create_xpc_service.md): Establishes a connection to an XPC service with the name you specify.
- [xpc_session_create_mach_service](xpc_session_create_mach_service.md): Establishes a connection to a launch agent or launch daemon with the name you specify.
- [xpc_session_set_target_queue](xpc_session_set_target_queue.md): Sets the target dispatch queue on an inactive session for processing messages.
- [xpc_session_copy_description](xpc_session_copy_description.md): Copies the description string of a session.
