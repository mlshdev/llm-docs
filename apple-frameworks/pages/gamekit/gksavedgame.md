> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksavedgame](https://developer.apple.com/documentation/gamekit/gksavedgame)

# GKSavedGame (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that represents a file containing saved game data.

## Declaration

```swift
class GKSavedGame
```

## Mentioned In

- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md)

<a id="overview"></a>

## Overview

A `GKSavedGame` object represents the file that contains game data you saved using the `GKLocalPlayer` [saveGameData(\_:withName:completionHandler:)](gklocalplayer/savegamedata%28__withname_completionhandler_%29.md) method.

You don’t create `GKSavedGame` objects directly. Instead use the [fetchSavedGames(completionHandler:)](gklocalplayer/fetchsavedgames%28completionhandler_%29.md) method to get the games you saved. Then get the filename, its modification date, and the name of the device the player used to save the game from the returned objects.

Use the [loadData(completionHandler:)](gksavedgame/loaddata%28completionhandler_%29.md) method to get the actual game data you saved in the file. To delete saved games, use the [deleteSavedGames(withName:completionHandler:)](gklocalplayer/deletesavedgames%28withname_completionhandler_%29.md) method.

## Topics

### Loading Saved Game Data

- [loadData(completionHandler:)](gksavedgame/loaddata%28completionhandler_%29.md): Loads the game data from the file.

### Retrieving Information About a Saved Game File

- [name](gksavedgame/name.md): The name of the saved game.
- [modificationDate](gksavedgame/modificationdate.md): The date when you saved the game data or modified it.
- [deviceName](gksavedgame/devicename.md): The name of the device that the player uses to save the game.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Saving Game Data

- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [saveGameData(\_:withName:completionHandler:)](gklocalplayer/savegamedata%28__withname_completionhandler_%29.md): Saves game data with the specified name.
- [fetchSavedGames(completionHandler:)](gklocalplayer/fetchsavedgames%28completionhandler_%29.md): Retrieves all available saved games.
- [resolveConflictingSavedGames(\_:with:completionHandler:)](gklocalplayer/resolveconflictingsavedgames%28__with_completionhandler_%29.md): Replaces duplicate saved games that use the same filename with one file containing the specified game data.
- [deleteSavedGames(withName:completionHandler:)](gklocalplayer/deletesavedgames%28withname_completionhandler_%29.md): Deletes saved games with the specified filename.
- [GKSavedGameListener](gksavedgamelistener.md): A protocol that handles events related to saving game data.

# GKSavedGame (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that represents a file containing saved game data.

## Declaration

```objectivec
@interface GKSavedGame : NSObject
```

## Mentioned In

- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md)

<a id="overview"></a>

## Overview

A `GKSavedGame` object represents the file that contains game data you saved using the `GKLocalPlayer` [saveGameData:withName:completionHandler:](gklocalplayer/savegamedata%28__withname_completionhandler_%29.md) method.

You don’t create `GKSavedGame` objects directly. Instead use the [fetchSavedGamesWithCompletionHandler:](gklocalplayer/fetchsavedgames%28completionhandler_%29.md) method to get the games you saved. Then get the filename, its modification date, and the name of the device the player used to save the game from the returned objects.

Use the [loadDataWithCompletionHandler:](gksavedgame/loaddata%28completionhandler_%29.md) method to get the actual game data you saved in the file. To delete saved games, use the [deleteSavedGamesWithName:completionHandler:](gklocalplayer/deletesavedgames%28withname_completionhandler_%29.md) method.

## Topics

### Loading Saved Game Data

- [loadDataWithCompletionHandler:](gksavedgame/loaddata%28completionhandler_%29.md): Loads the game data from the file.

### Retrieving Information About a Saved Game File

- [name](gksavedgame/name.md): The name of the saved game.
- [modificationDate](gksavedgame/modificationdate.md): The date when you saved the game data or modified it.
- [deviceName](gksavedgame/devicename.md): The name of the device that the player uses to save the game.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Saving Game Data

- [Saving the player’s game data to an iCloud account](saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [saveGameData:withName:completionHandler:](gklocalplayer/savegamedata%28__withname_completionhandler_%29.md): Saves game data with the specified name.
- [fetchSavedGamesWithCompletionHandler:](gklocalplayer/fetchsavedgames%28completionhandler_%29.md): Retrieves all available saved games.
- [resolveConflictingSavedGames:withData:completionHandler:](gklocalplayer/resolveconflictingsavedgames%28__with_completionhandler_%29.md): Replaces duplicate saved games that use the same filename with one file containing the specified game data.
- [deleteSavedGamesWithName:completionHandler:](gklocalplayer/deletesavedgames%28withname_completionhandler_%29.md): Deletes saved games with the specified filename.
- [GKSavedGameListener](gksavedgamelistener.md): A protocol that handles events related to saving game data.
