> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessionerror/sessionnotshared](https://developer.apple.com/documentation/gamekit/gkgamesessionerror/sessionnotshared)

# sessionNotShared

**Framework:** GameKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

The requested operation could not be completed because this session has not been shared with other players.

> GKGameSession is deprecated, use real-time and turn-based matchmaking APIs instead.

## Declaration

```swift
static var sessionNotShared: GKGameSessionError.Code { get }
```

## See Also

### Error Codes

- [badContainer](badcontainer.md): Deprecated. The requested operation could not be completed because the iCloud container is invalid.
- [cloudDriveDisabled](clouddrivedisabled.md): Deprecated. The requested operation could not be completed because iCloud Drive has been disabled for the application.
- [cloudQuotaExceeded](cloudquotaexceeded.md): Deprecated. The requested operation could not be completed because the user’s iCloud quota would be exceeded.
- [connectionCancelledByUser](connectioncancelledbyuser.md): Deprecated. The requested operation could not be completed because the connection to the session was cancelled.
- [connectionFailed](connectionfailed.md): Deprecated. The requested operation could not be completed because the session could not find other players to connect to.
- [invalidSession](invalidsession.md): Deprecated. The requested operation could not be completed because the Game Session does not exist or the player is not part of the game session.
- [networkFailure](networkfailure.md): Deprecated. The requested operation could not be completed due to an error communicating with the server.
- [notAuthenticated](notauthenticated.md): Deprecated. The requested operation could not be completed because you are not signed in to iCloud.
- [sendDataNoRecipients](senddatanorecipients.md): Deprecated. The requested operation could not be completed because there are no recipients connected to session.
- [sendDataNotConnected](senddatanotconnected.md): Deprecated. The requested operation could not be completed because you are not connected to the session.
- [sendDataNotReachable](senddatanotreachable.md): Deprecated. The requested operation could not be completed because one or more players is not reachable.
- [sendRateLimitReached](sendratelimitreached.md): Deprecated. The requested operation could not be completed because you have reached the limits for save data request.
- [sessionConflict](sessionconflict.md): Deprecated. The requested operation could not be completed because the session has been updated on the server, causing a conflict.
- [sessionHasMaxConnectedPlayers](sessionhasmaxconnectedplayers.md): Deprecated. The requested operation could not be completed because the session has reached the maximum number of connected players.
- [unknown](unknown.md): Deprecated. The requested operation could not be completed due to an unknown error.
