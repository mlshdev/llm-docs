> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetclientcertificatestate(_:_:)](https://developer.apple.com/documentation/security/sslgetclientcertificatestate(_:_:))

# SSLGetClientCertificateState(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.15)

Retrieves the exchange status of the client certificate.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetClientCertificateState(_ context: SSLContext, _ clientState: UnsafeMutablePointer<SSLClientCertificateState>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `clientState`: On return, a pointer to a value indicating the state of the client certificate exchange. See [SSLClientCertificateState](sslclientcertificatestate.md) for a list of possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

The value returned reflects the latest change in the state of the client certificate exchange. If either peer initiates a renegotiation attempt, Secure Transport resets the state to `kSSLClientCertNone`.

# SSLGetClientCertificateState (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Retrieves the exchange status of the client certificate.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetClientCertificateState(SSLContextRef context, SSLClientCertificateState *clientState);
```

## Parameters

- `context`: An SSL session context reference.
- `clientState`: On return, a pointer to a value indicating the state of the client certificate exchange. See [SSLClientCertificateState](sslclientcertificatestate.md) for a list of possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

The value returned reflects the latest change in the state of the client certificate exchange. If either peer initiates a renegotiation attempt, Secure Transport resets the state to `kSSLClientCertNone`.
