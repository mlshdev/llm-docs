> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedparticipant/playerid](https://developer.apple.com/documentation/gamekit/gkturnbasedparticipant/playerid)

# playerID (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The player identifier for this participant.

> User [player](player.md) instead.

## Declaration

```swift
var playerID: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if this slot isn’t filled yet — for example, when Game Center uses automatch to fill this slot.

## See Also

### Retrieving Participant Details

- [lastTurnDate](lastturndate.md): The date and time that this participant last took a turn in the game.
- [timeoutDate](timeoutdate.md): The date and time that the participant’s turn timed out.
- [player](player.md): The player object containing the participant details.
- [status](status-swift.property.md): The status of the participant.
- [GKTurnBasedParticipant.Status](status-swift.enum.md): The state the participant is in during the match.

# playerID (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The player identifier for this participant.

> User [player](player.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * playerID;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * playerID;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if this slot isn’t filled yet — for example, when Game Center uses automatch to fill this slot.

## See Also

### Retrieving Participant Details

- [lastTurnDate](lastturndate.md): The date and time that this participant last took a turn in the game.
- [timeoutDate](timeoutdate.md): The date and time that the participant’s turn timed out.
- [player](player.md): The player object containing the participant details.
- [status](status-swift.property.md): The status of the participant.
- [GKTurnBasedParticipantStatus](status-swift.enum.md): The state the participant is in during the match.
