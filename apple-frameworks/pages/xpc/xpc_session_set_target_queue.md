> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_session_set_target_queue](https://developer.apple.com/documentation/xpc/xpc_session_set_target_queue)

# xpc_session_set_target_queue

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets the target dispatch queue on an inactive session for processing messages.

## Declaration

```objectivec
extern void xpc_session_set_target_queue(xpc_session_t session, dispatch_queue_t target_queue);
```

## Parameters

- `session`: The session to set the dispatch queue for.
- `target_queue`: The dispatch queue where the session processes messages. The target queue can be a concurrent queue.

## See Also

### Creating a session

- [xpc_session_create_xpc_service](xpc_session_create_xpc_service.md): Establishes a connection to an XPC service with the name you specify.
- [xpc_session_create_mach_service](xpc_session_create_mach_service.md): Establishes a connection to a launch agent or launch daemon with the name you specify.
- [xpc_session_create_flags_t](xpc_session_create_flags_t-c.enum.md): Options that specify how to create inactive or privileged sessions.
- [xpc_session_copy_description](xpc_session_copy_description.md): Copies the description string of a session.
