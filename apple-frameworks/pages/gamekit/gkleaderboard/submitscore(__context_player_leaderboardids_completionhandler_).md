> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/submitscore(_:context:player:leaderboardids:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboard/submitscore(_:context:player:leaderboardids:completionhandler:))

# submitScore(\_:context:player:leaderboardIDs:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Submits a score to multiple leaderboards.

## Declaration

```swift
class func submitScore(_ score: Int, context: Int, player: GKPlayer, leaderboardIDs: [String], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
class func submitScore(_ score: Int, context: Int, player: GKPlayer, leaderboardIDs: [String]) async throws
```

## Parameters

- `score`: The score that the player earns.
- `context`: An integer value that your game uses.
- `player`: The player who earns the score.
- `leaderboardIDs`: The IDs that Game Center uses for the leaderboards to submit the score to.
- `completionHandler`: A block that GameKit calls when this method adds the score.

  The block receives the following parameters:

  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Creating recurring leaderboards](../creating-recurring-leaderboards.md)
- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## See Also

### Submitting Scores

- [submitScore(\_:context:player:completionHandler:)](submitscore%28__context_player_completionhandler_%29.md): Submits a score to the leaderboard.

# submitScore:context:player:leaderboardIDs:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Submits a score to multiple leaderboards.

## Declaration

```objectivec
+ (void) submitScore:(NSInteger) score context:(NSUInteger) context player:(GKPlayer *) player leaderboardIDs:(NSArray<NSString *> *) leaderboardIDs completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `score`: The score that the player earns.
- `context`: An integer value that your game uses.
- `player`: The player who earns the score.
- `leaderboardIDs`: The IDs that Game Center uses for the leaderboards to submit the score to.
- `completionHandler`: A block that GameKit calls when this method adds the score.

  The block receives the following parameters:

  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Creating recurring leaderboards](../creating-recurring-leaderboards.md)
- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## See Also

### Submitting Scores

- [submitScore:context:player:completionHandler:](submitscore%28__context_player_completionhandler_%29.md): Submits a score to the leaderboard.
