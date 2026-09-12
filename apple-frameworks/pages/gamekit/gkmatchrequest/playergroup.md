> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest/playergroup](https://developer.apple.com/documentation/gamekit/gkmatchrequest/playergroup)

# playerGroup (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A number identifying a subset of players invited to join a match.

## Declaration

```swift
var playerGroup: Int { get set }
```

## Mentioned In

- [Creating matchmaking rules for backward compatibility](../creating-matchmaking-rules-for-backward-compatibility.md)
- [Finding players using matchmaking rules](../finding-players-using-matchmaking-rules.md)
- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Game Center only finds players whose `GKMatchRequest` objects share the same `playerGroup` value. For example, use the `playerGroup` property to create matches based on skill level, game modes, or other common interests. The default value of this property is `1`.

## See Also

### Matching specific players

- [playerAttributes](playerattributes.md): A mask that specifies the role that the local player would like to play in the game.

# playerGroup (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A number identifying a subset of players invited to join a match.

## Declaration

```objectivec
@property (assign) NSUInteger playerGroup;
```

## Mentioned In

- [Creating matchmaking rules for backward compatibility](../creating-matchmaking-rules-for-backward-compatibility.md)
- [Finding players using matchmaking rules](../finding-players-using-matchmaking-rules.md)
- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

Game Center only finds players whose `GKMatchRequest` objects share the same `playerGroup` value. For example, use the `playerGroup` property to create matches based on skill level, game modes, or other common interests. The default value of this property is `1`.

## See Also

### Matching specific players

- [playerAttributes](playerattributes.md): A mask that specifies the role that the local player would like to play in the game.
