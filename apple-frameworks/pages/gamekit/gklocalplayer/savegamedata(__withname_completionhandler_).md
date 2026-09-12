> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/savegamedata(_:withname:completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/savegamedata(_:withname:completionhandler:))

# saveGameData(\_:withName:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Saves game data with the specified name.

## Declaration

```swift
func saveGameData(_ data: Data, withName name: String, completionHandler handler: (@Sendable (GKSavedGame?, (any Error)?) -> Void)? = nil)
```

```swift
func saveGameData(_ data: Data, withName name: String) async throws -> GKSavedGame
```

## Parameters

- `data`: An object that contains the saved game data.
- `name`: A unique filename for the saved game data.
- `handler`: The block that this method calls when it completes the request.

  The block receives the following parameters:

  - **savedGame**: The saved game.
  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md)

<a id="Discussion"></a>

## Discussion

If the `name` parameter is an existing filename, GameKit overwrites the file with the new game data.

> **Important**

>  You must provide an iCloud container ID in your project to save game data to the player’s iCloud account. Add the [iCloud Container Identifiers Entitlement](../../bundleresources/entitlements/com.apple.developer.icloud-container-identifiers.md) key to your project containing a unique identifier for your game.

## See Also

### Saving Game Data

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [fetchSavedGames(completionHandler:)](fetchsavedgames%28completionhandler_%29.md): Retrieves all available saved games.
- [resolveConflictingSavedGames(\_:with:completionHandler:)](resolveconflictingsavedgames%28__with_completionhandler_%29.md): Replaces duplicate saved games that use the same filename with one file containing the specified game data.
- [deleteSavedGames(withName:completionHandler:)](deletesavedgames%28withname_completionhandler_%29.md): Deletes saved games with the specified filename.
- [GKSavedGame](../gksavedgame.md): An object that represents a file containing saved game data.
- [GKSavedGameListener](../gksavedgamelistener.md): A protocol that handles events related to saving game data.

# saveGameData:withName:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Saves game data with the specified name.

## Declaration

```objectivec
- (void) saveGameData:(NSData *) data withName:(NSString *) name completionHandler:(void (^)(GKSavedGame *savedGame, NSError *error)) handler;
```

## Parameters

- `data`: An object that contains the saved game data.
- `name`: A unique filename for the saved game data.
- `handler`: The block that this method calls when it completes the request.

  The block receives the following parameters:

  - **savedGame**: The saved game.
  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md)

<a id="Discussion"></a>

## Discussion

If the `name` parameter is an existing filename, GameKit overwrites the file with the new game data.

> **Important**

>  You must provide an iCloud container ID in your project to save game data to the player’s iCloud account. Add the [iCloud Container Identifiers Entitlement](../../bundleresources/entitlements/com.apple.developer.icloud-container-identifiers.md) key to your project containing a unique identifier for your game.

## See Also

### Saving Game Data

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [fetchSavedGamesWithCompletionHandler:](fetchsavedgames%28completionhandler_%29.md): Retrieves all available saved games.
- [resolveConflictingSavedGames:withData:completionHandler:](resolveconflictingsavedgames%28__with_completionhandler_%29.md): Replaces duplicate saved games that use the same filename with one file containing the specified game data.
- [deleteSavedGamesWithName:completionHandler:](deletesavedgames%28withname_completionhandler_%29.md): Deletes saved games with the specified filename.
- [GKSavedGame](../gksavedgame.md): An object that represents a file containing saved game data.
- [GKSavedGameListener](../gksavedgamelistener.md): A protocol that handles events related to saving game data.
