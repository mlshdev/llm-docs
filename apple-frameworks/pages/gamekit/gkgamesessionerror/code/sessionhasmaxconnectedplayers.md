> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessionerror/code/sessionhasmaxconnectedplayers](https://developer.apple.com/documentation/gamekit/gkgamesessionerror/code/sessionhasmaxconnectedplayers)

# GKGameSessionError.Code.sessionHasMaxConnectedPlayers (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

The requested operation could not be completed because the session has reached the maximum number of connected players.

> GKGameSession is deprecated, use real-time and turn-based matchmaking APIs instead.

## Declaration

```swift
case sessionHasMaxConnectedPlayers
```

## See Also

### Enumeration Cases

- [GKGameSessionError.Code.unknown](unknown.md): Deprecated. The requested operation could not be completed due to an unknown error.
- [GKGameSessionError.Code.notAuthenticated](notauthenticated.md): Deprecated. The requested operation could not be completed because you are not signed in to iCloud.
- [GKGameSessionError.Code.sessionConflict](sessionconflict.md): Deprecated. The requested operation could not be completed because the session has been updated on the server, causing a conflict.
- [GKGameSessionError.Code.sessionNotShared](sessionnotshared.md): Deprecated. The requested operation could not be completed because this session has not been shared with other players.
- [GKGameSessionError.Code.connectionCancelledByUser](connectioncancelledbyuser.md): Deprecated. The requested operation could not be completed because the connection to the session was cancelled.
- [GKGameSessionError.Code.connectionFailed](connectionfailed.md): Deprecated. The requested operation could not be completed because the session could not find other players to connect to.
- [GKGameSessionError.Code.sendDataNotConnected](senddatanotconnected.md): Deprecated. The requested operation could not be completed because you are not connected to the session.
- [GKGameSessionError.Code.sendDataNoRecipients](senddatanorecipients.md): Deprecated. The requested operation could not be completed because there are no recipients connected to session.
- [GKGameSessionError.Code.sendDataNotReachable](senddatanotreachable.md): Deprecated. The requested operation could not be completed because one or more players is not reachable.
- [GKGameSessionError.Code.sendRateLimitReached](sendratelimitreached.md): Deprecated. The requested operation could not be completed because you have reached the limits for save data request.
- [GKGameSessionError.Code.badContainer](badcontainer.md): Deprecated. The requested operation could not be completed because the iCloud container is invalid.
- [GKGameSessionError.Code.cloudQuotaExceeded](cloudquotaexceeded.md): Deprecated. The requested operation could not be completed because the user’s iCloud quota would be exceeded.
- [GKGameSessionError.Code.networkFailure](networkfailure.md): Deprecated. The requested operation could not be completed due to an error communicating with the server.
- [GKGameSessionError.Code.cloudDriveDisabled](clouddrivedisabled.md): Deprecated. The requested operation could not be completed because iCloud Drive has been disabled for the application.
- [GKGameSessionError.Code.invalidSession](invalidsession.md): Deprecated. The requested operation could not be completed because the Game Session does not exist or the player is not part of the game session.

# GKGameSessionErrorSessionHasMaxConnectedPlayers (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

The requested operation could not be completed because the session has reached the maximum number of connected players.

> GKGameSession is deprecated, use real-time and turn-based matchmaking APIs instead.

## Declaration

```objectivec
GKGameSessionErrorSessionHasMaxConnectedPlayers
```

## See Also

### Enumeration Cases

- [GKGameSessionErrorUnknown](unknown.md): Deprecated. The requested operation could not be completed due to an unknown error.
- [GKGameSessionErrorNotAuthenticated](notauthenticated.md): Deprecated. The requested operation could not be completed because you are not signed in to iCloud.
- [GKGameSessionErrorSessionConflict](sessionconflict.md): Deprecated. The requested operation could not be completed because the session has been updated on the server, causing a conflict.
- [GKGameSessionErrorSessionNotShared](sessionnotshared.md): Deprecated. The requested operation could not be completed because this session has not been shared with other players.
- [GKGameSessionErrorConnectionCancelledByUser](connectioncancelledbyuser.md): Deprecated. The requested operation could not be completed because the connection to the session was cancelled.
- [GKGameSessionErrorConnectionFailed](connectionfailed.md): Deprecated. The requested operation could not be completed because the session could not find other players to connect to.
- [GKGameSessionErrorSendDataNotConnected](senddatanotconnected.md): Deprecated. The requested operation could not be completed because you are not connected to the session.
- [GKGameSessionErrorSendDataNoRecipients](senddatanorecipients.md): Deprecated. The requested operation could not be completed because there are no recipients connected to session.
- [GKGameSessionErrorSendDataNotReachable](senddatanotreachable.md): Deprecated. The requested operation could not be completed because one or more players is not reachable.
- [GKGameSessionErrorSendRateLimitReached](sendratelimitreached.md): Deprecated. The requested operation could not be completed because you have reached the limits for save data request.
- [GKGameSessionErrorBadContainer](badcontainer.md): Deprecated. The requested operation could not be completed because the iCloud container is invalid.
- [GKGameSessionErrorCloudQuotaExceeded](cloudquotaexceeded.md): Deprecated. The requested operation could not be completed because the user’s iCloud quota would be exceeded.
- [GKGameSessionErrorNetworkFailure](networkfailure.md): Deprecated. The requested operation could not be completed due to an error communicating with the server.
- [GKGameSessionErrorCloudDriveDisabled](clouddrivedisabled.md): Deprecated. The requested operation could not be completed because iCloud Drive has been disabled for the application.
- [GKGameSessionErrorInvalidSession](invalidsession.md): Deprecated. The requested operation could not be completed because the Game Session does not exist or the player is not part of the game session.
