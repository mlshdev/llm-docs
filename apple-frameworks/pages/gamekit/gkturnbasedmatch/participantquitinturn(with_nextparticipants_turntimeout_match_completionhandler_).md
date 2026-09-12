> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/participantquitinturn(with:nextparticipants:turntimeout:match:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/participantquitinturn(with:nextparticipants:turntimeout:match:completionhandler:))

# participantQuitInTurn(with:nextParticipants:turnTimeout:match:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Forfeits the match on behalf of the local player when it’s their turn.

## Declaration

```swift
func participantQuitInTurn(with matchOutcome: GKTurnBasedMatch.Outcome, nextParticipants: [GKTurnBasedParticipant], turnTimeout timeout: TimeInterval, match matchData: Data, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func participantQuitInTurn(with matchOutcome: GKTurnBasedMatch.Outcome, nextParticipants: [GKTurnBasedParticipant], turnTimeout timeout: TimeInterval, match matchData: Data) async throws
```

## Parameters

- `matchOutcome`: The outcome of the local player who forfeits the match. Don’t pass `nil` as this parameter.
- `nextParticipants`: Match participants in the order you want Game Center to pass the turn. Game Center passes the turn to the next participant in the array when communication fails or a participant doesn’t finish their turn within the time limit. Elements in this array must be in the [participants](participants.md) property.
- `timeout`: The length of time a participant has to complete their turn before Game Center passes the turn to the next participant. The maximum value is 90 days.
- `matchData`: Your game-specific data representing the match state. For example, include information needed for the next participant to take their turn in this object. Don’t pass `nil` as this parameter.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Invoke this method to forfeit the match when the local player is the current participant. To receive turn-based events that this method generates, register a listener that conforms to the [GKTurnBasedEventListener](../gkturnbasedeventlistener.md) protocol with the local player. See [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md).

## See Also

### Forfeiting a Match

- [participantQuitOutOfTurn(with:withCompletionHandler:)](participantquitoutofturn%28with_withcompletionhandler_%29.md): Forfeits the match on behalf of the local player when it’s not their turn.
- [GKTurnBasedMatch.Outcome](outcome.md): The state of a participant when they forfeit a match or when a match ends.

# participantQuitInTurnWithOutcome:nextParticipants:turnTimeout:matchData:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Forfeits the match on behalf of the local player when it’s their turn.

## Declaration

```objectivec
- (void) participantQuitInTurnWithOutcome:(GKTurnBasedMatchOutcome) matchOutcome nextParticipants:(NSArray<GKTurnBasedParticipant *> *) nextParticipants turnTimeout:(NSTimeInterval) timeout matchData:(NSData *) matchData completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `matchOutcome`: The outcome of the local player who forfeits the match. Don’t pass `nil` as this parameter.
- `nextParticipants`: Match participants in the order you want Game Center to pass the turn. Game Center passes the turn to the next participant in the array when communication fails or a participant doesn’t finish their turn within the time limit. Elements in this array must be in the [participants](participants.md) property.
- `timeout`: The length of time a participant has to complete their turn before Game Center passes the turn to the next participant. The maximum value is 90 days.
- `matchData`: Your game-specific data representing the match state. For example, include information needed for the next participant to take their turn in this object. Don’t pass `nil` as this parameter.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Invoke this method to forfeit the match when the local player is the current participant. To receive turn-based events that this method generates, register a listener that conforms to the [GKTurnBasedEventListener](../gkturnbasedeventlistener.md) protocol with the local player. See [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md).

## See Also

### Forfeiting a Match

- [participantQuitOutOfTurnWithOutcome:withCompletionHandler:](participantquitoutofturn%28with_withcompletionhandler_%29.md): Forfeits the match on behalf of the local player when it’s not their turn.
- [GKTurnBasedMatchOutcome](outcome.md): The state of a participant when they forfeit a match or when a match ends.
