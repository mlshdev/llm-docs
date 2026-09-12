> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsetocspresponse(_:_:)](https://developer.apple.com/documentation/security/sectrustsetocspresponse(_:_:))

# SecTrustSetOCSPResponse(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attaches Online Certificate Status Protocol (OSCP) response data to a trust object.

## Declaration

```swift
func SecTrustSetOCSPResponse(_ trust: SecTrust, _ responseData: CFTypeRef?) -> OSStatus
```

## Parameters

- `trust`: The trust evaluation object to modify.
- `responseData`: Either a [CFData](../corefoundation/cfdata.md) object containing a single DER-encoded OCSPResponse (per [RFC2560](https://tools.ietf.org/html/rfc2560)), or a [CFArray](../corefoundation/cfarray.md) of these.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function allows the caller to provide OCSPResponse data (which may be obtained during a TLS/SSL handshake, per [RFC3546](https://tools.ietf.org/html/rfc3546)) as input to a trust evaluation. If this data is available, it can obviate the need to contact an OCSP server for current revocation information.

# SecTrustSetOCSPResponse (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attaches Online Certificate Status Protocol (OSCP) response data to a trust object.

## Declaration

```objectivec
OSStatus SecTrustSetOCSPResponse(SecTrustRef trust, CFTypeRef responseData);
```

## Parameters

- `trust`: The trust evaluation object to modify.
- `responseData`: Either a [CFDataRef](../corefoundation/cfdata.md) object containing a single DER-encoded OCSPResponse (per [RFC2560](https://tools.ietf.org/html/rfc2560)), or a [CFArrayRef](../corefoundation/cfarray.md) of these.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function allows the caller to provide OCSPResponse data (which may be obtained during a TLS/SSL handshake, per [RFC3546](https://tools.ietf.org/html/rfc3546)) as input to a trust evaluation. If this data is available, it can obviate the need to contact an OCSP server for current revocation information.
