> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventlistener/player(_:didrequestmatchwithplayers:)](https://developer.apple.com/documentation/gamekit/gkturnbasedeventlistener/player(_:didrequestmatchwithplayers:))

# player(\_:didRequestMatchWithPlayers:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Handles when the player uses Game Center to start a match with other players.

> Use the [player(\_:didRequestMatchWithOtherPlayers:)](player%28__didrequestmatchwithotherplayers_%29.md) method instead.

## Declaration

```swift
optional func player(_ player: GKPlayer, didRequestMatchWithPlayers playerIDsToInvite: [String])
```

## Parameters

- `player`: The player who receives this turn-based event. .
- `playerIDsToInvite`: The identifiers for the players to invite in the view controller interface.

<a id="Discussion"></a>

## Discussion

Implement this method to present a [GKTurnBasedMatchmakerViewController](../gkturnbasedmatchmakerviewcontroller.md) configured with the players to invite specified by the `playerIDsToInvite` parameter.

## See Also

### Handling Match-Related Events

- [player(\_:receivedTurnEventFor:didBecomeActive:)](player%28__receivedturneventfor_didbecomeactive_%29.md): Handles turn-based match events, such as accepting invitations, passing turns, and saving match data.
- [player(\_:didRequestMatchWithOtherPlayers:)](player%28__didrequestmatchwithotherplayers_%29.md): Handles when the player uses Game Center to start a match with other players.
- [player(\_:matchEnded:)](player%28__matchended_%29.md): Handles when the match ends.
- [player(\_:wantsToQuitMatch:)](player%28__wantstoquitmatch_%29.md): Handles when the current participant wants to quit a match.

# player:didRequestMatchWithPlayers: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Handles when the player uses Game Center to start a match with other players.

> Use the [player:didRequestMatchWithOtherPlayers:](player%28__didrequestmatchwithotherplayers_%29.md) method instead.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player didRequestMatchWithPlayers:(NSArray<NSString *> *) playerIDsToInvite;
```

## Parameters

- `player`: The player who receives this turn-based event. .
- `playerIDsToInvite`: The identifiers for the players to invite in the view controller interface.

<a id="Discussion"></a>

## Discussion

Implement this method to present a [GKTurnBasedMatchmakerViewController](../gkturnbasedmatchmakerviewcontroller.md) configured with the players to invite specified by the `playerIDsToInvite` parameter.

## See Also

### Handling Match-Related Events

- [player:receivedTurnEventForMatch:didBecomeActive:](player%28__receivedturneventfor_didbecomeactive_%29.md): Handles turn-based match events, such as accepting invitations, passing turns, and saving match data.
- [player:didRequestMatchWithOtherPlayers:](player%28__didrequestmatchwithotherplayers_%29.md): Handles when the player uses Game Center to start a match with other players.
- [player:matchEnded:](player%28__matchended_%29.md): Handles when the match ends.
- [player:wantsToQuitMatch:](player%28__wantstoquitmatch_%29.md): Handles when the current participant wants to quit a match.
