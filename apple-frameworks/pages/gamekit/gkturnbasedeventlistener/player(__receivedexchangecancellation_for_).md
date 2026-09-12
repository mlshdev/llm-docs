> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventlistener/player(_:receivedexchangecancellation:for:)](https://developer.apple.com/documentation/gamekit/gkturnbasedeventlistener/player(_:receivedexchangecancellation:for:))

# player(\_:receivedExchangeCancellation:for:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Handles when the sender cancels an exchange request they intiated.

## Declaration

```swift
optional func player(_ player: GKPlayer, receivedExchangeCancellation exchange: GKTurnBasedExchange, for match: GKTurnBasedMatch)
```

## Parameters

- `player`: The player who receives this turn-based event.
- `exchange`: The exchange request that the sender cancels.
- `match`: The match related to this turn-based event.

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

## See Also

### Handling Data Exchanges

- [player(\_:receivedExchangeRequest:for:)](player%28__receivedexchangerequest_for_%29.md): Handles when the local player receives an exchange request from another participant.
- [player(\_:receivedExchangeReplies:forCompletedExchange:for:)](player%28__receivedexchangereplies_forcompletedexchange_for_%29.md): Handles when all recipients of an exchange request respond.

# player:receivedExchangeCancellation:forMatch: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Handles when the sender cancels an exchange request they intiated.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player receivedExchangeCancellation:(GKTurnBasedExchange *) exchange forMatch:(GKTurnBasedMatch *) match;
```

## Parameters

- `player`: The player who receives this turn-based event.
- `exchange`: The exchange request that the sender cancels.
- `match`: The match related to this turn-based event.

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

## See Also

### Handling Data Exchanges

- [player:receivedExchangeRequest:forMatch:](player%28__receivedexchangerequest_for_%29.md): Handles when the local player receives an exchange request from another participant.
- [player:receivedExchangeReplies:forCompletedExchange:forMatch:](player%28__receivedexchangereplies_forcompletedexchange_for_%29.md): Handles when all recipients of an exchange request respond.
