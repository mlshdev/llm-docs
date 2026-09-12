> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/submitscore(_:context:player:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboard/submitscore(_:context:player:completionhandler:))

# submitScore(\_:context:player:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Submits a score to the leaderboard.

## Declaration

```swift
func submitScore(_ score: Int, context: Int, player: GKPlayer, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func submitScore(_ score: Int, context: Int, player: GKPlayer) async throws
```

## Parameters

- `score`: The score that the player earns.
- `context`: An integer value that your game uses.
- `player`: The player who earns the score.
- `completionHandler`: A block that GameKit calls when this method adds the score.

  The block receives the following parameters:

  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Creating recurring leaderboards](../creating-recurring-leaderboards.md)
- [Creating engaging challenges from leaderboards](../creating-engaging-challenges-from-leaderboards.md)
- [Choosing a leaderboard for your challenges](../choosing-a-leaderboard-for-your-challenges.md)
- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## See Also

### Submitting Scores

- [submitScore(\_:context:player:leaderboardIDs:completionHandler:)](submitscore%28__context_player_leaderboardids_completionhandler_%29.md): Submits a score to multiple leaderboards.

# submitScore:context:player:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Submits a score to the leaderboard.

## Declaration

```objectivec
- (void) submitScore:(NSInteger) score context:(NSUInteger) context player:(GKPlayer *) player completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `score`: The score that the player earns.
- `context`: An integer value that your game uses.
- `player`: The player who earns the score.
- `completionHandler`: A block that GameKit calls when this method adds the score.

  The block receives the following parameters:

  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Creating recurring leaderboards](../creating-recurring-leaderboards.md)
- [Creating engaging challenges from leaderboards](../creating-engaging-challenges-from-leaderboards.md)
- [Choosing a leaderboard for your challenges](../choosing-a-leaderboard-for-your-challenges.md)
- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## See Also

### Submitting Scores

- [submitScore:context:player:leaderboardIDs:completionHandler:](submitscore%28__context_player_leaderboardids_completionhandler_%29.md): Submits a score to multiple leaderboards.
