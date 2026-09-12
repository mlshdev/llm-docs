> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustgetcertificatecount(_:)](https://developer.apple.com/documentation/security/sectrustgetcertificatecount(_:))

# SecTrustGetCertificateCount(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of certificates in an evaluated certificate chain.

## Declaration

```swift
func SecTrustGetCertificateCount(_ trust: SecTrust) -> CFIndex
```

## Parameters

- `trust`: The trust management object for the certificate that has been evaluated.  Use the [SecTrustCreateWithCertificates(\_:\_:\_:)](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object and the [SecTrustEvaluateWithError(\_:\_:)](sectrustevaluatewitherror%28____%29.md) function to evaluate the certificate chain.

<a id="return-value"></a>

## Return Value

The number of certificates in the certificate chain.

<a id="Discussion"></a>

## Discussion

Call the [SecTrustEvaluateWithError(\_:\_:)](sectrustevaluatewitherror%28____%29.md) function before calling this function.

# SecTrustGetCertificateCount (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of certificates in an evaluated certificate chain.

## Declaration

```objectivec
CFIndex SecTrustGetCertificateCount(SecTrustRef trust);
```

## Parameters

- `trust`: The trust management object for the certificate that has been evaluated.  Use the [SecTrustCreateWithCertificates](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object and the [SecTrustEvaluateWithError](sectrustevaluatewitherror%28____%29.md) function to evaluate the certificate chain.

<a id="return-value"></a>

## Return Value

The number of certificates in the certificate chain.

<a id="Discussion"></a>

## Discussion

Call the [SecTrustEvaluateWithError](sectrustevaluatewitherror%28____%29.md) function before calling this function.
