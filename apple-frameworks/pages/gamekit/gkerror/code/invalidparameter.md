> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkerror/code/invalidparameter](https://developer.apple.com/documentation/gamekit/gkerror/code/invalidparameter)

# GKError.Code.invalidParameter (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The system can’t complete the requested operation because one or more parameters are invalid.

## Declaration

```swift
case invalidParameter
```

<a id="Discussion"></a>

## Discussion

For example, this error code may be returned if your application attempts to post a score and provides a category string that does not match a category you configured for your leaderboards in App Store Connect.

## See Also

### Communication Errors

- [GKError.Code.unknown](unknown.md): The system can’t complete the requested operation due to an unknown error.
- [GKError.Code.cancelled](cancelled.md): The system canceled the requested operation or the user disabled it.
- [GKError.Code.communicationsFailure](communicationsfailure.md): The system can’t complete the requested operation due to an error communicating with the server.
- [GKError.Code.invalidPlayer](invalidplayer.md): The system can’t complete the requested operation because the player is invalid.
- [GKError.Code.gameSessionRequestInvalid](gamesessionrequestinvalid.md): The properties of the game session request are impossible to fulfill.
- [GKError.Code.apiNotAvailable](apinotavailable.md): The system can’t complete the requested operation because the API isn’t available.
- [GKError.Code.connectionTimeout](connectiontimeout.md): The system can’t complete the requested operation because the connection timed out.
- [GKError.Code.apiObsolete](apiobsolete.md): The system can’t complete the requested operation because Apple deprecated the API.

# GKErrorInvalidParameter (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The system can’t complete the requested operation because one or more parameters are invalid.

## Declaration

```objectivec
GKErrorInvalidParameter
```

<a id="Discussion"></a>

## Discussion

For example, this error code may be returned if your application attempts to post a score and provides a category string that does not match a category you configured for your leaderboards in App Store Connect.

## See Also

### Communication Errors

- [GKErrorUnknown](unknown.md): The system can’t complete the requested operation due to an unknown error.
- [GKErrorCancelled](cancelled.md): The system canceled the requested operation or the user disabled it.
- [GKErrorCommunicationsFailure](communicationsfailure.md): The system can’t complete the requested operation due to an error communicating with the server.
- [GKErrorInvalidPlayer](invalidplayer.md): The system can’t complete the requested operation because the player is invalid.
- [GKErrorGameSessionRequestInvalid](gamesessionrequestinvalid.md): The properties of the game session request are impossible to fulfill.
- [GKErrorAPINotAvailable](apinotavailable.md): The system can’t complete the requested operation because the API isn’t available.
- [GKErrorConnectionTimeout](connectiontimeout.md): The system can’t complete the requested operation because the connection timed out.
- [GKErrorAPIObsolete](apiobsolete.md): The system can’t complete the requested operation because Apple deprecated the API.
