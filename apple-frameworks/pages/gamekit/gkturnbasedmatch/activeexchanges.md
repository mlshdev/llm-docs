> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/activeexchanges](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/activeexchanges)

# activeExchanges (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The exchanges that the local player needs to accept or reject.

## Declaration

```swift
var activeExchanges: [GKTurnBasedExchange]? { get }
```

## See Also

### Exchanging Data Between Participants

- [sendExchange(to:data:localizableMessageKey:arguments:timeout:completionHandler:)](sendexchange%28to_data_localizablemessagekey_arguments_timeout_completionhandler_%29.md): Sends an exchange request that contains your game data to one or more participants.
- [Exchange Timeouts](../exchange-timeouts.md): The amount of time that passes before an exchange times out.
- [exchangeDataMaximumSize](exchangedatamaximumsize.md): The maximum size of the exchange data.
- [exchangeMaxInitiatedExchangesPerPlayer](exchangemaxinitiatedexchangesperplayer.md): The maximum number of exchanges the local player can initiate.
- [completedExchanges](completedexchanges.md): The exchange requests that all recipients replied to and the current participant needs to save.
- [exchanges](exchanges.md): The exchange requests that are active or complete.
- [saveMergedMatch(\_:withResolvedExchanges:completionHandler:)](savemergedmatch%28__withresolvedexchanges_completionhandler_%29.md): Saves match data for completed exchanges without ending the turn.

# activeExchanges (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The exchanges that the local player needs to accept or reject.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSArray<GKTurnBasedExchange *> * activeExchanges;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSArray<GKTurnBasedExchange *> * activeExchanges;
```

## See Also

### Exchanging Data Between Participants

- [sendExchangeToParticipants:data:localizableMessageKey:arguments:timeout:completionHandler:](sendexchange%28to_data_localizablemessagekey_arguments_timeout_completionhandler_%29.md): Sends an exchange request that contains your game data to one or more participants.
- [Exchange Timeouts](../exchange-timeouts.md): The amount of time that passes before an exchange times out.
- [exchangeDataMaximumSize](exchangedatamaximumsize.md): The maximum size of the exchange data.
- [exchangeMaxInitiatedExchangesPerPlayer](exchangemaxinitiatedexchangesperplayer.md): The maximum number of exchanges the local player can initiate.
- [completedExchanges](completedexchanges.md): The exchange requests that all recipients replied to and the current participant needs to save.
- [exchanges](exchanges.md): The exchange requests that are active or complete.
- [saveMergedMatchData:withResolvedExchanges:completionHandler:](savemergedmatch%28__withresolvedexchanges_completionhandler_%29.md): Saves match data for completed exchanges without ending the turn.
