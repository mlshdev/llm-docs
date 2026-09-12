> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_accept_sec_context(_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_accept_sec_context(_:_:_:_:_:_:_:_:_:_:_:))

# gss_accept_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Accepts a security context initiated by a peer.

## Declaration

```swift
func gss_accept_sec_context(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: UnsafeMutablePointer<gss_ctx_id_t?>, _ acceptor_cred_handle: gss_cred_id_t?, _ input_token: gss_buffer_t?, _ input_chan_bindings: gss_channel_bindings_t?, _ src_name: UnsafeMutablePointer<gss_name_t?>?, _ mech_type: UnsafeMutablePointer<gss_OID?>?, _ output_token: gss_buffer_t, _ ret_flags: UnsafeMutablePointer<OM_uint32>?, _ time_rec: UnsafeMutablePointer<OM_uint32>?, _ delegated_cred_handle: UnsafeMutablePointer<gss_cred_id_t?>?) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: A pointer the function uses to return the context. Pass [GSS_C_NO_CONTEXT](gss_c_no_context.md) for first call and use the value returned by the first call in continuation calls. Release the context’s resources using the  [gss_delete_sec_context(\_:\_:\_:)](gss_delete_sec_context%28______%29.md) function when you are done with it.
- `acceptor_cred_handle`: The credential claimed by the acceptor. Specify [GSS_C_NO_CREDENTIAL](gss_c_no_credential.md) to use the default credential.
- `input_token`: The token obtained from the peer.
- `input_chan_bindings`: Channel bindings to use. Pass  [GSS_C_NO_CHANNEL_BINDINGS](gss_c_no_channel_bindings.md) if channel bindings are not used.
- `src_name`: A pointer the function uses to return the authenticated name of the context initiator. Specify `NULL` to ignore this output.
- `mech_type`: A pointer the function uses to return the mechanism used by the context. Do *not* free this object because it is held in static memory.  Specify `NULL` to ignore this output.
- `output_token`: A buffer the function fills with a token to transmit to the peer. If the buffer length is zero, there is no token to pass. Otherwise, free the token buffer’s memory using [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md) when you are done with it.
- `ret_flags`: A pointer the function uses to return the flags supported by the context. See [Context Services](context-services.md) for a list of possible values. Specify `NULL` to ignore this output.
- `time_rec`: A pointer the function uses to return the number of seconds for which the context is valid. Specify `NULL` to ignore this output.
- `delegated_cred_handle`: A pointer the function uses to return the credentials of the initiator. The function returns [GSS_C_NO_CREDENTIAL](gss_c_no_credential.md) unless the `ret_flags` parameter includes [GSS_C_DELEG_FLAG](gss_c_deleg_flag.md). If the credential exists, release its memory with [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md) when you are done with it.

## See Also

### Creation and Deletion

- [gss_init_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_init_sec_context%28__________________________%29.md): Initiates a security context with a peer.
- [gss_delete_sec_context(\_:\_:\_:)](gss_delete_sec_context%28______%29.md): Deletes a security context.
- [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_process_context_token(\_:\_:\_:)](gss_process_context_token%28______%29.md): Processes a token from a peer asynchronously.
- [gss_set_sec_context_option(\_:\_:\_:\_:)](gss_set_sec_context_option%28________%29.md): Sets an option on a context.

# gss_accept_sec_context (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Accepts a security context initiated by a peer.

## Declaration

```objectivec
OM_uint32 gss_accept_sec_context(OM_uint32 *minor_status, gss_ctx_id_t*context_handle, gss_cred_id_t const acceptor_cred_handle, gss_buffer_t const input_token, gss_channel_bindings_t const input_chan_bindings, gss_name_t*src_name, gss_OID*mech_type, gss_buffer_t output_token, OM_uint32 *ret_flags, OM_uint32 *time_rec, gss_cred_id_t*delegated_cred_handle);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: A pointer the function uses to return the context. Pass [GSS_C_NO_CONTEXT](gss_c_no_context.md) for first call and use the value returned by the first call in continuation calls. Release the context’s resources using the  [gss_delete_sec_context](gss_delete_sec_context%28______%29.md) function when you are done with it.
- `acceptor_cred_handle`: The credential claimed by the acceptor. Specify [GSS_C_NO_CREDENTIAL](gss_c_no_credential.md) to use the default credential.
- `input_token`: The token obtained from the peer.
- `input_chan_bindings`: Channel bindings to use. Pass  [GSS_C_NO_CHANNEL_BINDINGS](gss_c_no_channel_bindings.md) if channel bindings are not used.
- `src_name`: A pointer the function uses to return the authenticated name of the context initiator. Specify `NULL` to ignore this output.
- `mech_type`: A pointer the function uses to return the mechanism used by the context. Do *not* free this object because it is held in static memory.  Specify `NULL` to ignore this output.
- `output_token`: A buffer the function fills with a token to transmit to the peer. If the buffer length is zero, there is no token to pass. Otherwise, free the token buffer’s memory using [gss_release_buffer](gss_release_buffer%28____%29.md) when you are done with it.
- `ret_flags`: A pointer the function uses to return the flags supported by the context. See [Context Services](context-services.md) for a list of possible values. Specify `NULL` to ignore this output.
- `time_rec`: A pointer the function uses to return the number of seconds for which the context is valid. Specify `NULL` to ignore this output.
- `delegated_cred_handle`: A pointer the function uses to return the credentials of the initiator. The function returns [GSS_C_NO_CREDENTIAL](gss_c_no_credential.md) unless the `ret_flags` parameter includes [GSS_C_DELEG_FLAG](gss_c_deleg_flag.md). If the credential exists, release its memory with [gss_release_cred](gss_release_cred%28____%29.md) when you are done with it.

## See Also

### Creation and Deletion

- [gss_init_sec_context](gss_init_sec_context%28__________________________%29.md): Initiates a security context with a peer.
- [gss_delete_sec_context](gss_delete_sec_context%28______%29.md): Deletes a security context.
- [gss_release_cred](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_process_context_token](gss_process_context_token%28______%29.md): Processes a token from a peer asynchronously.
- [gss_set_sec_context_option](gss_set_sec_context_option%28________%29.md): Sets an option on a context.
