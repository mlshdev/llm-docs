> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest/recipients](https://developer.apple.com/documentation/gamekit/gkmatchrequest/recipients)

# recipients (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The players to invite to the match.

## Declaration

```swift
var recipients: [GKPlayer]? { get set }
```

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Finding players using matchmaking rules](../finding-players-using-matchmaking-rules.md)
- [Finding players with similar skill levels](../finding-players-with-similar-skill-levels.md)
- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

If this property is non-`nil`, GameKit invites the specified players. GameKit doesn’t use automatch to fill player slots, and ignores the [maxPlayers](maxplayers.md) and [minPlayers](minplayers.md) properties. The default value is `nil`.

## See Also

### Inviting players

- [inviteMessage](invitemessage.md): The message sent to other players when the local player invites them to join a match.
- [recipientResponseHandler](recipientresponsehandler.md): A method that handles when a player responds to an invitation to join a match.
- [GKInviteRecipientResponse](../gkinviterecipientresponse.md): A player’s response to an invitation to join a match.

# recipients (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The players to invite to the match.

## Declaration

```objectivec
@property (retain, nullable) NSArray<GKPlayer *> * recipients;
```

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Finding players using matchmaking rules](../finding-players-using-matchmaking-rules.md)
- [Finding players with similar skill levels](../finding-players-with-similar-skill-levels.md)
- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

If this property is non-`nil`, GameKit invites the specified players. GameKit doesn’t use automatch to fill player slots, and ignores the [maxPlayers](maxplayers.md) and [minPlayers](minplayers.md) properties. The default value is `nil`.

## See Also

### Inviting players

- [inviteMessage](invitemessage.md): The message sent to other players when the local player invites them to join a match.
- [recipientResponseHandler](recipientresponsehandler.md): A method that handles when a player responds to an invitation to join a match.
- [GKInviteRecipientResponse](../gkinviterecipientresponse.md): A player’s response to an invitation to join a match.
