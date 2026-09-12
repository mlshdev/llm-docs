> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventlistener/player(_:receivedexchangerequest:for:)](https://developer.apple.com/documentation/gamekit/gkturnbasedeventlistener/player(_:receivedexchangerequest:for:))

# player(\_:receivedExchangeRequest:for:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Handles when the local player receives an exchange request from another participant.

## Declaration

```swift
optional func player(_ player: GKPlayer, receivedExchangeRequest exchange: GKTurnBasedExchange, for match: GKTurnBasedMatch)
```

## Parameters

- `player`: The player who receives this turn-based event.
- `exchange`: The exchange request sent from the other participant.
- `match`: The match related to this turn-based event.

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

Reply to this exchange request using the `GKTurnBasedExchange` [reply(withLocalizableMessageKey:arguments:data:completionHandler:)](../gkturnbasedexchange/reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md) method.

## See Also

### Handling Data Exchanges

- [player(\_:receivedExchangeReplies:forCompletedExchange:for:)](player%28__receivedexchangereplies_forcompletedexchange_for_%29.md): Handles when all recipients of an exchange request respond.
- [player(\_:receivedExchangeCancellation:for:)](player%28__receivedexchangecancellation_for_%29.md): Handles when the sender cancels an exchange request they intiated.

# player:receivedExchangeRequest:forMatch: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Handles when the local player receives an exchange request from another participant.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player receivedExchangeRequest:(GKTurnBasedExchange *) exchange forMatch:(GKTurnBasedMatch *) match;
```

## Parameters

- `player`: The player who receives this turn-based event.
- `exchange`: The exchange request sent from the other participant.
- `match`: The match related to this turn-based event.

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

Reply to this exchange request using the `GKTurnBasedExchange` [replyWithLocalizableMessageKey:arguments:data:completionHandler:](../gkturnbasedexchange/reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md) method.

## See Also

### Handling Data Exchanges

- [player:receivedExchangeReplies:forCompletedExchange:forMatch:](player%28__receivedexchangereplies_forcompletedexchange_for_%29.md): Handles when all recipients of an exchange request respond.
- [player:receivedExchangeCancellation:forMatch:](player%28__receivedexchangecancellation_for_%29.md): Handles when the sender cancels an exchange request they intiated.
