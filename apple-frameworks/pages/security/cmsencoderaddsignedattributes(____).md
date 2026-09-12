> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencoderaddsignedattributes(_:_:)](https://developer.apple.com/documentation/security/cmsencoderaddsignedattributes(_:_:))

# CMSEncoderAddSignedAttributes(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Specifies attributes for a signed message.

## Declaration

```swift
func CMSEncoderAddSignedAttributes(_ cmsEncoder: CMSEncoder, _ signedAttributes: CMSSignedAttributes) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `signedAttributes`: Attribute flags as defined in [CMSSignedAttributes](cmssignedattributes.md).

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Attributes are optional for signed messages. They are not used for other types of CMS messages.  The use of attributes is described in section 2.5 of the S/MIME 3.1 specification.

If you do call this function, you must call it before the first call to the [CMSEncoderUpdateContent(\_:\_:\_:)](cmsencoderupdatecontent%28______%29.md) function.

## See Also

### Related Documentation

- [CMSEncoderUpdateContent(\_:\_:\_:)](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.

# CMSEncoderAddSignedAttributes (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Specifies attributes for a signed message.

## Declaration

```objectivec
OSStatus CMSEncoderAddSignedAttributes(CMSEncoderRef cmsEncoder, CMSSignedAttributes signedAttributes);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `signedAttributes`: Attribute flags as defined in [CMSSignedAttributes](cmssignedattributes.md).

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Attributes are optional for signed messages. They are not used for other types of CMS messages.  The use of attributes is described in section 2.5 of the S/MIME 3.1 specification.

If you do call this function, you must call it before the first call to the [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md) function.

## See Also

### Related Documentation

- [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
