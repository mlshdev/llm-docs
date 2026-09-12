> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslcopypeertrust(_:_:)](https://developer.apple.com/documentation/security/sslcopypeertrust(_:_:))

# SSLCopyPeerTrust(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.15)

Retrieves a trust management object for the certificate used by a session.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLCopyPeerTrust(_ context: SSLContext, _ trust: UnsafeMutablePointer<SecTrust?>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `trust`: On return, a trust management object you can use to evaluate trust for the certificate used by the session. A trust management object includes the certificate to be verified plus the policy or policies to be used in evaluating trust. See [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md) for functions to create and evaluate trust management objects. You must call the `CFRelease` function for this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function is valid any time after a handshake attempt.

# SSLCopyPeerTrust (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Retrieves a trust management object for the certificate used by a session.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLCopyPeerTrust(SSLContextRef context, SecTrustRef*trust);
```

## Parameters

- `context`: An SSL session context reference.
- `trust`: On return, a trust management object you can use to evaluate trust for the certificate used by the session. A trust management object includes the certificate to be verified plus the policy or policies to be used in evaluating trust. See [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md) for functions to create and evaluate trust management objects. You must call the `CFRelease` function for this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function is valid any time after a handshake attempt.
