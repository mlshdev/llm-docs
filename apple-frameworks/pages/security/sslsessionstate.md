> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsessionstate](https://developer.apple.com/documentation/security/sslsessionstate)

# SSLSessionState (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The flags that represent the state of an SSL session.

## Declaration

```swift
@frozen enum SSLSessionState
```

## Topics

### Constants

- [SSLSessionState.idle](sslsessionstate/idle.md): Deprecated. No I/O has been performed yet.
- [SSLSessionState.handshake](sslsessionstate/handshake.md): Deprecated. The SSL handshake is in progress.
- [SSLSessionState.connected](sslsessionstate/connected.md): Deprecated. The SSL handshake is complete; the connection is ready for normal I/O.
- [SSLSessionState.closed](sslsessionstate/closed.md): Deprecated. The connection closed normally.
- [SSLSessionState.aborted](sslsessionstate/aborted.md): Deprecated. The connection aborted.

### Initializers

- [init(rawValue:)](sslsessionstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SSLSessionState (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The flags that represent the state of an SSL session.

## Declaration

```objectivec
enum SSLSessionState : int;
```

## Topics

### Constants

- [kSSLIdle](sslsessionstate/idle.md): Deprecated. No I/O has been performed yet.
- [kSSLHandshake](sslsessionstate/handshake.md): Deprecated. The SSL handshake is in progress.
- [kSSLConnected](sslsessionstate/connected.md): Deprecated. The SSL handshake is complete; the connection is ready for normal I/O.
- [kSSLClosed](sslsessionstate/closed.md): Deprecated. The connection closed normally.
- [kSSLAborted](sslsessionstate/aborted.md): Deprecated. The connection aborted.
