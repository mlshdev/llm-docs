> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkerror/invalidparameter](https://developer.apple.com/documentation/gamekit/gkerror/invalidparameter)

# invalidParameter

**Framework:** GameKit  
**Kind:** Type Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The system can’t complete the requested operation because one or more parameters are invalid.

## Declaration

```swift
static var invalidParameter: GKError.Code { get }
```

<a id="Discussion"></a>

## Discussion

For example, this error code may be returned if your application attempts to post a score and provides a category string that does not match a category you configured for your leaderboards in App Store Connect.

## See Also

### Error Codes

- [GKError.Code](code.md): Error codes for the GameKit error domain.
- [authenticationInProgress](authenticationinprogress.md): The system can’t complete the requested operation because the local player is already authenticating.
- [cancelled](cancelled.md): The system canceled the requested operation or the user disabled it.
- [challengeInvalid](challengeinvalid.md): Deprecated. The challenge request failed due to invalid challenge data.
- [communicationsFailure](communicationsfailure.md): The system can’t complete the requested operation due to an error communicating with the server.
- [gameSessionRequestInvalid](gamesessionrequestinvalid.md): The properties of the game session request are impossible to fulfill.
- [gameUnrecognized](gameunrecognized.md): The system can’t complete the requested operation because Game Center doesn’t recognize the app.
- [invalidCredentials](invalidcredentials.md): The system can’t complete the requested operation because the user name or password are incorrect.
- [invalidPlayer](invalidplayer.md): The system can’t complete the requested operation because the player is invalid.
- [invitationsDisabled](invitationsdisabled.md): The system can’t complete the requested operation because the receiving player has disabled invitations.
- [matchNotConnected](matchnotconnected.md): The system can’t complete the requested operation because the match isn’t connected to other players.
- [matchRequestInvalid](matchrequestinvalid.md): The system can’t complete the requested operation because the match request is invalid.
- [notAuthenticated](notauthenticated.md): The system can’t complete the requested operation because the system hasn’t initialized the local player.
- [notSupported](notsupported.md): The app doesn’t have Game Center enabled.
- [parentalControlsBlocked](parentalcontrolsblocked.md): The system can’t complete the requested operation because the user disabled this feature in Restrictions.
