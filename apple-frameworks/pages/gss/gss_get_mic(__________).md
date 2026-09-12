> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_get_mic(_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_get_mic(_:_:_:_:_:))

# gss_get_mic(\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a token that contains the MIC for a message.

## Declaration

```swift
func gss_get_mic(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: gss_ctx_id_t, _ qop_req: gss_qop_t, _ message_buffer: gss_buffer_t, _ message_token: gss_buffer_t) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context used to send the message.
- `qop_req`: The quality of protection requested for the message. See Quality of Protection Constants in [Object Identifiers](object-identifiers.md) for valid values.
- `message_buffer`: A buffer holding the message to be protected.
- `message_token`: A buffer the function fills with the protection token. Release this buffer with a call to [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Message Wrapping and Verification

- [gss_verify_mic(\_:\_:\_:\_:\_:)](gss_verify_mic%28__________%29.md): Returns an indication of whether the integrity of a message is intact, given its MIC token.
- [gss_wrap(\_:\_:\_:\_:\_:\_:\_:)](gss_wrap%28______________%29.md): Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unwrap(\_:\_:\_:\_:\_:\_:)](gss_unwrap%28____________%29.md): Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.
- [gss_sign(\_:\_:\_:\_:\_:)](gss_sign%28__________%29.md): Deprecated. Returns a digital signature for a message.
- [gss_verify(\_:\_:\_:\_:\_:)](gss_verify%28__________%29.md): Deprecated. Returns a flag that indicates the integrity of a message’s digital signature.
- [gss_seal(\_:\_:\_:\_:\_:\_:\_:)](gss_seal%28______________%29.md): Deprecated. Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unseal(\_:\_:\_:\_:\_:\_:)](gss_unseal%28____________%29.md): Deprecated. Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.

# gss_get_mic (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a token that contains the MIC for a message.

## Declaration

```objectivec
OM_uint32 gss_get_mic(OM_uint32 *minor_status, gss_ctx_id_t const context_handle, gss_qop_t qop_req, gss_buffer_t const message_buffer, gss_buffer_t message_token);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context used to send the message.
- `qop_req`: The quality of protection requested for the message. See Quality of Protection Constants in [Object Identifiers](object-identifiers.md) for valid values.
- `message_buffer`: A buffer holding the message to be protected.
- `message_token`: A buffer the function fills with the protection token. Release this buffer with a call to [gss_release_buffer](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Message Wrapping and Verification

- [gss_verify_mic](gss_verify_mic%28__________%29.md): Returns an indication of whether the integrity of a message is intact, given its MIC token.
- [gss_wrap](gss_wrap%28______________%29.md): Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unwrap](gss_unwrap%28____________%29.md): Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.
- [gss_sign](gss_sign%28__________%29.md): Deprecated. Returns a digital signature for a message.
- [gss_verify](gss_verify%28__________%29.md): Deprecated. Returns a flag that indicates the integrity of a message’s digital signature.
- [gss_seal](gss_seal%28______________%29.md): Deprecated. Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unseal](gss_unseal%28____________%29.md): Deprecated. Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.
