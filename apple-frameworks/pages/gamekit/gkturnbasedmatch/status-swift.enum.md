> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/status-swift.enum](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/status-swift.enum)

# GKTurnBasedMatch.Status (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The states of a match from when it’s created to when it ends.

## Declaration

```swift
enum Status
```

## Topics

### Match Statuses

- [GKTurnBasedMatch.Status.unknown](status-swift.enum/unknown.md): A match that is in an unknown state.
- [GKTurnBasedMatch.Status.open](status-swift.enum/open.md): A match that participants are actively playing.
- [GKTurnBasedMatch.Status.ended](status-swift.enum/ended.md): A match that finishes.
- [GKTurnBasedMatch.Status.matching](status-swift.enum/matching.md): A match with empty slots that Game Center is actively filling.

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

### Retrieving Match Details

- [matchID](matchid.md): A unique identifier for the turn-based match.
- [creationDate](creationdate.md): The date that Game Center created the match.
- [participants](participants.md): The players that participate in a turn-based match.
- [currentParticipant](currentparticipant.md): The participant whose turn it is.
- [status](status-swift.property.md): The state of the match, such as whether the match is open or has ended.
- [matchData](matchdata.md): The game-specific data that you store in Game Center and pass between participants through a match object.
- [matchDataMaximumSize](matchdatamaximumsize.md): The maximum size of the match data.
- [loadMatchData(completionHandler:)](loadmatchdata%28completionhandler_%29.md): Fetches your game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match.

# GKTurnBasedMatchStatus (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The states of a match from when it’s created to when it ends.

## Declaration

```objectivec
enum GKTurnBasedMatchStatus : NSInteger;
```

## Topics

### Match Statuses

- [GKTurnBasedMatchStatusUnknown](status-swift.enum/unknown.md): A match that is in an unknown state.
- [GKTurnBasedMatchStatusOpen](status-swift.enum/open.md): A match that participants are actively playing.
- [GKTurnBasedMatchStatusEnded](status-swift.enum/ended.md): A match that finishes.
- [GKTurnBasedMatchStatusMatching](status-swift.enum/matching.md): A match with empty slots that Game Center is actively filling.

## See Also

### Retrieving Match Details

- [matchID](matchid.md): A unique identifier for the turn-based match.
- [creationDate](creationdate.md): The date that Game Center created the match.
- [participants](participants.md): The players that participate in a turn-based match.
- [currentParticipant](currentparticipant.md): The participant whose turn it is.
- [status](status-swift.property.md): The state of the match, such as whether the match is open or has ended.
- [matchData](matchdata.md): The game-specific data that you store in Game Center and pass between participants through a match object.
- [matchDataMaximumSize](matchdatamaximumsize.md): The maximum size of the match data.
- [loadMatchDataWithCompletionHandler:](loadmatchdata%28completionhandler_%29.md): Fetches your game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match.
