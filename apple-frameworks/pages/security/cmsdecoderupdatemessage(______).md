> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecoderupdatemessage(_:_:_:)](https://developer.apple.com/documentation/security/cmsdecoderupdatemessage(_:_:_:))

# CMSDecoderUpdateMessage(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Feeds raw bytes of the message to be decoded into the decoder.

## Declaration

```swift
func CMSDecoderUpdateMessage(_ cmsDecoder: CMSDecoder, _ msgBytes: UnsafeRawPointer, _ msgBytesLen: Int) -> OSStatus
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `msgBytes`: A pointer to the data to be decoded.
- `msgBytesLen`: The length of the data, in bytes.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecUnknownFormat](errsecunknownformat.md) upon detection of an improperly formatted CMS message.

<a id="Discussion"></a>

## Discussion

This function can be called multiple times. Call the `CMSDecoderFinalizeMessage` function when you have no more data to decode.

## See Also

### Related Documentation

- [CMSDecoderCreate(\_:)](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.

# CMSDecoderUpdateMessage (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Feeds raw bytes of the message to be decoded into the decoder.

## Declaration

```objectivec
OSStatus CMSDecoderUpdateMessage(CMSDecoderRef cmsDecoder, const void *msgBytes, size_t msgBytesLen);
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `msgBytes`: A pointer to the data to be decoded.
- `msgBytesLen`: The length of the data, in bytes.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecUnknownFormat](errsecunknownformat.md) upon detection of an improperly formatted CMS message.

<a id="Discussion"></a>

## Discussion

This function can be called multiple times. Call the `CMSDecoderFinalizeMessage` function when you have no more data to decode.

## See Also

### Related Documentation

- [CMSDecoderCreate](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
