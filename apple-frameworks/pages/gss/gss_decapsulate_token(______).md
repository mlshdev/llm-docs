> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_decapsulate_token(_:_:_:)](https://developer.apple.com/documentation/gss/gss_decapsulate_token(_:_:_:))

# gss_decapsulate_token(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a token encapsulated in a buffer.

## Declaration

```swift
func gss_decapsulate_token(_ input_token: gss_const_buffer_t, _ oid: gss_const_OID, _ output_token: gss_buffer_t) -> OM_uint32
```

## Parameters

- `input_token`: A buffer holding the encapsulated token.
- `oid`: The expected object identifier of the token.
- `output_token`: A buffer the function fills with the decapsulated token data. Release this buffer’s memory with a call to [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

<a id="Discussion"></a>

## Discussion

Use this function to reverse the encapsulation provided by [gss_encapsulate_token(\_:\_:\_:)](gss_encapsulate_token%28______%29.md).

## See Also

### Encapsulation and Decapsulation

- [gss_encapsulate_token(\_:\_:\_:)](gss_encapsulate_token%28______%29.md): Returns a buffer encapsulating the given token.

# gss_decapsulate_token (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a token encapsulated in a buffer.

## Declaration

```objectivec
OM_uint32 gss_decapsulate_token(gss_const_buffer_t input_token, gss_const_OID oid, gss_buffer_t output_token);
```

## Parameters

- `input_token`: A buffer holding the encapsulated token.
- `oid`: The expected object identifier of the token.
- `output_token`: A buffer the function fills with the decapsulated token data. Release this buffer’s memory with a call to [gss_release_buffer](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

<a id="Discussion"></a>

## Discussion

Use this function to reverse the encapsulation provided by [gss_encapsulate_token](gss_encapsulate_token%28______%29.md).

## See Also

### Encapsulation and Decapsulation

- [gss_encapsulate_token](gss_encapsulate_token%28______%29.md): Returns a buffer encapsulating the given token.
