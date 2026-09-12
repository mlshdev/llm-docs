> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/loadleaderboards(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboard/loadleaderboards(completionhandler:))

# loadLeaderboards(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 14.0) · iPadOS 6.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Loads a list of leaderboards from Game Center.

> Use the [loadLeaderboards(IDs:completionHandler:)](loadleaderboards%28ids_completionhandler_%29.md) method instead.

## Declaration

```swift
class func loadLeaderboards(completionHandler: (@Sendable ([GKLeaderboard]?, (any Error)?) -> Void)? = nil)
```

```swift
class func loadLeaderboards() async throws -> [GKLeaderboard]
```

## Parameters

- `completionHandler`: A block to call when loading the leaderboards.

  The block receives the following parameters:

  - ***leaderboards***: An array of `GKLeaderboard` objects that provides the leaderboards for your game. If an error occurs, this value may be non-`nil`. In this case, the array holds whatever data GameKit downloads before the error occurs.
  - ***error***: If an error occurs, this error object describes the error. If the operation completes successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

Use this class method to retrieve the list of leaderboards you configure in App Store Connect. Use the properties of each leaderboard object, especially the [category](category.md) and [title](title.md) properties, to learn more about the leaderboard.

```objc
- (void) loadLeaderboardInfo
{
    [GKLeaderboard loadLeaderboardsWithCompletionHandler:^(NSArray *leaderboards, NSError *error) {
        self.leaderboards = leaderboards;
     }];
}
```

When you call this method, it creates a new background task to handle the request. The method then returns control to your game. When the task is complete, GameKit calls your completion handler on the main thread.

## See Also

### Deprecated methods

- [setDefault(\_:withCompletionHandler:)](setdefault%28__withcompletionhandler_%29.md): Deprecated. Sets the default leaderboard for the local player.
- [loadCategories(completionHandler:)](loadcategories%28completionhandler_%29.md): Deprecated. Loads the list of leaderboard categories along with their corresponding localized titles.
- [loadScores(completionHandler:)](loadscores%28completionhandler_%29.md): Deprecated. Retrieves a set of scores from Game Center.

# loadLeaderboardsWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 14.0) · iPadOS 6.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Loads a list of leaderboards from Game Center.

> Use the [loadLeaderboardsWithIDs:completionHandler:](loadleaderboards%28ids_completionhandler_%29.md) method instead.

## Declaration

```objectivec
+ (void) loadLeaderboardsWithCompletionHandler:(void (^)(NSArray<GKLeaderboard *> *leaderboards, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block to call when loading the leaderboards.

  The block receives the following parameters:

  - ***leaderboards***: An array of `GKLeaderboard` objects that provides the leaderboards for your game. If an error occurs, this value may be non-`nil`. In this case, the array holds whatever data GameKit downloads before the error occurs.
  - ***error***: If an error occurs, this error object describes the error. If the operation completes successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

Use this class method to retrieve the list of leaderboards you configure in App Store Connect. Use the properties of each leaderboard object, especially the [category](category.md) and [title](title.md) properties, to learn more about the leaderboard.

```objc
- (void) loadLeaderboardInfo
{
    [GKLeaderboard loadLeaderboardsWithCompletionHandler:^(NSArray *leaderboards, NSError *error) {
        self.leaderboards = leaderboards;
     }];
}
```

When you call this method, it creates a new background task to handle the request. The method then returns control to your game. When the task is complete, GameKit calls your completion handler on the main thread.

## See Also

### Deprecated methods

- [setDefaultLeaderboard:withCompletionHandler:](setdefault%28__withcompletionhandler_%29.md): Deprecated. Sets the default leaderboard for the local player.
- [loadCategoriesWithCompletionHandler:](loadcategories%28completionhandler_%29.md): Deprecated. Loads the list of leaderboard categories along with their corresponding localized titles.
- [loadScoresWithCompletionHandler:](loadscores%28completionhandler_%29.md): Deprecated. Retrieves a set of scores from Game Center.
