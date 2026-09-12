> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/endmatchinturn(withmatch:scores:achievements:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/endmatchinturn(withmatch:scores:achievements:completionhandler:))

# endMatchInTurn(withMatch:scores:achievements:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 14.0) · iPadOS 6.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Ends the match while submitting all of the scores and achievements.

> Use the [endMatchInTurn(withMatch:scores:achievements:completionHandler:)](endmatchinturn%28withmatch_scores_achievements_completionhandler_%29.md) method instead.

## Declaration

```swift
func endMatchInTurn(withMatch matchData: Data, scores: [GKScore]?, achievements: [GKAchievement]?, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func endMatchInTurn(withMatch matchData: Data, scores: [GKScore]?, achievements: [GKAchievement]?) async throws
```

## Parameters

- `matchData`: A serialized blob of data reflecting the current state for the match. Do not pass `nil` as an argument.
- `scores`: An array of `GKScore` objects containing the final scores for every participant in the match.
- `achievements`: An array of `GKAchievement` objects containing the achievements acquired by each participant in the match.
- `completionHandler`: A block to be called after the scores are saved to the server.

  The block receives the following parameters:

  - ***error***: If an error occurred, this error object describes the error. If the operation was completed successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. Later, when the task is complete, Game Kit calls your completion handler. The completion handler is always called on the main thread.

This method ends the current match and submits scores and achievements for all of the participants. The scores can submitted to multiple leaderboards. The `GKTurnBasedMatchOutcome` status must be set for each participant before calling this method.

## See Also

### Deprecated Methods

- [participantQuitInTurn(with:nextParticipant:match:completionHandler:)](participantquitinturn%28with_nextparticipant_match_completionhandler_%29.md): Deprecated. Resigns the current player from the match without ending the match.
- [endTurn(withNextParticipant:match:completionHandler:)](endturn%28withnextparticipant_match_completionhandler_%29.md): Deprecated. Updates the data stored on Game Center for the current match.

# endMatchInTurnWithMatchData:scores:achievements:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 14.0) · iPadOS 6.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Ends the match while submitting all of the scores and achievements.

> Use the [endMatchInTurnWithMatchData:scores:achievements:completionHandler:](endmatchinturn%28withmatch_scores_achievements_completionhandler_%29.md) method instead.

## Declaration

```objectivec
- (void) endMatchInTurnWithMatchData:(NSData *) matchData scores:(NSArray<GKScore *> *) scores achievements:(NSArray<GKAchievement *> *) achievements completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `matchData`: A serialized blob of data reflecting the current state for the match. Do not pass `nil` as an argument.
- `scores`: An array of `GKScore` objects containing the final scores for every participant in the match.
- `achievements`: An array of `GKAchievement` objects containing the achievements acquired by each participant in the match.
- `completionHandler`: A block to be called after the scores are saved to the server.

  The block receives the following parameters:

  - ***error***: If an error occurred, this error object describes the error. If the operation was completed successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

When this method is called, it creates a new background task to handle the request. The method then returns control to your game. Later, when the task is complete, Game Kit calls your completion handler. The completion handler is always called on the main thread.

This method ends the current match and submits scores and achievements for all of the participants. The scores can submitted to multiple leaderboards. The `GKTurnBasedMatchOutcome` status must be set for each participant before calling this method.

## See Also

### Deprecated Methods

- [participantQuitInTurnWithOutcome:nextParticipant:matchData:completionHandler:](participantquitinturn%28with_nextparticipant_match_completionhandler_%29.md): Deprecated. Resigns the current player from the match without ending the match.
- [endTurnWithNextParticipant:matchData:completionHandler:](endturn%28withnextparticipant_match_completionhandler_%29.md): Deprecated. Updates the data stored on Game Center for the current match.
