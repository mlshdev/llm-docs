> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboardset/loadleaderboardsets(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboardset/loadleaderboardsets(completionhandler:))

# loadLeaderboardSets(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Loads all of the leaderboard sets you configure for your game.

## Declaration

```swift
class func loadLeaderboardSets(completionHandler: (@Sendable ([GKLeaderboardSet]?, (any Error)?) -> Void)? = nil)
```

```swift
class func loadLeaderboardSets() async throws -> [GKLeaderboardSet]
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method completes the request.

  The block receives the following parameters:

  - ***leaderboardSets***: The leaderboard sets in your game.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## See Also

### Loading Leaderboard Sets

- [loadImage(completionHandler:)](loadimage%28completionhandler_%29.md): Loads the localized image that you associate with the leaderboard set.
- [loadLeaderboards(handler:)](loadleaderboards%28handler_%29.md): Loads the leaderboards in the leaderboard set.
- [loadLeaderboards(completionHandler:)](loadleaderboards%28completionhandler_%29.md): Deprecated. Loads all of the leaderboards for the current leaderboard set.

# loadLeaderboardSetsWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Loads all of the leaderboard sets you configure for your game.

## Declaration

```objectivec
+ (void) loadLeaderboardSetsWithCompletionHandler:(void (^)(NSArray<GKLeaderboardSet *> *leaderboardSets, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method completes the request.

  The block receives the following parameters:

  - ***leaderboardSets***: The leaderboard sets in your game.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## See Also

### Loading Leaderboard Sets

- [loadImageWithCompletionHandler:](loadimage%28completionhandler_%29.md): Loads the localized image that you associate with the leaderboard set.
- [loadLeaderboardsWithHandler:](loadleaderboards%28handler_%29.md): Loads the leaderboards in the leaderboard set.
- [loadLeaderboardsWithCompletionHandler:](loadleaderboards%28completionhandler_%29.md): Deprecated. Loads all of the leaderboards for the current leaderboard set.
