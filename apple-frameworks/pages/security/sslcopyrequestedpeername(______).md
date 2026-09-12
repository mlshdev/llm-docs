> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslcopyrequestedpeername(_:_:_:)](https://developer.apple.com/documentation/security/sslcopyrequestedpeername(_:_:_:))

# SSLCopyRequestedPeerName(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15)

Determines the buffer size needed for the peer domain name.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLCopyRequestedPeerName(_ context: SSLContext, _ peerName: UnsafeMutablePointer<CChar>, _ peerNameLen: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `peerName`: The fully qualified domain name of the peer—for example, `store.apple.com`. The name is in the form of a C string, except that `NULL` termination is optional.
- `peerNameLen`: On return, points to the length of the peer domain name.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use the `peerNameLen` returned by this function when calling the [SSLCopyRequestedPeerNameLength(\_:\_:)](sslcopyrequestedpeernamelength%28____%29.md) function.

# SSLCopyRequestedPeerName (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Determines the buffer size needed for the peer domain name.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLCopyRequestedPeerName(SSLContextRef context, char *peerName, size_t *peerNameLen);
```

## Parameters

- `context`: An SSL session context reference.
- `peerName`: The fully qualified domain name of the peer—for example, `store.apple.com`. The name is in the form of a C string, except that `NULL` termination is optional.
- `peerNameLen`: On return, points to the length of the peer domain name.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use the `peerNameLen` returned by this function when calling the [SSLCopyRequestedPeerNameLength](sslcopyrequestedpeernamelength%28____%29.md) function.
