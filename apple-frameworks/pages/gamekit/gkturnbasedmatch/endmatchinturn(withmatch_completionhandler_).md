> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/endmatchinturn(withmatch:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/endmatchinturn(withmatch:completionhandler:))

# endMatchInTurn(withMatch:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Ends the match.

## Declaration

```swift
func endMatchInTurn(withMatch matchData: Data, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func endMatchInTurn(withMatch matchData: Data) async throws
```

## Parameters

- `matchData`: Your game-specific data representing the match state. For example, include information needed for the next participant to take their turn in this object. Don’t pass `nil` as this parameter.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Invoke this method only when the local player is the current participant. Also, set the [matchOutcome](../gkturnbasedparticipant/matchoutcome.md) property for each participant in the match’s [participants](participants.md) property to a value other than [GKTurnBasedMatch.Outcome.none](outcome/none.md) before invoking this method.

To receive turn-based events that this method generates, register a listener that conforms to the [GKTurnBasedEventListener](../gkturnbasedeventlistener.md) protocol with the local player. See [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md).

## See Also

### Ending a Match

- [endMatchInTurn(withMatch:leaderboardScores:achievements:completionHandler:)](endmatchinturn%28withmatch_leaderboardscores_achievements_completionhandler_%29.md): Ends the match while submitting scores and achievements for all of the participants.

# endMatchInTurnWithMatchData:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Ends the match.

## Declaration

```objectivec
- (void) endMatchInTurnWithMatchData:(NSData *) matchData completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `matchData`: Your game-specific data representing the match state. For example, include information needed for the next participant to take their turn in this object. Don’t pass `nil` as this parameter.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Invoke this method only when the local player is the current participant. Also, set the [matchOutcome](../gkturnbasedparticipant/matchoutcome.md) property for each participant in the match’s [participants](participants.md) property to a value other than [GKTurnBasedMatchOutcomeNone](outcome/none.md) before invoking this method.

To receive turn-based events that this method generates, register a listener that conforms to the [GKTurnBasedEventListener](../gkturnbasedeventlistener.md) protocol with the local player. See [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md).

## See Also

### Ending a Match

- [endMatchInTurnWithMatchData:leaderboardScores:achievements:completionHandler:](endmatchinturn%28withmatch_leaderboardscores_achievements_completionhandler_%29.md): Ends the match while submitting scores and achievements for all of the participants.
