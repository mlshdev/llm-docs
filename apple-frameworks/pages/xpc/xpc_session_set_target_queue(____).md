> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_session_set_target_queue(_:_:)](https://developer.apple.com/documentation/xpc/xpc_session_set_target_queue(_:_:))

# xpc_session_set_target_queue(\_:\_:)

**Framework:** XPC  
**Kind:** Function  
**Availability:** Mac Catalyst 16.0+ (deprecated in 17.0) · macOS 13.0+ (deprecated in 14.0)

## Declaration

```swift
func xpc_session_set_target_queue(_ session: any OS_xpc_object, _ target_queue: dispatch_queue_t?)
```

## See Also

### Creating a session

- [xpc_session_t](xpc_session_t-49tiv.md): Deprecated.
- [xpc_session_create_mach_service(\_:\_:\_:\_:)](xpc_session_create_mach_service%28________%29.md): Deprecated.
- [xpc_session_create_xpc_service(\_:\_:\_:\_:)](xpc_session_create_xpc_service%28________%29.md): Deprecated.
- [xpc_session_create_flags_t](xpc_session_create_flags_t-swift.struct.md): Deprecated.
- [xpc_session_copy_description(\_:)](xpc_session_copy_description%28__%29.md): Deprecated.
