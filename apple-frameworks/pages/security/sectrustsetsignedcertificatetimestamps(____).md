> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsetsignedcertificatetimestamps(_:_:)](https://developer.apple.com/documentation/security/sectrustsetsignedcertificatetimestamps(_:_:))

# SecTrustSetSignedCertificateTimestamps(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.1.1+ · iPadOS 12.1.1+ · Mac Catalyst 13.1+ · macOS 10.14.2+ · tvOS 12.1.1+ · visionOS 1.0+ · watchOS 5.1.1+

Attaches signed certificate timestamp data to a trust object.

## Declaration

```swift
func SecTrustSetSignedCertificateTimestamps(_ trust: SecTrust, _ sctArray: CFArray?) -> OSStatus
```

## Parameters

- `trust`: The trust object to which the timestamp data should be attached.
- `sctArray`: An array of [CFData](../corefoundation/cfdata.md) instances, each of which contains a signed certificate timestamp.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use this function to provide secure certificate timestamps, which might be obtained during a TLS/SSL handshake, as input to a trust evaluation. For more information, see [RFC 6962](https://tools.ietf.org/html/rfc6962).

# SecTrustSetSignedCertificateTimestamps (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.1.1+ · iPadOS 12.1.1+ · Mac Catalyst 13.1+ · macOS 10.14.2+ · tvOS 12.1.1+ · visionOS 1.0+ · watchOS 5.1.1+

Attaches signed certificate timestamp data to a trust object.

## Declaration

```objectivec
OSStatus SecTrustSetSignedCertificateTimestamps(SecTrustRef trust, CFArrayRef sctArray);
```

## Parameters

- `trust`: The trust object to which the timestamp data should be attached.
- `sctArray`: An array of [CFDataRef](../corefoundation/cfdata.md) instances, each of which contains a signed certificate timestamp.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use this function to provide secure certificate timestamps, which might be obtained during a TLS/SSL handshake, as input to a trust evaluation. For more information, see [RFC 6962](https://tools.ietf.org/html/rfc6962).
