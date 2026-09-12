> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/loadcategories(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboard/loadcategories(completionhandler:))

# loadCategories(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ (deprecated in 6.0) · iPadOS 4.1+ (deprecated in 6.0) · Mac Catalyst 4.1+ (deprecated in 6.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Loads the list of leaderboard categories along with their corresponding localized titles.

> Use the [loadLeaderboards(completionHandler:)](loadleaderboards%28completionhandler_%29.md) method instead.

## Declaration

```swift
class func loadCategories(completionHandler: (@Sendable ([String]?, [String]?, (any Error)?) -> Void)? = nil)
```

```swift
class func loadCategories() async throws -> ([String], [String])
```

## Parameters

- `completionHandler`: A block to call after retrieving the categories from the server.

  The block receives the following parameters:

  - ***categories***: An array of `NSString` objects that provides the categories to your game. If an error occurs, this value may be non-`nil`. In this case, the array holds whatever data GameKit downloads before the error occurs.
  - ***titles***: An array of `NSString` objects that provides localized titles for each category. If an error occurs, this value may be non-`nil`. In this case, the array holds whatever data GameKit downloads before the error occurs.
  - ***error***: If an error occurs, this error object describes the error. If the operation completes successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

You use this class method to retrieve the category identifiers and titles you configure for your leaderboards in App Store Connect. To create a leaderboard query that targets a particular category, set the [category](category.md) property to one of the strings that this method returns.

When you call this method, it creates a new background task to handle the request. The method then returns control to your game. When the task is complete, GameKit calls your completion handler on the main thread.

## See Also

### Deprecated methods

- [setDefault(\_:withCompletionHandler:)](setdefault%28__withcompletionhandler_%29.md): Deprecated. Sets the default leaderboard for the local player.
- [loadLeaderboards(completionHandler:)](loadleaderboards%28completionhandler_%29.md): Deprecated. Loads a list of leaderboards from Game Center.
- [loadScores(completionHandler:)](loadscores%28completionhandler_%29.md): Deprecated. Retrieves a set of scores from Game Center.

# loadCategoriesWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ (deprecated in 6.0) · iPadOS 4.1+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.9) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Loads the list of leaderboard categories along with their corresponding localized titles.

> Use the [loadLeaderboardsWithCompletionHandler:](loadleaderboards%28completionhandler_%29.md) method instead.

## Declaration

```objectivec
+ (void) loadCategoriesWithCompletionHandler:(void (^)(NSArray<NSString *> *categories, NSArray<NSString *> *titles, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block to call after retrieving the categories from the server.

  The block receives the following parameters:

  - ***categories***: An array of `NSString` objects that provides the categories to your game. If an error occurs, this value may be non-`nil`. In this case, the array holds whatever data GameKit downloads before the error occurs.
  - ***titles***: An array of `NSString` objects that provides localized titles for each category. If an error occurs, this value may be non-`nil`. In this case, the array holds whatever data GameKit downloads before the error occurs.
  - ***error***: If an error occurs, this error object describes the error. If the operation completes successfully, the value is `nil`.

<a id="Discussion"></a>

## Discussion

You use this class method to retrieve the category identifiers and titles you configure for your leaderboards in App Store Connect. To create a leaderboard query that targets a particular category, set the [category](category.md) property to one of the strings that this method returns.

When you call this method, it creates a new background task to handle the request. The method then returns control to your game. When the task is complete, GameKit calls your completion handler on the main thread.

## See Also

### Deprecated methods

- [setDefaultLeaderboard:withCompletionHandler:](setdefault%28__withcompletionhandler_%29.md): Deprecated. Sets the default leaderboard for the local player.
- [loadLeaderboardsWithCompletionHandler:](loadleaderboards%28completionhandler_%29.md): Deprecated. Loads a list of leaderboards from Game Center.
- [loadScoresWithCompletionHandler:](loadscores%28completionhandler_%29.md): Deprecated. Retrieves a set of scores from Game Center.
