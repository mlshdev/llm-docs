> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopynormalizedsubjectcontent(_:_:)](https://developer.apple.com/documentation/security/seccertificatecopynormalizedsubjectcontent(_:_:))

# SecCertificateCopyNormalizedSubjectContent(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.12.4)

Returns a normalized copy of the distinguished name (DN) of the subject of a certificate.

> SecCertificateCopyNormalizedSubjectContent is deprecated. Use SecCertificateCopyNormalizedSubjectSequence instead.

## Declaration

```swift
func SecCertificateCopyNormalizedSubjectContent(_ certificate: SecCertificate, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> CFData?
```

## Parameters

- `certificate`: The certificate from which the subject’s distinguished name should be copied.
- `error`: A pointer to a [CFError](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

A data object containing a DER-encoded X.509 distinguished name suitable for use with [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md). Returns `NULL` if an error occurred. In Objective-C, free this object with a call to the [CFRelease](../corefoundation/cfrelease.md) function when you are done with it.

<a id="Discussion"></a>

## Discussion

To obtain a copy of the subject’s distinguished name in a format suitable for display purposes, call [SecCertificateCopyValues(\_:\_:\_:)](seccertificatecopyvalues%28______%29.md) instead.

# SecCertificateCopyNormalizedSubjectContent (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.12.4)

Returns a normalized copy of the distinguished name (DN) of the subject of a certificate.

> SecCertificateCopyNormalizedSubjectContent is deprecated. Use SecCertificateCopyNormalizedSubjectSequence instead.

## Declaration

```objectivec
CFDataRefSecCertificateCopyNormalizedSubjectContent(SecCertificateRef certificate, CFErrorRef*error);
```

## Parameters

- `certificate`: The certificate from which the subject’s distinguished name should be copied.
- `error`: A pointer to a [CFErrorRef](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

A data object containing a DER-encoded X.509 distinguished name suitable for use with [SecItemCopyMatching](secitemcopymatching%28____%29.md). Returns `NULL` if an error occurred. In Objective-C, free this object with a call to the [CFRelease](../corefoundation/cfrelease.md) function when you are done with it.

<a id="Discussion"></a>

## Discussion

To obtain a copy of the subject’s distinguished name in a format suitable for display purposes, call [SecCertificateCopyValues](seccertificatecopyvalues%28______%29.md) instead.
