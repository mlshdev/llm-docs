> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventlistener/player(_:receivedexchangereplies:forcompletedexchange:for:)](https://developer.apple.com/documentation/gamekit/gkturnbasedeventlistener/player(_:receivedexchangereplies:forcompletedexchange:for:))

# player(\_:receivedExchangeReplies:forCompletedExchange:for:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Handles when all recipients of an exchange request respond.

## Declaration

```swift
optional func player(_ player: GKPlayer, receivedExchangeReplies replies: [GKTurnBasedExchangeReply], forCompletedExchange exchange: GKTurnBasedExchange, for match: GKTurnBasedMatch)
```

## Parameters

- `player`: The player who receives this turn-based event.
- `replies`: The replies from other participants to the exchange request.
- `exchange`: The exchange request that the recipients reply to.
- `match`: The match related to this turn-based event.

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

GameKit sends this turn-based event to the current participant and the participant who initiates the exchange request.

If your game isn’t running or is in the background on participant devices, a notification containing the localized message you provide appears. When the participant taps or clicks the notification, GameKit launches or brings the game to the foreground and then invokes the [player(\_:receivedExchangeReplies:forCompletedExchange:for:)](player%28__receivedexchangereplies_forcompletedexchange_for_%29.md) method.

## See Also

### Handling Data Exchanges

- [player(\_:receivedExchangeRequest:for:)](player%28__receivedexchangerequest_for_%29.md): Handles when the local player receives an exchange request from another participant.
- [player(\_:receivedExchangeCancellation:for:)](player%28__receivedexchangecancellation_for_%29.md): Handles when the sender cancels an exchange request they intiated.

# player:receivedExchangeReplies:forCompletedExchange:forMatch: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Handles when all recipients of an exchange request respond.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player receivedExchangeReplies:(NSArray<GKTurnBasedExchangeReply *> *) replies forCompletedExchange:(GKTurnBasedExchange *) exchange forMatch:(GKTurnBasedMatch *) match;
```

## Parameters

- `player`: The player who receives this turn-based event.
- `replies`: The replies from other participants to the exchange request.
- `exchange`: The exchange request that the recipients reply to.
- `match`: The match related to this turn-based event.

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

GameKit sends this turn-based event to the current participant and the participant who initiates the exchange request.

If your game isn’t running or is in the background on participant devices, a notification containing the localized message you provide appears. When the participant taps or clicks the notification, GameKit launches or brings the game to the foreground and then invokes the [player:receivedExchangeReplies:forCompletedExchange:forMatch:](player%28__receivedexchangereplies_forcompletedexchange_for_%29.md) method.

## See Also

### Handling Data Exchanges

- [player:receivedExchangeRequest:forMatch:](player%28__receivedexchangerequest_for_%29.md): Handles when the local player receives an exchange request from another participant.
- [player:receivedExchangeCancellation:forMatch:](player%28__receivedexchangecancellation_for_%29.md): Handles when the sender cancels an exchange request they intiated.
