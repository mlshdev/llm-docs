> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/matchdata](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/matchdata)

# matchData (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The game-specific data that you store in Game Center and pass between participants through a match object.

## Declaration

```swift
var matchData: Data? { get }
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Use this property to get the game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match. This property is `nil` until you fetch the data from Game Center using the [loadMatchData(completionHandler:)](loadmatchdata%28completionhandler_%29.md) method.

## See Also

### Related Documentation

- [endTurn(withNextParticipant:match:completionHandler:)](endturn%28withnextparticipant_match_completionhandler_%29.md): Deprecated. Updates the data stored on Game Center for the current match.
- [saveCurrentTurn(withMatch:completionHandler:)](savecurrentturn%28withmatch_completionhandler_%29.md): Saves your match data in Game Center without ending the turn.
- [participantQuitInTurn(with:nextParticipant:match:completionHandler:)](participantquitinturn%28with_nextparticipant_match_completionhandler_%29.md): Deprecated. Resigns the current player from the match without ending the match.

### Retrieving Match Details

- [matchID](matchid.md): A unique identifier for the turn-based match.
- [creationDate](creationdate.md): The date that Game Center created the match.
- [participants](participants.md): The players that participate in a turn-based match.
- [currentParticipant](currentparticipant.md): The participant whose turn it is.
- [status](status-swift.property.md): The state of the match, such as whether the match is open or has ended.
- [GKTurnBasedMatch.Status](status-swift.enum.md): The states of a match from when it’s created to when it ends.
- [matchDataMaximumSize](matchdatamaximumsize.md): The maximum size of the match data.
- [loadMatchData(completionHandler:)](loadmatchdata%28completionhandler_%29.md): Fetches your game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match.

# matchData (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The game-specific data that you store in Game Center and pass between participants through a match object.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSData * matchData;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSData * matchData;
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Use this property to get the game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match. This property is `nil` until you fetch the data from Game Center using the [loadMatchDataWithCompletionHandler:](loadmatchdata%28completionhandler_%29.md) method.

## See Also

### Related Documentation

- [endTurnWithNextParticipant:matchData:completionHandler:](endturn%28withnextparticipant_match_completionhandler_%29.md): Deprecated. Updates the data stored on Game Center for the current match.
- [saveCurrentTurnWithMatchData:completionHandler:](savecurrentturn%28withmatch_completionhandler_%29.md): Saves your match data in Game Center without ending the turn.
- [participantQuitInTurnWithOutcome:nextParticipant:matchData:completionHandler:](participantquitinturn%28with_nextparticipant_match_completionhandler_%29.md): Deprecated. Resigns the current player from the match without ending the match.

### Retrieving Match Details

- [matchID](matchid.md): A unique identifier for the turn-based match.
- [creationDate](creationdate.md): The date that Game Center created the match.
- [participants](participants.md): The players that participate in a turn-based match.
- [currentParticipant](currentparticipant.md): The participant whose turn it is.
- [status](status-swift.property.md): The state of the match, such as whether the match is open or has ended.
- [GKTurnBasedMatchStatus](status-swift.enum.md): The states of a match from when it’s created to when it ends.
- [matchDataMaximumSize](matchdatamaximumsize.md): The maximum size of the match data.
- [loadMatchDataWithCompletionHandler:](loadmatchdata%28completionhandler_%29.md): Fetches your game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match.
