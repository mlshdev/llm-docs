> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventlistener/player(_:receivedturneventfor:didbecomeactive:)](https://developer.apple.com/documentation/gamekit/gkturnbasedeventlistener/player(_:receivedturneventfor:didbecomeactive:))

# player(\_:receivedTurnEventFor:didBecomeActive:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Handles turn-based match events, such as accepting invitations, passing turns, and saving match data.

## Declaration

```swift
optional func player(_ player: GKPlayer, receivedTurnEventFor match: GKTurnBasedMatch, didBecomeActive: Bool)
```

## Parameters

- `player`: The player who receives this turn-based event.
- `match`: The match related to this turn-based event.
- `didBecomeActive`: [true](https://developer.apple.com/documentation/swift/true) if the system launches the game to deliver the turn-based event; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)
- [Sending messages to players in turn-based games](../sending-messages-to-players-in-turn-based-games.md)
- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

GameKit invokes this method when these turn-based events occur:

- GameKit passes the turn to the player.
- The player accepts an invitation from another participant.
- The timeout for the player to take their turn is about to expire.
- A participant saves match data to Game Center.
- Another participant sends a reminder to the player.
- The player opens an existing or completed match.
- The player forfeits a match.

## See Also

### Handling Match-Related Events

- [player(\_:didRequestMatchWithOtherPlayers:)](player%28__didrequestmatchwithotherplayers_%29.md): Handles when the player uses Game Center to start a match with other players.
- [player(\_:matchEnded:)](player%28__matchended_%29.md): Handles when the match ends.
- [player(\_:wantsToQuitMatch:)](player%28__wantstoquitmatch_%29.md): Handles when the current participant wants to quit a match.
- [player(\_:didRequestMatchWithPlayers:)](player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles when the player uses Game Center to start a match with other players.

# player:receivedTurnEventForMatch:didBecomeActive: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Handles turn-based match events, such as accepting invitations, passing turns, and saving match data.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player receivedTurnEventForMatch:(GKTurnBasedMatch *) match didBecomeActive:(BOOL) didBecomeActive;
```

## Parameters

- `player`: The player who receives this turn-based event.
- `match`: The match related to this turn-based event.
- `didBecomeActive`: [true](https://developer.apple.com/documentation/swift/true) if the system launches the game to deliver the turn-based event; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)
- [Sending messages to players in turn-based games](../sending-messages-to-players-in-turn-based-games.md)
- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

GameKit invokes this method when these turn-based events occur:

- GameKit passes the turn to the player.
- The player accepts an invitation from another participant.
- The timeout for the player to take their turn is about to expire.
- A participant saves match data to Game Center.
- Another participant sends a reminder to the player.
- The player opens an existing or completed match.
- The player forfeits a match.

## See Also

### Handling Match-Related Events

- [player:didRequestMatchWithOtherPlayers:](player%28__didrequestmatchwithotherplayers_%29.md): Handles when the player uses Game Center to start a match with other players.
- [player:matchEnded:](player%28__matchended_%29.md): Handles when the match ends.
- [player:wantsToQuitMatch:](player%28__wantstoquitmatch_%29.md): Handles when the current participant wants to quit a match.
- [player:didRequestMatchWithPlayers:](player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles when the player uses Game Center to start a match with other players.
