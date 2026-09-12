> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksavedgame/modificationdate](https://developer.apple.com/documentation/gamekit/gksavedgame/modificationdate)

# modificationDate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The date when you saved the game data or modified it.

## Declaration

```swift
var modificationDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

Game Center sets this property when you save game data using the [saveGameData(\_:withName:completionHandler:)](../gklocalplayer/savegamedata%28__withname_completionhandler_%29.md) method. If you save game data using an existing filename, Game Center overwrites the file with the new data and changes the modification date.

## See Also

### Retrieving Information About a Saved Game File

- [name](name.md): The name of the saved game.
- [deviceName](devicename.md): The name of the device that the player uses to save the game.

# modificationDate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The date when you saved the game data or modified it.

## Declaration

```objectivec
@property (atomic, readonly, nullable) NSDate * modificationDate;
```

<a id="Discussion"></a>

## Discussion

Game Center sets this property when you save game data using the [saveGameData:withName:completionHandler:](../gklocalplayer/savegamedata%28__withname_completionhandler_%29.md) method. If you save game data using an existing filename, Game Center overwrites the file with the new data and changes the modification date.

## See Also

### Retrieving Information About a Saved Game File

- [name](name.md): The name of the saved game.
- [deviceName](devicename.md): The name of the device that the player uses to save the game.
