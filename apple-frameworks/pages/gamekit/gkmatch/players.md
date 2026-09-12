> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/players](https://developer.apple.com/documentation/gamekit/gkmatch/players)

# players (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The players that join the match.

## Declaration

```swift
var players: [GKPlayer] { get }
```

## Mentioned In

- [Assigning players to teams using rules](../assigning-players-to-teams-using-rules.md)

<a id="Discussion"></a>

## Discussion

This property includes all players except the local player.

## See Also

### Working with other players

- [expectedPlayerCount](expectedplayercount.md): The remaining number of players invited but not yet connected to the match.

# players (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The players that join the match.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<GKPlayer *> * players;
```

## Mentioned In

- [Assigning players to teams using rules](../assigning-players-to-teams-using-rules.md)

<a id="Discussion"></a>

## Discussion

This property includes all players except the local player.

## See Also

### Working with other players

- [expectedPlayerCount](expectedplayercount.md): The remaining number of players invited but not yet connected to the match.
