> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_session_send_message_with_reply_sync(_:_:_:)](https://developer.apple.com/documentation/xpc/xpc_session_send_message_with_reply_sync(_:_:_:))

# xpc_session_send_message_with_reply_sync(\_:\_:\_:)

**Framework:** XPC  
**Kind:** Function  
**Availability:** Mac Catalyst 16.0+ (deprecated in 17.0) · macOS 13.0+ (deprecated in 14.0)

## Declaration

```swift
func xpc_session_send_message_with_reply_sync(_ session: any OS_xpc_object, _ message: xpc_object_t, _ error_out: AutoreleasingUnsafeMutablePointer<xpc_rich_error_t?>?) -> xpc_object_t?
```

## See Also

### Sending messages

- [xpc_rich_error_t](xpc_rich_error_t.md): A type that describes an error, and whether you can retry the operation that experienced the error.
- [xpc_rich_error_can_retry(\_:)](xpc_rich_error_can_retry%28__%29.md): Returns a Boolean that indicates whether you can retry the operation that experienced an error.
- [xpc_rich_error_copy_description(\_:)](xpc_rich_error_copy_description%28__%29.md): Copies the string description of an error.
- [xpc_session_send_message(\_:\_:)](xpc_session_send_message%28____%29.md): Deprecated.
- [xpc_session_send_message_with_reply_async(\_:\_:\_:)](xpc_session_send_message_with_reply_async%28______%29.md): Deprecated.
- [xpc_session_reply_handler_t](xpc_session_reply_handler_t-2hf7c.md): Deprecated.
