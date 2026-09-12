> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/expectedplayercount](https://developer.apple.com/documentation/gamekit/gkmatch/expectedplayercount)

# expectedPlayerCount (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The remaining number of players invited but not yet connected to the match.

## Declaration

```swift
var expectedPlayerCount: Int { get }
```

## Mentioned In

- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

GameKit decrements the value of this property when a player connects to the match. When the value reaches `0`, all expected players joined, and the game can begin.

## See Also

### Working with other players

- [players](players.md): The players that join the match.

# expectedPlayerCount (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The remaining number of players invited but not yet connected to the match.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger expectedPlayerCount;
```

## Mentioned In

- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

GameKit decrements the value of this property when a player connects to the match. When the value reaches `0`, all expected players joined, and the game can begin.

## See Also

### Working with other players

- [players](players.md): The players that join the match.
