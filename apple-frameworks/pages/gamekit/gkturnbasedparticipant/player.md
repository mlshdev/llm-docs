> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedparticipant/player](https://developer.apple.com/documentation/gamekit/gkturnbasedparticipant/player)

# player (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The player object containing the participant details.

## Declaration

```swift
var player: GKPlayer? { get }
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

This property is `nil` if this slot isn’t filled yet — for example, when Game Center uses automatch to fill this slot.

## See Also

### Retrieving Participant Details

- [lastTurnDate](lastturndate.md): The date and time that this participant last took a turn in the game.
- [timeoutDate](timeoutdate.md): The date and time that the participant’s turn timed out.
- [status](status-swift.property.md): The status of the participant.
- [GKTurnBasedParticipant.Status](status-swift.enum.md): The state the participant is in during the match.
- [playerID](playerid.md): Deprecated. The player identifier for this participant.

# player (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The player object containing the participant details.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) GKPlayer * player;
```

```objectivec
@property (atomic, strong, readonly, nullable) GKPlayer * player;
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

This property is `nil` if this slot isn’t filled yet — for example, when Game Center uses automatch to fill this slot.

## See Also

### Retrieving Participant Details

- [lastTurnDate](lastturndate.md): The date and time that this participant last took a turn in the game.
- [timeoutDate](timeoutdate.md): The date and time that the participant’s turn timed out.
- [status](status-swift.property.md): The status of the participant.
- [GKTurnBasedParticipantStatus](status-swift.enum.md): The state the participant is in during the match.
- [playerID](playerid.md): Deprecated. The player identifier for this participant.
