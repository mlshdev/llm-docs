> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedparticipant/status-swift.enum/done](https://developer.apple.com/documentation/gamekit/gkturnbasedparticipant/status-swift.enum/done)

# GKTurnBasedParticipant.Status.done (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The participant leaves the match.

## Declaration

```swift
case done
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

You set the [matchOutcome](../matchoutcome.md) property to state the reason why the participant left.

## See Also

### Constants

- [GKTurnBasedParticipant.Status.unknown](unknown.md): The participant is in an unexpected state.
- [GKTurnBasedParticipant.Status.invited](invited.md): The participant is invited to the match, but hasn’t responded to the invitation.
- [GKTurnBasedParticipant.Status.declined](declined.md): The participant declines the invitation to join the match, automatically terminating the match.
- [GKTurnBasedParticipant.Status.matching](matching.md): The participant represents an unfilled position in the match that Game Center promises to fill when needed.
- [GKTurnBasedParticipant.Status.active](active.md): The participant joins the match and is an active player.

# GKTurnBasedParticipantStatusDone (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The participant leaves the match.

## Declaration

```objectivec
GKTurnBasedParticipantStatusDone
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

You set the [matchOutcome](../matchoutcome.md) property to state the reason why the participant left.

## See Also

### Constants

- [GKTurnBasedParticipantStatusUnknown](unknown.md): The participant is in an unexpected state.
- [GKTurnBasedParticipantStatusInvited](invited.md): The participant is invited to the match, but hasn’t responded to the invitation.
- [GKTurnBasedParticipantStatusDeclined](declined.md): The participant declines the invitation to join the match, automatically terminating the match.
- [GKTurnBasedParticipantStatusMatching](matching.md): The participant represents an unfilled position in the match that Game Center promises to fill when needed.
- [GKTurnBasedParticipantStatusActive](active.md): The participant joins the match and is an active player.
