> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/resolveconflictingsavedgames(_:with:completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/resolveconflictingsavedgames(_:with:completionhandler:))

# resolveConflictingSavedGames(\_:with:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Replaces duplicate saved games that use the same filename with one file containing the specified game data.

## Declaration

```swift
func resolveConflictingSavedGames(_ conflictingSavedGames: [GKSavedGame], with data: Data, completionHandler handler: (@Sendable ([GKSavedGame]?, (any Error)?) -> Void)? = nil)
```

```swift
func resolveConflictingSavedGames(_ conflictingSavedGames: [GKSavedGame], with data: Data) async throws -> [GKSavedGame]
```

## Parameters

- `conflictingSavedGames`: The saved games that contain the conflicts.
- `data`: The correct game data to save.
- `handler`: The block that this method calls when it completes the request.

  The block receives the following parameters:

  - **savedGames**: The resolved saved games that you include in `conflictingSavedGames`, and any other saved games GameKit finds with conflicts that you don’t include in `conflictingSavedGames`.

  For example, if there are five saved game files with the same filename, but only three are in `conflictingSavedGames`, this parameter contains the three saved games you provide and the two saved games GameKit finds.

  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md)

<a id="Discussion"></a>

## Discussion

Implement the [player(\_:hasConflictingSavedGames:)](../gksavedgamelistener/player%28__hasconflictingsavedgames_%29.md) protocol method to choose the correct game data when there’s a conflict. Then call this method separately for each set of saved games that contain file conflicts. For example, if multiple saved games use the `savedgame1` and `savedgame2` filenames, call this method once for the saved games that use the `savedgame1` filename, and once for the saved games that use the `savedgame2` filename.

## See Also

### Saving Game Data

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [saveGameData(\_:withName:completionHandler:)](savegamedata%28__withname_completionhandler_%29.md): Saves game data with the specified name.
- [fetchSavedGames(completionHandler:)](fetchsavedgames%28completionhandler_%29.md): Retrieves all available saved games.
- [deleteSavedGames(withName:completionHandler:)](deletesavedgames%28withname_completionhandler_%29.md): Deletes saved games with the specified filename.
- [GKSavedGame](../gksavedgame.md): An object that represents a file containing saved game data.
- [GKSavedGameListener](../gksavedgamelistener.md): A protocol that handles events related to saving game data.

# resolveConflictingSavedGames:withData:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Replaces duplicate saved games that use the same filename with one file containing the specified game data.

## Declaration

```objectivec
- (void) resolveConflictingSavedGames:(NSArray<GKSavedGame *> *) conflictingSavedGames withData:(NSData *) data completionHandler:(void (^)(NSArray<GKSavedGame *> *savedGames, NSError *error)) handler;
```

## Parameters

- `conflictingSavedGames`: The saved games that contain the conflicts.
- `data`: The correct game data to save.
- `handler`: The block that this method calls when it completes the request.

  The block receives the following parameters:

  - **savedGames**: The resolved saved games that you include in `conflictingSavedGames`, and any other saved games GameKit finds with conflicts that you don’t include in `conflictingSavedGames`.

  For example, if there are five saved game files with the same filename, but only three are in `conflictingSavedGames`, this parameter contains the three saved games you provide and the two saved games GameKit finds.

  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md)

<a id="Discussion"></a>

## Discussion

Implement the [player:hasConflictingSavedGames:](../gksavedgamelistener/player%28__hasconflictingsavedgames_%29.md) protocol method to choose the correct game data when there’s a conflict. Then call this method separately for each set of saved games that contain file conflicts. For example, if multiple saved games use the `savedgame1` and `savedgame2` filenames, call this method once for the saved games that use the `savedgame1` filename, and once for the saved games that use the `savedgame2` filename.

## See Also

### Saving Game Data

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [saveGameData:withName:completionHandler:](savegamedata%28__withname_completionhandler_%29.md): Saves game data with the specified name.
- [fetchSavedGamesWithCompletionHandler:](fetchsavedgames%28completionhandler_%29.md): Retrieves all available saved games.
- [deleteSavedGamesWithName:completionHandler:](deletesavedgames%28withname_completionhandler_%29.md): Deletes saved games with the specified filename.
- [GKSavedGame](../gksavedgame.md): An object that represents a file containing saved game data.
- [GKSavedGameListener](../gksavedgamelistener.md): A protocol that handles events related to saving game data.
