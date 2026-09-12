> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch)

# GKTurnBasedMatch (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

An object that encapsulates the match data for games where players take turns.

## Declaration

```swift
class GKTurnBasedMatch
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md)
- [Sending messages to players in turn-based games](sending-messages-to-players-in-turn-based-games.md)

<a id="overview"></a>

## Overview

A `GKTurnBasedMatch` object represents a match in a turn-based game that Game Center stores and forwards to participants in the match. In a turn-based game, participants take turns to advance gameplay until they reach an outcome. You end the match when all participants reach an outcome or they can no longer continue.

A turn-based match object contains the status of the match, list of participants, the participant whose turn it is, a message about the last turn, and your game-specific data. You can get more details about the participants through the [GKTurnBasedParticipant](gkturnbasedparticipant.md) objects in the [participants](gkturnbasedmatch/participants.md) property.

You don’t create turn-based match objects directly. When a match event occurs, GameKit passes the match object to listeners that conform to the [GKTurnBasedEventListener](gkturnbasedeventlistener.md) protocol. Retain the match object or its match ID in the protocol methods, so you can get the latest match data later during gameplay.

Using the match object passed to `GKTurnBasedEventListener` protocol methods, you can perform these actions on behalf of the local player:

- Save game data
- End a turn
- Forfeit a match
- End a match
- Send a reminder to the participant whose turn it is
- Exchange data between participants
- Remove a completed match from Game Center

When you end a turn, forfeit a match, or end a match, you update the match data and if gameplay can continue, choose the next participant. If you end a match, you set the individual participant outcomes as well.

If you present a [GKTurnBasedMatchmakerViewController](gkturnbasedmatchmakerviewcontroller.md) object for players to manage their turn-based matches, the player can start a match, accept an invitation, open an existing match, and forfeit a match.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

Don’t subclass the [GKTurnBasedMatch](gkturnbasedmatch.md) class.

## Topics

### Creating a Match

- [find(for:withCompletionHandler:)](gkturnbasedmatch/find%28for_withcompletionhandler_%29.md): Creates a new match or finds an existing match that needs a player.
- [acceptInvite(completionHandler:)](gkturnbasedmatch/acceptinvite%28completionhandler_%29.md): Accepts an invitation for the local player to join a turn-based match.
- [declineInvite(completionHandler:)](gkturnbasedmatch/declineinvite%28completionhandler_%29.md): Declines an invitation for the local player to join a turn-based match.
- [rematch(completionHandler:)](gkturnbasedmatch/rematch%28completionhandler_%29.md): Creates a new turn-based match with the same participants from an existing match.

### Retrieving Match Details

- [matchID](gkturnbasedmatch/matchid.md): A unique identifier for the turn-based match.
- [creationDate](gkturnbasedmatch/creationdate.md): The date that Game Center created the match.
- [participants](gkturnbasedmatch/participants.md): The players that participate in a turn-based match.
- [currentParticipant](gkturnbasedmatch/currentparticipant.md): The participant whose turn it is.
- [status](gkturnbasedmatch/status-swift.property.md): The state of the match, such as whether the match is open or has ended.
- [GKTurnBasedMatch.Status](gkturnbasedmatch/status-swift.enum.md): The states of a match from when it’s created to when it ends.
- [matchData](gkturnbasedmatch/matchdata.md): The game-specific data that you store in Game Center and pass between participants through a match object.
- [matchDataMaximumSize](gkturnbasedmatch/matchdatamaximumsize.md): The maximum size of the match data.
- [loadMatchData(completionHandler:)](gkturnbasedmatch/loadmatchdata%28completionhandler_%29.md): Fetches your game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match.

### Ending Turns and Saving Data

- [endTurn(withNextParticipants:turnTimeout:match:completionHandler:)](gkturnbasedmatch/endturn%28withnextparticipants_turntimeout_match_completionhandler_%29.md): Passes the turn from the current participant to the next participant.
- [saveCurrentTurn(withMatch:completionHandler:)](gkturnbasedmatch/savecurrentturn%28withmatch_completionhandler_%29.md): Saves your match data in Game Center without ending the turn.
- [Turn Timeouts](turn-timeouts.md): A timeout for a player to take their turn.

### Forfeiting a Match

- [participantQuitInTurn(with:nextParticipants:turnTimeout:match:completionHandler:)](gkturnbasedmatch/participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md): Forfeits the match on behalf of the local player when it’s their turn.
- [participantQuitOutOfTurn(with:withCompletionHandler:)](gkturnbasedmatch/participantquitoutofturn%28with_withcompletionhandler_%29.md): Forfeits the match on behalf of the local player when it’s not their turn.
- [GKTurnBasedMatch.Outcome](gkturnbasedmatch/outcome.md): The state of a participant when they forfeit a match or when a match ends.

### Ending a Match

- [endMatchInTurn(withMatch:completionHandler:)](gkturnbasedmatch/endmatchinturn%28withmatch_completionhandler_%29.md): Ends the match.
- [endMatchInTurn(withMatch:leaderboardScores:achievements:completionHandler:)](gkturnbasedmatch/endmatchinturn%28withmatch_leaderboardscores_achievements_completionhandler_%29.md): Ends the match while submitting scores and achievements for all of the participants.

### Sending Messages Between Participants

- [message](gkturnbasedmatch/message.md): A message from the current participant to all other participants when you end a turn, forfeit a match, or end a match.
- [setLocalizableMessageWithKey(\_:arguments:)](gkturnbasedmatch/setlocalizablemessagewithkey%28__arguments_%29.md): Sends a localized message from the current participant to all other participants when you end a turn, forfeit a match, or end a match.
- [sendReminder(to:localizableMessageKey:arguments:completionHandler:)](gkturnbasedmatch/sendreminder%28to_localizablemessagekey_arguments_completionhandler_%29.md): Sends a reminder from one participant to a specific set of other participants.

### Exchanging Data Between Participants

- [sendExchange(to:data:localizableMessageKey:arguments:timeout:completionHandler:)](gkturnbasedmatch/sendexchange%28to_data_localizablemessagekey_arguments_timeout_completionhandler_%29.md): Sends an exchange request that contains your game data to one or more participants.
- [Exchange Timeouts](exchange-timeouts.md): The amount of time that passes before an exchange times out.
- [exchangeDataMaximumSize](gkturnbasedmatch/exchangedatamaximumsize.md): The maximum size of the exchange data.
- [exchangeMaxInitiatedExchangesPerPlayer](gkturnbasedmatch/exchangemaxinitiatedexchangesperplayer.md): The maximum number of exchanges the local player can initiate.
- [activeExchanges](gkturnbasedmatch/activeexchanges.md): The exchanges that the local player needs to accept or reject.
- [completedExchanges](gkturnbasedmatch/completedexchanges.md): The exchange requests that all recipients replied to and the current participant needs to save.
- [exchanges](gkturnbasedmatch/exchanges.md): The exchange requests that are active or complete.
- [saveMergedMatch(\_:withResolvedExchanges:completionHandler:)](gkturnbasedmatch/savemergedmatch%28__withresolvedexchanges_completionhandler_%29.md): Saves match data for completed exchanges without ending the turn.

### Loading Existing Matches

- [load(withID:withCompletionHandler:)](gkturnbasedmatch/load%28withid_withcompletionhandler_%29.md): Loads a specific match with the specified identifier.
- [loadMatches(completionHandler:)](gkturnbasedmatch/loadmatches%28completionhandler_%29.md): Fetches the turn-based matches from Game Center that the local player participates in.

### Deleting a Match from Game Center

- [remove(completionHandler:)](gkturnbasedmatch/remove%28completionhandler_%29.md): Removes a match from Game Center that the local player participants in.

### Deprecated Methods

- [participantQuitInTurn(with:nextParticipant:match:completionHandler:)](gkturnbasedmatch/participantquitinturn%28with_nextparticipant_match_completionhandler_%29.md): Deprecated. Resigns the current player from the match without ending the match.
- [endMatchInTurn(withMatch:scores:achievements:completionHandler:)](gkturnbasedmatch/endmatchinturn%28withmatch_scores_achievements_completionhandler_%29.md): Deprecated. Ends the match while submitting all of the scores and achievements.
- [endTurn(withNextParticipant:match:completionHandler:)](gkturnbasedmatch/endturn%28withnextparticipant_match_completionhandler_%29.md): Deprecated. Updates the data stored on Game Center for the current match.

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
- [GKTurnBasedParticipant](gkturnbasedparticipant.md): A participant in a turn-based match.
- [GKTurnBasedEventListener](gkturnbasedeventlistener.md): The protocol that handles turn-based and data-exchange events between participants in a match.
- [GKTurnBasedExchange](gkturnbasedexchange.md): Exchange request information that participants send in a turn-based match.
- [GKTurnBasedExchangeReply](gkturnbasedexchangereply.md): Details about a recipient’s response to an exchange request.
- [GKGameCenterBadgingDisabled](../bundleresources/information-property-list/gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.

# GKTurnBasedMatch (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

An object that encapsulates the match data for games where players take turns.

## Declaration

```objectivec
@interface GKTurnBasedMatch : NSObject
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md)
- [Sending messages to players in turn-based games](sending-messages-to-players-in-turn-based-games.md)

