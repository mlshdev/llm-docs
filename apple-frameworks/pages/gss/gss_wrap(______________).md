> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_wrap(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_wrap(_:_:_:_:_:_:_:))

# gss_wrap(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.

## Declaration

```swift
func gss_wrap(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: gss_ctx_id_t, _ conf_req_flag: Int32, _ qop_req: gss_qop_t, _ input_message_buffer: gss_buffer_t, _ conf_state: UnsafeMutablePointer<Int32>?, _ output_message_buffer: gss_buffer_t) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context used to send the message.
- `conf_req_flag`: A flag you set to zero to request that only that the message integrity check be applied, or to anything non-zero to request both integrity checking and confidentiality (encryption) of the message.
- `qop_req`: The quality of protection requested for the encryption. See Quality of Protection Constants in [Object Identifiers](object-identifiers.md) for valid values.
- `input_message_buffer`: A buffer containing the message to protect.
- `conf_state`: A pointer the function uses to indicate what protection is actually applied to the message. A value of zero indicates only integrity checking. A non-zero value indicates both integrity checking and confidentiality. Pass `NULL` to ignore this output.
- `output_message_buffer`: A buffer the function fills with the fully wrapped message, ready for transport to the peer. Release the buffer using a call to [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Message Wrapping and Verification

- [gss_get_mic(\_:\_:\_:\_:\_:)](gss_get_mic%28__________%29.md): Returns a token that contains the MIC for a message.
- [gss_verify_mic(\_:\_:\_:\_:\_:)](gss_verify_mic%28__________%29.md): Returns an indication of whether the integrity of a message is intact, given its MIC token.
- [gss_unwrap(\_:\_:\_:\_:\_:\_:)](gss_unwrap%28____________%29.md): Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.
- [gss_sign(\_:\_:\_:\_:\_:)](gss_sign%28__________%29.md): Deprecated. Returns a digital signature for a message.
- [gss_verify(\_:\_:\_:\_:\_:)](gss_verify%28__________%29.md): Deprecated. Returns a flag that indicates the integrity of a message’s digital signature.
- [gss_seal(\_:\_:\_:\_:\_:\_:\_:)](gss_seal%28______________%29.md): Deprecated. Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unseal(\_:\_:\_:\_:\_:\_:)](gss_unseal%28____________%29.md): Deprecated. Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.

# gss_wrap (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.

## Declaration

```objectivec
OM_uint32 gss_wrap(OM_uint32 *minor_status, gss_ctx_id_t const context_handle, int conf_req_flag, gss_qop_t qop_req, gss_buffer_t const input_message_buffer, int *conf_state, gss_buffer_t output_message_buffer);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context used to send the message.
- `conf_req_flag`: A flag you set to zero to request that only that the message integrity check be applied, or to anything non-zero to request both integrity checking and confidentiality (encryption) of the message.
- `qop_req`: The quality of protection requested for the encryption. See Quality of Protection Constants in [Object Identifiers](object-identifiers.md) for valid values.
- `input_message_buffer`: A buffer containing the message to protect.
- `conf_state`: A pointer the function uses to indicate what protection is actually applied to the message. A value of zero indicates only integrity checking. A non-zero value indicates both integrity checking and confidentiality. Pass `NULL` to ignore this output.
- `output_message_buffer`: A buffer the function fills with the fully wrapped message, ready for transport to the peer. Release the buffer using a call to [gss_release_buffer](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Message Wrapping and Verification

- [gss_get_mic](gss_get_mic%28__________%29.md): Returns a token that contains the MIC for a message.
- [gss_verify_mic](gss_verify_mic%28__________%29.md): Returns an indication of whether the integrity of a message is intact, given its MIC token.
- [gss_unwrap](gss_unwrap%28____________%29.md): Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.
- [gss_sign](gss_sign%28__________%29.md): Deprecated. Returns a digital signature for a message.
- [gss_verify](gss_verify%28__________%29.md): Deprecated. Returns a flag that indicates the integrity of a message’s digital signature.
- [gss_seal](gss_seal%28______________%29.md): Deprecated. Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unseal](gss_unseal%28____________%29.md): Deprecated. Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.
