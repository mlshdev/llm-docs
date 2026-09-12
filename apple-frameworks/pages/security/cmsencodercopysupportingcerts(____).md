> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodercopysupportingcerts(_:_:)](https://developer.apple.com/documentation/security/cmsencodercopysupportingcerts(_:_:))

# CMSEncoderCopySupportingCerts(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the certificates added to a message with `CMSEncoderAddSupportingCerts`.

## Declaration

```swift
func CMSEncoderCopySupportingCerts(_ cmsEncoder: CMSEncoder, _ certsOut: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `certsOut`: On return, points to a CFArray of `SecCertificateRef` objects. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A CMS message can contain arbitrary sets of certificates other than or in addition to those indicating the identity of signers. You can use this function to obtain any such certificates added with the `CMSEncoderAddSupportingCerts` function.  If `CMSEncoderAddSupportingCerts` has not been called, this function returns a `NULL` value for `certsOut`. Note that this function does not return the signing certificates, if any.

## See Also

### Related Documentation

- [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderAddSupportingCerts(\_:\_:)](cmsencoderaddsupportingcerts%28____%29.md): Adds certificates to a message.

# CMSEncoderCopySupportingCerts (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the certificates added to a message with `CMSEncoderAddSupportingCerts`.

## Declaration

```objectivec
OSStatus CMSEncoderCopySupportingCerts(CMSEncoderRef cmsEncoder, CFArrayRef*certsOut);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `certsOut`: On return, points to a CFArray of `SecCertificateRef` objects. You must use the `CFRelease` function to free this reference when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A CMS message can contain arbitrary sets of certificates other than or in addition to those indicating the identity of signers. You can use this function to obtain any such certificates added with the `CMSEncoderAddSupportingCerts` function.  If `CMSEncoderAddSupportingCerts` has not been called, this function returns a `NULL` value for `certsOut`. Note that this function does not return the signing certificates, if any.

## See Also

### Related Documentation

- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderAddSupportingCerts](cmsencoderaddsupportingcerts%28____%29.md): Adds certificates to a message.