<a id="overview"></a>

## Overview

A `GKTurnBasedMatch` object represents a match in a turn-based game that Game Center stores and forwards to participants in the match. In a turn-based game, participants take turns to advance gameplay until they reach an outcome. You end the match when all participants reach an outcome or they can no longer continue.

A turn-based match object contains the status of the match, list of participants, the participant whose turn it is, a message about the last turn, and your game-specific data. You can get more details about the participants through the [GKTurnBasedParticipant](gkturnbasedparticipant.md) objects in the [participants](gkturnbasedmatch/participants.md) property.

You don’t create turn-based match objects directly. When a match event occurs, GameKit passes the match object to listeners that conform to the [GKTurnBasedEventListener](gkturnbasedeventlistener.md) protocol. Retain the match object or its match ID in the protocol methods, so you can get the latest match data later during gameplay.

Using the match object passed to `GKTurnBasedEventListener` protocol methods, you can perform these actions on behalf of the local player:

- Save game data
- End a turn
- Forfeit a match
- End a match
- Send a reminder to the participant whose turn it is
- Exchange data between participants
- Remove a completed match from Game Center

When you end a turn, forfeit a match, or end a match, you update the match data and if gameplay can continue, choose the next participant. If you end a match, you set the individual participant outcomes as well.

If you present a [GKTurnBasedMatchmakerViewController](gkturnbasedmatchmakerviewcontroller.md) object for players to manage their turn-based matches, the player can start a match, accept an invitation, open an existing match, and forfeit a match.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

