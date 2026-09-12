> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventlistener/player(_:matchended:)](https://developer.apple.com/documentation/gamekit/gkturnbasedeventlistener/player(_:matchended:))

# player(\_:matchEnded:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Handles when the match ends.

## Declaration

```swift
optional func player(_ player: GKPlayer, matchEnded match: GKTurnBasedMatch)
```

## Parameters

- `player`: The player who receives this turn-based event.
- `match`: The match that ends.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Implement this method to stop gameplay, notify the player that the match is over, and show the participant outcomes.

## See Also

### Handling Match-Related Events

- [player(\_:receivedTurnEventFor:didBecomeActive:)](player%28__receivedturneventfor_didbecomeactive_%29.md): Handles turn-based match events, such as accepting invitations, passing turns, and saving match data.
- [player(\_:didRequestMatchWithOtherPlayers:)](player%28__didrequestmatchwithotherplayers_%29.md): Handles when the player uses Game Center to start a match with other players.
- [player(\_:wantsToQuitMatch:)](player%28__wantstoquitmatch_%29.md): Handles when the current participant wants to quit a match.
- [player(\_:didRequestMatchWithPlayers:)](player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles when the player uses Game Center to start a match with other players.

# player:matchEnded: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Handles when the match ends.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player matchEnded:(GKTurnBasedMatch *) match;
```

## Parameters

- `player`: The player who receives this turn-based event.
- `match`: The match that ends.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Implement this method to stop gameplay, notify the player that the match is over, and show the participant outcomes.

## See Also

### Handling Match-Related Events

- [player:receivedTurnEventForMatch:didBecomeActive:](player%28__receivedturneventfor_didbecomeactive_%29.md): Handles turn-based match events, such as accepting invitations, passing turns, and saving match data.
- [player:didRequestMatchWithOtherPlayers:](player%28__didrequestmatchwithotherplayers_%29.md): Handles when the player uses Game Center to start a match with other players.
- [player:wantsToQuitMatch:](player%28__wantstoquitmatch_%29.md): Handles when the current participant wants to quit a match.
- [player:didRequestMatchWithPlayers:](player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles when the player uses Game Center to start a match with other players.
