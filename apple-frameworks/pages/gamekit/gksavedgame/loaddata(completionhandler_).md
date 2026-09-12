> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksavedgame/loaddata(completionhandler:)](https://developer.apple.com/documentation/gamekit/gksavedgame/loaddata(completionhandler:))

# loadData(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Loads the game data from the file.

## Declaration

```swift
func loadData(completionHandler handler: (@Sendable (Data?, (any Error)?) -> Void)? = nil)
```

```swift
func loadData() async throws -> Data
```

## Parameters

- `handler`: The block that this method calls when it completes the request.

  The block receives the following parameters:

  - ***data***: The data object that you saved to the file using the [saveGameData(\_:withName:completionHandler:)](../gklocalplayer/savegamedata%28__withname_completionhandler_%29.md) method
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md)

# loadDataWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Loads the game data from the file.

## Declaration

```objectivec
- (void) loadDataWithCompletionHandler:(void (^)(NSData *data, NSError *error)) handler;
```

## Parameters

- `handler`: The block that this method calls when it completes the request.

  The block receives the following parameters:

  - ***data***: The data object that you saved to the file using the [saveGameData:withName:completionHandler:](../gklocalplayer/savegamedata%28__withname_completionhandler_%29.md) method
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Saving the player’s game data to an iCloud account](../saving-the-player-s-game-data-to-an-icloud-account.md)
