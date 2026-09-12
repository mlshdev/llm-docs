> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboardscore/context](https://developer.apple.com/documentation/gamekit/gkleaderboardscore/context)

# context (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An integer value that your game uses.

## Declaration

```swift
var context: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Game Center stores this custom game-specific property for you. It allows you to associate an arbitrary 64-bit unsigned integer value with the score data that you report to Game Center. You decide how to interpret this integer value in your game.

## See Also

### Accessing Properties

- [leaderboardID](leaderboardid.md): The ID that Game Center uses for the leaderboard.
- [player](player.md): The player who earns the score.
- [value](value.md): The score that the player earns.

# context (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An integer value that your game uses.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger context;
```

<a id="Discussion"></a>

## Discussion

Game Center stores this custom game-specific property for you. It allows you to associate an arbitrary 64-bit unsigned integer value with the score data that you report to Game Center. You decide how to interpret this integer value in your game.

## See Also

### Accessing Properties

- [leaderboardID](leaderboardid.md): The ID that Game Center uses for the leaderboard.
- [player](player.md): The player who earns the score.
- [value](value.md): The score that the player earns.
