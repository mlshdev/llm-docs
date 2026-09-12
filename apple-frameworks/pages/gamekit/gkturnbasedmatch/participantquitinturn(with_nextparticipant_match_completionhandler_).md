> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/participantquitinturn(with:nextparticipant:match:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/participantquitinturn(with:nextparticipant:match:completionhandler:))

# participantQuitInTurn(with:nextParticipant:match:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 6.0) · iPadOS 5.0+ (deprecated in 6.0) · Mac Catalyst 5.0+ (deprecated in 6.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Resigns the current player from the match without ending the match.

> Use the  [participantQuitInTurn(with:nextParticipants:turnTimeout:match:completionHandler:)](participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md) method instead.

## Declaration

```swift
func participantQuitInTurn(with matchOutcome: GKTurnBasedMatch.Outcome, nextParticipant: GKTurnBasedParticipant, match matchData: Data, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func participantQuitInTurn(with matchOutcome: GKTurnBasedMatch.Outcome, nextParticipant: GKTurnBasedParticipant, match matchData: Data) async throws
```

## Parameters

- `matchOutcome`: The end outcome of the current player in the match. Do not pass `nil` as an argument.
- `nextParticipant`: The next player in the match who needs to take an action. It must be one of the object’s stored in the match’s [participants](participants.md) property.
- `matchData`: A serialized blob of data reflecting the game-specific state for the match.
- `completionHandler`: A block to be called after the data is uploaded to the server.

  The block receives the following parameters:

  - ***error***: If an error occurred, this error object describes the error. If the operation was completed successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

Your game calls this method on an instance of your game that is processing the current player’s turn, but that player has left the match. For example, the player may have willingly resigned from the match or that player may have been eliminated by the other players (based on your game’s internal logic).

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. Later, when the task is complete, Game Kit calls your completion handler. The completion handler is always called on the main thread.

## See Also

### Deprecated Methods

- [endMatchInTurn(withMatch:scores:achievements:completionHandler:)](endmatchinturn%28withmatch_scores_achievements_completionhandler_%29.md): Deprecated. Ends the match while submitting all of the scores and achievements.
- [endTurn(withNextParticipant:match:completionHandler:)](endturn%28withnextparticipant_match_completionhandler_%29.md): Deprecated. Updates the data stored on Game Center for the current match.

# participantQuitInTurnWithOutcome:nextParticipant:matchData:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 6.0) · iPadOS 5.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.9) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Resigns the current player from the match without ending the match.

> Use the  [participantQuitInTurnWithOutcome:nextParticipants:turnTimeout:matchData:completionHandler:](participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md) method instead.

## Declaration

```objectivec
- (void) participantQuitInTurnWithOutcome:(GKTurnBasedMatchOutcome) matchOutcome nextParticipant:(GKTurnBasedParticipant *) nextParticipant matchData:(NSData *) matchData completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `matchOutcome`: The end outcome of the current player in the match. Do not pass `nil` as an argument.
- `nextParticipant`: The next player in the match who needs to take an action. It must be one of the object’s stored in the match’s [participants](participants.md) property.
- `matchData`: A serialized blob of data reflecting the game-specific state for the match.
- `completionHandler`: A block to be called after the data is uploaded to the server.

  The block receives the following parameters:

  - ***error***: If an error occurred, this error object describes the error. If the operation was completed successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

Your game calls this method on an instance of your game that is processing the current player’s turn, but that player has left the match. For example, the player may have willingly resigned from the match or that player may have been eliminated by the other players (based on your game’s internal logic).

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. Later, when the task is complete, Game Kit calls your completion handler. The completion handler is always called on the main thread.

## See Also

### Deprecated Methods

- [endMatchInTurnWithMatchData:scores:achievements:completionHandler:](endmatchinturn%28withmatch_scores_achievements_completionhandler_%29.md): Deprecated. Ends the match while submitting all of the scores and achievements.
- [endTurnWithNextParticipant:matchData:completionHandler:](endturn%28withnextparticipant_match_completionhandler_%29.md): Deprecated. Updates the data stored on Game Center for the current match.
