> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencoderaddsupportingcerts(_:_:)](https://developer.apple.com/documentation/security/cmsencoderaddsupportingcerts(_:_:))

# CMSEncoderAddSupportingCerts(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Adds certificates to a message.

## Declaration

```swift
func CMSEncoderAddSupportingCerts(_ cmsEncoder: CMSEncoder, _ certOrArray: CFTypeRef) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `certOrArray`: Either a single certificate, specified as a certificate object (type `SecCertificateRef`), or a set of certificates specified as a `CFArray` of certificate objects.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A CMS message can contain arbitrary sets of certificates other than or in addition to those indicating the identity of signers. You can use this function to add such certificates to a message. It is not necessary to call this function for a normal signed message. When you create a signed message, Cryptographic Message Services automatically adds the signer certificates and any intermediate certificates needed to verify the signers.

You can use this function even if you don’t sign or encrypt the message, in order to transport one or more certificates. To do so, call `CMSEncoderCreate` to obtain a `CMSEncoderRef` reference, call `CMSEncoderAddSupportingCerts` one or more times, and then call `CMSEncoderCopyEncodedContent` to complete the message. No additional content need be specified.

If you do add content to the message in addition to the certificates, you must call this function before the first call to the `CMSEncoderUpdateContent` function.

## See Also

### Related Documentation

- [CMSEncoderUpdateContent(\_:\_:\_:)](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSDecoderCopyAllCerts(\_:\_:)](cmsdecodercopyallcerts%28____%29.md): Obtains an array of all of the certificates in a message.
- [CMSEncoderCopyEncodedContent(\_:\_:)](cmsencodercopyencodedcontent%28____%29.md): Finishes encoding the message and obtains the encoded result.
- [CMSEncoderCopySupportingCerts(\_:\_:)](cmsencodercopysupportingcerts%28____%29.md): Obtains the certificates added to a message with `CMSEncoderAddSupportingCerts`.

# CMSEncoderAddSupportingCerts (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Adds certificates to a message.

## Declaration

```objectivec
OSStatus CMSEncoderAddSupportingCerts(CMSEncoderRef cmsEncoder, CFTypeRef certOrArray);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `certOrArray`: Either a single certificate, specified as a certificate object (type `SecCertificateRef`), or a set of certificates specified as a `CFArray` of certificate objects.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A CMS message can contain arbitrary sets of certificates other than or in addition to those indicating the identity of signers. You can use this function to add such certificates to a message. It is not necessary to call this function for a normal signed message. When you create a signed message, Cryptographic Message Services automatically adds the signer certificates and any intermediate certificates needed to verify the signers.

You can use this function even if you don’t sign or encrypt the message, in order to transport one or more certificates. To do so, call `CMSEncoderCreate` to obtain a `CMSEncoderRef` reference, call `CMSEncoderAddSupportingCerts` one or more times, and then call `CMSEncoderCopyEncodedContent` to complete the message. No additional content need be specified.

If you do add content to the message in addition to the certificates, you must call this function before the first call to the `CMSEncoderUpdateContent` function.

## See Also

### Related Documentation

- [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSDecoderCopyAllCerts](cmsdecodercopyallcerts%28____%29.md): Obtains an array of all of the certificates in a message.
- [CMSEncoderCopyEncodedContent](cmsencodercopyencodedcontent%28____%29.md): Finishes encoding the message and obtains the encoded result.
- [CMSEncoderCopySupportingCerts](cmsencodercopysupportingcerts%28____%29.md): Obtains the certificates added to a message with `CMSEncoderAddSupportingCerts`.
