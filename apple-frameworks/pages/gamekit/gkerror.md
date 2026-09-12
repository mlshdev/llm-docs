> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkerror](https://developer.apple.com/documentation/gamekit/gkerror)

# GKError

**Framework:** GameKit  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The error structure used by this framework.

## Declaration

```swift
struct GKError
```

## Mentioned In

- [Finding multiple players for a game](finding-multiple-players-for-a-game.md)

## Topics

### Error Codes

- [GKError.Code](gkerror/code.md): Error codes for the GameKit error domain.
- [authenticationInProgress](gkerror/authenticationinprogress.md): The system can’t complete the requested operation because the local player is already authenticating.
- [cancelled](gkerror/cancelled.md): The system canceled the requested operation or the user disabled it.
- [challengeInvalid](gkerror/challengeinvalid.md): Deprecated. The challenge request failed due to invalid challenge data.
- [communicationsFailure](gkerror/communicationsfailure.md): The system can’t complete the requested operation due to an error communicating with the server.
- [gameSessionRequestInvalid](gkerror/gamesessionrequestinvalid.md): The properties of the game session request are impossible to fulfill.
- [gameUnrecognized](gkerror/gameunrecognized.md): The system can’t complete the requested operation because Game Center doesn’t recognize the app.
- [invalidCredentials](gkerror/invalidcredentials.md): The system can’t complete the requested operation because the user name or password are incorrect.
- [invalidParameter](gkerror/invalidparameter.md): The system can’t complete the requested operation because one or more parameters are invalid.
- [invalidPlayer](gkerror/invalidplayer.md): The system can’t complete the requested operation because the player is invalid.
- [invitationsDisabled](gkerror/invitationsdisabled.md): The system can’t complete the requested operation because the receiving player has disabled invitations.
- [matchNotConnected](gkerror/matchnotconnected.md): The system can’t complete the requested operation because the match isn’t connected to other players.
- [matchRequestInvalid](gkerror/matchrequestinvalid.md): The system can’t complete the requested operation because the match request is invalid.
- [notAuthenticated](gkerror/notauthenticated.md): The system can’t complete the requested operation because the system hasn’t initialized the local player.
- [notSupported](gkerror/notsupported.md): The app doesn’t have Game Center enabled.
- [parentalControlsBlocked](gkerror/parentalcontrolsblocked.md): The system can’t complete the requested operation because the user disabled this feature in Restrictions.
- [playerPhotoFailure](gkerror/playerphotofailure.md): The system can’t complete the requested operation to retrieve a player’s photo.
- [playerStatusExceedsMaximumLength](gkerror/playerstatusexceedsmaximumlength.md): The player’s status exceeds the maximum length.
- [playerStatusInvalid](gkerror/playerstatusinvalid.md): The player’s status is invalid.
- [scoreNotSet](gkerror/scorenotset.md): The system can’t complete the requested operation because the system hasn’t set the score.
- [turnBasedInvalidParticipant](gkerror/turnbasedinvalidparticipant.md): The system can’t complete the requested operation because the specified participant is invalid.
- [turnBasedInvalidState](gkerror/turnbasedinvalidstate.md): The system can’t complete the requested operation because the session is in an invalid state.
- [turnBasedInvalidTurn](gkerror/turnbasedinvalidturn.md): The system can’t complete the requested operation because the participant doesn’t have the required turn state.
- [turnBasedMatchDataTooLarge](gkerror/turnbasedmatchdatatoolarge.md): The system can’t complete the requested operation because the match data is too large.
- [turnBasedTooManySessions](gkerror/turnbasedtoomanysessions.md): The system can’t complete the requested operation because it exceeds the maximum number of sessions.
- [ubiquityContainerUnavailable](gkerror/ubiquitycontainerunavailable.md): The system can’t complete the requested operation because the user hasn’t signed in to iCloud or hasn’t enabled iCloud Drive.
- [underage](gkerror/underage.md): The system can’t complete the requested operation because this feature isn’t available to underage players.
- [unexpectedConnection](gkerror/unexpectedconnection.md): An unexpected player has connected to a match.
- [unknown](gkerror/unknown.md): The system can’t complete the requested operation due to an unknown error.
- [userDenied](gkerror/userdenied.md): The system can’t complete the requested operation because the user denied it.
- [restrictedToAutomatch](gkerror/restrictedtoautomatch.md): The system can’t complete the requested operation because the player is using automatch.
- [apiNotAvailable](gkerror/apinotavailable.md): The system can’t complete the requested operation because the API isn’t available.
- [notAuthorized](gkerror/notauthorized.md): The system can’t complete the requested operation because the system hasn’t authorized the player.
- [connectionTimeout](gkerror/connectiontimeout.md): The system can’t complete the requested operation because the connection timed out.
- [apiObsolete](gkerror/apiobsolete.md): The system can’t complete the requested operation because Apple deprecated the API.
- [iCloudUnavailable](gkerror/icloudunavailable.md): The system can’t complete the requested operation because it can’t access the player’s iCloud account.
- [lockdownMode](gkerror/lockdownmode.md): The system can’t complete the requested operation because the player enabled Lockdown Mode on the device.
- [appUnlisted](gkerror/appunlisted.md): The system can’t complete the requested operation because the game isn’t available on the App Store.
- [friendListDescriptionMissing](gkerror/friendlistdescriptionmissing.md): The system denies access to the local player’s friends list because the game didn’t provide a reason.
- [friendListRestricted](gkerror/friendlistrestricted.md): The system restricts access to the local player’s friends list.
- [friendListDenied](gkerror/friendlistdenied.md): The local player denies access to their friends list.
- [friendRequestNotAvailable](gkerror/friendrequestnotavailable.md): The player can’t send a friend request at this time from this device.

### Error Domain

- [errorDomain](gkerror/errordomain.md)

### Type Properties

- [debugMode](gkerror/debugmode.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [GKError.Code](gkerror/code.md): Error codes for the GameKit error domain.
- [GKErrorDomain](gkerrordomain.md): The error domain for general game errors.
