> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustcopypublickey(_:)](https://developer.apple.com/documentation/security/sectrustcopypublickey(_:))

# SecTrustCopyPublicKey(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 14.0) · iPadOS 2.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.7+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

Returns the public key for a leaf certificate after it has been evaluated.

## Declaration

```swift
func SecTrustCopyPublicKey(_ trust: SecTrust) -> SecKey?
```

## Parameters

- `trust`: The trust management object for the certificate that has been evaluated.  Use the [SecTrustCreateWithCertificates(\_:\_:\_:)](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object.

<a id="return-value"></a>

## Return Value

The leaf certificate’s public key, or `NULL` if it the public key could not be extracted (this can happen with DSA certificate chains if the parameters in the chain cannot be found). In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

## Mentioned In

- [Evaluating a Trust and Parsing the Result](evaluating-a-trust-and-parsing-the-result.md)
- [Getting an Existing Key](getting-an-existing-key.md)

<a id="Discussion"></a>

## Discussion

Call the [SecTrustEvaluateWithError(\_:\_:)](sectrustevaluatewitherror%28____%29.md) function before calling this function.

When you call this function, it attempts to return the public key of the leaf certificate, even if the trust evaluation was unsuccessful. Even if the trust evaluation was successful, this function might still return `NULL`—for example, if the leaf certificate’s key can’t be extracted for some reason.

# SecTrustCopyPublicKey (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 14.0) · iPadOS 2.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.7+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 7.0)

Returns the public key for a leaf certificate after it has been evaluated.

## Declaration

```objectivec
SecKeyRefSecTrustCopyPublicKey(SecTrustRef trust);
```

## Parameters

- `trust`: The trust management object for the certificate that has been evaluated.  Use the [SecTrustCreateWithCertificates](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object.

<a id="return-value"></a>

## Return Value

The leaf certificate’s public key, or `NULL` if it the public key could not be extracted (this can happen with DSA certificate chains if the parameters in the chain cannot be found). In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

## Mentioned In

- [Evaluating a Trust and Parsing the Result](evaluating-a-trust-and-parsing-the-result.md)
- [Getting an Existing Key](getting-an-existing-key.md)

<a id="Discussion"></a>

## Discussion

Call the [SecTrustEvaluateWithError](sectrustevaluatewitherror%28____%29.md) function before calling this function.

When you call this function, it attempts to return the public key of the leaf certificate, even if the trust evaluation was unsuccessful. Even if the trust evaluation was successful, this function might still return `NULL`—for example, if the leaf certificate’s key can’t be extracted for some reason.
