> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslrehandshake(_:)](https://developer.apple.com/documentation/security/sslrehandshake(_:))

# SSLReHandshake(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.15)

Requests renegotiation of the SSL handshake. Server only.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLReHandshake(_ context: SSLContext) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

On success, call the [SSLHandshake(\_:)](sslhandshake%28__%29.md) function or the [SSLRead(\_:\_:\_:\_:)](sslread%28________%29.md) function, or both, as appropriate, as you would for the original handshake.

# SSLReHandshake (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.15) · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.0)

Requests renegotiation of the SSL handshake. Server only.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLReHandshake(SSLContextRef context);
```

## Parameters

- `context`: An SSL session context reference.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

On success, call the [SSLHandshake](sslhandshake%28__%29.md) function or the [SSLRead](sslread%28________%29.md) function, or both, as appropriate, as you would for the original handshake.
