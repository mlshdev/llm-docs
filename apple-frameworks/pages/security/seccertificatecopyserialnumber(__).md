> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopyserialnumber(_:)](https://developer.apple.com/documentation/security/seccertificatecopyserialnumber(_:))

# SecCertificateCopySerialNumber(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.3+ (deprecated in 11.0) · iPadOS 10.3+ (deprecated in 11.0) · Mac Catalyst 10.3+ (deprecated in 11.0) · macOS 10.7+ (deprecated in 10.13) · tvOS 10.2+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Returns a copy of a certificate’s serial number.

> Use [SecCertificateCopySerialNumberData(\_:\_:)](seccertificatecopyserialnumberdata%28____%29.md) instead.

## Declaration

```swift
func SecCertificateCopySerialNumber(_ certificate: SecCertificate) -> CFData?
```

```swift
func SecCertificateCopySerialNumber(_ certificate: SecCertificate, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> CFData?
```

## Parameters

- `certificate`: The certificate from which the serial number should be copied.
- `error`: A pointer to a [CFError](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

A data instance containing a DER-encoded integer for the certificate’s serial number (without the tag and length fields) or `nil` if an error occurred. In Objective-C, free this object with a call to [CFRelease](../corefoundation/cfrelease.md) when you are done with it.

# SecCertificateCopySerialNumber (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.3+ (deprecated in 11.0) · iPadOS 10.3+ (deprecated in 11.0) · macOS 10.7+ (deprecated in 10.13) · tvOS 10.2+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Returns a copy of a certificate’s serial number.

> Use [SecCertificateCopySerialNumberData](seccertificatecopyserialnumberdata%28____%29.md) instead.

## Declaration

```objectivec
CFDataRefSecCertificateCopySerialNumber(SecCertificateRef certificate);
```

```objectivec
CFDataRefSecCertificateCopySerialNumber(SecCertificateRef certificate, CFErrorRef*error);
```

## Parameters

- `certificate`: The certificate from which the serial number should be copied.
- `error`: A pointer to a [CFErrorRef](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

A data instance containing a DER-encoded integer for the certificate’s serial number (without the tag and length fields) or `nil` if an error occurred. In Objective-C, free this object with a call to [CFRelease](../corefoundation/cfrelease.md) when you are done with it.
