> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/savemergedmatch(_:withresolvedexchanges:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/savemergedmatch(_:withresolvedexchanges:completionhandler:))

# saveMergedMatch(\_:withResolvedExchanges:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Saves match data for completed exchanges without ending the turn.

## Declaration

```swift
func saveMergedMatch(_ matchData: Data, withResolvedExchanges exchanges: [GKTurnBasedExchange], completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func saveMergedMatch(_ matchData: Data, withResolvedExchanges exchanges: [GKTurnBasedExchange]) async throws
```

## Parameters

- `matchData`: Your game-specific data representing the match state including the resolved exchange data.
- `exchanges`: The completed exchanges that you resolve or merge into the match data.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

Use this method to save the exchange data in the match’s [completedExchanges](completedexchanges.md) property before the current participant ends their turn, forfeits a match, or ends a match. Alternatively, invoke this method from the [player(\_:receivedExchangeReplies:forCompletedExchange:for:)](../gkturnbasedeventlistener/player%28__receivedexchangereplies_forcompletedexchange_for_%29.md) protocol method as recipients reply to individual exchange requests.

This method removes the exchanges from the current participant’s `completedExchanges` property and all participant’s [exchanges](exchanges.md) property. So retain your game-specific exchange data and merge it into the match data, before you invoke this method.

## See Also

### Exchanging Data Between Participants

- [sendExchange(to:data:localizableMessageKey:arguments:timeout:completionHandler:)](sendexchange%28to_data_localizablemessagekey_arguments_timeout_completionhandler_%29.md): Sends an exchange request that contains your game data to one or more participants.
- [Exchange Timeouts](../exchange-timeouts.md): The amount of time that passes before an exchange times out.
- [exchangeDataMaximumSize](exchangedatamaximumsize.md): The maximum size of the exchange data.
- [exchangeMaxInitiatedExchangesPerPlayer](exchangemaxinitiatedexchangesperplayer.md): The maximum number of exchanges the local player can initiate.
- [activeExchanges](activeexchanges.md): The exchanges that the local player needs to accept or reject.
- [completedExchanges](completedexchanges.md): The exchange requests that all recipients replied to and the current participant needs to save.
- [exchanges](exchanges.md): The exchange requests that are active or complete.

# saveMergedMatchData:withResolvedExchanges:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Saves match data for completed exchanges without ending the turn.

## Declaration

```objectivec
- (void) saveMergedMatchData:(NSData *) matchData withResolvedExchanges:(NSArray<GKTurnBasedExchange *> *) exchanges completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `matchData`: Your game-specific data representing the match state including the resolved exchange data.
- `exchanges`: The completed exchanges that you resolve or merge into the match data.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

Use this method to save the exchange data in the match’s [completedExchanges](completedexchanges.md) property before the current participant ends their turn, forfeits a match, or ends a match. Alternatively, invoke this method from the [player:receivedExchangeReplies:forCompletedExchange:forMatch:](../gkturnbasedeventlistener/player%28__receivedexchangereplies_forcompletedexchange_for_%29.md) protocol method as recipients reply to individual exchange requests.

This method removes the exchanges from the current participant’s `completedExchanges` property and all participant’s [exchanges](exchanges.md) property. So retain your game-specific exchange data and merge it into the match data, before you invoke this method.

## See Also

### Exchanging Data Between Participants

- [sendExchangeToParticipants:data:localizableMessageKey:arguments:timeout:completionHandler:](sendexchange%28to_data_localizablemessagekey_arguments_timeout_completionhandler_%29.md): Sends an exchange request that contains your game data to one or more participants.
- [Exchange Timeouts](../exchange-timeouts.md): The amount of time that passes before an exchange times out.
- [exchangeDataMaximumSize](exchangedatamaximumsize.md): The maximum size of the exchange data.
- [exchangeMaxInitiatedExchangesPerPlayer](exchangemaxinitiatedexchangesperplayer.md): The maximum number of exchanges the local player can initiate.
- [activeExchanges](activeexchanges.md): The exchanges that the local player needs to accept or reject.
- [completedExchanges](completedexchanges.md): The exchange requests that all recipients replied to and the current participant needs to save.
- [exchanges](exchanges.md): The exchange requests that are active or complete.
