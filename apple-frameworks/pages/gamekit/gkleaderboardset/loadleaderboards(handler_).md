> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboardset/loadleaderboards(handler:)](https://developer.apple.com/documentation/gamekit/gkleaderboardset/loadleaderboards(handler:))

# loadLeaderboards(handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Loads the leaderboards in the leaderboard set.

## Declaration

```swift
func loadLeaderboards(handler: @escaping ([GKLeaderboard]?, (any Error)?) -> Void)
```

## Parameters

- `handler`: A block that GameKit calls when this method completes the request.

  The block receives the following parameters:

  - ***leaderboards***: The leaderboards in the leaderboard set.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## See Also

### Loading Leaderboard Sets

- [loadImage(completionHandler:)](loadimage%28completionhandler_%29.md): Loads the localized image that you associate with the leaderboard set.
- [loadLeaderboardSets(completionHandler:)](loadleaderboardsets%28completionhandler_%29.md): Loads all of the leaderboard sets you configure for your game.
- [loadLeaderboards(completionHandler:)](loadleaderboards%28completionhandler_%29.md): Deprecated. Loads all of the leaderboards for the current leaderboard set.

# loadLeaderboardsWithHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Loads the leaderboards in the leaderboard set.

## Declaration

```objectivec
- (void) loadLeaderboardsWithHandler:(void (^)(NSArray<GKLeaderboard *> *leaderboards, NSError *error)) handler;
```

## Parameters

- `handler`: A block that GameKit calls when this method completes the request.

  The block receives the following parameters:

  - ***leaderboards***: The leaderboards in the leaderboard set.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## See Also

### Loading Leaderboard Sets

- [loadImageWithCompletionHandler:](loadimage%28completionhandler_%29.md): Loads the localized image that you associate with the leaderboard set.
- [loadLeaderboardSetsWithCompletionHandler:](loadleaderboardsets%28completionhandler_%29.md): Loads all of the leaderboard sets you configure for your game.
- [loadLeaderboardsWithCompletionHandler:](loadleaderboards%28completionhandler_%29.md): Deprecated. Loads all of the leaderboards for the current leaderboard set.
