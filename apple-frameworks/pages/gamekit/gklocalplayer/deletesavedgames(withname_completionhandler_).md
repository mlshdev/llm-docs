> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/deletesavedgames(withname:completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/deletesavedgames(withname:completionhandler:))

# deleteSavedGames(withName:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Deletes saved games with the specified filename.

## Declaration

```swift
func deleteSavedGames(withName name: String, completionHandler handler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func deleteSavedGames(withName name: String) async throws
```

## Parameters

- `name`: A string that identifies the saved game data to delete.
- `handler`: The block that this method calls when it completes the request.

  The block receives the following parameters:

  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md)

<a id="Discussion"></a>

## Discussion

Alternatively, use the [resolveConflictingSavedGames(\_:with:completionHandler:)](resolveconflictingsavedgames%28__with_completionhandler_%29.md) method to keep one of the saved games that use the same filename.

## See Also

### Saving Game Data

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [saveGameData(\_:withName:completionHandler:)](savegamedata%28__withname_completionhandler_%29.md): Saves game data with the specified name.
- [fetchSavedGames(completionHandler:)](fetchsavedgames%28completionhandler_%29.md): Retrieves all available saved games.
- [resolveConflictingSavedGames(\_:with:completionHandler:)](resolveconflictingsavedgames%28__with_completionhandler_%29.md): Replaces duplicate saved games that use the same filename with one file containing the specified game data.
- [GKSavedGame](../gksavedgame.md): An object that represents a file containing saved game data.
- [GKSavedGameListener](../gksavedgamelistener.md): A protocol that handles events related to saving game data.

# deleteSavedGamesWithName:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Deletes saved games with the specified filename.

## Declaration

```objectivec
- (void) deleteSavedGamesWithName:(NSString *) name completionHandler:(void (^)(NSError *error)) handler;
```

## Parameters

- `name`: A string that identifies the saved game data to delete.
- `handler`: The block that this method calls when it completes the request.

  The block receives the following parameters:

  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md)

<a id="Discussion"></a>

## Discussion

Alternatively, use the [resolveConflictingSavedGames:withData:completionHandler:](resolveconflictingsavedgames%28__with_completionhandler_%29.md) method to keep one of the saved games that use the same filename.

## See Also

### Saving Game Data

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [saveGameData:withName:completionHandler:](savegamedata%28__withname_completionhandler_%29.md): Saves game data with the specified name.
- [fetchSavedGamesWithCompletionHandler:](fetchsavedgames%28completionhandler_%29.md): Retrieves all available saved games.
- [resolveConflictingSavedGames:withData:completionHandler:](resolveconflictingsavedgames%28__with_completionhandler_%29.md): Replaces duplicate saved games that use the same filename with one file containing the specified game data.
- [GKSavedGame](../gksavedgame.md): An object that represents a file containing saved game data.
- [GKSavedGameListener](../gksavedgamelistener.md): A protocol that handles events related to saving game data.
