> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_verify_mic(_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_verify_mic(_:_:_:_:_:))

# gss_verify_mic(\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns an indication of whether the integrity of a message is intact, given its MIC token.

## Declaration

```swift
func gss_verify_mic(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: gss_ctx_id_t, _ message_buffer: gss_buffer_t, _ token_buffer: gss_buffer_t, _ qop_state: UnsafeMutablePointer<gss_qop_t>?) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context used to send the message.
- `message_buffer`: A buffer holding the message to verify.
- `token_buffer`: A buffer holding the token representing the cryptographic signature the protects the message.
- `qop_state`: A pointer the function uses to return the quality of protection setting. See Quality of Protection Constants in [Object Identifiers](object-identifiers.md) for valid values. Pass `NULL` to ignore this output.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) if the message is valid, or another value that indicates the reason for failure. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Message Wrapping and Verification

- [gss_get_mic(\_:\_:\_:\_:\_:)](gss_get_mic%28__________%29.md): Returns a token that contains the MIC for a message.
- [gss_wrap(\_:\_:\_:\_:\_:\_:\_:)](gss_wrap%28______________%29.md): Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unwrap(\_:\_:\_:\_:\_:\_:)](gss_unwrap%28____________%29.md): Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.
- [gss_sign(\_:\_:\_:\_:\_:)](gss_sign%28__________%29.md): Deprecated. Returns a digital signature for a message.
- [gss_verify(\_:\_:\_:\_:\_:)](gss_verify%28__________%29.md): Deprecated. Returns a flag that indicates the integrity of a message’s digital signature.
- [gss_seal(\_:\_:\_:\_:\_:\_:\_:)](gss_seal%28______________%29.md): Deprecated. Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unseal(\_:\_:\_:\_:\_:\_:)](gss_unseal%28____________%29.md): Deprecated. Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.

# gss_verify_mic (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns an indication of whether the integrity of a message is intact, given its MIC token.

## Declaration

```objectivec
OM_uint32 gss_verify_mic(OM_uint32 *minor_status, gss_ctx_id_t const context_handle, gss_buffer_t const message_buffer, gss_buffer_t const token_buffer, gss_qop_t *qop_state);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context used to send the message.
- `message_buffer`: A buffer holding the message to verify.
- `token_buffer`: A buffer holding the token representing the cryptographic signature the protects the message.
- `qop_state`: A pointer the function uses to return the quality of protection setting. See Quality of Protection Constants in [Object Identifiers](object-identifiers.md) for valid values. Pass `NULL` to ignore this output.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) if the message is valid, or another value that indicates the reason for failure. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Message Wrapping and Verification

- [gss_get_mic](gss_get_mic%28__________%29.md): Returns a token that contains the MIC for a message.
- [gss_wrap](gss_wrap%28______________%29.md): Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unwrap](gss_unwrap%28____________%29.md): Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.
- [gss_sign](gss_sign%28__________%29.md): Deprecated. Returns a digital signature for a message.
- [gss_verify](gss_verify%28__________%29.md): Deprecated. Returns a flag that indicates the integrity of a message’s digital signature.
- [gss_seal](gss_seal%28______________%29.md): Deprecated. Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unseal](gss_unseal%28____________%29.md): Deprecated. Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.
