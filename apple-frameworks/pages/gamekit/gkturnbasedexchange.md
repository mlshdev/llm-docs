> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchange](https://developer.apple.com/documentation/gamekit/gkturnbasedexchange)

# GKTurnBasedExchange (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Exchange request information that participants send in a turn-based match.

## Declaration

```swift
class GKTurnBasedExchange
```

## Mentioned In

- [Exchanging data between players in turn-based games](exchanging-data-between-players-in-turn-based-games.md)
- [Sending messages to players in turn-based games](sending-messages-to-players-in-turn-based-games.md)

<a id="overview"></a>

## Overview

GameKit sends exchange objects to [GKTurnBasedEventListener](gkturnbasedeventlistener.md) protocol methods when the local player receives an exchange request or recipients reply to an exchange request. The exchange object encapsulates your custom game data that you want to communicate to other players.

You initiate an exchange request using the `GKTurnBasedMatch` [sendExchange(to:data:localizableMessageKey:arguments:timeout:completionHandler:)](gkturnbasedmatch/sendexchange%28to_data_localizablemessagekey_arguments_timeout_completionhandler_%29.md) method. Then GameKit sends the request to the recipients passing the exchange object to the `GKTurnBasedEventListener` [player(\_:receivedExchangeRequest:for:)](gkturnbasedeventlistener/player%28__receivedexchangerequest_for_%29.md) protocol method. GameKit sets the status of the exchange object to [GKTurnBasedExchangeStatus.active](gkturnbasedexchangestatus/active.md).

After all recipients respond to the request, using the [reply(withLocalizableMessageKey:arguments:data:completionHandler:)](gkturnbasedexchange/reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md) method, or exceed the time out specified in the request, GameKit sends the exchange to the sender and the current participant. GameKit sets the exchange status to [GKTurnBasedExchangeStatus.complete](gkturnbasedexchangestatus/complete.md) and then passes it to the `GKTurnBasedEventListener` [player(\_:receivedExchangeReplies:forCompletedExchange:for:)](gkturnbasedeventlistener/player%28__receivedexchangereplies_forcompletedexchange_for_%29.md) method.

Before the current participant ends their turn, save the completed exchanges using the `GKTurnBasedMatch` [saveMergedMatch(\_:withResolvedExchanges:completionHandler:)](gkturnbasedmatch/savemergedmatch%28__withresolvedexchanges_completionhandler_%29.md) method. Get the exchanges from the match object using the [completedExchanges](gkturnbasedmatch/completedexchanges.md) property. Alternatively, save exchange data in the [player(\_:receivedExchangeReplies:forCompletedExchange:for:)](gkturnbasedeventlistener/player%28__receivedexchangereplies_forcompletedexchange_for_%29.md) protocol method when all recipients reply to specific exchange requests.

To cancel an active or complete exchange, use the [cancel(withLocalizableMessageKey:arguments:completionHandler:)](gkturnbasedexchange/cancel%28withlocalizablemessagekey_arguments_completionhandler_%29.md) method. GameKit notifies the recipients when the player cancels an exchange, using the `GKTurnBasedEventListener` [player(\_:receivedExchangeCancellation:for:)](gkturnbasedeventlistener/player%28__receivedexchangecancellation_for_%29.md) protocol method.

## Topics

### Retrieving Exchange Details

- [exchangeID](gkturnbasedexchange/exchangeid.md): The identifier for the exchange request.
- [sender](gkturnbasedexchange/sender.md): The participant who sends the exchange request to recipients.
- [recipients](gkturnbasedexchange/recipients.md): The participants who receives the exchange request.
- [data](gkturnbasedexchange/data.md): The game-specific exchange data that GameKit sends to participants.
- [message](gkturnbasedexchange/message.md): A localized message from the sender to the recipients of an exchange request.
- [sendDate](gkturnbasedexchange/senddate.md): The date that the sender initiates the exchange request.
- [timeoutDate](gkturnbasedexchange/timeoutdate.md): The date that the recipients must reply by before the exchange request times out.

### Replying to Exchange Requests

- [reply(withLocalizableMessageKey:arguments:data:completionHandler:)](gkturnbasedexchange/reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md): Replies to an exchange request on behalf of a recipient.
- [replies](gkturnbasedexchange/replies.md): The replies from recipients of the exchange request.
- [status](gkturnbasedexchange/status.md): The status of the exchange request.
- [GKTurnBasedExchangeStatus](gkturnbasedexchangestatus.md): The status of an exchange or reply.
- [completionDate](gkturnbasedexchange/completiondate.md): The date when all recipients of the exchange request reply.

### Canceling Exchange Requests

- [cancel(withLocalizableMessageKey:arguments:completionHandler:)](gkturnbasedexchange/cancel%28withlocalizablemessagekey_arguments_completionhandler_%29.md): Cancels an exchange request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Turn-based games

- [Creating turn-based games](creating-turn-based-games.md): Develop games where multiple players take turns and can exchange data while waiting for their turn.
- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md): Let Game Center store and forward match data between players in a turn-based game.
- [Sending messages to players in turn-based games](sending-messages-to-players-in-turn-based-games.md): Notify players of match events by sending messages and game data.
- [Exchanging data between players in turn-based games](exchanging-data-between-players-in-turn-based-games.md): Add the ability for players to exchange game data and send messages while waiting for their turns.
- [GKTurnBasedMatchmakerViewController](gkturnbasedmatchmakerviewcontroller.md): An interface that allows a player to invite other players to a turn-based match and automatch to fill any empty slots.
- [GKTurnBasedMatch](gkturnbasedmatch.md): An object that encapsulates the match data for games where players take turns.
- [GKTurnBasedParticipant](gkturnbasedparticipant.md): A participant in a turn-based match.
- [GKTurnBasedEventListener](gkturnbasedeventlistener.md): The protocol that handles turn-based and data-exchange events between participants in a match.
- [GKTurnBasedExchangeReply](gkturnbasedexchangereply.md): Details about a recipient’s response to an exchange request.
- [GKGameCenterBadgingDisabled](../bundleresources/information-property-list/gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.

# GKTurnBasedExchange (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Exchange request information that participants send in a turn-based match.

## Declaration

```objectivec
@interface GKTurnBasedExchange : NSObject
```

## Mentioned In

- [Exchanging data between players in turn-based games](exchanging-data-between-players-in-turn-based-games.md)
- [Sending messages to players in turn-based games](sending-messages-to-players-in-turn-based-games.md)

<a id="overview"></a>

## Overview

GameKit sends exchange objects to [GKTurnBasedEventListener](gkturnbasedeventlistener.md) protocol methods when the local player receives an exchange request or recipients reply to an exchange request. The exchange object encapsulates your custom game data that you want to communicate to other players.

You initiate an exchange request using the `GKTurnBasedMatch` [sendExchangeToParticipants:data:localizableMessageKey:arguments:timeout:completionHandler:](gkturnbasedmatch/sendexchange%28to_data_localizablemessagekey_arguments_timeout_completionhandler_%29.md) method. Then GameKit sends the request to the recipients passing the exchange object to the `GKTurnBasedEventListener` [player:receivedExchangeRequest:forMatch:](gkturnbasedeventlistener/player%28__receivedexchangerequest_for_%29.md) protocol method. GameKit sets the status of the exchange object to [GKTurnBasedExchangeStatusActive](gkturnbasedexchangestatus/active.md).

After all recipients respond to the request, using the [replyWithLocalizableMessageKey:arguments:data:completionHandler:](gkturnbasedexchange/reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md) method, or exceed the time out specified in the request, GameKit sends the exchange to the sender and the current participant. GameKit sets the exchange status to [GKTurnBasedExchangeStatusComplete](gkturnbasedexchangestatus/complete.md) and then passes it to the `GKTurnBasedEventListener` [player:receivedExchangeReplies:forCompletedExchange:forMatch:](gkturnbasedeventlistener/player%28__receivedexchangereplies_forcompletedexchange_for_%29.md) method.

Before the current participant ends their turn, save the completed exchanges using the `GKTurnBasedMatch` [saveMergedMatchData:withResolvedExchanges:completionHandler:](gkturnbasedmatch/savemergedmatch%28__withresolvedexchanges_completionhandler_%29.md) method. Get the exchanges from the match object using the [completedExchanges](gkturnbasedmatch/completedexchanges.md) property. Alternatively, save exchange data in the [player:receivedExchangeReplies:forCompletedExchange:forMatch:](gkturnbasedeventlistener/player%28__receivedexchangereplies_forcompletedexchange_for_%29.md) protocol method when all recipients reply to specific exchange requests.

To cancel an active or complete exchange, use the [cancelWithLocalizableMessageKey:arguments:completionHandler:](gkturnbasedexchange/cancel%28withlocalizablemessagekey_arguments_completionhandler_%29.md) method. GameKit notifies the recipients when the player cancels an exchange, using the `GKTurnBasedEventListener` [player:receivedExchangeCancellation:forMatch:](gkturnbasedeventlistener/player%28__receivedexchangecancellation_for_%29.md) protocol method.

## Topics

### Retrieving Exchange Details

- [exchangeID](gkturnbasedexchange/exchangeid.md): The identifier for the exchange request.
- [sender](gkturnbasedexchange/sender.md): The participant who sends the exchange request to recipients.
- [recipients](gkturnbasedexchange/recipients.md): The participants who receives the exchange request.
- [data](gkturnbasedexchange/data.md): The game-specific exchange data that GameKit sends to participants.
- [message](gkturnbasedexchange/message.md): A localized message from the sender to the recipients of an exchange request.
- [sendDate](gkturnbasedexchange/senddate.md): The date that the sender initiates the exchange request.
- [timeoutDate](gkturnbasedexchange/timeoutdate.md): The date that the recipients must reply by before the exchange request times out.

### Replying to Exchange Requests

- [replyWithLocalizableMessageKey:arguments:data:completionHandler:](gkturnbasedexchange/reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md): Replies to an exchange request on behalf of a recipient.
- [replies](gkturnbasedexchange/replies.md): The replies from recipients of the exchange request.
- [status](gkturnbasedexchange/status.md): The status of the exchange request.
- [GKTurnBasedExchangeStatus](gkturnbasedexchangestatus.md): The status of an exchange or reply.
- [completionDate](gkturnbasedexchange/completiondate.md): The date when all recipients of the exchange request reply.

### Canceling Exchange Requests

- [cancelWithLocalizableMessageKey:arguments:completionHandler:](gkturnbasedexchange/cancel%28withlocalizablemessagekey_arguments_completionhandler_%29.md): Cancels an exchange request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Turn-based games

- [Creating turn-based games](creating-turn-based-games.md): Develop games where multiple players take turns and can exchange data while waiting for their turn.
- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md): Let Game Center store and forward match data between players in a turn-based game.
- [Sending messages to players in turn-based games](sending-messages-to-players-in-turn-based-games.md): Notify players of match events by sending messages and game data.
- [Exchanging data between players in turn-based games](exchanging-data-between-players-in-turn-based-games.md): Add the ability for players to exchange game data and send messages while waiting for their turns.
- [GKTurnBasedMatchmakerViewController](gkturnbasedmatchmakerviewcontroller.md): An interface that allows a player to invite other players to a turn-based match and automatch to fill any empty slots.
- [GKTurnBasedMatch](gkturnbasedmatch.md): An object that encapsulates the match data for games where players take turns.
- [GKTurnBasedParticipant](gkturnbasedparticipant.md): A participant in a turn-based match.
- [GKTurnBasedEventListener](gkturnbasedeventlistener.md): The protocol that handles turn-based and data-exchange events between participants in a match.
- [GKTurnBasedExchangeReply](gkturnbasedexchangereply.md): Details about a recipient’s response to an exchange request.
- [GKGameCenterBadgingDisabled](../bundleresources/information-property-list/gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.
