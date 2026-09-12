> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetprotocolversionmin(_:_:)](https://developer.apple.com/documentation/security/sslgetprotocolversionmin(_:_:))

# SSLGetProtocolVersionMin(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15)

Gets the minimum protocol version allowed by the application for a given SSL context.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetProtocolVersionMin(_ context: SSLContext, _ minVersion: UnsafeMutablePointer<SSLProtocol>) -> OSStatus
```

## Parameters

- `context`: The SSL context associated with the connection.
- `minVersion`: The address of an [SSLProtocol](sslprotocol.md) integer where the minimum version should be stored. See [SSLProtocol](sslprotocol.md) for a list of possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

# SSLGetProtocolVersionMin (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Gets the minimum protocol version allowed by the application for a given SSL context.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetProtocolVersionMin(SSLContextRef context, SSLProtocol *minVersion);
```

## Parameters

- `context`: The SSL context associated with the connection.
- `minVersion`: The address of an [SSLProtocol](sslprotocol.md) integer where the minimum version should be stored. See [SSLProtocol](sslprotocol.md) for a list of possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).
