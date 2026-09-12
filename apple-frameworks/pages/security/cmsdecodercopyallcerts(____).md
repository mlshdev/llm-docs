> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecodercopyallcerts(_:_:)](https://developer.apple.com/documentation/security/cmsdecodercopyallcerts(_:_:))

# CMSDecoderCopyAllCerts(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains an array of all of the certificates in a message.

## Declaration

```swift
func CMSDecoderCopyAllCerts(_ cmsDecoder: CMSDecoder, _ certsOut: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `certsOut`: On return, points to an array of `SecCertificateRef` objects. Returns `NULL` if the message does not contain any certificates (the message was encrypted but not signed); this is not considered an error. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A CMS message can contain arbitrary sets of certificates other than or in addition to those indicating the identity of signers. You can use this function to retrieve such certificates from a message. If the message was signed, it contains signer certificates. You can use the [CMSDecoderGetNumSigners(\_:\_:)](cmsdecodergetnumsigners%28____%29.md) and [CMSDecoderCopySignerCert(\_:\_:\_:)](cmsdecodercopysignercert%28______%29.md) functions to retrieve the certificates for a specific signer.

You cannot call this function until after you have called the [CMSDecoderFinalizeMessage(\_:)](cmsdecoderfinalizemessage%28__%29.md) function.

## See Also

### Related Documentation

- [CMSDecoderCopySignerCert(\_:\_:\_:)](cmsdecodercopysignercert%28______%29.md): Obtains the certificate of the specified signer of a CMS message.
- [CMSEncoderAddSupportingCerts(\_:\_:)](cmsencoderaddsupportingcerts%28____%29.md): Adds certificates to a message.
- [CMSDecoderGetNumSigners(\_:\_:)](cmsdecodergetnumsigners%28____%29.md): Obtains the number of signers of a message.
- [CMSDecoderCreate(\_:)](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSDecoderFinalizeMessage(\_:)](cmsdecoderfinalizemessage%28__%29.md): Indicates that there is no more data to decode.

# CMSDecoderCopyAllCerts (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains an array of all of the certificates in a message.

## Declaration

```objectivec
OSStatus CMSDecoderCopyAllCerts(CMSDecoderRef cmsDecoder, CFArrayRef*certsOut);
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `certsOut`: On return, points to an array of `SecCertificateRef` objects. Returns `NULL` if the message does not contain any certificates (the message was encrypted but not signed); this is not considered an error. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A CMS message can contain arbitrary sets of certificates other than or in addition to those indicating the identity of signers. You can use this function to retrieve such certificates from a message. If the message was signed, it contains signer certificates. You can use the [CMSDecoderGetNumSigners](cmsdecodergetnumsigners%28____%29.md) and [CMSDecoderCopySignerCert](cmsdecodercopysignercert%28______%29.md) functions to retrieve the certificates for a specific signer.

You cannot call this function until after you have called the [CMSDecoderFinalizeMessage](cmsdecoderfinalizemessage%28__%29.md) function.

## See Also

### Related Documentation

- [CMSDecoderCopySignerCert](cmsdecodercopysignercert%28______%29.md): Obtains the certificate of the specified signer of a CMS message.
- [CMSEncoderAddSupportingCerts](cmsencoderaddsupportingcerts%28____%29.md): Adds certificates to a message.
- [CMSDecoderGetNumSigners](cmsdecodergetnumsigners%28____%29.md): Obtains the number of signers of a message.
- [CMSDecoderCreate](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSDecoderFinalizeMessage](cmsdecoderfinalizemessage%28__%29.md): Indicates that there is no more data to decode.
