> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/endturn(withnextparticipants:turntimeout:match:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/endturn(withnextparticipants:turntimeout:match:completionhandler:))

# endTurn(withNextParticipants:turnTimeout:match:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Passes the turn from the current participant to the next participant.

## Declaration

```swift
func endTurn(withNextParticipants nextParticipants: [GKTurnBasedParticipant], turnTimeout timeout: TimeInterval, match matchData: Data, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func endTurn(withNextParticipants nextParticipants: [GKTurnBasedParticipant], turnTimeout timeout: TimeInterval, match matchData: Data) async throws
```

## Parameters

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

Invoke this method only when the local player is the current participant. To receive turn-based events that this method generates, register a listener that conforms to the [GKTurnBasedEventListener](../gkturnbasedeventlistener.md) protocol with the local player. See [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md).

## See Also

### Ending Turns and Saving Data

- [saveCurrentTurn(withMatch:completionHandler:)](savecurrentturn%28withmatch_completionhandler_%29.md): Saves your match data in Game Center without ending the turn.
- [Turn Timeouts](../turn-timeouts.md): A timeout for a player to take their turn.

# endTurnWithNextParticipants:turnTimeout:matchData:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Passes the turn from the current participant to the next participant.

## Declaration

```objectivec
- (void) endTurnWithNextParticipants:(NSArray<GKTurnBasedParticipant *> *) nextParticipants turnTimeout:(NSTimeInterval) timeout matchData:(NSData *) matchData completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

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

Invoke this method only when the local player is the current participant. To receive turn-based events that this method generates, register a listener that conforms to the [GKTurnBasedEventListener](../gkturnbasedeventlistener.md) protocol with the local player. See [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md).

## See Also

### Ending Turns and Saving Data

- [saveCurrentTurnWithMatchData:completionHandler:](savecurrentturn%28withmatch_completionhandler_%29.md): Saves your match data in Game Center without ending the turn.
- [Turn Timeouts](../turn-timeouts.md): A timeout for a player to take their turn.
