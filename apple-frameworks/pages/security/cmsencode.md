> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencode](https://developer.apple.com/documentation/security/cmsencode)

# CMSEncode

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.7)

Encodes a message and obtains the result in one high-level function call.

## Declaration

```objectivec
OSStatus CMSEncode(CFTypeRef signers, CFTypeRef recipients, const SecAsn1Oid *eContentType, Boolean detachedContent, CMSSignedAttributes signedAttributes, const void *content, size_t contentLen, CFDataRef*encodedContentOut);
```

## Parameters

- `signers`: The identity object for the identity of one signer, specified as type `SecIdentityRef`, or a `CFArray` of identity objects of type`SecIdentityRef`. Pass `NULL` for this parameter if you do not want to sign the message.
- `recipients`: A certificate containing a public encryption key for one message recipient, specified as a certificate object (type `SecCertificateRef`), or a `CFArray` of certificate objects. Pass NULL for this parameter if you do not want to encrypt the message.
- `eContentType`: The object identifier for the encapsulated data in a signed message. This parameter is optional. If you pass `0`, the value `id-data` is used. (This is the normal encapsulated content type for applications such as S/MIME, which uses it to indicate MIME-encoded content.) You can pass any value that is meaningful to your application.
- `detachedContent`: Specify `TRUE` if the signed data is to be separate from the message; that is, if the message is_not\_ to include the data to be signed. You cannot specify `TRUE` for this parameter for an encrypted message.
- `signedAttributes`: Attribute flags as defined in [CMSSignedAttributes](cmssignedattributes.md). Attributes are optional for signed messages and are not used in other types of CMS messages. The use of attributes is described in section 2.5 of the S/MIME 3.1 specification.
- `content`: The content that you want to add to the message. The content must conform to the type set in the [CMSEncoderSetEncapsulatedContentType](cmsencodersetencapsulatedcontenttype.md) parameter (or type `id-data` if that function has not been called).
- `contentLen`: The length of the content being added, in bytes.
- `encodedContentOut`: On return, points to the encoded message. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

If you use this function, you must include content and you must provide valid non-`NULL` input for at least one of the `signers` and `recipients` parameters. You can both encrypt and sign a message; however, you cannot use detached content with an encrypted message. If you want to create a message that contains certificates and no other content, you must use the [CMSEncoderAddSupportingCerts](cmsencoderaddsupportingcerts%28____%29.md) function instead of this one. To gain more control over the process of encoding a message, call the sequence of functions beginning with the [CMSEncoderCreate](cmsencodercreate%28__%29.md) function instead of this one.

<a id="Special-Considerations"></a>

### Special Considerations

Use [CMSEncodeContent](cmsencodecontent%28________________%29.md) for new development.

## See Also

### Related Documentation

- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderAddSupportingCerts](cmsencoderaddsupportingcerts%28____%29.md): Adds certificates to a message.
