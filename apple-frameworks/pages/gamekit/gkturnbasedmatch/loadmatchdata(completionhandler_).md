> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/loadmatchdata(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/loadmatchdata(completionhandler:))

# loadMatchData(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Fetches your game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match.

## Declaration

```swift
func loadMatchData(completionHandler: (@Sendable (Data?, (any Error)?) -> Void)? = nil)
```

```swift
func loadMatchData() async throws -> Data?
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***matchData***: The match data you pass to `GKTurnBasedMatch` methods that GameKit stores in Game Center, or `nil` if an error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

<a id="Discussion"></a>

## Discussion

The [matchData](matchdata.md) property is `nil` until you fetch the data from Game Center using this method.

## See Also

### Retrieving Match Details

- [matchID](matchid.md): A unique identifier for the turn-based match.
- [creationDate](creationdate.md): The date that Game Center created the match.
- [participants](participants.md): The players that participate in a turn-based match.
- [currentParticipant](currentparticipant.md): The participant whose turn it is.
- [status](status-swift.property.md): The state of the match, such as whether the match is open or has ended.
- [GKTurnBasedMatch.Status](status-swift.enum.md): The states of a match from when it’s created to when it ends.
- [matchData](matchdata.md): The game-specific data that you store in Game Center and pass between participants through a match object.
- [matchDataMaximumSize](matchdatamaximumsize.md): The maximum size of the match data.

# loadMatchDataWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Fetches your game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match.

## Declaration

```objectivec
- (void) loadMatchDataWithCompletionHandler:(void (^)(NSData *matchData, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***matchData***: The match data you pass to `GKTurnBasedMatch` methods that GameKit stores in Game Center, or `nil` if an error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

<a id="Discussion"></a>

## Discussion

The [matchData](matchdata.md) property is `nil` until you fetch the data from Game Center using this method.

## See Also

### Retrieving Match Details

- [matchID](matchid.md): A unique identifier for the turn-based match.
- [creationDate](creationdate.md): The date that Game Center created the match.
- [participants](participants.md): The players that participate in a turn-based match.
- [currentParticipant](currentparticipant.md): The participant whose turn it is.
- [status](status-swift.property.md): The state of the match, such as whether the match is open or has ended.
- [GKTurnBasedMatchStatus](status-swift.enum.md): The states of a match from when it’s created to when it ends.
- [matchData](matchdata.md): The game-specific data that you store in Game Center and pass between participants through a match object.
- [matchDataMaximumSize](matchdatamaximumsize.md): The maximum size of the match data.
