> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksavedgamelistener/player(_:hasconflictingsavedgames:)](https://developer.apple.com/documentation/gamekit/gksavedgamelistener/player(_:hasconflictingsavedgames:))

# player(\_:hasConflictingSavedGames:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Chooses the correct game data from the saved games that contain conflicts.

## Declaration

```swift
optional func player(_ player: GKPlayer, hasConflictingSavedGames savedGames: [GKSavedGame])
```

## Parameters

- `player`: The player who saves the game data.
- `savedGames`: The saved games that contain the conflicts.

## Mentioned In

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md)

<a id="Discussion"></a>

## Discussion

Saved game files conflict when multiple devices write to the same file while one or more of the devices are offline. Implement this method to choose the game data that’s correct and try saving it again using the [resolveConflictingSavedGames(\_:with:completionHandler:)](../gklocalplayer/resolveconflictingsavedgames%28__with_completionhandler_%29.md) method.

# player:hasConflictingSavedGames: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Chooses the correct game data from the saved games that contain conflicts.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player hasConflictingSavedGames:(NSArray<GKSavedGame *> *) savedGames;
```

## Parameters

- `player`: The player who saves the game data.
- `savedGames`: The saved games that contain the conflicts.

## Mentioned In

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md)

<a id="Discussion"></a>

## Discussion

Saved game files conflict when multiple devices write to the same file while one or more of the devices are offline. Implement this method to choose the game data that’s correct and try saving it again using the [resolveConflictingSavedGames:withData:completionHandler:](../gklocalplayer/resolveconflictingsavedgames%28__with_completionhandler_%29.md) method.
