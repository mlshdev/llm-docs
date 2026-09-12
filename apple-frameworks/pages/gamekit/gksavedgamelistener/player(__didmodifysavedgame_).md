> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksavedgamelistener/player(_:didmodifysavedgame:)](https://developer.apple.com/documentation/gamekit/gksavedgamelistener/player(_:didmodifysavedgame:))

# player(\_:didModifySavedGame:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Handles when data changes in a saved game file.

## Declaration

```swift
optional func player(_ player: GKPlayer, didModifySavedGame savedGame: GKSavedGame)
```

## Parameters

- `player`: The player who saves the game data.
- `savedGame`: The game the player saves.

<a id="Discussion"></a>

## Discussion

GameKit invokes this method when you save game data on a device that isn’t the user’s current device.

# player:didModifySavedGame: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Handles when data changes in a saved game file.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player didModifySavedGame:(GKSavedGame *) savedGame;
```

## Parameters

- `player`: The player who saves the game data.
- `savedGame`: The game the player saves.

<a id="Discussion"></a>

## Discussion

GameKit invokes this method when you save game data on a device that isn’t the user’s current device.