Don’t subclass the [GKTurnBasedMatch](gkturnbasedmatch.md) class.

## Topics

### Creating a Match

- [findMatchForRequest:withCompletionHandler:](gkturnbasedmatch/find%28for_withcompletionhandler_%29.md): Creates a new match or finds an existing match that needs a player.
- [acceptInviteWithCompletionHandler:](gkturnbasedmatch/acceptinvite%28completionhandler_%29.md): Accepts an invitation for the local player to join a turn-based match.
- [declineInviteWithCompletionHandler:](gkturnbasedmatch/declineinvite%28completionhandler_%29.md): Declines an invitation for the local player to join a turn-based match.
- [rematchWithCompletionHandler:](gkturnbasedmatch/rematch%28completionhandler_%29.md): Creates a new turn-based match with the same participants from an existing match.

### Retrieving Match Details

- [matchID](gkturnbasedmatch/matchid.md): A unique identifier for the turn-based match.
- [creationDate](gkturnbasedmatch/creationdate.md): The date that Game Center created the match.
- [participants](gkturnbasedmatch/participants.md): The players that participate in a turn-based match.
- [currentParticipant](gkturnbasedmatch/currentparticipant.md): The participant whose turn it is.
- [status](gkturnbasedmatch/status-swift.property.md): The state of the match, such as whether the match is open or has ended.
- [GKTurnBasedMatchStatus](gkturnbasedmatch/status-swift.enum.md): The states of a match from when it’s created to when it ends.
- [matchData](gkturnbasedmatch/matchdata.md): The game-specific data that you store in Game Center and pass between participants through a match object.
- [matchDataMaximumSize](gkturnbasedmatch/matchdatamaximumsize.md): The maximum size of the match data.
- [loadMatchDataWithCompletionHandler:](gkturnbasedmatch/loadmatchdata%28completionhandler_%29.md): Fetches your game-specific data that you store in Game Center when ending a turn, saving a turn, or leaving a match.

### Ending Turns and Saving Data

- [endTurnWithNextParticipants:turnTimeout:matchData:completionHandler:](gkturnbasedmatch/endturn%28withnextparticipants_turntimeout_match_completionhandler_%29.md): Passes the turn from the current participant to the next participant.
- [saveCurrentTurnWithMatchData:completionHandler:](gkturnbasedmatch/savecurrentturn%28withmatch_completionhandler_%29.md): Saves your match data in Game Center without ending the turn.
- [Turn Timeouts](turn-timeouts.md): A timeout for a player to take their turn.

### Forfeiting a Match

- [participantQuitInTurnWithOutcome:nextParticipants:turnTimeout:matchData:completionHandler:](gkturnbasedmatch/participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md): Forfeits the match on behalf of the local player when it’s their turn.
- [participantQuitOutOfTurnWithOutcome:withCompletionHandler:](gkturnbasedmatch/participantquitoutofturn%28with_withcompletionhandler_%29.md): Forfeits the match on behalf of the local player when it’s not their turn.
- [GKTurnBasedMatchOutcome](gkturnbasedmatch/outcome.md): The state of a participant when they forfeit a match or when a match ends.

