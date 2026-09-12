> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksavedgamelistener](https://developer.apple.com/documentation/gamekit/gksavedgamelistener)

# GKSavedGameListener (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A protocol that handles events related to saving game data.

## Declaration

```swift
protocol GKSavedGameListener : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement the methods in the this protocol to manage conflicts or track changes when saving game data.

Adopt the [GKLocalPlayerListener](gklocalplayerlistener.md) protocol to listen for and handle a variety of Game Center events for player accounts instead of the individual [GKChallengeListener](gkchallengelistener.md), [GKInviteEventListener](gkinviteeventlistener.md), [GKSavedGameListener](gksavedgamelistener.md), and [GKTurnBasedEventListener](gkturnbasedeventlistener.md) protocols.

## Topics

### Handling Saved Game Conflicts

- [player(\_:hasConflictingSavedGames:)](gksavedgamelistener/player%28__hasconflictingsavedgames_%29.md): Chooses the correct game data from the saved games that contain conflicts.

### Handling Saved Game Changes

- [player(\_:didModifySavedGame:)](gksavedgamelistener/player%28__didmodifysavedgame_%29.md): Handles when data changes in a saved game file.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [GKLocalPlayerListener](gklocalplayerlistener.md)

### Conforming Types

- [GKLocalPlayer](gklocalplayer.md)

## See Also

### Saving Game Data

- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [saveGameData(\_:withName:completionHandler:)](gklocalplayer/savegamedata%28__withname_completionhandler_%29.md): Saves game data with the specified name.
- [fetchSavedGames(completionHandler:)](gklocalplayer/fetchsavedgames%28completionhandler_%29.md): Retrieves all available saved games.
- [resolveConflictingSavedGames(\_:with:completionHandler:)](gklocalplayer/resolveconflictingsavedgames%28__with_completionhandler_%29.md): Replaces duplicate saved games that use the same filename with one file containing the specified game data.
- [deleteSavedGames(withName:completionHandler:)](gklocalplayer/deletesavedgames%28withname_completionhandler_%29.md): Deletes saved games with the specified filename.
- [GKSavedGame](gksavedgame.md): An object that represents a file containing saved game data.

# GKSavedGameListener (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A protocol that handles events related to saving game data.

## Declaration

```objectivec
@protocol GKSavedGameListener <NSObject>
```

<a id="overview"></a>

## Overview

Implement the methods in the this protocol to manage conflicts or track changes when saving game data.

Adopt the [GKLocalPlayerListener](gklocalplayerlistener.md) protocol to listen for and handle a variety of Game Center events for player accounts instead of the individual [GKChallengeListener](gkchallengelistener.md), [GKInviteEventListener](gkinviteeventlistener.md), [GKSavedGameListener](gksavedgamelistener.md), and [GKTurnBasedEventListener](gkturnbasedeventlistener.md) protocols.

## Topics

### Handling Saved Game Conflicts

- [player:hasConflictingSavedGames:](gksavedgamelistener/player%28__hasconflictingsavedgames_%29.md): Chooses the correct game data from the saved games that contain conflicts.

### Handling Saved Game Changes

- [player:didModifySavedGame:](gksavedgamelistener/player%28__didmodifysavedgame_%29.md): Handles when data changes in a saved game file.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [GKLocalPlayerListener](gklocalplayerlistener.md)

### Conforming Types

- [GKLocalPlayer](gklocalplayer.md)

## See Also

### Saving Game Data

- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [saveGameData:withName:completionHandler:](gklocalplayer/savegamedata%28__withname_completionhandler_%29.md): Saves game data with the specified name.
- [fetchSavedGamesWithCompletionHandler:](gklocalplayer/fetchsavedgames%28completionhandler_%29.md): Retrieves all available saved games.
- [resolveConflictingSavedGames:withData:completionHandler:](gklocalplayer/resolveconflictingsavedgames%28__with_completionhandler_%29.md): Replaces duplicate saved games that use the same filename with one file containing the specified game data.
- [deleteSavedGamesWithName:completionHandler:](gklocalplayer/deletesavedgames%28withname_completionhandler_%29.md): Deletes saved games with the specified filename.
- [GKSavedGame](gksavedgame.md): An object that represents a file containing saved game data.
