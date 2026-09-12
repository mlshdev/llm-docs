> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/endturn(withnextparticipant:match:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/endturn(withnextparticipant:match:completionhandler:))

# endTurn(withNextParticipant:match:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 6.0) · iPadOS 5.0+ (deprecated in 6.0) · Mac Catalyst 5.0+ (deprecated in 6.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Updates the data stored on Game Center for the current match.

> Use the [endTurn(withNextParticipants:turnTimeout:match:completionHandler:)](endturn%28withnextparticipants_turntimeout_match_completionhandler_%29.md) method instead.

## Declaration

```swift
func endTurn(withNextParticipant nextParticipant: GKTurnBasedParticipant, match matchData: Data, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func endTurn(withNextParticipant nextParticipant: GKTurnBasedParticipant, match matchData: Data) async throws
```

## Parameters

- `nextParticipant`: The next player in the match who needs to take an action. It must be one of the object’s stored in the match’s [participants](participants.md) property.
- `matchData`: A serialized blob of data reflecting the game-specific state for the match. Do not pass `nil` as an argument.
- `completionHandler`: A block to be called after the data is uploaded to Game Center.

  The block receives the following parameters:

  - ***error***: If an error occurred, this error object describes the error. If the operation was completed successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. Later, when the task is complete, Game Kit calls your completion handler. The completion handler is always called on the main thread.

## See Also

### Deprecated Methods

- [participantQuitInTurn(with:nextParticipant:match:completionHandler:)](participantquitinturn%28with_nextparticipant_match_completionhandler_%29.md): Deprecated. Resigns the current player from the match without ending the match.
- [endMatchInTurn(withMatch:scores:achievements:completionHandler:)](endmatchinturn%28withmatch_scores_achievements_completionhandler_%29.md): Deprecated. Ends the match while submitting all of the scores and achievements.

# endTurnWithNextParticipant:matchData:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 6.0) · iPadOS 5.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.9) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Updates the data stored on Game Center for the current match.

> Use the [endTurnWithNextParticipants:turnTimeout:matchData:completionHandler:](endturn%28withnextparticipants_turntimeout_match_completionhandler_%29.md) method instead.

## Declaration

```objectivec
- (void) endTurnWithNextParticipant:(GKTurnBasedParticipant *) nextParticipant matchData:(NSData *) matchData completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `nextParticipant`: The next player in the match who needs to take an action. It must be one of the object’s stored in the match’s [participants](participants.md) property.
- `matchData`: A serialized blob of data reflecting the game-specific state for the match. Do not pass `nil` as an argument.
- `completionHandler`: A block to be called after the data is uploaded to Game Center.

  The block receives the following parameters:

  - ***error***: If an error occurred, this error object describes the error. If the operation was completed successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. Later, when the task is complete, Game Kit calls your completion handler. The completion handler is always called on the main thread.

## See Also

### Deprecated Methods

- [participantQuitInTurnWithOutcome:nextParticipant:matchData:completionHandler:](participantquitinturn%28with_nextparticipant_match_completionhandler_%29.md): Deprecated. Resigns the current player from the match without ending the match.
- [endMatchInTurnWithMatchData:scores:achievements:completionHandler:](endmatchinturn%28withmatch_scores_achievements_completionhandler_%29.md): Deprecated. Ends the match while submitting all of the scores and achievements.
