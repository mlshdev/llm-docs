> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksessionmode](https://developer.apple.com/documentation/gamekit/gksessionmode)

# GKSessionMode (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Modes that determine how a session interacts with other peers.

> No longer supported

## Declaration

```swift
enum GKSessionMode
```

## Topics

### Constants

- [GKSessionMode.server](gksessionmode/server.md): Deprecated. A server advertises itself to local devices using its [sessionID](gksession/sessionid.md) property.
- [GKSessionMode.client](gksessionmode/client.md): Deprecated. A client searches for servers advertising the same [sessionID](gksession/sessionid.md) property.
- [GKSessionMode.peer](gksessionmode/peer.md): Deprecated. A peer advertises like a server and searches like a client.

### Initializers

- [init(rawValue:)](gksessionmode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated enumerations

- [GKGameSessionError.Code](gkgamesessionerror/code.md): Deprecated. Error codes for the game session domain.
- [GKPeerConnectionState](gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [GKPeerPickerConnectionType](gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSendDataMode](gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionError.Code](gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKSessionError](gksessionerror-swift.struct.md): Deprecated.
- [GKVoiceChatServiceError.Code](gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
- [GKVoiceChatServiceError](gkvoicechatserviceerror-swift.struct.md): Deprecated.

# GKSessionMode (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Modes that determine how a session interacts with other peers.

> No longer supported

## Declaration

```objectivec
enum GKSessionMode : int;
```

## Topics

### Constants

- [GKSessionModeServer](gksessionmode/server.md): Deprecated. A server advertises itself to local devices using its [sessionID](gksession/sessionid.md) property.
- [GKSessionModeClient](gksessionmode/client.md): Deprecated. A client searches for servers advertising the same [sessionID](gksession/sessionid.md) property.
- [GKSessionModePeer](gksessionmode/peer.md): Deprecated. A peer advertises like a server and searches like a client.

## See Also

### Deprecated enumerations

- [GKGameSessionErrorCode](gkgamesessionerror/code.md): Deprecated. Error codes for the game session domain.
- [GKPeerConnectionState](gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [GKPeerPickerConnectionType](gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSendDataMode](gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionError](gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKVoiceChatServiceError](gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
