> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopysubjectsummary(_:)](https://developer.apple.com/documentation/security/seccertificatecopysubjectsummary(_:))

# SecCertificateCopySubjectSummary(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a human-readable summary of a certificate.

## Declaration

```swift
func SecCertificateCopySubjectSummary(_ certificate: SecCertificate) -> CFString?
```

## Parameters

- `certificate`: The certificate object for which you wish to return a summary string.

<a id="return-value"></a>

## Return Value

A string that contains a human-readable summary of the contents of the certificate. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it. Returns `NULL` if the data passed in the `certificate` parameter is not a valid certificate object.

## Mentioned In

- [Examining a Certificate](examining-a-certificate.md)
- [Importing an Identity](importing-an-identity.md)

<a id="Discussion"></a>

## Discussion

Because all the data in the string comes from the certificate, the string is in whatever language is used in the certificate.

## See Also

### Related Documentation

- [SecCertificateCreateWithData(\_:\_:)](seccertificatecreatewithdata%28____%29.md): Creates a certificate object from a DER representation of a certificate.

# SecCertificateCopySubjectSummary (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a human-readable summary of a certificate.

## Declaration

```objectivec
CFStringRefSecCertificateCopySubjectSummary(SecCertificateRef certificate);
```

## Parameters

- `certificate`: The certificate object for which you wish to return a summary string.

<a id="return-value"></a>

## Return Value

A string that contains a human-readable summary of the contents of the certificate. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it. Returns `NULL` if the data passed in the `certificate` parameter is not a valid certificate object.

## Mentioned In

- [Examining a Certificate](examining-a-certificate.md)
- [Importing an Identity](importing-an-identity.md)

<a id="Discussion"></a>

## Discussion

Because all the data in the string comes from the certificate, the string is in whatever language is used in the certificate.

## See Also

### Related Documentation

- [SecCertificateCreateWithData](seccertificatecreatewithdata%28____%29.md): Creates a certificate object from a DER representation of a certificate.
