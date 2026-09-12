> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecodercopycontent(_:_:)](https://developer.apple.com/documentation/security/cmsdecodercopycontent(_:_:))

# CMSDecoderCopyContent(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the message content, if any.

## Declaration

```swift
func CMSDecoderCopyContent(_ cmsDecoder: CMSDecoder, _ contentOut: UnsafeMutablePointer<CFData?>) -> OSStatus
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `contentOut`: On return, points to the message’s content. Returns `NULL` if the content is detached. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

If the message has detached content, you are responsible for retrieving the content. In that case, you use the [CMSDecoderSetDetachedContent(\_:\_:)](cmsdecodersetdetachedcontent%28____%29.md) function to tell the decoder the location of the content.

You cannot call this function until after you have called the `CMSDecoderFinalizeMessage` function.

## See Also

### Related Documentation

- [CMSEncoderSetHasDetachedContent(\_:\_:)](cmsencodersethasdetachedcontent%28____%29.md): Specifies whether the signed data is to be separate from the message.
- [CMSDecoderSetDetachedContent(\_:\_:)](cmsdecodersetdetachedcontent%28____%29.md): Specifies the message’s detached content, if any.
- [CMSDecoderCreate(\_:)](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSDecoderFinalizeMessage(\_:)](cmsdecoderfinalizemessage%28__%29.md): Indicates that there is no more data to decode.

# CMSDecoderCopyContent (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the message content, if any.

## Declaration

```objectivec
OSStatus CMSDecoderCopyContent(CMSDecoderRef cmsDecoder, CFDataRef*contentOut);
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `contentOut`: On return, points to the message’s content. Returns `NULL` if the content is detached. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

If the message has detached content, you are responsible for retrieving the content. In that case, you use the [CMSDecoderSetDetachedContent](cmsdecodersetdetachedcontent%28____%29.md) function to tell the decoder the location of the content.

You cannot call this function until after you have called the `CMSDecoderFinalizeMessage` function.

## See Also

### Related Documentation

- [CMSEncoderSetHasDetachedContent](cmsencodersethasdetachedcontent%28____%29.md): Specifies whether the signed data is to be separate from the message.
- [CMSDecoderSetDetachedContent](cmsdecodersetdetachedcontent%28____%29.md): Specifies the message’s detached content, if any.
- [CMSDecoderCreate](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSDecoderFinalizeMessage](cmsdecoderfinalizemessage%28__%29.md): Indicates that there is no more data to decode.
