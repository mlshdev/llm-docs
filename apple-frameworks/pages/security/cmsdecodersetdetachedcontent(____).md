> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecodersetdetachedcontent(_:_:)](https://developer.apple.com/documentation/security/cmsdecodersetdetachedcontent(_:_:))

# CMSDecoderSetDetachedContent(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Specifies the message’s detached content, if any.

## Declaration

```swift
func CMSDecoderSetDetachedContent(_ cmsDecoder: CMSDecoder, _ detachedContent: CFData) -> OSStatus
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `detachedContent`: A reference to the message’s detached content.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The data of a signed CMS message can optionally be sent separately from the message. If the message’s content is detached from the message, you must call this function to tell the decoder where to find the message content.

Encrypted messages, including those that are also signed, cannot use detached content.

You can call this function either before or after decoding the message (by calling the `CMSDecoderUpdateMessage` and `CMSDecoderFinalizeMessage` functions). If a signed message has detached content, however, you must call this function before you can use the `CMSDecoderCopySignerStatus` function to ascertain the signature status.

## See Also

### Related Documentation

- [CMSEncoderSetHasDetachedContent(\_:\_:)](cmsencodersethasdetachedcontent%28____%29.md): Specifies whether the signed data is to be separate from the message.
- [CMSDecoderCreate(\_:)](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSDecoderCopySignerStatus(\_:\_:\_:\_:\_:\_:\_:)](cmsdecodercopysignerstatus%28______________%29.md): Obtains the status of a CMS message’s signature.

# CMSDecoderSetDetachedContent (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Specifies the message’s detached content, if any.

## Declaration

```objectivec
OSStatus CMSDecoderSetDetachedContent(CMSDecoderRef cmsDecoder, CFDataRef detachedContent);
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `detachedContent`: A reference to the message’s detached content.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The data of a signed CMS message can optionally be sent separately from the message. If the message’s content is detached from the message, you must call this function to tell the decoder where to find the message content.

Encrypted messages, including those that are also signed, cannot use detached content.

You can call this function either before or after decoding the message (by calling the `CMSDecoderUpdateMessage` and `CMSDecoderFinalizeMessage` functions). If a signed message has detached content, however, you must call this function before you can use the `CMSDecoderCopySignerStatus` function to ascertain the signature status.

## See Also

### Related Documentation

- [CMSEncoderSetHasDetachedContent](cmsencodersethasdetachedcontent%28____%29.md): Specifies whether the signed data is to be separate from the message.
- [CMSDecoderCreate](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSDecoderCopySignerStatus](cmsdecodercopysignerstatus%28______________%29.md): Obtains the status of a CMS message’s signature.
