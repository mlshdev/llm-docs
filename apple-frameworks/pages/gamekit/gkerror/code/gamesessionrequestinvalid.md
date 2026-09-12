> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkerror/code/gamesessionrequestinvalid](https://developer.apple.com/documentation/gamekit/gkerror/code/gamesessionrequestinvalid)

# GKError.Code.gameSessionRequestInvalid (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The properties of the game session request are impossible to fulfill.

## Declaration

```swift
case gameSessionRequestInvalid
```

<a id="Discussion"></a>

## Discussion

For example, the maximum number of requested players is greater than the maximum number of allowed players.

## See Also

### Communication Errors

- [GKError.Code.unknown](unknown.md): The system can’t complete the requested operation due to an unknown error.
- [GKError.Code.cancelled](cancelled.md): The system canceled the requested operation or the user disabled it.
- [GKError.Code.communicationsFailure](communicationsfailure.md): The system can’t complete the requested operation due to an error communicating with the server.
- [GKError.Code.invalidPlayer](invalidplayer.md): The system can’t complete the requested operation because the player is invalid.
- [GKError.Code.invalidParameter](invalidparameter.md): The system can’t complete the requested operation because one or more parameters are invalid.
- [GKError.Code.apiNotAvailable](apinotavailable.md): The system can’t complete the requested operation because the API isn’t available.
- [GKError.Code.connectionTimeout](connectiontimeout.md): The system can’t complete the requested operation because the connection timed out.
- [GKError.Code.apiObsolete](apiobsolete.md): The system can’t complete the requested operation because Apple deprecated the API.

# GKErrorGameSessionRequestInvalid (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The properties of the game session request are impossible to fulfill.

## Declaration

```objectivec
GKErrorGameSessionRequestInvalid
```

<a id="Discussion"></a>

## Discussion

For example, the maximum number of requested players is greater than the maximum number of allowed players.

## See Also

### Communication Errors

- [GKErrorUnknown](unknown.md): The system can’t complete the requested operation due to an unknown error.
- [GKErrorCancelled](cancelled.md): The system canceled the requested operation or the user disabled it.
- [GKErrorCommunicationsFailure](communicationsfailure.md): The system can’t complete the requested operation due to an error communicating with the server.
- [GKErrorInvalidPlayer](invalidplayer.md): The system can’t complete the requested operation because the player is invalid.
- [GKErrorInvalidParameter](invalidparameter.md): The system can’t complete the requested operation because one or more parameters are invalid.
- [GKErrorAPINotAvailable](apinotavailable.md): The system can’t complete the requested operation because the API isn’t available.
- [GKErrorConnectionTimeout](connectiontimeout.md): The system can’t complete the requested operation because the connection timed out.
- [GKErrorAPIObsolete](apiobsolete.md): The system can’t complete the requested operation because Apple deprecated the API.
