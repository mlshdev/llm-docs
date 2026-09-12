> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_rich_error_can_retry(_:)](https://developer.apple.com/documentation/xpc/xpc_rich_error_can_retry(_:))

# xpc_rich_error_can_retry(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean that indicates whether you can retry the operation that experienced an error.

## Declaration

```swift
func xpc_rich_error_can_retry(_ error: xpc_rich_error_t) -> Bool
```

## Parameters

- `error`: An error object that describes a failure.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can try the operation again; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Sending messages

- [xpc_rich_error_t](xpc_rich_error_t.md): A type that describes an error, and whether you can retry the operation that experienced the error.
- [xpc_rich_error_copy_description(\_:)](xpc_rich_error_copy_description%28__%29.md): Copies the string description of an error.
- [xpc_session_send_message(\_:\_:)](xpc_session_send_message%28____%29.md): Deprecated.
- [xpc_session_send_message_with_reply_async(\_:\_:\_:)](xpc_session_send_message_with_reply_async%28______%29.md): Deprecated.
- [xpc_session_reply_handler_t](xpc_session_reply_handler_t-2hf7c.md): Deprecated.
- [xpc_session_send_message_with_reply_sync(\_:\_:\_:)](xpc_session_send_message_with_reply_sync%28______%29.md): Deprecated.

# xpc_rich_error_can_retry (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean that indicates whether you can retry the operation that experienced an error.

## Declaration

```objectivec
extern bool xpc_rich_error_can_retry(xpc_rich_error_t error);
```

## Parameters

- `error`: An error object that describes a failure.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can try the operation again; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Sending messages

- [xpc_session_send_message](xpc_session_send_message.md): Sends a message over the session to the destination service.
- [xpc_session_send_message_with_reply_async](xpc_session_send_message_with_reply_async.md): Sends a message asynchronously over the session to the destination service, calling a handler after receiving a reply.
- [xpc_session_reply_handler_t](xpc_session_reply_handler_t-7kfe4.md): A block that receives the reply to a message a session sends.
- [xpc_session_send_message_with_reply_sync](xpc_session_send_message_with_reply_sync.md): Sends a message over the session to the destination service, blocking the caller until receiving a reply.
- [xpc_rich_error_t](xpc_rich_error_t.md): A type that describes an error, and whether you can retry the operation that experienced the error.
- [xpc_rich_error_copy_description](xpc_rich_error_copy_description%28__%29.md): Copies the string description of an error.
