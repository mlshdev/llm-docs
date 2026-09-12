> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessionerror/code](https://developer.apple.com/documentation/gamekit/gkgamesessionerror/code)

# GKGameSessionError.Code (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Error codes for the game session domain.

> Use the real-time and turn-based matchmaking APIs instead.

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [GKGameSessionError.Code.unknown](code/unknown.md): Deprecated. The requested operation could not be completed due to an unknown error.
- [GKGameSessionError.Code.notAuthenticated](code/notauthenticated.md): Deprecated. The requested operation could not be completed because you are not signed in to iCloud.
- [GKGameSessionError.Code.sessionConflict](code/sessionconflict.md): Deprecated. The requested operation could not be completed because the session has been updated on the server, causing a conflict.
- [GKGameSessionError.Code.sessionNotShared](code/sessionnotshared.md): Deprecated. The requested operation could not be completed because this session has not been shared with other players.
- [GKGameSessionError.Code.connectionCancelledByUser](code/connectioncancelledbyuser.md): Deprecated. The requested operation could not be completed because the connection to the session was cancelled.
- [GKGameSessionError.Code.connectionFailed](code/connectionfailed.md): Deprecated. The requested operation could not be completed because the session could not find other players to connect to.
- [GKGameSessionError.Code.sessionHasMaxConnectedPlayers](code/sessionhasmaxconnectedplayers.md): Deprecated. The requested operation could not be completed because the session has reached the maximum number of connected players.
- [GKGameSessionError.Code.sendDataNotConnected](code/senddatanotconnected.md): Deprecated. The requested operation could not be completed because you are not connected to the session.
- [GKGameSessionError.Code.sendDataNoRecipients](code/senddatanorecipients.md): Deprecated. The requested operation could not be completed because there are no recipients connected to session.
- [GKGameSessionError.Code.sendDataNotReachable](code/senddatanotreachable.md): Deprecated. The requested operation could not be completed because one or more players is not reachable.
- [GKGameSessionError.Code.sendRateLimitReached](code/sendratelimitreached.md): Deprecated. The requested operation could not be completed because you have reached the limits for save data request.
- [GKGameSessionError.Code.badContainer](code/badcontainer.md): Deprecated. The requested operation could not be completed because the iCloud container is invalid.
- [GKGameSessionError.Code.cloudQuotaExceeded](code/cloudquotaexceeded.md): Deprecated. The requested operation could not be completed because the user’s iCloud quota would be exceeded.
- [GKGameSessionError.Code.networkFailure](code/networkfailure.md): Deprecated. The requested operation could not be completed due to an error communicating with the server.
- [GKGameSessionError.Code.cloudDriveDisabled](code/clouddrivedisabled.md): Deprecated. The requested operation could not be completed because iCloud Drive has been disabled for the application.
- [GKGameSessionError.Code.invalidSession](code/invalidsession.md): Deprecated. The requested operation could not be completed because the Game Session does not exist or the player is not part of the game session.

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

- [GKPeerConnectionState](../gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [GKPeerPickerConnectionType](../gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSendDataMode](../gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionError.Code](../gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKSessionError](../gksessionerror-swift.struct.md): Deprecated.
- [GKSessionMode](../gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKVoiceChatServiceError.Code](../gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
- [GKVoiceChatServiceError](../gkvoicechatserviceerror-swift.struct.md): Deprecated.

# GKGameSessionErrorCode (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Error codes for the game session domain.

> Use the real-time and turn-based matchmaking APIs instead.

## Declaration

```objectivec
enum GKGameSessionErrorCode : NSInteger;
```

## Topics

### Enumeration Cases

- [GKGameSessionErrorUnknown](code/unknown.md): Deprecated. The requested operation could not be completed due to an unknown error.
- [GKGameSessionErrorNotAuthenticated](code/notauthenticated.md): Deprecated. The requested operation could not be completed because you are not signed in to iCloud.
- [GKGameSessionErrorSessionConflict](code/sessionconflict.md): Deprecated. The requested operation could not be completed because the session has been updated on the server, causing a conflict.
- [GKGameSessionErrorSessionNotShared](code/sessionnotshared.md): Deprecated. The requested operation could not be completed because this session has not been shared with other players.
- [GKGameSessionErrorConnectionCancelledByUser](code/connectioncancelledbyuser.md): Deprecated. The requested operation could not be completed because the connection to the session was cancelled.
- [GKGameSessionErrorConnectionFailed](code/connectionfailed.md): Deprecated. The requested operation could not be completed because the session could not find other players to connect to.
- [GKGameSessionErrorSessionHasMaxConnectedPlayers](code/sessionhasmaxconnectedplayers.md): Deprecated. The requested operation could not be completed because the session has reached the maximum number of connected players.
- [GKGameSessionErrorSendDataNotConnected](code/senddatanotconnected.md): Deprecated. The requested operation could not be completed because you are not connected to the session.
- [GKGameSessionErrorSendDataNoRecipients](code/senddatanorecipients.md): Deprecated. The requested operation could not be completed because there are no recipients connected to session.
- [GKGameSessionErrorSendDataNotReachable](code/senddatanotreachable.md): Deprecated. The requested operation could not be completed because one or more players is not reachable.
- [GKGameSessionErrorSendRateLimitReached](code/sendratelimitreached.md): Deprecated. The requested operation could not be completed because you have reached the limits for save data request.
- [GKGameSessionErrorBadContainer](code/badcontainer.md): Deprecated. The requested operation could not be completed because the iCloud container is invalid.
- [GKGameSessionErrorCloudQuotaExceeded](code/cloudquotaexceeded.md): Deprecated. The requested operation could not be completed because the user’s iCloud quota would be exceeded.
- [GKGameSessionErrorNetworkFailure](code/networkfailure.md): Deprecated. The requested operation could not be completed due to an error communicating with the server.
- [GKGameSessionErrorCloudDriveDisabled](code/clouddrivedisabled.md): Deprecated. The requested operation could not be completed because iCloud Drive has been disabled for the application.
- [GKGameSessionErrorInvalidSession](code/invalidsession.md): Deprecated. The requested operation could not be completed because the Game Session does not exist or the player is not part of the game session.

## See Also

### Deprecated enumerations

- [GKPeerConnectionState](../gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [GKPeerPickerConnectionType](../gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSendDataMode](../gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionError](../gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKSessionMode](../gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKVoiceChatServiceError](../gkvoicechatserviceerror-swift.struct/code.md): Deprecated. Error codes for the voice chat service error domain.
