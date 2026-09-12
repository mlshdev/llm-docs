> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetprotocolversionmax(_:_:)](https://developer.apple.com/documentation/security/sslgetprotocolversionmax(_:_:))

# SSLGetProtocolVersionMax(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15)

Gets the maximum protocol version allowed by the application for a given SSL context.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetProtocolVersionMax(_ context: SSLContext, _ maxVersion: UnsafeMutablePointer<SSLProtocol>) -> OSStatus
```

## Parameters

- `context`: The SSL context associated with the connection.
- `maxVersion`: The address of an [SSLProtocol](sslprotocol.md) integer where the maximum version should be stored. See [SSLProtocol](sslprotocol.md) for a list of possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

# SSLGetProtocolVersionMax (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Gets the maximum protocol version allowed by the application for a given SSL context.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetProtocolVersionMax(SSLContextRef context, SSLProtocol *maxVersion);
```

## Parameters

- `context`: The SSL context associated with the connection.
- `maxVersion`: The address of an [SSLProtocol](sslprotocol.md) integer where the maximum version should be stored. See [SSLProtocol](sslprotocol.md) for a list of possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).
