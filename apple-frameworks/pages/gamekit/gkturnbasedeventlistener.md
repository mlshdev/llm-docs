> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventlistener](https://developer.apple.com/documentation/gamekit/gkturnbasedeventlistener)

# GKTurnBasedEventListener (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The protocol that handles turn-based and data-exchange events between participants in a match.

## Declaration

```swift
protocol GKTurnBasedEventListener
```

## Mentioned In

- [Exchanging data between players in turn-based games](exchanging-data-between-players-in-turn-based-games.md)
- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="overview"></a>

## Overview

To receive the `GKTurnBasedEventListener` call backs, register your game object with the local player object immediately after initialization.

```swift
GKLocalPlayer.local.register(self)
```

Adopt the [GKLocalPlayerListener](gklocalplayerlistener.md) protocol to handle a variety of Game Center events instead of the individual [GKChallengeListener](gkchallengelistener.md), [GKInviteEventListener](gkinviteeventlistener.md), [GKSavedGameListener](gksavedgamelistener.md), and [GKTurnBasedEventListener](gkturnbasedeventlistener.md) protocols.

Then implement the [player(\_:receivedTurnEventFor:didBecomeActive:)](gkturnbasedeventlistener/player%28__receivedturneventfor_didbecomeactive_%29.md) and other `GKTurnBasedEventListener` protocol methods to handle turn-based events that occur throughout a match.

## Topics

### Handling Match-Related Events

- [player(\_:receivedTurnEventFor:didBecomeActive:)](gkturnbasedeventlistener/player%28__receivedturneventfor_didbecomeactive_%29.md): Handles turn-based match events, such as accepting invitations, passing turns, and saving match data.
- [player(\_:didRequestMatchWithOtherPlayers:)](gkturnbasedeventlistener/player%28__didrequestmatchwithotherplayers_%29.md): Handles when the player uses Game Center to start a match with other players.
- [player(\_:matchEnded:)](gkturnbasedeventlistener/player%28__matchended_%29.md): Handles when the match ends.
- [player(\_:wantsToQuitMatch:)](gkturnbasedeventlistener/player%28__wantstoquitmatch_%29.md): Handles when the current participant wants to quit a match.
- [player(\_:didRequestMatchWithPlayers:)](gkturnbasedeventlistener/player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles when the player uses Game Center to start a match with other players.

### Handling Data Exchanges

- [player(\_:receivedExchangeRequest:for:)](gkturnbasedeventlistener/player%28__receivedexchangerequest_for_%29.md): Handles when the local player receives an exchange request from another participant.
- [player(\_:receivedExchangeReplies:forCompletedExchange:for:)](gkturnbasedeventlistener/player%28__receivedexchangereplies_forcompletedexchange_for_%29.md): Handles when all recipients of an exchange request respond.
- [player(\_:receivedExchangeCancellation:for:)](gkturnbasedeventlistener/player%28__receivedexchangecancellation_for_%29.md): Handles when the sender cancels an exchange request they intiated.

## Relationships

### Inherited By

- [GKLocalPlayerListener](gklocalplayerlistener.md)

## See Also

### Turn-based games

- [Creating turn-based games](creating-turn-based-games.md): Develop games where multiple players take turns and can exchange data while waiting for their turn.
- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md): Let Game Center store and forward match data between players in a turn-based game.
- [Sending messages to players in turn-based games](sending-messages-to-players-in-turn-based-games.md): Notify players of match events by sending messages and game data.
- [Exchanging data between players in turn-based games](exchanging-data-between-players-in-turn-based-games.md): Add the ability for players to exchange game data and send messages while waiting for their turns.
- [GKTurnBasedMatchmakerViewController](gkturnbasedmatchmakerviewcontroller.md): An interface that allows a player to invite other players to a turn-based match and automatch to fill any empty slots.
- [GKTurnBasedMatch](gkturnbasedmatch.md): An object that encapsulates the match data for games where players take turns.
- [GKTurnBasedParticipant](gkturnbasedparticipant.md): A participant in a turn-based match.
- [GKTurnBasedExchange](gkturnbasedexchange.md): Exchange request information that participants send in a turn-based match.
- [GKTurnBasedExchangeReply](gkturnbasedexchangereply.md): Details about a recipient’s response to an exchange request.
- [GKGameCenterBadgingDisabled](../bundleresources/information-property-list/gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.

# GKTurnBasedEventListener (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The protocol that handles turn-based and data-exchange events between participants in a match.

## Declaration

```objectivec
@protocol GKTurnBasedEventListener
```

## Mentioned In

- [Exchanging data between players in turn-based games](exchanging-data-between-players-in-turn-based-games.md)
- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="overview"></a>

## Overview

To receive the `GKTurnBasedEventListener` call backs, register your game object with the local player object immediately after initialization.

```swift
GKLocalPlayer.local.register(self)
```

Adopt the [GKLocalPlayerListener](gklocalplayerlistener.md) protocol to handle a variety of Game Center events instead of the individual [GKChallengeListener](gkchallengelistener.md), [GKInviteEventListener](gkinviteeventlistener.md), [GKSavedGameListener](gksavedgamelistener.md), and [GKTurnBasedEventListener](gkturnbasedeventlistener.md) protocols.

Then implement the [player:receivedTurnEventForMatch:didBecomeActive:](gkturnbasedeventlistener/player%28__receivedturneventfor_didbecomeactive_%29.md) and other `GKTurnBasedEventListener` protocol methods to handle turn-based events that occur throughout a match.

## Topics

### Handling Match-Related Events

- [player:receivedTurnEventForMatch:didBecomeActive:](gkturnbasedeventlistener/player%28__receivedturneventfor_didbecomeactive_%29.md): Handles turn-based match events, such as accepting invitations, passing turns, and saving match data.
- [player:didRequestMatchWithOtherPlayers:](gkturnbasedeventlistener/player%28__didrequestmatchwithotherplayers_%29.md): Handles when the player uses Game Center to start a match with other players.
- [player:matchEnded:](gkturnbasedeventlistener/player%28__matchended_%29.md): Handles when the match ends.
- [player:wantsToQuitMatch:](gkturnbasedeventlistener/player%28__wantstoquitmatch_%29.md): Handles when the current participant wants to quit a match.
- [player:didRequestMatchWithPlayers:](gkturnbasedeventlistener/player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles when the player uses Game Center to start a match with other players.

### Handling Data Exchanges

- [player:receivedExchangeRequest:forMatch:](gkturnbasedeventlistener/player%28__receivedexchangerequest_for_%29.md): Handles when the local player receives an exchange request from another participant.
- [player:receivedExchangeReplies:forCompletedExchange:forMatch:](gkturnbasedeventlistener/player%28__receivedexchangereplies_forcompletedexchange_for_%29.md): Handles when all recipients of an exchange request respond.
- [player:receivedExchangeCancellation:forMatch:](gkturnbasedeventlistener/player%28__receivedexchangecancellation_for_%29.md): Handles when the sender cancels an exchange request they intiated.

## Relationships

### Inherited By

- [GKLocalPlayerListener](gklocalplayerlistener.md)

## See Also

### Turn-based games

- [Creating turn-based games](creating-turn-based-games.md): Develop games where multiple players take turns and can exchange data while waiting for their turn.
- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md): Let Game Center store and forward match data between players in a turn-based game.
- [Sending messages to players in turn-based games](sending-messages-to-players-in-turn-based-games.md): Notify players of match events by sending messages and game data.
- [Exchanging data between players in turn-based games](exchanging-data-between-players-in-turn-based-games.md): Add the ability for players to exchange game data and send messages while waiting for their turns.
- [GKTurnBasedMatchmakerViewController](gkturnbasedmatchmakerviewcontroller.md): An interface that allows a player to invite other players to a turn-based match and automatch to fill any empty slots.
- [GKTurnBasedMatch](gkturnbasedmatch.md): An object that encapsulates the match data for games where players take turns.
- [GKTurnBasedParticipant](gkturnbasedparticipant.md): A participant in a turn-based match.
- [GKTurnBasedExchange](gkturnbasedexchange.md): Exchange request information that participants send in a turn-based match.
- [GKTurnBasedExchangeReply](gkturnbasedexchangereply.md): Details about a recipient’s response to an exchange request.
- [GKGameCenterBadgingDisabled](../bundleresources/information-property-list/gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.
