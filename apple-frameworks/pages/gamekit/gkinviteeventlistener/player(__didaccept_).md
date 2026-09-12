> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkinviteeventlistener/player(_:didaccept:)](https://developer.apple.com/documentation/gamekit/gkinviteeventlistener/player(_:didaccept:))

# player(\_:didAccept:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Handles the event when the local player accepts an invitation from another player.

## Declaration

```swift
optional func player(_ player: GKPlayer, didAccept invite: GKInvite)
```

## Parameters

- `player`: The local player who accepts the invitation.
- `invite`: The invitation that the local player accepts.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)

<a id="Discussion"></a>

## Discussion

This method presents the matchmaker view controller in the invitation state so that the local player can see other players in the match accept their invitations.

## See Also

### Related Documentation

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md): Discover and invite other players to participate in a real-time game.

### Starting a New Match

- [player(\_:didRequestMatchWithRecipients:)](player%28__didrequestmatchwithrecipients_%29.md): Handles the event when the local player sends other players an invitation to join a match.
- [player(\_:didRequestMatchWithPlayers:)](player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles the event when the local player sends other players an invitation to join a match.

# player:didAcceptInvite: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Handles the event when the local player accepts an invitation from another player.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player didAcceptInvite:(GKInvite *) invite;
```

## Parameters

- `player`: The local player who accepts the invitation.
- `invite`: The invitation that the local player accepts.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)

<a id="Discussion"></a>

## Discussion

This method presents the matchmaker view controller in the invitation state so that the local player can see other players in the match accept their invitations.

## See Also

### Related Documentation

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md): Discover and invite other players to participate in a real-time game.

### Starting a New Match

- [player:didRequestMatchWithRecipients:](player%28__didrequestmatchwithrecipients_%29.md): Handles the event when the local player sends other players an invitation to join a match.
- [player:didRequestMatchWithPlayers:](player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles the event when the local player sends other players an invitation to join a match.
