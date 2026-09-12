> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsetanchorcertificatesonly(_:_:)](https://developer.apple.com/documentation/security/sectrustsetanchorcertificatesonly(_:_:))

# SecTrustSetAnchorCertificatesOnly(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reenables trusting built-in anchor certificates.

## Declaration

```swift
func SecTrustSetAnchorCertificatesOnly(_ trust: SecTrust, _ anchorCertificatesOnly: Bool) -> OSStatus
```

## Parameters

- `trust`: The trust management object containing the certificate you want to evaluate. A trust management object includes the certificate to be verified plus the policy or policies to be used in evaluating trust. It can optionally also include other certificates to be used in verifying the first certificate. Use the [SecTrustCreateWithCertificates(\_:\_:\_:)](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object.
- `anchorCertificatesOnly`: If `true`, disables trusting any anchors other than the ones passed in with the [SecTrustSetAnchorCertificates(\_:\_:)](sectrustsetanchorcertificates%28____%29.md) function.  If `false`, the built-in anchor certificates are also trusted. If [SecTrustSetAnchorCertificates(\_:\_:)](sectrustsetanchorcertificates%28____%29.md) is called and [SecTrustSetAnchorCertificatesOnly(\_:\_:)](sectrustsetanchorcertificatesonly%28____%29.md) is not called, only the anchors explicitly passed in are trusted.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## Mentioned In

- [Configuring a Trust](configuring-a-trust.md)

<a id="Discussion"></a>

## Discussion

It is safe to call this function concurrently on two or more threads as long as it is not used to change the value of a trust management object that is simultaneously being used by another function. For example, you cannot call this function on one thread at the same time as you are calling the [SecTrustEvaluateWithError(\_:\_:)](sectrustevaluatewitherror%28____%29.md) function for the same trust management object on another thread, but you can call this function and simultaneously evaluate a different trust management object on another thread. Similarly, calls to functions that return information about a trust management object (such as the [SecTrustCopyCustomAnchorCertificates(\_:\_:)](sectrustcopycustomanchorcertificates%28____%29.md) function) may fail or return an unexpected result if this function is simultaneously changing the same trust management object on another thread.

## See Also

### Related Documentation

- [SecTrustCopyCustomAnchorCertificates(\_:\_:)](sectrustcopycustomanchorcertificates%28____%29.md): Retrieves the custom anchor certificates, if any, used by a given trust.
- [SecTrustCopyAnchorCertificates(\_:)](sectrustcopyanchorcertificates%28__%29.md): Retrieves the anchor (root) certificates stored by macOS.

# SecTrustSetAnchorCertificatesOnly (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reenables trusting built-in anchor certificates.

## Declaration

```objectivec
OSStatus SecTrustSetAnchorCertificatesOnly(SecTrustRef trust, Boolean anchorCertificatesOnly);
```

## Parameters

- `trust`: The trust management object containing the certificate you want to evaluate. A trust management object includes the certificate to be verified plus the policy or policies to be used in evaluating trust. It can optionally also include other certificates to be used in verifying the first certificate. Use the [SecTrustCreateWithCertificates](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object.
- `anchorCertificatesOnly`: If `true`, disables trusting any anchors other than the ones passed in with the [SecTrustSetAnchorCertificates](sectrustsetanchorcertificates%28____%29.md) function.  If `false`, the built-in anchor certificates are also trusted. If [SecTrustSetAnchorCertificates](sectrustsetanchorcertificates%28____%29.md) is called and [SecTrustSetAnchorCertificatesOnly](sectrustsetanchorcertificatesonly%28____%29.md) is not called, only the anchors explicitly passed in are trusted.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## Mentioned In

- [Configuring a Trust](configuring-a-trust.md)

<a id="Discussion"></a>

## Discussion

It is safe to call this function concurrently on two or more threads as long as it is not used to change the value of a trust management object that is simultaneously being used by another function. For example, you cannot call this function on one thread at the same time as you are calling the [SecTrustEvaluateWithError](sectrustevaluatewitherror%28____%29.md) function for the same trust management object on another thread, but you can call this function and simultaneously evaluate a different trust management object on another thread. Similarly, calls to functions that return information about a trust management object (such as the [SecTrustCopyCustomAnchorCertificates](sectrustcopycustomanchorcertificates%28____%29.md) function) may fail or return an unexpected result if this function is simultaneously changing the same trust management object on another thread.

## See Also

### Related Documentation

- [SecTrustCopyCustomAnchorCertificates](sectrustcopycustomanchorcertificates%28____%29.md): Retrieves the custom anchor certificates, if any, used by a given trust.
- [SecTrustCopyAnchorCertificates](sectrustcopyanchorcertificates%28__%29.md): Retrieves the anchor (root) certificates stored by macOS.
