> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetsessionconfig(_:_:)](https://developer.apple.com/documentation/security/sslsetsessionconfig(_:_:))

# SSLSetSessionConfig(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.15)

Sets a predefined configuration for the Secure Sockets Layer (SSL) session.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetSessionConfig(_ context: SSLContext, _ config: CFString) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `config`: The predefined configuration you want to apply to the SSL session. You can configure enabled protocol versions, enabled cipher suites, and the [SSLSessionOption.fallback](sslsessionoption/fallback.md) session option.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

# SSLSetSessionConfig (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.15) · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.0)

Sets a predefined configuration for the Secure Sockets Layer (SSL) session.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetSessionConfig(SSLContextRef context, CFStringRef config);
```

## Parameters

- `context`: An SSL session context reference.
- `config`: The predefined configuration you want to apply to the SSL session. You can configure enabled protocol versions, enabled cipher suites, and the [kSSLSessionOptionFallback](sslsessionoption/fallback.md) session option.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).
