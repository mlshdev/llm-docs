> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/creationdate](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/creationdate)

# creationDate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The date that Game Center created the match.

## Declaration

```swift
var creationDate: Date { get }
```

## See Also

### Retrieving Match Details

- [matchID](matchid.md): A unique identifier for the turn-based match.
- [participants](participants.md): The players that participate in a turn-based match.
- [currentParticipant](currentparticipant.md): The participant whose turn it is.
- [status](status-swift.property.md): The state of the match, such as whether the match is open or has ended.
- [GKTurnBasedMatch.Status](status-swift.enum.md): The states of a match from when it’s created to when it ends.
- [matchData](matchdata.md): The game-specific data that you store in Game Center and pass between participants through a match object.
- [matchDataMaximumSize](matchdatamaximumsize.md): The maximum size of the match data.
- [loadMatchData(completionHandler:)](loadmatchdata%28completionhandler_%29.md): Fetches your game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match.

# creationDate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The date that Game Center created the match.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSDate * creationDate;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSDate * creationDate;
```

## See Also

### Retrieving Match Details

- [matchID](matchid.md): A unique identifier for the turn-based match.
- [participants](participants.md): The players that participate in a turn-based match.
- [currentParticipant](currentparticipant.md): The participant whose turn it is.
- [status](status-swift.property.md): The state of the match, such as whether the match is open or has ended.
- [GKTurnBasedMatchStatus](status-swift.enum.md): The states of a match from when it’s created to when it ends.
- [matchData](matchdata.md): The game-specific data that you store in Game Center and pass between participants through a match object.
- [matchDataMaximumSize](matchdatamaximumsize.md): The maximum size of the match data.
- [loadMatchDataWithCompletionHandler:](loadmatchdata%28completionhandler_%29.md): Fetches your game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match.
