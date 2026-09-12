> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/fetchsavedgames(completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/fetchsavedgames(completionhandler:))

# fetchSavedGames(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Retrieves all available saved games.

## Declaration

```swift
func fetchSavedGames(completionHandler handler: (@Sendable ([GKSavedGame]?, (any Error)?) -> Void)? = nil)
```

```swift
func fetchSavedGames() async throws -> [GKSavedGame]
```

## Parameters

- `handler`: The block that this method calls when it completes the request.

  The block receives the following parameters:

  - **savedGames**: An array of saved games that GameKit fetches.
  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md)

<a id="Discussion"></a>

## Discussion

If more than one saved game has the same filename, a conflict occurs and you must choose which saved game filename is correct using the [resolveConflictingSavedGames(\_:with:completionHandler:)](resolveconflictingsavedgames%28__with_completionhandler_%29.md) method.

## See Also

### Saving Game Data

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [saveGameData(\_:withName:completionHandler:)](savegamedata%28__withname_completionhandler_%29.md): Saves game data with the specified name.
- [resolveConflictingSavedGames(\_:with:completionHandler:)](resolveconflictingsavedgames%28__with_completionhandler_%29.md): Replaces duplicate saved games that use the same filename with one file containing the specified game data.
- [deleteSavedGames(withName:completionHandler:)](deletesavedgames%28withname_completionhandler_%29.md): Deletes saved games with the specified filename.
- [GKSavedGame](../gksavedgame.md): An object that represents a file containing saved game data.
- [GKSavedGameListener](../gksavedgamelistener.md): A protocol that handles events related to saving game data.

# fetchSavedGamesWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Retrieves all available saved games.

## Declaration

```objectivec
- (void) fetchSavedGamesWithCompletionHandler:(void (^)(NSArray<GKSavedGame *> *savedGames, NSError *error)) handler;
```

## Parameters

- `handler`: The block that this method calls when it completes the request.

  The block receives the following parameters:

  - **savedGames**: An array of saved games that GameKit fetches.
  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md)

<a id="Discussion"></a>

## Discussion

If more than one saved game has the same filename, a conflict occurs and you must choose which saved game filename is correct using the [resolveConflictingSavedGames:withData:completionHandler:](resolveconflictingsavedgames%28__with_completionhandler_%29.md) method.

## See Also

### Saving Game Data

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md): Save game data during play or after a game in the player’s iCloud account that’s accessible from any device.
- [saveGameData:withName:completionHandler:](savegamedata%28__withname_completionhandler_%29.md): Saves game data with the specified name.
- [resolveConflictingSavedGames:withData:completionHandler:](resolveconflictingsavedgames%28__with_completionhandler_%29.md): Replaces duplicate saved games that use the same filename with one file containing the specified game data.
- [deleteSavedGamesWithName:completionHandler:](deletesavedgames%28withname_completionhandler_%29.md): Deletes saved games with the specified filename.
- [GKSavedGame](../gksavedgame.md): An object that represents a file containing saved game data.
- [GKSavedGameListener](../gksavedgamelistener.md): A protocol that handles events related to saving game data.
