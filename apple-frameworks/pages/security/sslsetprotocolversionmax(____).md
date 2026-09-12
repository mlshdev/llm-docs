> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetprotocolversionmax(_:_:)](https://developer.apple.com/documentation/security/sslsetprotocolversionmax(_:_:))

# SSLSetProtocolVersionMax(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15)

Sets the maximum protocol version allowed by the application for a given SSL context.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetProtocolVersionMax(_ context: SSLContext, _ maxVersion: SSLProtocol) -> OSStatus
```

## Parameters

- `context`: The SSL context associated with the connection.
- `maxVersion`: The new maximum version ([SSLProtocol.tlsProtocol1](sslprotocol/tlsprotocol1.md), for example). See [SSLProtocol](sslprotocol.md) for a complete list.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

# SSLSetProtocolVersionMax (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Sets the maximum protocol version allowed by the application for a given SSL context.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetProtocolVersionMax(SSLContextRef context, SSLProtocol maxVersion);
```

## Parameters

- `context`: The SSL context associated with the connection.
- `maxVersion`: The new maximum version ([kTLSProtocol1](sslprotocol/tlsprotocol1.md), for example). See [SSLProtocol](sslprotocol.md) for a complete list.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).
