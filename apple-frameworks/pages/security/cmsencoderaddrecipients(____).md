> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencoderaddrecipients(_:_:)](https://developer.apple.com/documentation/security/cmsencoderaddrecipients(_:_:))

# CMSEncoderAddRecipients(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Specifies a message is to be encrypted and specifies the recipients of the message.

## Declaration

```swift
func CMSEncoderAddRecipients(_ cmsEncoder: CMSEncoder, _ recipientOrArray: CFTypeRef) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `recipientOrArray`: Either a single certificate containing a public encryption key for one message recipient, specified as a certificate object (type [SecCertificate](seccertificate.md)), or a set of certificates specified as a [CFArray](../corefoundation/cfarray.md) of certificate objects.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Your keychain must contain a certificate that supports encryption for each recipient. You can call this function more than once for the same message.

You can both sign and encrypt the same message; however, you cannot call both this function and the [CMSEncoderSetHasDetachedContent(\_:\_:)](cmsencodersethasdetachedcontent%28____%29.md) function for the same message.

If you do call this function, you must call it before the first call to the [CMSEncoderUpdateContent(\_:\_:\_:)](cmsencoderupdatecontent%28______%29.md) function.

## See Also

### Related Documentation

- [CMSEncoderUpdateContent(\_:\_:\_:)](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderCopyRecipients(\_:\_:)](cmsencodercopyrecipients%28____%29.md): Obtains the array of recipients specified with the `CMSEncoderAddRecipients` function.
- [CMSDecoderIsContentEncrypted(\_:\_:)](cmsdecoderiscontentencrypted%28____%29.md): Determines whether a CMS message was encrypted.

# CMSEncoderAddRecipients (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Specifies a message is to be encrypted and specifies the recipients of the message.

## Declaration

```objectivec
OSStatus CMSEncoderAddRecipients(CMSEncoderRef cmsEncoder, CFTypeRef recipientOrArray);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `recipientOrArray`: Either a single certificate containing a public encryption key for one message recipient, specified as a certificate object (type [SecCertificateRef](seccertificate.md)), or a set of certificates specified as a [CFArrayRef](../corefoundation/cfarray.md) of certificate objects.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Your keychain must contain a certificate that supports encryption for each recipient. You can call this function more than once for the same message.

You can both sign and encrypt the same message; however, you cannot call both this function and the [CMSEncoderSetHasDetachedContent](cmsencodersethasdetachedcontent%28____%29.md) function for the same message.

If you do call this function, you must call it before the first call to the [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md) function.

## See Also

### Related Documentation

- [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderCopyRecipients](cmsencodercopyrecipients%28____%29.md): Obtains the array of recipients specified with the `CMSEncoderAddRecipients` function.
- [CMSDecoderIsContentEncrypted](cmsdecoderiscontentencrypted%28____%29.md): Determines whether a CMS message was encrypted.
