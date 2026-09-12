> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_encapsulate_token(_:_:_:)](https://developer.apple.com/documentation/gss/gss_encapsulate_token(_:_:_:))

# gss_encapsulate_token(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a buffer encapsulating the given token.

## Declaration

```swift
func gss_encapsulate_token(_ input_token: gss_const_buffer_t, _ oid: gss_const_OID, _ output_token: gss_buffer_t) -> OM_uint32
```

## Parameters

- `input_token`: A buffer holding the token to be encapsulated.
- `oid`: The token’s object identifier.
- `output_token`: A buffer the function fills with the encapsulated token. Release this buffer’s memory with a call to [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

<a id="Discussion"></a>

## Discussion

Use this function to encapsulate the initial token of a GSS-API context establishment sequence. It incorporates an identifier of the mechanism type used on that context, and enables unambiguous interpretation of tokens at GSS-API peers.

Use [gss_decapsulate_token(\_:\_:\_:)](gss_decapsulate_token%28______%29.md) at the peer to reverse the encapsulation.

## See Also

### Encapsulation and Decapsulation

- [gss_decapsulate_token(\_:\_:\_:)](gss_decapsulate_token%28______%29.md): Returns a token encapsulated in a buffer.

# gss_encapsulate_token (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a buffer encapsulating the given token.

## Declaration

```objectivec
OM_uint32 gss_encapsulate_token(gss_const_buffer_t input_token, gss_const_OID oid, gss_buffer_t output_token);
```

## Parameters

- `input_token`: A buffer holding the token to be encapsulated.
- `oid`: The token’s object identifier.
- `output_token`: A buffer the function fills with the encapsulated token. Release this buffer’s memory with a call to [gss_release_buffer](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

<a id="Discussion"></a>

## Discussion

Use this function to encapsulate the initial token of a GSS-API context establishment sequence. It incorporates an identifier of the mechanism type used on that context, and enables unambiguous interpretation of tokens at GSS-API peers.

Use [gss_decapsulate_token](gss_decapsulate_token%28______%29.md) at the peer to reverse the encapsulation.

## See Also

### Encapsulation and Decapsulation

- [gss_decapsulate_token](gss_decapsulate_token%28______%29.md): Returns a token encapsulated in a buffer.
