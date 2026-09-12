> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopycommonname(_:_:)](https://developer.apple.com/documentation/security/seccertificatecopycommonname(_:_:))

# SecCertificateCopyCommonName(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 3.2+

Retrieves the common name of the subject of a certificate.

## Declaration

```swift
func SecCertificateCopyCommonName(_ certificate: SecCertificate, _ commonName: UnsafeMutablePointer<CFString?>) -> OSStatus
```

## Parameters

- `certificate`: The certificate object from which to retrieve the common name.
- `commonName`: On return, points to the common name. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecCertificateCopyCommonName (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 3.2+

Retrieves the common name of the subject of a certificate.

## Declaration

```objectivec
OSStatus SecCertificateCopyCommonName(SecCertificateRef certificate, CFStringRef*commonName);
```

## Parameters

- `certificate`: The certificate object from which to retrieve the common name.
- `commonName`: On return, points to the common name. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
