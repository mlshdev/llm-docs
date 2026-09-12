> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetalpnprotocols(_:_:)](https://developer.apple.com/documentation/security/sslsetalpnprotocols(_:_:))

# SSLSetALPNProtocols(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.15)

Sets the list of supported applicaiton layer protocols.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetALPNProtocols(_ context: SSLContext, _ protocols: CFArray) -> OSStatus
```

## Parameters

- `context`: The session context.
- `protocols`: An array of ASCII-encoded strings representing the supported protocols, such as `http/1.1`. See [RFC 7301](https://tools.ietf.org/html/rfc7301) for more details.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

# SSLSetALPNProtocols (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.15) · tvOS 11.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Sets the list of supported applicaiton layer protocols.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetALPNProtocols(SSLContextRef context, CFArrayRef protocols);
```

## Parameters

- `context`: The session context.
- `protocols`: An array of ASCII-encoded strings representing the supported protocols, such as `http/1.1`. See [RFC 7301](https://tools.ietf.org/html/rfc7301) for more details.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).
