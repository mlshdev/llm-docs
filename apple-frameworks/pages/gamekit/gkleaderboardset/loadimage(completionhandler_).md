> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboardset/loadimage(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboardset/loadimage(completionhandler:))

# loadImage(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Loads the localized image that you associate with the leaderboard set.

## Declaration

```swift
func loadImage(completionHandler: (@Sendable (UIImage?, (any Error)?) -> Void)? = nil)
```

```swift
func loadImage() async throws -> UIImage
```

```swift
func loadImage(completionHandler: (@Sendable (NSImage?, (any Error)?) -> Void)? = nil)
```

```swift
func loadImage() async throws -> NSImage
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method completes the request.

  The block receives the following parameters:

  - ***image***: The image for the leaderboard set. If an error occurs, this property may be non-`nil` and contain data GameKit loads before the error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## See Also

### Loading Leaderboard Sets

- [loadLeaderboardSets(completionHandler:)](loadleaderboardsets%28completionhandler_%29.md): Loads all of the leaderboard sets you configure for your game.
- [loadLeaderboards(handler:)](loadleaderboards%28handler_%29.md): Loads the leaderboards in the leaderboard set.
- [loadLeaderboards(completionHandler:)](loadleaderboards%28completionhandler_%29.md): Deprecated. Loads all of the leaderboards for the current leaderboard set.

# loadImageWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Loads the localized image that you associate with the leaderboard set.

## Declaration

```objectivec
- (void) loadImageWithCompletionHandler:(void (^)(UIImage *image, NSError *error)) completionHandler;
```

```objectivec
- (void) loadImageWithCompletionHandler:(void (^)(NSImage *image, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method completes the request.

  The block receives the following parameters:

  - ***image***: The image for the leaderboard set. If an error occurs, this property may be non-`nil` and contain data GameKit loads before the error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## See Also

### Loading Leaderboard Sets

- [loadLeaderboardSetsWithCompletionHandler:](loadleaderboardsets%28completionhandler_%29.md): Loads all of the leaderboard sets you configure for your game.
- [loadLeaderboardsWithHandler:](loadleaderboards%28handler_%29.md): Loads the leaderboards in the leaderboard set.
- [loadLeaderboardsWithCompletionHandler:](loadleaderboards%28completionhandler_%29.md): Deprecated. Loads all of the leaderboards for the current leaderboard set.
