> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessionerror](https://developer.apple.com/documentation/gamekit/gkgamesessionerror)

# GKGameSessionError

**Framework:** GameKit  
**Kind:** Structure  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Error codes for the game session domain.

> GKGameSession is deprecated, use real-time and turn-based matchmaking APIs instead.

## Declaration

```swift
struct GKGameSessionError
```

## Topics

### Error Codes

- [badContainer](gkgamesessionerror/badcontainer.md): Deprecated. The requested operation could not be completed because the iCloud container is invalid.
- [cloudDriveDisabled](gkgamesessionerror/clouddrivedisabled.md): Deprecated. The requested operation could not be completed because iCloud Drive has been disabled for the application.
- [cloudQuotaExceeded](gkgamesessionerror/cloudquotaexceeded.md): Deprecated. The requested operation could not be completed because the user’s iCloud quota would be exceeded.
- [connectionCancelledByUser](gkgamesessionerror/connectioncancelledbyuser.md): Deprecated. The requested operation could not be completed because the connection to the session was cancelled.
- [connectionFailed](gkgamesessionerror/connectionfailed.md): Deprecated. The requested operation could not be completed because the session could not find other players to connect to.
- [invalidSession](gkgamesessionerror/invalidsession.md): Deprecated. The requested operation could not be completed because the Game Session does not exist or the player is not part of the game session.
- [networkFailure](gkgamesessionerror/networkfailure.md): Deprecated. The requested operation could not be completed due to an error communicating with the server.
- [notAuthenticated](gkgamesessionerror/notauthenticated.md): Deprecated. The requested operation could not be completed because you are not signed in to iCloud.
- [sendDataNoRecipients](gkgamesessionerror/senddatanorecipients.md): Deprecated. The requested operation could not be completed because there are no recipients connected to session.
- [sendDataNotConnected](gkgamesessionerror/senddatanotconnected.md): Deprecated. The requested operation could not be completed because you are not connected to the session.
- [sendDataNotReachable](gkgamesessionerror/senddatanotreachable.md): Deprecated. The requested operation could not be completed because one or more players is not reachable.
- [sendRateLimitReached](gkgamesessionerror/sendratelimitreached.md): Deprecated. The requested operation could not be completed because you have reached the limits for save data request.
- [sessionConflict](gkgamesessionerror/sessionconflict.md): Deprecated. The requested operation could not be completed because the session has been updated on the server, causing a conflict.
- [sessionHasMaxConnectedPlayers](gkgamesessionerror/sessionhasmaxconnectedplayers.md): Deprecated. The requested operation could not be completed because the session has reached the maximum number of connected players.
- [sessionNotShared](gkgamesessionerror/sessionnotshared.md): Deprecated. The requested operation could not be completed because this session has not been shared with other players.
- [unknown](gkgamesessionerror/unknown.md): Deprecated. The requested operation could not be completed due to an unknown error.
- [GKGameSessionError.Code](gkgamesessionerror/code.md): Deprecated. Error codes for the game session domain.

### Error Domain

- [errorDomain](gkgamesessionerror/errordomain.md): Deprecated.
- [GKGameSessionErrorDomain](gkgamesessionerrordomain.md): Deprecated. The error domain for game sessions.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated structures

- [GKVoiceChatServiceError](gkvoicechatserviceerror-swift.struct.md): Deprecated.
- [GKSessionError](gksessionerror-swift.struct.md): Deprecated.
