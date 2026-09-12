> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedparticipant](https://developer.apple.com/documentation/gamekit/gkturnbasedparticipant)

# GKTurnBasedParticipant (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A participant in a turn-based match.

## Declaration

```swift
class GKTurnBasedParticipant
```

<a id="overview"></a>

## Overview

A `GKTurnBasedParticipant` represents a player in a turn-based match that Game Center uses to store and forward match data. In your game, use participant objects to show information about opponents during gameplay.

You get `GKTurnBasedParticipant` objects from the [participants](gkturnbasedmatch/participants.md) property of a [GKTurnBasedMatch](gkturnbasedmatch.md) object that GameKit passes to [GKTurnBasedEventListener](gkturnbasedeventlistener.md) protocol methods. If a participant represents a filled slot in the match, GameKit sets the [player](gkturnbasedparticipant/player.md) property and the [status](gkturnbasedparticipant/status-swift.property.md) accordingly. Get more information about a participant, such as the participant’s name and avatar, through the [player](gkturnbasedparticipant/player.md) property.

Before you end a match, you must set the [matchOutcome](gkturnbasedparticipant/matchoutcome.md) property for every participant in the match.

<a id="Subclassing"></a>

### Subclassing

You may not subclass this class.

## Topics

### Retrieving Participant Details

- [lastTurnDate](gkturnbasedparticipant/lastturndate.md): The date and time that this participant last took a turn in the game.
- [timeoutDate](gkturnbasedparticipant/timeoutdate.md): The date and time that the participant’s turn timed out.
- [player](gkturnbasedparticipant/player.md): The player object containing the participant details.
- [status](gkturnbasedparticipant/status-swift.property.md): The status of the participant.
- [GKTurnBasedParticipant.Status](gkturnbasedparticipant/status-swift.enum.md): The state the participant is in during the match.
- [playerID](gkturnbasedparticipant/playerid.md): Deprecated. The player identifier for this participant.

### Setting Participant Outcomes

- [matchOutcome](gkturnbasedparticipant/matchoutcome.md): The conclusion or results of a participant in a match.
- [GKTurnBasedMatch.Outcome](gkturnbasedmatch/outcome.md): The state of a participant when they forfeit a match or when a match ends.

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
- [GKTurnBasedEventListener](gkturnbasedeventlistener.md): The protocol that handles turn-based and data-exchange events between participants in a match.
- [GKTurnBasedExchange](gkturnbasedexchange.md): Exchange request information that participants send in a turn-based match.
- [GKTurnBasedExchangeReply](gkturnbasedexchangereply.md): Details about a recipient’s response to an exchange request.
- [GKGameCenterBadgingDisabled](../bundleresources/information-property-list/gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.

# GKTurnBasedParticipant (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A participant in a turn-based match.

## Declaration

```objectivec
@interface GKTurnBasedParticipant : NSObject
```

<a id="overview"></a>

## Overview

A `GKTurnBasedParticipant` represents a player in a turn-based match that Game Center uses to store and forward match data. In your game, use participant objects to show information about opponents during gameplay.

You get `GKTurnBasedParticipant` objects from the [participants](gkturnbasedmatch/participants.md) property of a [GKTurnBasedMatch](gkturnbasedmatch.md) object that GameKit passes to [GKTurnBasedEventListener](gkturnbasedeventlistener.md) protocol methods. If a participant represents a filled slot in the match, GameKit sets the [player](gkturnbasedparticipant/player.md) property and the [status](gkturnbasedparticipant/status-swift.property.md) accordingly. Get more information about a participant, such as the participant’s name and avatar, through the [player](gkturnbasedparticipant/player.md) property.

Before you end a match, you must set the [matchOutcome](gkturnbasedparticipant/matchoutcome.md) property for every participant in the match.

<a id="Subclassing"></a>

### Subclassing

You may not subclass this class.

## Topics

### Retrieving Participant Details

- [lastTurnDate](gkturnbasedparticipant/lastturndate.md): The date and time that this participant last took a turn in the game.
- [timeoutDate](gkturnbasedparticipant/timeoutdate.md): The date and time that the participant’s turn timed out.
- [player](gkturnbasedparticipant/player.md): The player object containing the participant details.
- [status](gkturnbasedparticipant/status-swift.property.md): The status of the participant.
- [GKTurnBasedParticipantStatus](gkturnbasedparticipant/status-swift.enum.md): The state the participant is in during the match.
- [playerID](gkturnbasedparticipant/playerid.md): Deprecated. The player identifier for this participant.

### Setting Participant Outcomes

- [matchOutcome](gkturnbasedparticipant/matchoutcome.md): The conclusion or results of a participant in a match.
- [GKTurnBasedMatchOutcome](gkturnbasedmatch/outcome.md): The state of a participant when they forfeit a match or when a match ends.

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
- [GKTurnBasedEventListener](gkturnbasedeventlistener.md): The protocol that handles turn-based and data-exchange events between participants in a match.
- [GKTurnBasedExchange](gkturnbasedexchange.md): Exchange request information that participants send in a turn-based match.
- [GKTurnBasedExchangeReply](gkturnbasedexchangereply.md): Details about a recipient’s response to an exchange request.
- [GKGameCenterBadgingDisabled](../bundleresources/information-property-list/gkgamecenterbadgingdisabled.md): A Boolean value indicating whether GameKit can add badges to a turn-based game icon.
