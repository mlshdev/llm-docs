> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkpeerconnectionstate](https://developer.apple.com/documentation/gamekit/gkpeerconnectionstate)

# GKPeerConnectionState (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The state of a peer known to the session.

> No longer supported

## Declaration

```swift
enum GKPeerConnectionState
```

<a id="overview"></a>

## Overview

States are not mutually exclusive. For example, a peer can be available for other peers to discover while it is attempting to connect to another peer.

## Topics

### Constants

- [GKPeerConnectionState.stateAvailable](gkpeerconnectionstate/stateavailable.md): Deprecated. A peer not connected to the session, but one that the session can connect to.
- [GKPeerConnectionState.stateUnavailable](gkpeerconnectionstate/stateunavailable.md): Deprecated. A peer that is no longer interested in receiving connections.
- [GKPeerConnectionState.stateConnected](gkpeerconnectionstate/stateconnected.md): Deprecated. A peer connected to the session.
- [GKPeerConnectionState.stateDisconnected](gkpeerconnectionstate/statedisconnected.md): Deprecated. A peer that disconnected from the session.
- [GKPeerConnectionState.stateConnecting](gkpeerconnectionstate/stateconnecting.md): Deprecated. A peer attempting to connect to the session.

### Enumeration Cases

- [GKPeerConnectionState.stateConnectedRelay](gkpeerconnectionstate/stateconnectedrelay.md): Deprecated.

### Initializers

- [init(rawValue:)](gkpeerconnectionstate/init%28rawvalue_%29.md): Deprecated.

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
- [GKPeerPickerConnectionType](gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSendDataMode](gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionError.Code](gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKSessionError](gksessionerror-swift.struct.md): Deprecated.
- [GKSessionMode](gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKVoiceChatServiceError.Code](gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
- [GKVoiceChatServiceError](gkvoicechatserviceerror-swift.struct.md): Deprecated.

# GKPeerConnectionState (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The state of a peer known to the session.

> No longer supported

## Declaration

```objectivec
enum GKPeerConnectionState : int;
```

<a id="overview"></a>

## Overview

States are not mutually exclusive. For example, a peer can be available for other peers to discover while it is attempting to connect to another peer.

## Topics

### Constants

- [GKPeerStateAvailable](gkpeerconnectionstate/stateavailable.md): Deprecated. A peer not connected to the session, but one that the session can connect to.
- [GKPeerStateUnavailable](gkpeerconnectionstate/stateunavailable.md): Deprecated. A peer that is no longer interested in receiving connections.
- [GKPeerStateConnected](gkpeerconnectionstate/stateconnected.md): Deprecated. A peer connected to the session.
- [GKPeerStateDisconnected](gkpeerconnectionstate/statedisconnected.md): Deprecated. A peer that disconnected from the session.
- [GKPeerStateConnecting](gkpeerconnectionstate/stateconnecting.md): Deprecated. A peer attempting to connect to the session.

### Enumeration Cases

- [GKPeerStateConnectedRelay](gkpeerconnectionstate/stateconnectedrelay.md): Deprecated.

## See Also

### Deprecated enumerations

- [GKGameSessionErrorCode](gkgamesessionerror/code.md): Deprecated. Error codes for the game session domain.
- [GKPeerPickerConnectionType](gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSendDataMode](gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionError](gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKSessionMode](gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKVoiceChatServiceError](gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
