> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchangereply](https://developer.apple.com/documentation/gamekit/gkturnbasedexchangereply)

# GKTurnBasedExchangeReply (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Details about a recipient’s response to an exchange request.

## Declaration

```swift
class GKTurnBasedExchangeReply
```

## Mentioned In

- [Exchanging data between players in turn-based games](exchanging-data-between-players-in-turn-based-games.md)

<a id="overview"></a>

## Overview

When you accept an exchange request using the [reply(withLocalizableMessageKey:arguments:data:completionHandler:)](gkturnbasedexchange/reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md) method, GameKit sends a `GKTurnBasedExchangeReply` object to participants using the [player(\_:receivedExchangeReplies:forCompletedExchange:for:)](gkturnbasedeventlistener/player%28__receivedexchangereplies_forcompletedexchange_for_%29.md) protocol method. You can also get responses to exchange requests from the [GKTurnBasedExchange](gkturnbasedexchange.md) object using the [replies](gkturnbasedexchange/replies.md) parameter.

## Topics

### Retrieving Reply Details

- [data](gkturnbasedexchangereply/data.md): The game-specific data that the recipent provides in the exchange request reply.
- [message](gkturnbasedexchangereply/message.md): A message from the recipient to the sender of the exchange request.
- [recipient](gkturnbasedexchangereply/recipient.md): The participant who replies to the exchange request.
- [replyDate](gkturnbasedexchangereply/replydate.md): The date the recipient replies to the exchange request.

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
- [GKTurnBasedExchange](gkturnbasedexchange.md): Exchange request information that participants send in a turn-based match.
- [GKGameCenterBadgingDisabled](../bundleresources/information-property-list/gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.

# GKTurnBasedExchangeReply (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Details about a recipient’s response to an exchange request.

## Declaration

```objectivec
@interface GKTurnBasedExchangeReply : NSObject
```

## Mentioned In

- [Exchanging data between players in turn-based games](exchanging-data-between-players-in-turn-based-games.md)

<a id="overview"></a>

## Overview

When you accept an exchange request using the [replyWithLocalizableMessageKey:arguments:data:completionHandler:](gkturnbasedexchange/reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md) method, GameKit sends a `GKTurnBasedExchangeReply` object to participants using the [player:receivedExchangeReplies:forCompletedExchange:forMatch:](gkturnbasedeventlistener/player%28__receivedexchangereplies_forcompletedexchange_for_%29.md) protocol method. You can also get responses to exchange requests from the [GKTurnBasedExchange](gkturnbasedexchange.md) object using the [replies](gkturnbasedexchange/replies.md) parameter.

## Topics

### Retrieving Reply Details

- [data](gkturnbasedexchangereply/data.md): The game-specific data that the recipent provides in the exchange request reply.
- [message](gkturnbasedexchangereply/message.md): A message from the recipient to the sender of the exchange request.
- [recipient](gkturnbasedexchangereply/recipient.md): The participant who replies to the exchange request.
- [replyDate](gkturnbasedexchangereply/replydate.md): The date the recipient replies to the exchange request.

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
- [GKTurnBasedExchange](gkturnbasedexchange.md): Exchange request information that participants send in a turn-based match.
- [GKGameCenterBadgingDisabled](../bundleresources/information-property-list/gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.
