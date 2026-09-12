> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksenddatamode](https://developer.apple.com/documentation/gamekit/gksenddatamode)

# GKSendDataMode (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The mechanism used to transmit data to other peers.

> No longer supported

## Declaration

```swift
enum GKSendDataMode
```

## Topics

### Constants

- [GKSendDataMode.reliable](gksenddatamode/reliable.md): Deprecated. The data is sent continuously until it is successfully received by the intended recipients or the connection times out.
- [GKSendDataMode.unreliable](gksenddatamode/unreliable.md): Deprecated. The data is sent once and is not sent again if a transmission error occurred.

### Initializers

- [init(rawValue:)](gksenddatamode/init%28rawvalue_%29.md): Deprecated.

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
- [GKSessionError.Code](gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKSessionError](gksessionerror-swift.struct.md): Deprecated.
- [GKSessionMode](gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKVoiceChatServiceError.Code](gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
- [GKVoiceChatServiceError](gkvoicechatserviceerror-swift.struct.md): Deprecated.

# GKSendDataMode (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The mechanism used to transmit data to other peers.

> No longer supported

## Declaration

```objectivec
enum GKSendDataMode : int;
```

## Topics

### Constants

- [GKSendDataReliable](gksenddatamode/reliable.md): Deprecated. The data is sent continuously until it is successfully received by the intended recipients or the connection times out.
- [GKSendDataUnreliable](gksenddatamode/unreliable.md): Deprecated. The data is sent once and is not sent again if a transmission error occurred.

## See Also

### Deprecated enumerations

- [GKGameSessionErrorCode](gkgamesessionerror/code.md): Deprecated. Error codes for the game session domain.
- [GKPeerConnectionState](gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [GKPeerPickerConnectionType](gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSessionError](gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKSessionMode](gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKVoiceChatServiceError](gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
