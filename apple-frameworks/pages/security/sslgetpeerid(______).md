> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetpeerid(_:_:_:)](https://developer.apple.com/documentation/security/sslgetpeerid(_:_:_:))

# SSLGetPeerID(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Retrieves the current peer ID data.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetPeerID(_ context: SSLContext, _ peerID: UnsafeMutablePointer<UnsafeRawPointer?>, _ peerIDLen: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `peerID`: On return, points to a buffer containing the peer ID data.
- `peerIDLen`: On return, the length of the peer ID data buffer.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

If the peer ID data for this context was not set by calling the [SSLSetPeerID(\_:\_:\_:)](sslsetpeerid%28______%29.md) function, this function returns a `NULL` pointer in the `peerID` parameter, and `0` in the `peerIDLen` parameter.

# SSLGetPeerID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Retrieves the current peer ID data.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetPeerID(SSLContextRef context, const void **peerID, size_t *peerIDLen);
```

## Parameters

- `context`: An SSL session context reference.
- `peerID`: On return, points to a buffer containing the peer ID data.
- `peerIDLen`: On return, the length of the peer ID data buffer.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

If the peer ID data for this context was not set by calling the [SSLSetPeerID](sslsetpeerid%28______%29.md) function, this function returns a `NULL` pointer in the `peerID` parameter, and `0` in the `peerIDLen` parameter.
