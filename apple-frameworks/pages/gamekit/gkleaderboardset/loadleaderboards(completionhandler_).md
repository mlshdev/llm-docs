> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboardset/loadleaderboards(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboardset/loadleaderboards(completionhandler:))

# loadLeaderboards(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 14.0) · iPadOS 7.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Loads all of the leaderboards for the current leaderboard set.

> Use [loadLeaderboards(handler:)](loadleaderboards%28handler_%29.md) instead.

## Declaration

```swift
func loadLeaderboards(completionHandler: (@Sendable ([GKLeaderboard]?, (any Error)?) -> Void)? = nil)
```

```swift
func loadLeaderboards() async throws -> [GKLeaderboard]
```

## Parameters

- `completionHandler`: A block that this method calls when it loads the leaderboards.

  The block receives the following parameters:

  - ***leaderboards***: An array of `GKLeaderboard` objects that provides the leaderboards for your game.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## See Also

### Loading Leaderboard Sets

- [loadImage(completionHandler:)](loadimage%28completionhandler_%29.md): Loads the localized image that you associate with the leaderboard set.
- [loadLeaderboardSets(completionHandler:)](loadleaderboardsets%28completionhandler_%29.md): Loads all of the leaderboard sets you configure for your game.
- [loadLeaderboards(handler:)](loadleaderboards%28handler_%29.md): Loads the leaderboards in the leaderboard set.

# loadLeaderboardsWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 14.0) · iPadOS 7.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Loads all of the leaderboards for the current leaderboard set.

> Use [loadLeaderboardsWithHandler:](loadleaderboards%28handler_%29.md) instead.

## Declaration

```objectivec
- (void) loadLeaderboardsWithCompletionHandler:(void (^)(NSArray<GKLeaderboard *> *leaderboards, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that this method calls when it loads the leaderboards.

  The block receives the following parameters:

  - ***leaderboards***: An array of `GKLeaderboard` objects that provides the leaderboards for your game.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## See Also

### Loading Leaderboard Sets

- [loadImageWithCompletionHandler:](loadimage%28completionhandler_%29.md): Loads the localized image that you associate with the leaderboard set.
- [loadLeaderboardSetsWithCompletionHandler:](loadleaderboardsets%28completionhandler_%29.md): Loads all of the leaderboard sets you configure for your game.
- [loadLeaderboardsWithHandler:](loadleaderboards%28handler_%29.md): Loads the leaderboards in the leaderboard set.
