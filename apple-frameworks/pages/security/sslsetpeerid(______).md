> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetpeerid(_:_:_:)](https://developer.apple.com/documentation/security/sslsetpeerid(_:_:_:))

# SSLSetPeerID(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Specifies data that is sufficient to uniquely identify the peer of the current session.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetPeerID(_ context: SSLContext, _ peerID: UnsafeRawPointer?, _ peerIDLen: Int) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `peerID`: A pointer to a buffer containing the peer ID data to set.
- `peerIDLen`: The length of the peer ID data buffer.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Secure Transport uses the peer ID to match the peer of an SSL session with the peer of a previous session in order to resume an interrupted session. If the peer IDs match, Secure Transport attempts to resume the session with the same parameters as used in the previous session with the same peer.

The data you provide to this function is treated as an opaque blob by Secure Transport but is compared byte for byte with previous peer ID data values set by the current application. An example of peer ID data is an IP address and port, stored in some caller-private manner. Calling this function is optional but is required if you want the session to be resumable. If you do call this function, you must call it prior to the handshake for the current session.

You can use the [SSLGetPeerID(\_:\_:\_:)](sslgetpeerid%28______%29.md) function to retrieve the peer ID data for the current session.

# SSLSetPeerID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Specifies data that is sufficient to uniquely identify the peer of the current session.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetPeerID(SSLContextRef context, const void *peerID, size_t peerIDLen);
```

## Parameters

- `context`: An SSL session context reference.
- `peerID`: A pointer to a buffer containing the peer ID data to set.
- `peerIDLen`: The length of the peer ID data buffer.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Secure Transport uses the peer ID to match the peer of an SSL session with the peer of a previous session in order to resume an interrupted session. If the peer IDs match, Secure Transport attempts to resume the session with the same parameters as used in the previous session with the same peer.

The data you provide to this function is treated as an opaque blob by Secure Transport but is compared byte for byte with previous peer ID data values set by the current application. An example of peer ID data is an IP address and port, stored in some caller-private manner. Calling this function is optional but is required if you want the session to be resumable. If you do call this function, you must call it prior to the handshake for the current session.

You can use the [SSLGetPeerID](sslgetpeerid%28______%29.md) function to retrieve the peer ID data for the current session.
