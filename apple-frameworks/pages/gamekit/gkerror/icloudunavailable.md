> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkerror/icloudunavailable](https://developer.apple.com/documentation/gamekit/gkerror/icloudunavailable)

# iCloudUnavailable

**Framework:** GameKit  
**Kind:** Type Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

The system can’t complete the requested operation because it can’t access the player’s iCloud account.

## Declaration

```swift
static var iCloudUnavailable: GKError.Code { get }
```

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
- [invalidParameter](invalidparameter.md): The system can’t complete the requested operation because one or more parameters are invalid.
- [invalidPlayer](invalidplayer.md): The system can’t complete the requested operation because the player is invalid.
- [invitationsDisabled](invitationsdisabled.md): The system can’t complete the requested operation because the receiving player has disabled invitations.
- [matchNotConnected](matchnotconnected.md): The system can’t complete the requested operation because the match isn’t connected to other players.
- [matchRequestInvalid](matchrequestinvalid.md): The system can’t complete the requested operation because the match request is invalid.
- [notAuthenticated](notauthenticated.md): The system can’t complete the requested operation because the system hasn’t initialized the local player.
- [notSupported](notsupported.md): The app doesn’t have Game Center enabled.
