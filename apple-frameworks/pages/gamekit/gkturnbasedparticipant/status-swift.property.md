> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedparticipant/status-swift.property](https://developer.apple.com/documentation/gamekit/gkturnbasedparticipant/status-swift.property)

# status (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The status of the participant.

## Declaration

```swift
var status: GKTurnBasedParticipant.Status { get }
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

## See Also

### Retrieving Participant Details

- [lastTurnDate](lastturndate.md): The date and time that this participant last took a turn in the game.
- [timeoutDate](timeoutdate.md): The date and time that the participant’s turn timed out.
- [player](player.md): The player object containing the participant details.
- [GKTurnBasedParticipant.Status](status-swift.enum.md): The state the participant is in during the match.
- [playerID](playerid.md): Deprecated. The player identifier for this participant.

# status (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The status of the participant.

## Declaration

```objectivec
@property (nonatomic, readonly) GKTurnBasedParticipantStatus status;
```

```objectivec
@property (atomic, readonly) GKTurnBasedParticipantStatus status;
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

## See Also

### Retrieving Participant Details

- [lastTurnDate](lastturndate.md): The date and time that this participant last took a turn in the game.
- [timeoutDate](timeoutdate.md): The date and time that the participant’s turn timed out.
- [player](player.md): The player object containing the participant details.
- [GKTurnBasedParticipantStatus](status-swift.enum.md): The state the participant is in during the match.
- [playerID](playerid.md): Deprecated. The player identifier for this participant.
