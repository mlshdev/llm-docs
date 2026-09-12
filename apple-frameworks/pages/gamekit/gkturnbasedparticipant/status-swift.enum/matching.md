> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedparticipant/status-swift.enum/matching](https://developer.apple.com/documentation/gamekit/gkturnbasedparticipant/status-swift.enum/matching)

# GKTurnBasedParticipant.Status.matching (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The participant represents an unfilled position in the match that Game Center promises to fill when needed.

## Declaration

```swift
case matching
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

When you make this participant the next person to take a turn in the match, Game Center fills the position and updates the [status](../status-swift.property.md) and [playerID](../playerid.md) properties.

## See Also

### Constants

- [GKTurnBasedParticipant.Status.unknown](unknown.md): The participant is in an unexpected state.
- [GKTurnBasedParticipant.Status.invited](invited.md): The participant is invited to the match, but hasn’t responded to the invitation.
- [GKTurnBasedParticipant.Status.declined](declined.md): The participant declines the invitation to join the match, automatically terminating the match.
- [GKTurnBasedParticipant.Status.active](active.md): The participant joins the match and is an active player.
- [GKTurnBasedParticipant.Status.done](done.md): The participant leaves the match.

# GKTurnBasedParticipantStatusMatching (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The participant represents an unfilled position in the match that Game Center promises to fill when needed.

## Declaration

```objectivec
GKTurnBasedParticipantStatusMatching
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

When you make this participant the next person to take a turn in the match, Game Center fills the position and updates the [status](../status-swift.property.md) and [playerID](../playerid.md) properties.

## See Also

### Constants

- [GKTurnBasedParticipantStatusUnknown](unknown.md): The participant is in an unexpected state.
- [GKTurnBasedParticipantStatusInvited](invited.md): The participant is invited to the match, but hasn’t responded to the invitation.
- [GKTurnBasedParticipantStatusDeclined](declined.md): The participant declines the invitation to join the match, automatically terminating the match.
- [GKTurnBasedParticipantStatusActive](active.md): The participant joins the match and is an active player.
- [GKTurnBasedParticipantStatusDone](done.md): The participant leaves the match.
