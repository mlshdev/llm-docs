> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslcopyrequestedpeernamelength(_:_:)](https://developer.apple.com/documentation/security/sslcopyrequestedpeernamelength(_:_:))

# SSLCopyRequestedPeerNameLength(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15)

Obtains the hostname specified by the client in the ServerName extension (SNI). Server only.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLCopyRequestedPeerNameLength(_ ctx: SSLContext, _ peerNameLen: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `ctx`: An SSL session context reference.
- `peerNameLen`: The length of the peer name, as retrieved by calling the [SSLCopyRequestedPeerName(\_:\_:\_:)](sslcopyrequestedpeername%28______%29.md) function.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

# SSLCopyRequestedPeerNameLength (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Obtains the hostname specified by the client in the ServerName extension (SNI). Server only.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLCopyRequestedPeerNameLength(SSLContextRef ctx, size_t *peerNameLen);
```

## Parameters

- `ctx`: An SSL session context reference.
- `peerNameLen`: The length of the peer name, as retrieved by calling the [SSLCopyRequestedPeerName](sslcopyrequestedpeername%28______%29.md) function.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).
