> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest/playerstoinvite](https://developer.apple.com/documentation/gamekit/gkmatchrequest/playerstoinvite)

# playersToInvite (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A list of player identifiers for players to invite to the match.

> Use the [recipients](recipients.md) property instead.

## Declaration

```swift
var playersToInvite: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

The property holds an array of [NSString](../../foundation/nsstring.md) objects, each of which is an identifier for a player on Game Center. If the value of the property is non-`nil`, when you use the request to create a match, Game Center invites those players to the match. No automatching is done and the [GKMatchRequest](../gkmatchrequest.md) `maxPlayers` and `minPlayers` properties are ignored. If `nil` (the default), no players are invited. The exact behavior for matchmaking depends on the kind of match being created and the class used to create the match.

## See Also

### Deprecated methods and properties

- [inviteeResponseHandler](inviteeresponsehandler.md): Deprecated. Handles when a player responds to an invitation.
- [GKInviteeResponse](../gkinviteeresponse.md): Deprecated. Possible responses from an invitation to a remote player.
- [restrictToAutomatch](restricttoautomatch.md): Deprecated. A Boolean value that determines whether a game uses automatch to find players or the local player invites players.

# playersToInvite (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

A list of player identifiers for players to invite to the match.

> Use the [recipients](recipients.md) property instead.

## Declaration

```objectivec
@property (retain, nullable) NSArray<NSString *> * playersToInvite;
```

<a id="Discussion"></a>

## Discussion

The property holds an array of [NSString](../../foundation/nsstring.md) objects, each of which is an identifier for a player on Game Center. If the value of the property is non-`nil`, when you use the request to create a match, Game Center invites those players to the match. No automatching is done and the [GKMatchRequest](../gkmatchrequest.md) `maxPlayers` and `minPlayers` properties are ignored. If `nil` (the default), no players are invited. The exact behavior for matchmaking depends on the kind of match being created and the class used to create the match.

## See Also

### Deprecated methods and properties

- [inviteeResponseHandler](inviteeresponsehandler.md): Deprecated. Handles when a player responds to an invitation.
- [GKInviteeResponse](../gkinviteeresponse.md): Deprecated. Possible responses from an invitation to a remote player.
- [restrictToAutomatch](restricttoautomatch.md): Deprecated. A Boolean value that determines whether a game uses automatch to find players or the local player invites players.
