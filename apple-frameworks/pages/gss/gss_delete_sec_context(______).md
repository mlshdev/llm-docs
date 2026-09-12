> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_delete_sec_context(_:_:_:)](https://developer.apple.com/documentation/gss/gss_delete_sec_context(_:_:_:))

# gss_delete_sec_context(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Deletes a security context.

## Declaration

```swift
func gss_delete_sec_context(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: UnsafeMutablePointer<gss_ctx_id_t?>, _ output_token: gss_buffer_t?) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context to be deleted.
- `output_token`: A buffer that the function may fill with a token to send to the peer application. Typically, you pass [GSS_C_NO_BUFFER](gss_c_no_buffer.md), indicating that no token is desired, and simply call upon the deletion function to operate locally on both sides of the connection. If a token is created, pass it to the remote peer, and free its memory with a call to [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md).

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on completion, or [GSS_S_NO_CONTEXT](gss_s_no_context.md) if no context was supplied.

<a id="Discussion"></a>

## Discussion

This function purges the context and all of its resources from memory, and frees all of its memory.

## See Also

### Creation and Deletion

- [gss_init_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_init_sec_context%28__________________________%29.md): Initiates a security context with a peer.
- [gss_accept_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_accept_sec_context%28______________________%29.md): Accepts a security context initiated by a peer.
- [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_process_context_token(\_:\_:\_:)](gss_process_context_token%28______%29.md): Processes a token from a peer asynchronously.
- [gss_set_sec_context_option(\_:\_:\_:\_:)](gss_set_sec_context_option%28________%29.md): Sets an option on a context.

# gss_delete_sec_context (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Deletes a security context.

## Declaration

```objectivec
OM_uint32 gss_delete_sec_context(OM_uint32 *minor_status, gss_ctx_id_t*context_handle, gss_buffer_t output_token);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context to be deleted.
- `output_token`: A buffer that the function may fill with a token to send to the peer application. Typically, you pass [GSS_C_NO_BUFFER](gss_c_no_buffer.md), indicating that no token is desired, and simply call upon the deletion function to operate locally on both sides of the connection. If a token is created, pass it to the remote peer, and free its memory with a call to [gss_release_buffer](gss_release_buffer%28____%29.md).

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on completion, or [GSS_S_NO_CONTEXT](gss_s_no_context.md) if no context was supplied.

<a id="Discussion"></a>

## Discussion

This function purges the context and all of its resources from memory, and frees all of its memory.

## See Also

### Creation and Deletion

- [gss_init_sec_context](gss_init_sec_context%28__________________________%29.md): Initiates a security context with a peer.
- [gss_accept_sec_context](gss_accept_sec_context%28______________________%29.md): Accepts a security context initiated by a peer.
- [gss_release_cred](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_process_context_token](gss_process_context_token%28______%29.md): Processes a token from a peer asynchronously.
- [gss_set_sec_context_option](gss_set_sec_context_option%28________%29.md): Sets an option on a context.
