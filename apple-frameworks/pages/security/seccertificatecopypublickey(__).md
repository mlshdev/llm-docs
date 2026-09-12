> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopypublickey(_:)](https://developer.apple.com/documentation/security/seccertificatecopypublickey(_:))

# SecCertificateCopyPublicKey(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.3+ (deprecated in 12.0) · iPadOS 10.3+ (deprecated in 12.0) · Mac Catalyst 10.3+ (deprecated in 12.0) · macOS 10.3+ (deprecated in 10.14) · tvOS 10.2+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 5.0)

Retrieves the public key from a certificate.

> Use [SecCertificateCopyKey(\_:)](seccertificatecopykey%28__%29.md) instead.

## Declaration

```swift
func SecCertificateCopyPublicKey(_ certificate: SecCertificate) -> SecKey?
```

```swift
func SecCertificateCopyPublicKey(_ certificate: SecCertificate, _ key: UnsafeMutablePointer<SecKey?>) -> OSStatus
```

## Parameters

- `certificate`: The certificate object from which to retrieve the public key.
- `key`: In macOS, points to the public key for the specified certificate. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

In iOS, the certificate’s public key.

## Mentioned In

- [Examining a Certificate](examining-a-certificate.md)

<a id="discussion"></a>

## Discussion

In macOS, a result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecCertificateCopyPublicKey (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.3+ (deprecated in 12.0) · iPadOS 10.3+ (deprecated in 12.0) · macOS 10.3+ (deprecated in 10.14) · tvOS 10.2+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 5.0)

Retrieves the public key from a certificate.

> Use [SecCertificateCopyKey](seccertificatecopykey%28__%29.md) instead.

## Declaration

```objectivec
SecKeyRefSecCertificateCopyPublicKey(SecCertificateRef certificate);
```

```objectivec
OSStatus SecCertificateCopyPublicKey(SecCertificateRef certificate, SecKeyRef*key);
```

## Parameters

- `certificate`: The certificate object from which to retrieve the public key.
- `key`: In macOS, points to the public key for the specified certificate. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

In iOS, the certificate’s public key.

## Mentioned In

- [Examining a Certificate](examining-a-certificate.md)

<a id="discussion"></a>

## Discussion

In macOS, a result code. See [Security Framework Result Codes](security-framework-result-codes.md).
