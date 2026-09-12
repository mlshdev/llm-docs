> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedparticipant/status-swift.enum](https://developer.apple.com/documentation/gamekit/gkturnbasedparticipant/status-swift.enum)

# GKTurnBasedParticipant.Status (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The state the participant is in during the match.

## Declaration

```swift
enum Status
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

## Topics

### Constants

- [GKTurnBasedParticipant.Status.unknown](status-swift.enum/unknown.md): The participant is in an unexpected state.
- [GKTurnBasedParticipant.Status.invited](status-swift.enum/invited.md): The participant is invited to the match, but hasn’t responded to the invitation.
- [GKTurnBasedParticipant.Status.declined](status-swift.enum/declined.md): The participant declines the invitation to join the match, automatically terminating the match.
- [GKTurnBasedParticipant.Status.matching](status-swift.enum/matching.md): The participant represents an unfilled position in the match that Game Center promises to fill when needed.
- [GKTurnBasedParticipant.Status.active](status-swift.enum/active.md): The participant joins the match and is an active player.
- [GKTurnBasedParticipant.Status.done](status-swift.enum/done.md): The participant leaves the match.

### Initializers

- [init(rawValue:)](status-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving Participant Details

- [lastTurnDate](lastturndate.md): The date and time that this participant last took a turn in the game.
- [timeoutDate](timeoutdate.md): The date and time that the participant’s turn timed out.
- [player](player.md): The player object containing the participant details.
- [status](status-swift.property.md): The status of the participant.
- [playerID](playerid.md): Deprecated. The player identifier for this participant.

# GKTurnBasedParticipantStatus (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The state the participant is in during the match.

## Declaration

```objectivec
enum GKTurnBasedParticipantStatus : NSInteger;
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

## Topics

### Constants

- [GKTurnBasedParticipantStatusUnknown](status-swift.enum/unknown.md): The participant is in an unexpected state.
- [GKTurnBasedParticipantStatusInvited](status-swift.enum/invited.md): The participant is invited to the match, but hasn’t responded to the invitation.
- [GKTurnBasedParticipantStatusDeclined](status-swift.enum/declined.md): The participant declines the invitation to join the match, automatically terminating the match.
- [GKTurnBasedParticipantStatusMatching](status-swift.enum/matching.md): The participant represents an unfilled position in the match that Game Center promises to fill when needed.
- [GKTurnBasedParticipantStatusActive](status-swift.enum/active.md): The participant joins the match and is an active player.
- [GKTurnBasedParticipantStatusDone](status-swift.enum/done.md): The participant leaves the match.

## See Also

### Retrieving Participant Details

- [lastTurnDate](lastturndate.md): The date and time that this participant last took a turn in the game.
- [timeoutDate](timeoutdate.md): The date and time that the participant’s turn timed out.
- [player](player.md): The player object containing the participant details.
- [status](status-swift.property.md): The status of the participant.
- [playerID](playerid.md): Deprecated. The player identifier for this participant.
