> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedparticipant/timeoutdate](https://developer.apple.com/documentation/gamekit/gkturnbasedparticipant/timeoutdate)

# timeoutDate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The date and time that the participant’s turn timed out.

## Declaration

```swift
var timeoutDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` when the participant takes a turn that doesn’t time out.

## See Also

### Retrieving Participant Details

- [lastTurnDate](lastturndate.md): The date and time that this participant last took a turn in the game.
- [player](player.md): The player object containing the participant details.
- [status](status-swift.property.md): The status of the participant.
- [GKTurnBasedParticipant.Status](status-swift.enum.md): The state the participant is in during the match.
- [playerID](playerid.md): Deprecated. The player identifier for this participant.

# timeoutDate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The date and time that the participant’s turn timed out.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * timeoutDate;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSDate * timeoutDate;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` when the participant takes a turn that doesn’t time out.

## See Also

### Retrieving Participant Details

- [lastTurnDate](lastturndate.md): The date and time that this participant last took a turn in the game.
- [player](player.md): The player object containing the participant details.
- [status](status-swift.property.md): The status of the participant.
- [GKTurnBasedParticipantStatus](status-swift.enum.md): The state the participant is in during the match.
- [playerID](playerid.md): Deprecated. The player identifier for this participant.
