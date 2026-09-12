> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/exchange-timeouts](https://developer.apple.com/documentation/gamekit/exchange-timeouts)

# Exchange Timeouts (Swift)

**Framework:** GameKit  
**Kind:** API Collection

The amount of time that passes before an exchange times out.

## Topics

### Timeouts

- [GKExchangeTimeoutDefault](gkexchangetimeoutdefault.md): A one-day exchange request timeout.
- [GKExchangeTimeoutNone](gkexchangetimeoutnone.md): An exchange request timeout that doesn’t expire.

## See Also

### Exchanging Data Between Participants

- [sendExchange(to:data:localizableMessageKey:arguments:timeout:completionHandler:)](gkturnbasedmatch/sendexchange%28to_data_localizablemessagekey_arguments_timeout_completionhandler_%29.md): Sends an exchange request that contains your game data to one or more participants.
- [exchangeDataMaximumSize](gkturnbasedmatch/exchangedatamaximumsize.md): The maximum size of the exchange data.
- [exchangeMaxInitiatedExchangesPerPlayer](gkturnbasedmatch/exchangemaxinitiatedexchangesperplayer.md): The maximum number of exchanges the local player can initiate.
- [activeExchanges](gkturnbasedmatch/activeexchanges.md): The exchanges that the local player needs to accept or reject.
- [completedExchanges](gkturnbasedmatch/completedexchanges.md): The exchange requests that all recipients replied to and the current participant needs to save.
- [exchanges](gkturnbasedmatch/exchanges.md): The exchange requests that are active or complete.
- [saveMergedMatch(\_:withResolvedExchanges:completionHandler:)](gkturnbasedmatch/savemergedmatch%28__withresolvedexchanges_completionhandler_%29.md): Saves match data for completed exchanges without ending the turn.

# Exchange Timeouts (Objective-C)

**Framework:** GameKit  
**Kind:** API Collection

The amount of time that passes before an exchange times out.

## Topics

### Timeouts

- [GKExchangeTimeoutDefault](gkexchangetimeoutdefault.md): A one-day exchange request timeout.
- [GKExchangeTimeoutNone](gkexchangetimeoutnone.md): An exchange request timeout that doesn’t expire.

## See Also

### Exchanging Data Between Participants

- [sendExchangeToParticipants:data:localizableMessageKey:arguments:timeout:completionHandler:](gkturnbasedmatch/sendexchange%28to_data_localizablemessagekey_arguments_timeout_completionhandler_%29.md): Sends an exchange request that contains your game data to one or more participants.
- [exchangeDataMaximumSize](gkturnbasedmatch/exchangedatamaximumsize.md): The maximum size of the exchange data.
- [exchangeMaxInitiatedExchangesPerPlayer](gkturnbasedmatch/exchangemaxinitiatedexchangesperplayer.md): The maximum number of exchanges the local player can initiate.
- [activeExchanges](gkturnbasedmatch/activeexchanges.md): The exchanges that the local player needs to accept or reject.
- [completedExchanges](gkturnbasedmatch/completedexchanges.md): The exchange requests that all recipients replied to and the current participant needs to save.
- [exchanges](gkturnbasedmatch/exchanges.md): The exchange requests that are active or complete.
- [saveMergedMatchData:withResolvedExchanges:completionHandler:](gkturnbasedmatch/savemergedmatch%28__withresolvedexchanges_completionhandler_%29.md): Saves match data for completed exchanges without ending the turn.
