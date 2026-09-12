> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/participants](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/participants)

# participants (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The players that participate in a turn-based match.

## Declaration

```swift
var participants: [GKTurnBasedParticipant] { get }
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Use the objects in this array to show more information about the participants in your interface, such as their names, avatars, status, and outcomes. The size of the array and order of the participants remains the same throughout the match.

When you end a player’s turn or quit a match, choose the next participant from this array. If a participant represents an unfilled slot, it’s [status](../gkturnbasedparticipant/status-swift.property.md) property is [GKTurnBasedParticipant.Status.matching](../gkturnbasedparticipant/status-swift.enum/matching.md). Game Center searches for a player to fill that spot only when you choose that participant as the next participant.

## See Also

### Related Documentation

- [endTurn(withNextParticipants:turnTimeout:match:completionHandler:)](endturn%28withnextparticipants_turntimeout_match_completionhandler_%29.md): Passes the turn from the current participant to the next participant.
- [participantQuitInTurn(with:nextParticipants:turnTimeout:match:completionHandler:)](participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md): Forfeits the match on behalf of the local player when it’s their turn.

### Retrieving Match Details

- [matchID](matchid.md): A unique identifier for the turn-based match.
- [creationDate](creationdate.md): The date that Game Center created the match.
- [currentParticipant](currentparticipant.md): The participant whose turn it is.
- [status](status-swift.property.md): The state of the match, such as whether the match is open or has ended.
- [GKTurnBasedMatch.Status](status-swift.enum.md): The states of a match from when it’s created to when it ends.
- [matchData](matchdata.md): The game-specific data that you store in Game Center and pass between participants through a match object.
- [matchDataMaximumSize](matchdatamaximumsize.md): The maximum size of the match data.
- [loadMatchData(completionHandler:)](loadmatchdata%28completionhandler_%29.md): Fetches your game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match.

# participants (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The players that participate in a turn-based match.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSArray<GKTurnBasedParticipant *> * participants;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSArray<GKTurnBasedParticipant *> * participants;
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Use the objects in this array to show more information about the participants in your interface, such as their names, avatars, status, and outcomes. The size of the array and order of the participants remains the same throughout the match.

When you end a player’s turn or quit a match, choose the next participant from this array. If a participant represents an unfilled slot, it’s [status](../gkturnbasedparticipant/status-swift.property.md) property is [GKTurnBasedParticipantStatusMatching](../gkturnbasedparticipant/status-swift.enum/matching.md). Game Center searches for a player to fill that spot only when you choose that participant as the next participant.

## See Also

### Related Documentation

- [endTurnWithNextParticipants:turnTimeout:matchData:completionHandler:](endturn%28withnextparticipants_turntimeout_match_completionhandler_%29.md): Passes the turn from the current participant to the next participant.
- [participantQuitInTurnWithOutcome:nextParticipants:turnTimeout:matchData:completionHandler:](participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md): Forfeits the match on behalf of the local player when it’s their turn.

### Retrieving Match Details

- [matchID](matchid.md): A unique identifier for the turn-based match.
- [creationDate](creationdate.md): The date that Game Center created the match.
- [currentParticipant](currentparticipant.md): The participant whose turn it is.
- [status](status-swift.property.md): The state of the match, such as whether the match is open or has ended.
- [GKTurnBasedMatchStatus](status-swift.enum.md): The states of a match from when it’s created to when it ends.
- [matchData](matchdata.md): The game-specific data that you store in Game Center and pass between participants through a match object.
- [matchDataMaximumSize](matchdatamaximumsize.md): The maximum size of the match data.
- [loadMatchDataWithCompletionHandler:](loadmatchdata%28completionhandler_%29.md): Fetches your game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match.
