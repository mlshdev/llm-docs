> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetnegotiatedprotocolversion(_:_:)](https://developer.apple.com/documentation/security/sslgetnegotiatedprotocolversion(_:_:))

# SSLGetNegotiatedProtocolVersion(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Obtains the negotiated protocol version of the active session.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetNegotiatedProtocolVersion(_ context: SSLContext, _ protocol: UnsafeMutablePointer<SSLProtocol>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `protocol`: On return, points to the negotiated protocol version of the active session. The value is set to [SSLProtocol.sslProtocolUnknown](sslprotocol/sslprotocolunknown.md) if no SSL session is in progress.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function retrieves the version of the Secure Sockets Layer (SSL) or Transport Layer Security (TLS) protocol negotiated for the session. Note that the negotiated protocol may not be the same as your preferred protocol, depending on which protocol versions you enabled with the [SSLSetProtocolVersionEnabled](sslsetprotocolversionenabled.md) function. This function can return any of the following values:

- `kSSLProtocol2`
- `kSSLProtocol3`
- `kTLSProtocol1`
- `kSSLProtocolUnknown`

# SSLGetNegotiatedProtocolVersion (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Obtains the negotiated protocol version of the active session.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetNegotiatedProtocolVersion(SSLContextRef context, SSLProtocol *protocol);
```

## Parameters

- `context`: An SSL session context reference.
- `protocol`: On return, points to the negotiated protocol version of the active session. The value is set to [kSSLProtocolUnknown](sslprotocol/sslprotocolunknown.md) if no SSL session is in progress.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function retrieves the version of the Secure Sockets Layer (SSL) or Transport Layer Security (TLS) protocol negotiated for the session. Note that the negotiated protocol may not be the same as your preferred protocol, depending on which protocol versions you enabled with the [SSLSetProtocolVersionEnabled](sslsetprotocolversionenabled.md) function. This function can return any of the following values:

- `kSSLProtocol2`
- `kSSLProtocol3`
- `kTLSProtocol1`
- `kSSLProtocolUnknown`
