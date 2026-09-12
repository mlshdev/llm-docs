> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkinviteeventlistener/player(_:didrequestmatchwithplayers:)](https://developer.apple.com/documentation/gamekit/gkinviteeventlistener/player(_:didrequestmatchwithplayers:))

# player(\_:didRequestMatchWithPlayers:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Handles the event when the local player sends other players an invitation to join a match.

> Use the [player(\_:didRequestMatchWithRecipients:)](player%28__didrequestmatchwithrecipients_%29.md) method instead.

## Declaration

```swift
optional func player(_ player: GKPlayer, didRequestMatchWithPlayers playerIDsToInvite: [String])
```

## Parameters

- `player`: The local player who sends the invitation.
- `playerIDsToInvite`: The identifiers for the players who receive invitations to join the match.

<a id="Discussion"></a>

## Discussion

When you call this method, GameKit launches the game and starts the matchmaking process.

## See Also

### Starting a New Match

- [player(\_:didAccept:)](player%28__didaccept_%29.md): Handles the event when the local player accepts an invitation from another player.
- [player(\_:didRequestMatchWithRecipients:)](player%28__didrequestmatchwithrecipients_%29.md): Handles the event when the local player sends other players an invitation to join a match.

# player:didRequestMatchWithPlayers: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

Handles the event when the local player sends other players an invitation to join a match.

> Use the [player:didRequestMatchWithRecipients:](player%28__didrequestmatchwithrecipients_%29.md) method instead.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player didRequestMatchWithPlayers:(NSArray<NSString *> *) playerIDsToInvite;
```

## Parameters

- `player`: The local player who sends the invitation.
- `playerIDsToInvite`: The identifiers for the players who receive invitations to join the match.

<a id="Discussion"></a>

## Discussion

When you call this method, GameKit launches the game and starts the matchmaking process.

## See Also

### Starting a New Match

- [player:didAcceptInvite:](player%28__didaccept_%29.md): Handles the event when the local player accepts an invitation from another player.
- [player:didRequestMatchWithRecipients:](player%28__didrequestmatchwithrecipients_%29.md): Handles the event when the local player sends other players an invitation to join a match.
