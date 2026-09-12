> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodersetencapsulatedcontenttype](https://developer.apple.com/documentation/security/cmsencodersetencapsulatedcontenttype)

# CMSEncoderSetEncapsulatedContentType

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.7)

Specifies an object identifier for the encapsulated data of a signed message.

## Declaration

```objectivec
OSStatus CMSEncoderSetEncapsulatedContentType(CMSEncoderRef cmsEncoder, const SecAsn1Oid *eContentType);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `eContentType`: The object identifier for the encapsulated data in a signed message.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

In a signed message, the signed data consists of any type of content (referred to as the *encapsulated content*, because it is encapsulated in the signed data) plus the signature values. You can indicate the content type of the encapsulated data by specifying an object identifier (OID) in the `eContentType` parameter of this function. The default value for the OID (used if this function is not called) is `id-data`. This is the normal encapsulated content type for applications such as S/MIME, which uses it to indicate MIME-encoded content. You can pass any value that is meaningful to your application. Examples of CMS OIDs are listed in [http://www.imc.org/ietf-smime/other-smime-oids.asn](http://www.imc.org/ietf-smime/other-smime-oids.asn).

If you do call this function, you must call it before the first call to the `CMSEncoderUpdateContent` function.

<a id="Special-Considerations"></a>

### Special Considerations

Use [CMSEncoderSetEncapsulatedContentTypeOID](cmsencodersetencapsulatedcontenttypeoid%28____%29.md) for new development.

## See Also

### Related Documentation

- [CMSDecoderCopyEncapsulatedContentType](cmsdecodercopyencapsulatedcontenttype%28____%29.md): Obtains the object identifier for the encapsulated data of a signed message.
- [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderCopyEncapsulatedContentType](cmsencodercopyencapsulatedcontenttype%28____%29.md): Obtains the object identifier for the encapsulated data of a signed message.
