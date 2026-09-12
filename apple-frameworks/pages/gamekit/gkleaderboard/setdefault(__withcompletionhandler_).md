> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/setdefault(_:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboard/setdefault(_:withcompletionhandler:))

# setDefault(\_:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 5.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sets the default leaderboard for the local player.

> Use the [setDefaultLeaderboardIdentifier(\_:completionHandler:)](../gklocalplayer/setdefaultleaderboardidentifier%28__completionhandler_%29.md) method instead.

## Declaration

```swift
class func setDefault(_ leaderboardIdentifier: String?, withCompletionHandler completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func setDefault(_ leaderboardIdentifier: String?) async throws
```

## Parameters

- `leaderboardIdentifier`: The named leaderboard that is the new default leaderboard for the local player.
- `completionHandler`: A block to call after retrieving scores from the server.

  The block receives the following parameter:

  - ***error***: If an error occurs, this error object describes the error. If the operation completes successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

GameKit uses the default leaderboard whenever your game uses a [GKScore](../gkscore.md) object to report a score to Game Center without explicitly setting the score object’s [category](../gkscore/category.md) property. You normally set the default leaderboard in App Store Connect. However, your game can use this class method to override the default leaderboard that appears for the local player. Game Center stores this information for each player.

When you call this method, it creates a new background task to handle the request. The method then returns control to your game. When the task completes, GameKit calls your completion handler on the main thread.

If an error occurs and it’s a network error, periodically resend the request until it completes.

## See Also

### Deprecated methods

- [loadCategories(completionHandler:)](loadcategories%28completionhandler_%29.md): Deprecated. Loads the list of leaderboard categories along with their corresponding localized titles.
- [loadLeaderboards(completionHandler:)](loadleaderboards%28completionhandler_%29.md): Deprecated. Loads a list of leaderboards from Game Center.
- [loadScores(completionHandler:)](loadscores%28completionhandler_%29.md): Deprecated. Retrieves a set of scores from Game Center.

# setDefaultLeaderboard:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sets the default leaderboard for the local player.

> Use the [setDefaultLeaderboardIdentifier:completionHandler:](../gklocalplayer/setdefaultleaderboardidentifier%28__completionhandler_%29.md) method instead.

## Declaration

```objectivec
+ (void) setDefaultLeaderboard:(NSString *) leaderboardIdentifier withCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `leaderboardIdentifier`: The named leaderboard that is the new default leaderboard for the local player.
- `completionHandler`: A block to call after retrieving scores from the server.

  The block receives the following parameter:

  - ***error***: If an error occurs, this error object describes the error. If the operation completes successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

GameKit uses the default leaderboard whenever your game uses a [GKScore](../gkscore.md) object to report a score to Game Center without explicitly setting the score object’s [category](../gkscore/category.md) property. You normally set the default leaderboard in App Store Connect. However, your game can use this class method to override the default leaderboard that appears for the local player. Game Center stores this information for each player.

When you call this method, it creates a new background task to handle the request. The method then returns control to your game. When the task completes, GameKit calls your completion handler on the main thread.

If an error occurs and it’s a network error, periodically resend the request until it completes.

## See Also

### Deprecated methods

- [loadCategoriesWithCompletionHandler:](loadcategories%28completionhandler_%29.md): Deprecated. Loads the list of leaderboard categories along with their corresponding localized titles.
- [loadLeaderboardsWithCompletionHandler:](loadleaderboards%28completionhandler_%29.md): Deprecated. Loads a list of leaderboards from Game Center.
- [loadScoresWithCompletionHandler:](loadscores%28completionhandler_%29.md): Deprecated. Retrieves a set of scores from Game Center.