### Ending a Match

- [endMatchInTurnWithMatchData:completionHandler:](gkturnbasedmatch/endmatchinturn%28withmatch_completionhandler_%29.md): Ends the match.
- [endMatchInTurnWithMatchData:leaderboardScores:achievements:completionHandler:](gkturnbasedmatch/endmatchinturn%28withmatch_leaderboardscores_achievements_completionhandler_%29.md): Ends the match while submitting scores and achievements for all of the participants.

### Sending Messages Between Participants

- [message](gkturnbasedmatch/message.md): A message from the current participant to all other participants when you end a turn, forfeit a match, or end a match.
- [setLocalizableMessageWithKey:arguments:](gkturnbasedmatch/setlocalizablemessagewithkey%28__arguments_%29.md): Sends a localized message from the current participant to all other participants when you end a turn, forfeit a match, or end a match.
- [sendReminderToParticipants:localizableMessageKey:arguments:completionHandler:](gkturnbasedmatch/sendreminder%28to_localizablemessagekey_arguments_completionhandler_%29.md): Sends a reminder from one participant to a specific set of other participants.

### Exchanging Data Between Participants

- [sendExchangeToParticipants:data:localizableMessageKey:arguments:timeout:completionHandler:](gkturnbasedmatch/sendexchange%28to_data_localizablemessagekey_arguments_timeout_completionhandler_%29.md): Sends an exchange request that contains your game data to one or more participants.
- [Exchange Timeouts](exchange-timeouts.md): The amount of time that passes before an exchange times out.
- [exchangeDataMaximumSize](gkturnbasedmatch/exchangedatamaximumsize.md): The maximum size of the exchange data.
- [exchangeMaxInitiatedExchangesPerPlayer](gkturnbasedmatch/exchangemaxinitiatedexchangesperplayer.md): The maximum number of exchanges the local player can initiate.
- [activeExchanges](gkturnbasedmatch/activeexchanges.md): The exchanges that the local player needs to accept or reject.
- [completedExchanges](gkturnbasedmatch/completedexchanges.md): The exchange requests that all recipients replied to and the current participant needs to save.
- [exchanges](gkturnbasedmatch/exchanges.md): The exchange requests that are active or complete.
- [saveMergedMatchData:withResolvedExchanges:completionHandler:](gkturnbasedmatch/savemergedmatch%28__withresolvedexchanges_completionhandler_%29.md): Saves match data for completed exchanges without ending the turn.

### Loading Existing Matches

- [loadMatchWithID:withCompletionHandler:](gkturnbasedmatch/load%28withid_withcompletionhandler_%29.md): Loads a specific match with the specified identifier.
- [loadMatchesWithCompletionHandler:](gkturnbasedmatch/loadmatches%28completionhandler_%29.md): Fetches the turn-based matches from Game Center that the local player participates in.

### Deleting a Match from Game Center

- [removeWithCompletionHandler:](gkturnbasedmatch/remove%28completionhandler_%29.md): Removes a match from Game Center that the local player participants in.

### Deprecated Methods

- [participantQuitInTurnWithOutcome:nextParticipant:matchData:completionHandler:](gkturnbasedmatch/participantquitinturn%28with_nextparticipant_match_completionhandler_%29.md): Deprecated. Resigns the current player from the match without ending the match.
- [endMatchInTurnWithMatchData:scores:achievements:completionHandler:](gkturnbasedmatch/endmatchinturn%28withmatch_scores_achievements_completionhandler_%29.md): Deprecated. Ends the match while submitting all of the scores and achievements.
- [endTurnWithNextParticipant:matchData:completionHandler:](gkturnbasedmatch/endturn%28withnextparticipant_match_completionhandler_%29.md): Deprecated. Updates the data stored on Game Center for the current match.

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
- [GKTurnBasedParticipant](gkturnbasedparticipant.md): A participant in a turn-based match.
- [GKTurnBasedEventListener](gkturnbasedeventlistener.md): The protocol that handles turn-based and data-exchange events between participants in a match.
- [GKTurnBasedExchange](gkturnbasedexchange.md): Exchange request information that participants send in a turn-based match.
- [GKTurnBasedExchangeReply](gkturnbasedexchangereply.md): Details about a recipient’s response to an exchange request.
- [GKGameCenterBadgingDisabled](../bundleresources/information-property-list/gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.
