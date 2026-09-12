> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksessionerror-swift.struct/code](https://developer.apple.com/documentation/gamekit/gksessionerror-swift.struct/code)

# GKSessionError.Code (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Error codes for the session error domain.

> No longer supported

## Declaration

```swift
enum Code
```

## Topics

### Constants

- [GKSessionError.Code.invalidParameterError](code/invalidparametererror.md): Deprecated. A parameter had an unexpected value.
- [GKSessionError.Code.peerNotFoundError](code/peernotfounderror.md): Deprecated. A peer with the specified `peerID` string could not be found.
- [GKSessionError.Code.declinedError](code/declinederror.md): Deprecated. The peer your application tried to connect to refused the connection.
- [GKSessionError.Code.timedOutError](code/timedouterror.md): Deprecated. The operation could not be completed in the specified timeout period.
- [GKSessionError.Code.cancelledError](code/cancellederror.md): Deprecated. A peer that invited the session to connect to them canceled the connection request.
- [GKSessionError.Code.connectionFailedError](code/connectionfailederror.md): Deprecated. The attempt to establish a connection with another peer failed.
- [GKSessionError.Code.connectionClosedError](code/connectionclosederror.md): Deprecated. The connection to another peer closed unexpectedly.
- [GKSessionError.Code.dataTooBigError](code/datatoobigerror.md): Deprecated. The data your application attempted to send was too large for the session to transmit in a single call.
- [GKSessionError.Code.notConnectedError](code/notconnectederror.md): Deprecated. Reserved for future use.
- [GKSessionError.Code.cannotEnableError](code/cannotenableerror.md): Deprecated. Bluetooth is not currently available.
- [GKSessionError.Code.inProgressError](code/inprogresserror.md): Deprecated. The peer your application attempted to connect to has already requested a connection to your session.
- [GKSessionError.Code.connectivityError](code/connectivityerror.md): Deprecated. An error occurred in the [GKSession](../gksession.md) object’s connection code.
- [GKSessionError.Code.transportError](code/transporterror.md): Deprecated. An error occurred in the [GKSession](../gksession.md) object’s transport code.
- [GKSessionError.Code.internalError](code/internalerror.md): Deprecated. A serious error occurred inside [GKSession](../gksession.md).
- [GKSessionError.Code.unknownError](code/unknownerror.md): Deprecated. Reserved for when the error does not fit in another category above.
- [GKSessionError.Code.systemError](code/systemerror.md): Deprecated. An error occurred outside of the [GKSession](../gksession.md) object’s control, such as memory allocation.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md): Deprecated.

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

- [GKGameSessionError.Code](../gkgamesessionerror/code.md): Deprecated. Error codes for the game session domain.
- [GKPeerConnectionState](../gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [GKPeerPickerConnectionType](../gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSendDataMode](../gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionError](../gksessionerror-swift.struct.md): Deprecated.
- [GKSessionMode](../gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKVoiceChatServiceError.Code](../gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
- [GKVoiceChatServiceError](../gkvoicechatserviceerror-swift.struct.md): Deprecated.

# GKSessionError (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Error codes for the session error domain.

> No longer supported

## Declaration

```objectivec
enum GKSessionError : int;
```

## Topics

### Constants

- [GKSessionInvalidParameterError](code/invalidparametererror.md): Deprecated. A parameter had an unexpected value.
- [GKSessionPeerNotFoundError](code/peernotfounderror.md): Deprecated. A peer with the specified `peerID` string could not be found.
- [GKSessionDeclinedError](code/declinederror.md): Deprecated. The peer your application tried to connect to refused the connection.
- [GKSessionTimedOutError](code/timedouterror.md): Deprecated. The operation could not be completed in the specified timeout period.
- [GKSessionCancelledError](code/cancellederror.md): Deprecated. A peer that invited the session to connect to them canceled the connection request.
- [GKSessionConnectionFailedError](code/connectionfailederror.md): Deprecated. The attempt to establish a connection with another peer failed.
- [GKSessionConnectionClosedError](code/connectionclosederror.md): Deprecated. The connection to another peer closed unexpectedly.
- [GKSessionDataTooBigError](code/datatoobigerror.md): Deprecated. The data your application attempted to send was too large for the session to transmit in a single call.
- [GKSessionNotConnectedError](code/notconnectederror.md): Deprecated. Reserved for future use.
- [GKSessionCannotEnableError](code/cannotenableerror.md): Deprecated. Bluetooth is not currently available.
- [GKSessionInProgressError](code/inprogresserror.md): Deprecated. The peer your application attempted to connect to has already requested a connection to your session.
- [GKSessionConnectivityError](code/connectivityerror.md): Deprecated. An error occurred in the [GKSession](../gksession.md) object’s connection code.
- [GKSessionTransportError](code/transporterror.md): Deprecated. An error occurred in the [GKSession](../gksession.md) object’s transport code.
- [GKSessionInternalError](code/internalerror.md): Deprecated. A serious error occurred inside [GKSession](../gksession.md).
- [GKSessionUnknownError](code/unknownerror.md): Deprecated. Reserved for when the error does not fit in another category above.
- [GKSessionSystemError](code/systemerror.md): Deprecated. An error occurred outside of the [GKSession](../gksession.md) object’s control, such as memory allocation.

## See Also

### Deprecated enumerations

- [GKGameSessionErrorCode](../gkgamesessionerror/code.md): Deprecated. Error codes for the game session domain.
- [GKPeerConnectionState](../gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [GKPeerPickerConnectionType](../gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSendDataMode](../gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionMode](../gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKVoiceChatServiceError](../gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
