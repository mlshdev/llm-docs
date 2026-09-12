> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkinviteeventlistener/player(_:didrequestmatchwithrecipients:)](https://developer.apple.com/documentation/gamekit/gkinviteeventlistener/player(_:didrequestmatchwithrecipients:))

# player(\_:didRequestMatchWithRecipients:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Handles the event when the local player sends other players an invitation to join a match.

## Declaration

```swift
optional func player(_ player: GKPlayer, didRequestMatchWithRecipients recipientPlayers: [GKPlayer])
```

## Parameters

- `player`: The local player who sends the invitation.
- `recipientPlayers`: The players who receive invitations to join the match.

<a id="Discussion"></a>

## Discussion

When GameKit calls this method, Game Center starts the matchmaking process.

## See Also

### Starting a New Match

- [player(\_:didAccept:)](player%28__didaccept_%29.md): Handles the event when the local player accepts an invitation from another player.
- [player(\_:didRequestMatchWithPlayers:)](player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles the event when the local player sends other players an invitation to join a match.

# player:didRequestMatchWithRecipients: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Handles the event when the local player sends other players an invitation to join a match.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player didRequestMatchWithRecipients:(NSArray<GKPlayer *> *) recipientPlayers;
```

## Parameters

- `player`: The local player who sends the invitation.
- `recipientPlayers`: The players who receive invitations to join the match.

<a id="Discussion"></a>

## Discussion

When GameKit calls this method, Game Center starts the matchmaking process.

## See Also

### Starting a New Match

- [player:didAcceptInvite:](player%28__didaccept_%29.md): Handles the event when the local player accepts an invitation from another player.
- [player:didRequestMatchWithPlayers:](player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles the event when the local player sends other players an invitation to join a match.
