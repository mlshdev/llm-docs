> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecoderiscontentencrypted(_:_:)](https://developer.apple.com/documentation/security/cmsdecoderiscontentencrypted(_:_:))

# CMSDecoderIsContentEncrypted(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Determines whether a CMS message was encrypted.

## Declaration

```swift
func CMSDecoderIsContentEncrypted(_ cmsDecoder: CMSDecoder, _ isEncryptedOut: UnsafeMutablePointer<DarwinBoolean>) -> OSStatus
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `isEncryptedOut`: Returns `TRUE` if the message was encrypted.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Note that if the message was encrypted and the decoding succeeded (`CMSDecoderFinalizeMessage` returned `noErr`), then the message was successfully decrypted. Call [CMSDecoderCopyContent(\_:\_:)](cmsdecodercopycontent%28____%29.md) to retrieve the decrypted content.

You cannot call this function until after you have called the `CMSDecoderFinalizeMessage` function.

## See Also

### Related Documentation

- [CMSDecoderCreate(\_:)](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSEncoderAddRecipients(\_:\_:)](cmsencoderaddrecipients%28____%29.md): Specifies a message is to be encrypted and specifies the recipients of the message.
- [CMSDecoderFinalizeMessage(\_:)](cmsdecoderfinalizemessage%28__%29.md): Indicates that there is no more data to decode.

# CMSDecoderIsContentEncrypted (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Determines whether a CMS message was encrypted.

## Declaration

```objectivec
OSStatus CMSDecoderIsContentEncrypted(CMSDecoderRef cmsDecoder, Boolean *isEncryptedOut);
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `isEncryptedOut`: Returns `TRUE` if the message was encrypted.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Note that if the message was encrypted and the decoding succeeded (`CMSDecoderFinalizeMessage` returned `noErr`), then the message was successfully decrypted. Call [CMSDecoderCopyContent](cmsdecodercopycontent%28____%29.md) to retrieve the decrypted content.

You cannot call this function until after you have called the `CMSDecoderFinalizeMessage` function.

## See Also

### Related Documentation

- [CMSDecoderCreate](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSEncoderAddRecipients](cmsencoderaddrecipients%28____%29.md): Specifies a message is to be encrypted and specifies the recipients of the message.
- [CMSDecoderFinalizeMessage](cmsdecoderfinalizemessage%28__%29.md): Indicates that there is no more data to decode.
