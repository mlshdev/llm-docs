> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustgetcertificateatindex(_:_:)](https://developer.apple.com/documentation/security/sectrustgetcertificateatindex(_:_:))

# SecTrustGetCertificateAtIndex(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.7+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

Returns a specific certificate from the certificate chain used to evaluate trust.

## Declaration

```swift
func SecTrustGetCertificateAtIndex(_ trust: SecTrust, _ ix: CFIndex) -> SecCertificate?
```

## Parameters

- `trust`: The trust management object for the certificate that has been evaluated.  Use the [SecTrustCreateWithCertificates(\_:\_:\_:)](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object and the [SecTrustEvaluateWithError(\_:\_:)](sectrustevaluatewitherror%28____%29.md) function to evaluate the certificate chain.
- `ix`: The index number of the requested certificate. Index numbers start at 0 for the leaf certificate and end at the anchor (or the last certificate if no anchor was found). Use the [SecTrustGetCertificateCount(\_:)](sectrustgetcertificatecount%28__%29.md) function to get the total number of certificates in the chain.

<a id="return-value"></a>

## Return Value

A certificate object for the requested certificate.

<a id="Discussion"></a>

## Discussion

Call the [SecTrustEvaluateWithError(\_:\_:)](sectrustevaluatewitherror%28____%29.md) function before calling this function.

# SecTrustGetCertificateAtIndex (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.7+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

Returns a specific certificate from the certificate chain used to evaluate trust.

## Declaration

```objectivec
SecCertificateRefSecTrustGetCertificateAtIndex(SecTrustRef trust, CFIndex ix);
```

## Parameters

- `trust`: The trust management object for the certificate that has been evaluated.  Use the [SecTrustCreateWithCertificates](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object and the [SecTrustEvaluateWithError](sectrustevaluatewitherror%28____%29.md) function to evaluate the certificate chain.
- `ix`: The index number of the requested certificate. Index numbers start at 0 for the leaf certificate and end at the anchor (or the last certificate if no anchor was found). Use the [SecTrustGetCertificateCount](sectrustgetcertificatecount%28__%29.md) function to get the total number of certificates in the chain.

<a id="return-value"></a>

## Return Value

A certificate object for the requested certificate.

<a id="Discussion"></a>

## Discussion

Call the [SecTrustEvaluateWithError](sectrustevaluatewitherror%28____%29.md) function before calling this function.
