> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/participantquitoutofturn(with:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/participantquitoutofturn(with:withcompletionhandler:))

# participantQuitOutOfTurn(with:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Forfeits the match on behalf of the local player when it’s not their turn.

## Declaration

```swift
func participantQuitOutOfTurn(with matchOutcome: GKTurnBasedMatch.Outcome, withCompletionHandler completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func participantQuitOutOfTurn(with matchOutcome: GKTurnBasedMatch.Outcome) async throws
```

## Parameters

- `matchOutcome`: The outcome of the local player who forfeits the match. Don’t pass `nil` as this parameter.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Invoke this method to forfeit a match when the local player isn’t the current participant. To receive turn-based events that this method generates, register a listener that conforms to the [GKTurnBasedEventListener](../gkturnbasedeventlistener.md) protocol with the local player. See [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md).

## See Also

### Forfeiting a Match

- [participantQuitInTurn(with:nextParticipants:turnTimeout:match:completionHandler:)](participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md): Forfeits the match on behalf of the local player when it’s their turn.
- [GKTurnBasedMatch.Outcome](outcome.md): The state of a participant when they forfeit a match or when a match ends.

# participantQuitOutOfTurnWithOutcome:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Forfeits the match on behalf of the local player when it’s not their turn.

## Declaration

```objectivec
- (void) participantQuitOutOfTurnWithOutcome:(GKTurnBasedMatchOutcome) matchOutcome withCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `matchOutcome`: The outcome of the local player who forfeits the match. Don’t pass `nil` as this parameter.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Invoke this method to forfeit a match when the local player isn’t the current participant. To receive turn-based events that this method generates, register a listener that conforms to the [GKTurnBasedEventListener](../gkturnbasedeventlistener.md) protocol with the local player. See [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md).

## See Also

### Forfeiting a Match

- [participantQuitInTurnWithOutcome:nextParticipants:turnTimeout:matchData:completionHandler:](participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md): Forfeits the match on behalf of the local player when it’s their turn.
- [GKTurnBasedMatchOutcome](outcome.md): The state of a participant when they forfeit a match or when a match ends.
