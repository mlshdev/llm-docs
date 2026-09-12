> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodersetencapsulatedcontenttypeoid(_:_:)](https://developer.apple.com/documentation/security/cmsencodersetencapsulatedcontenttypeoid(_:_:))

# CMSEncoderSetEncapsulatedContentTypeOID(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Specifies an object identifier for the encapsulated data of a signed message.

## Declaration

```swift
func CMSEncoderSetEncapsulatedContentTypeOID(_ cmsEncoder: CMSEncoder, _ eContentTypeOID: CFTypeRef) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `eContentTypeOID`: The object identifier for the encapsulated data in a signed message.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

In a signed message, the signed data consists of any type of content (referred to as the *encapsulated content*, because it is encapsulated in the signed data) plus the signature values. You can indicate the content type of the encapsulated data by specifying an object identifier (OID) in the `eContentTypeOID` parameter of this function, in the form of a Core Foundation string—`CFSTR("1.2.840.113549.1.7.1")`, for example.

The default value for the OID (used if this function is not called) is `id-data`. This is the normal encapsulated content type for applications such as S/MIME, which uses it to indicate MIME-encoded content. You can pass any value that is meaningful to your application. Examples of CMS OIDs are listed in [http://www.imc.org/ietf-smime/other-smime-oids.asn](http://www.imc.org/ietf-smime/other-smime-oids.asn).

If you do call this function, you must call it before the first call to the `CMSEncoderUpdateContent` function.

## See Also

### Related Documentation

- [CMSDecoderCopyEncapsulatedContentType(\_:\_:)](cmsdecodercopyencapsulatedcontenttype%28____%29.md): Obtains the object identifier for the encapsulated data of a signed message.
- [CMSEncoderUpdateContent(\_:\_:\_:)](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderCopyEncapsulatedContentType(\_:\_:)](cmsencodercopyencapsulatedcontenttype%28____%29.md): Obtains the object identifier for the encapsulated data of a signed message.

# CMSEncoderSetEncapsulatedContentTypeOID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Specifies an object identifier for the encapsulated data of a signed message.

## Declaration

```objectivec
OSStatus CMSEncoderSetEncapsulatedContentTypeOID(CMSEncoderRef cmsEncoder, CFTypeRef eContentTypeOID);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `eContentTypeOID`: The object identifier for the encapsulated data in a signed message.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

In a signed message, the signed data consists of any type of content (referred to as the *encapsulated content*, because it is encapsulated in the signed data) plus the signature values. You can indicate the content type of the encapsulated data by specifying an object identifier (OID) in the `eContentTypeOID` parameter of this function, in the form of a Core Foundation string—`CFSTR("1.2.840.113549.1.7.1")`, for example.

The default value for the OID (used if this function is not called) is `id-data`. This is the normal encapsulated content type for applications such as S/MIME, which uses it to indicate MIME-encoded content. You can pass any value that is meaningful to your application. Examples of CMS OIDs are listed in [http://www.imc.org/ietf-smime/other-smime-oids.asn](http://www.imc.org/ietf-smime/other-smime-oids.asn).

If you do call this function, you must call it before the first call to the `CMSEncoderUpdateContent` function.

## See Also

### Related Documentation

- [CMSDecoderCopyEncapsulatedContentType](cmsdecodercopyencapsulatedcontenttype%28____%29.md): Obtains the object identifier for the encapsulated data of a signed message.
- [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderCopyEncapsulatedContentType](cmsencodercopyencapsulatedcontenttype%28____%29.md): Obtains the object identifier for the encapsulated data of a signed message.
