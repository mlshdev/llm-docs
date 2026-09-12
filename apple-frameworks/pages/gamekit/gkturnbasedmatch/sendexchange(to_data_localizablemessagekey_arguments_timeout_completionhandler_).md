> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/sendexchange(to:data:localizablemessagekey:arguments:timeout:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/sendexchange(to:data:localizablemessagekey:arguments:timeout:completionhandler:))

# sendExchange(to:data:localizableMessageKey:arguments:timeout:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Sends an exchange request that contains your game data to one or more participants.

## Declaration

```swift
func sendExchange(to participants: [GKTurnBasedParticipant], data: Data, localizableMessageKey key: String, arguments: [String], timeout: TimeInterval, completionHandler: (@Sendable (GKTurnBasedExchange?, (any Error)?) -> Void)? = nil)
```

```swift
func sendExchange(to participants: [GKTurnBasedParticipant], data: Data, localizableMessageKey key: String, arguments: [String], timeout: TimeInterval) async throws -> GKTurnBasedExchange
```

## Parameters

- `participants`: The other participants, excluding the local player and inactive participants, that GameKit sends the exchange request to.
- `data`: The data that GameKit sends to the other participants.
- `key`: The identifier for looking up the translated message in the default `Localized.strings` file. If you use a formatted string with specifiers, provide the arguments.
- `arguments`: A list of arguments to substitute into the localized string if it’s formatted and contains specifiers.
- `timeout`: The length of time a participant has to respond to the exchange request. The maximum value is 90 days.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **exchange**: The exchange object that GameKit passes to the other participants.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes. An error occurs if any of the participants are inactive.

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

If your game isn’t running or is in the background on recipient devices, a notification containing the localized message you pass to this method appears. When the participant taps or clicks the notification, GameKit launches or brings the game to the foreground and then invokes the [player(\_:receivedExchangeRequest:for:)](../gkturnbasedeventlistener/player%28__receivedexchangerequest_for_%29.md) method.

Implement the [player(\_:receivedExchangeRequest:for:)](../gkturnbasedeventlistener/player%28__receivedexchangerequest_for_%29.md) protocol method to handle the exchange request — for example, show an interface on the receiver’s device to accept or reject the exchange.

## See Also

### Exchanging Data Between Participants

- [Exchange Timeouts](../exchange-timeouts.md): The amount of time that passes before an exchange times out.
- [exchangeDataMaximumSize](exchangedatamaximumsize.md): The maximum size of the exchange data.
- [exchangeMaxInitiatedExchangesPerPlayer](exchangemaxinitiatedexchangesperplayer.md): The maximum number of exchanges the local player can initiate.
- [activeExchanges](activeexchanges.md): The exchanges that the local player needs to accept or reject.
- [completedExchanges](completedexchanges.md): The exchange requests that all recipients replied to and the current participant needs to save.
- [exchanges](exchanges.md): The exchange requests that are active or complete.
- [saveMergedMatch(\_:withResolvedExchanges:completionHandler:)](savemergedmatch%28__withresolvedexchanges_completionhandler_%29.md): Saves match data for completed exchanges without ending the turn.

# sendExchangeToParticipants:data:localizableMessageKey:arguments:timeout:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Sends an exchange request that contains your game data to one or more participants.

## Declaration

```objectivec
- (void) sendExchangeToParticipants:(NSArray<GKTurnBasedParticipant *> *) participants data:(NSData *) data localizableMessageKey:(NSString *) key arguments:(NSArray<NSString *> *) arguments timeout:(NSTimeInterval) timeout completionHandler:(void (^)(GKTurnBasedExchange *exchange, NSError *error)) completionHandler;
```

## Parameters

- `participants`: The other participants, excluding the local player and inactive participants, that GameKit sends the exchange request to.
- `data`: The data that GameKit sends to the other participants.
- `key`: The identifier for looking up the translated message in the default `Localized.strings` file. If you use a formatted string with specifiers, provide the arguments.
- `arguments`: A list of arguments to substitute into the localized string if it’s formatted and contains specifiers.
- `timeout`: The length of time a participant has to respond to the exchange request. The maximum value is 90 days.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **exchange**: The exchange object that GameKit passes to the other participants.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes. An error occurs if any of the participants are inactive.

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

If your game isn’t running or is in the background on recipient devices, a notification containing the localized message you pass to this method appears. When the participant taps or clicks the notification, GameKit launches or brings the game to the foreground and then invokes the [player:receivedExchangeRequest:forMatch:](../gkturnbasedeventlistener/player%28__receivedexchangerequest_for_%29.md) method.

Implement the [player:receivedExchangeRequest:forMatch:](../gkturnbasedeventlistener/player%28__receivedexchangerequest_for_%29.md) protocol method to handle the exchange request — for example, show an interface on the receiver’s device to accept or reject the exchange.

## See Also

### Exchanging Data Between Participants

- [Exchange Timeouts](../exchange-timeouts.md): The amount of time that passes before an exchange times out.
- [exchangeDataMaximumSize](exchangedatamaximumsize.md): The maximum size of the exchange data.
- [exchangeMaxInitiatedExchangesPerPlayer](exchangemaxinitiatedexchangesperplayer.md): The maximum number of exchanges the local player can initiate.
- [activeExchanges](activeexchanges.md): The exchanges that the local player needs to accept or reject.
- [completedExchanges](completedexchanges.md): The exchange requests that all recipients replied to and the current participant needs to save.
- [exchanges](exchanges.md): The exchange requests that are active or complete.
- [saveMergedMatchData:withResolvedExchanges:completionHandler:](savemergedmatch%28__withresolvedexchanges_completionhandler_%29.md): Saves match data for completed exchanges without ending the turn.
