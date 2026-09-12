> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkerror/friendlistdescriptionmissing](https://developer.apple.com/documentation/gamekit/gkerror/friendlistdescriptionmissing)

# friendListDescriptionMissing

**Framework:** GameKit  
**Kind:** Type Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

The system denies access to the local player’s friends list because the game didn’t provide a reason.

## Declaration

```swift
static var friendListDescriptionMissing: GKError.Code { get }
```

<a id="Discussion"></a>

## Discussion

If your game wants access to the player’s friends, provide a reason by adding the [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md) key to the information property list.

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
