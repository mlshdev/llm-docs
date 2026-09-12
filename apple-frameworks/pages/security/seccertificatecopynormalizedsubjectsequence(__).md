> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopynormalizedsubjectsequence(_:)](https://developer.apple.com/documentation/security/seccertificatecopynormalizedsubjectsequence(_:))

# SecCertificateCopyNormalizedSubjectSequence(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 3.2+

Retrieves the normalized subject sequence from a certificate.

## Declaration

```swift
func SecCertificateCopyNormalizedSubjectSequence(_ certificate: SecCertificate) -> CFData?
```

## Parameters

- `certificate`: The certificate from which to retrieve the data.

<a id="return-value"></a>

## Return Value

A data object containing the sequence or `NULL` on error. In Objective-C, free this object with a call to the [CFRelease](../corefoundation/cfrelease.md) function when you are done with it.

# SecCertificateCopyNormalizedSubjectSequence (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 3.2+

Retrieves the normalized subject sequence from a certificate.

## Declaration

```objectivec
CFDataRefSecCertificateCopyNormalizedSubjectSequence(SecCertificateRef certificate);
```

## Parameters

- `certificate`: The certificate from which to retrieve the data.

<a id="return-value"></a>

## Return Value

A data object containing the sequence or `NULL` on error. In Objective-C, free this object with a call to the [CFRelease](../corefoundation/cfrelease.md) function when you are done with it.
