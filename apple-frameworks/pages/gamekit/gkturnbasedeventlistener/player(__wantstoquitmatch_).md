> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventlistener/player(_:wantstoquitmatch:)](https://developer.apple.com/documentation/gamekit/gkturnbasedeventlistener/player(_:wantstoquitmatch:))

# player(\_:wantsToQuitMatch:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Handles when the current participant wants to quit a match.

## Declaration

```swift
optional func player(_ player: GKPlayer, wantsToQuitMatch match: GKTurnBasedMatch)
```

## Parameters

- `player`: The player who receives this turn-based event.
- `match`: The match that the current participant wants to quit.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Implement this method to forfeit the match by passing the turn to the next participant using the  [participantQuitInTurn(with:nextParticipants:turnTimeout:match:completionHandler:)](../gkturnbasedmatch/participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md) method.

## See Also

### Handling Match-Related Events

- [player(\_:receivedTurnEventFor:didBecomeActive:)](player%28__receivedturneventfor_didbecomeactive_%29.md): Handles turn-based match events, such as accepting invitations, passing turns, and saving match data.
- [player(\_:didRequestMatchWithOtherPlayers:)](player%28__didrequestmatchwithotherplayers_%29.md): Handles when the player uses Game Center to start a match with other players.
- [player(\_:matchEnded:)](player%28__matchended_%29.md): Handles when the match ends.
- [player(\_:didRequestMatchWithPlayers:)](player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles when the player uses Game Center to start a match with other players.

# player:wantsToQuitMatch: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Handles when the current participant wants to quit a match.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player wantsToQuitMatch:(GKTurnBasedMatch *) match;
```

## Parameters

- `player`: The player who receives this turn-based event.
- `match`: The match that the current participant wants to quit.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Implement this method to forfeit the match by passing the turn to the next participant using the  [participantQuitInTurnWithOutcome:nextParticipants:turnTimeout:matchData:completionHandler:](../gkturnbasedmatch/participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md) method.

## See Also

### Handling Match-Related Events

- [player:receivedTurnEventForMatch:didBecomeActive:](player%28__receivedturneventfor_didbecomeactive_%29.md): Handles turn-based match events, such as accepting invitations, passing turns, and saving match data.
- [player:didRequestMatchWithOtherPlayers:](player%28__didrequestmatchwithotherplayers_%29.md): Handles when the player uses Game Center to start a match with other players.
- [player:matchEnded:](player%28__matchended_%29.md): Handles when the match ends.
- [player:didRequestMatchWithPlayers:](player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles when the player uses Game Center to start a match with other players.
