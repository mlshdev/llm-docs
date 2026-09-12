> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/loadscores(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboard/loadscores(completionhandler:))

# loadScores(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 14.0) · iPadOS 4.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Retrieves a set of scores from Game Center.

> Use the [loadEntries(for:timeScope:range:completionHandler:)](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```swift
func loadScores(completionHandler: (([GKScore]?, (any Error)?) -> Void)? = nil)
```

## Parameters

- `completionHandler`: A block to call after retrieving the scores from the server.

  The block receives the following parameters:

  - ***scores***: An array of `GKScore` objects that holds the requested scores. If an error occurs, this value may be non-`nil`. In this case, the array holds whatever score data GameKit retrieves from Game Center before the error occurs.
  - ***error***: If an error occurs, this error object describes the error. If the operation completes successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

When you call this method, it creates a new background task to handle the request. The method then returns control to your game. When the task completes, GameKit calls your completion handler on the main thread.

The code below shows an example leaderboard data query. The method for this query initializes a new leaderboard object and configures the [playerScope](playerscope-swift.property.md), [timeScope](timescope-swift.property.md), and [range](range.md) properties to retrieve the top ten scores for today.

```objc
- (void) retrieveTopTenScores
{
    GKLeaderboard *leaderboardRequest = [[GKLeaderboard alloc] init];
    if (leaderboardRequest != nil)
    {
        leaderboardRequest.playerScope = GKLeaderboardPlayerScopeGlobal;
        leaderboardRequest.timeScope = GKLeaderboardTimeScopeToday;
        leaderboardRequest.identifier = @"Combined.LandMaps"
        leaderboardRequest.range = NSMakeRange(1,10);
        [leaderboardRequest loadScoresWithCompletionHandler: ^(NSArray *scores, NSError *error) {
            if (error != nil)
            {
                // Handle the error.
            }
            if (scores != nil)
            {
                // Process the score information.
            }
            }];
    }
}
```

You can create a leaderboard request that retrieves scores for a specific list of players.

```objc
- (void) receiveMatchBestScores: (GKMatch*) match
{
    GKLeaderboard *leaderboardRequest = [[GKLeaderboard alloc] initWithPlayers: match.players];
        leaderboardRequest.timeScope = GKLeaderboardTimeScopeAllTime;
        leaderboardRequest.identifier = @"Combined.LandMaps"
        leaderboardRequest.range = NSMakeRange(1,10);
    if (query != nil)
    {
        [query loadScoresWithCompletionHandler: ^(NSArray *scores, NSError *error) {
            if (error != nil)
            {
                // Handle the error.
            }
            if (scores != nil)
            {
                // Process the score information.
            }
        }];
    }
}
```

You can call this method multiple times. Each call represents a different query against the scores stored in Game Center. If you post multiple load operations using the same leaderboard object, any properties that update by loading scores reflect the most recent query that completes. The order that achievement queries process is arbitrary.

## See Also

### Deprecated methods

- [setDefault(\_:withCompletionHandler:)](setdefault%28__withcompletionhandler_%29.md): Deprecated. Sets the default leaderboard for the local player.
- [loadCategories(completionHandler:)](loadcategories%28completionhandler_%29.md): Deprecated. Loads the list of leaderboard categories along with their corresponding localized titles.
- [loadLeaderboards(completionHandler:)](loadleaderboards%28completionhandler_%29.md): Deprecated. Loads a list of leaderboards from Game Center.

# loadScoresWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 14.0) · iPadOS 4.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Retrieves a set of scores from Game Center.

> Use the [loadEntriesForPlayerScope:timeScope:range:completionHandler:](loadentries%28for_timescope_range_completionhandler_%29.md) method instead.

## Declaration

```objectivec
- (void) loadScoresWithCompletionHandler:(void (^)(NSArray<GKScore *> *scores, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block to call after retrieving the scores from the server.

  The block receives the following parameters:

  - ***scores***: An array of `GKScore` objects that holds the requested scores. If an error occurs, this value may be non-`nil`. In this case, the array holds whatever score data GameKit retrieves from Game Center before the error occurs.
  - ***error***: If an error occurs, this error object describes the error. If the operation completes successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

When you call this method, it creates a new background task to handle the request. The method then returns control to your game. When the task completes, GameKit calls your completion handler on the main thread.

The code below shows an example leaderboard data query. The method for this query initializes a new leaderboard object and configures the [playerScope](playerscope-swift.property.md), [timeScope](timescope-swift.property.md), and [range](range.md) properties to retrieve the top ten scores for today.

```objc
- (void) retrieveTopTenScores
{
    GKLeaderboard *leaderboardRequest = [[GKLeaderboard alloc] init];
    if (leaderboardRequest != nil)
    {
        leaderboardRequest.playerScope = GKLeaderboardPlayerScopeGlobal;
        leaderboardRequest.timeScope = GKLeaderboardTimeScopeToday;
        leaderboardRequest.identifier = @"Combined.LandMaps"
        leaderboardRequest.range = NSMakeRange(1,10);
        [leaderboardRequest loadScoresWithCompletionHandler: ^(NSArray *scores, NSError *error) {
            if (error != nil)
            {
                // Handle the error.
            }
            if (scores != nil)
            {
                // Process the score information.
            }
            }];
    }
}
```

You can create a leaderboard request that retrieves scores for a specific list of players.

```objc
- (void) receiveMatchBestScores: (GKMatch*) match
{
    GKLeaderboard *leaderboardRequest = [[GKLeaderboard alloc] initWithPlayers: match.players];
        leaderboardRequest.timeScope = GKLeaderboardTimeScopeAllTime;
        leaderboardRequest.identifier = @"Combined.LandMaps"
        leaderboardRequest.range = NSMakeRange(1,10);
    if (query != nil)
    {
        [query loadScoresWithCompletionHandler: ^(NSArray *scores, NSError *error) {
            if (error != nil)
            {
                // Handle the error.
            }
            if (scores != nil)
            {
                // Process the score information.
            }
        }];
    }
}
```

You can call this method multiple times. Each call represents a different query against the scores stored in Game Center. If you post multiple load operations using the same leaderboard object, any properties that update by loading scores reflect the most recent query that completes. The order that achievement queries process is arbitrary.

## See Also

### Deprecated methods

- [setDefaultLeaderboard:withCompletionHandler:](setdefault%28__withcompletionhandler_%29.md): Deprecated. Sets the default leaderboard for the local player.
- [loadCategoriesWithCompletionHandler:](loadcategories%28completionhandler_%29.md): Deprecated. Loads the list of leaderboard categories along with their corresponding localized titles.
- [loadLeaderboardsWithCompletionHandler:](loadleaderboards%28completionhandler_%29.md): Deprecated. Loads a list of leaderboards from Game Center.
