> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodersethasdetachedcontent(_:_:)](https://developer.apple.com/documentation/security/cmsencodersethasdetachedcontent(_:_:))

# CMSEncoderSetHasDetachedContent(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Specifies whether the signed data is to be separate from the message.

## Declaration

```swift
func CMSEncoderSetHasDetachedContent(_ cmsEncoder: CMSEncoder, _ detachedContent: Bool) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md) function.
- `detachedContent`: `TRUE` if the message should exclude the data to be signed. Prior to calling this function, the encoder defaults to `FALSE` for this setting, indicating that the message contains the data to be signed.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A signed CMS message can optionally be sent separately from the signed data. Set `detachedContent` to `TRUE` to indicate that the signed data is to be kept separate from the message.

Encrypted messages, including those that are also signed, cannot use detached content.

If you do call this function, you must call it before the first call to the [CMSEncoderUpdateContent(\_:\_:\_:)](cmsencoderupdatecontent%28______%29.md) function.

## See Also

### Related Documentation

- [CMSEncoderGetHasDetachedContent(\_:\_:)](cmsencodergethasdetachedcontent%28____%29.md): Indicates whether the message is to have detached content.
- [CMSEncoderUpdateContent(\_:\_:\_:)](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSDecoderSetDetachedContent(\_:\_:)](cmsdecodersetdetachedcontent%28____%29.md): Specifies the message’s detached content, if any.

# CMSEncoderSetHasDetachedContent (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Specifies whether the signed data is to be separate from the message.

## Declaration

```objectivec
OSStatus CMSEncoderSetHasDetachedContent(CMSEncoderRef cmsEncoder, Boolean detachedContent);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the [CMSEncoderCreate](cmsencodercreate%28__%29.md) function.
- `detachedContent`: `TRUE` if the message should exclude the data to be signed. Prior to calling this function, the encoder defaults to `FALSE` for this setting, indicating that the message contains the data to be signed.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A signed CMS message can optionally be sent separately from the signed data. Set `detachedContent` to `TRUE` to indicate that the signed data is to be kept separate from the message.

Encrypted messages, including those that are also signed, cannot use detached content.

If you do call this function, you must call it before the first call to the [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md) function.

## See Also

### Related Documentation

- [CMSEncoderGetHasDetachedContent](cmsencodergethasdetachedcontent%28____%29.md): Indicates whether the message is to have detached content.
- [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSDecoderSetDetachedContent](cmsdecodersetdetachedcontent%28____%29.md): Specifies the message’s detached content, if any.
