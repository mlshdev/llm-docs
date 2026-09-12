> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/playerids](https://developer.apple.com/documentation/gamekit/gkmatch/playerids)

# playerIDs (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

The player identifiers for remote players in the match.

> Use the [players](players.md) property instead.

## Declaration

```swift
var playerIDs: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

The `playerIDs` property initially includes the player identifiers for any remote players already connected to the match; the array may initially be empty. As each new player connects to the match, GameKit adds the player’s identifier to the array. GameKit doesn’t include the local player’s identifier in this array.

## See Also

### Related Documentation

- [expectedPlayerCount](expectedplayercount.md): The remaining number of players invited but not yet connected to the match.

### Deprecated Methods and Properties

- [chooseBestHostPlayer(completionHandler:)](choosebesthostplayer%28completionhandler_%29.md): Deprecated. Determines the best player in the game to act as the server for a client-server match.
- [send(\_:toPlayers:with:)](send%28__toplayers_with_%29.md): Deprecated. Transmits data to a list of connected players.

# playerIDs (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

The player identifiers for remote players in the match.

> Use the [players](players.md) property instead.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSString *> * playerIDs;
```

<a id="Discussion"></a>

## Discussion

The `playerIDs` property initially includes the player identifiers for any remote players already connected to the match; the array may initially be empty. As each new player connects to the match, GameKit adds the player’s identifier to the array. GameKit doesn’t include the local player’s identifier in this array.

## See Also

### Related Documentation

- [expectedPlayerCount](expectedplayercount.md): The remaining number of players invited but not yet connected to the match.

### Deprecated Methods and Properties

- [chooseBestHostPlayerWithCompletionHandler:](choosebesthostplayer%28completionhandler_%29.md): Deprecated. Determines the best player in the game to act as the server for a client-server match.
- [sendData:toPlayers:withDataMode:error:](send%28__toplayers_with_%29.md): Deprecated. Transmits data to a list of connected players.
