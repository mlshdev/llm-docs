> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventlistener/player(_:didrequestmatchwithotherplayers:)](https://developer.apple.com/documentation/gamekit/gkturnbasedeventlistener/player(_:didrequestmatchwithotherplayers:))

# player(\_:didRequestMatchWithOtherPlayers:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Handles when the player uses Game Center to start a match with other players.

## Declaration

```swift
optional func player(_ player: GKPlayer, didRequestMatchWithOtherPlayers playersToInvite: [GKPlayer])
```

## Parameters

- `player`: The player who receives this turn-based event.
- `playersToInvite`: The players to invite in the view controller interface.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Implement this method to present a turn-based matchmaker interface configured with the players to invite:

1. Create a [GKMatchRequest](../gkmatchrequest.md) object.
2. Set the match request’s [recipients](../gkmatchrequest/recipients.md) property to `playersToInvite`.
3. Create a [GKTurnBasedMatchmakerViewController](../gkturnbasedmatchmakerviewcontroller.md) with the match request object.
4. Present the turn-based matchmaker view controller.

## See Also

### Handling Match-Related Events

- [player(\_:receivedTurnEventFor:didBecomeActive:)](player%28__receivedturneventfor_didbecomeactive_%29.md): Handles turn-based match events, such as accepting invitations, passing turns, and saving match data.
- [player(\_:matchEnded:)](player%28__matchended_%29.md): Handles when the match ends.
- [player(\_:wantsToQuitMatch:)](player%28__wantstoquitmatch_%29.md): Handles when the current participant wants to quit a match.
- [player(\_:didRequestMatchWithPlayers:)](player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles when the player uses Game Center to start a match with other players.

# player:didRequestMatchWithOtherPlayers: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Handles when the player uses Game Center to start a match with other players.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player didRequestMatchWithOtherPlayers:(NSArray<GKPlayer *> *) playersToInvite;
```

## Parameters

- `player`: The player who receives this turn-based event.
- `playersToInvite`: The players to invite in the view controller interface.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Implement this method to present a turn-based matchmaker interface configured with the players to invite:

1. Create a [GKMatchRequest](../gkmatchrequest.md) object.
2. Set the match request’s [recipients](../gkmatchrequest/recipients.md) property to `playersToInvite`.
3. Create a [GKTurnBasedMatchmakerViewController](../gkturnbasedmatchmakerviewcontroller.md) with the match request object.
4. Present the turn-based matchmaker view controller.

## See Also

### Handling Match-Related Events

- [player:receivedTurnEventForMatch:didBecomeActive:](player%28__receivedturneventfor_didbecomeactive_%29.md): Handles turn-based match events, such as accepting invitations, passing turns, and saving match data.
- [player:matchEnded:](player%28__matchended_%29.md): Handles when the match ends.
- [player:wantsToQuitMatch:](player%28__wantstoquitmatch_%29.md): Handles when the current participant wants to quit a match.
- [player:didRequestMatchWithPlayers:](player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles when the player uses Game Center to start a match with other players.
