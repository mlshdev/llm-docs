> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/loaddefaultleaderboardidentifier(completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/loaddefaultleaderboardidentifier(completionhandler:))

# loadDefaultLeaderboardIdentifier(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.2) · iPadOS 7.0+ (deprecated in 26.2) · Mac Catalyst 13.1+ (deprecated in 26.2) · macOS 10.10+ (deprecated in 26.2) · tvOS 9.0+ (deprecated in 26.2) · visionOS 1.0+ (deprecated in 26.2) · watchOS 3.0+ (deprecated in 26.2)

Loads the identifier for the local player’s default leaderboard.

> No longer supported

## Declaration

```swift
func loadDefaultLeaderboardIdentifier(completionHandler: (@Sendable (String?, (any Error)?) -> Void)? = nil)
```

```swift
func loadDefaultLeaderboardIdentifier() async throws -> String
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **categoryID**: The leaderboard ID for the local player’s default leaderboard that you set in App Store Connect.
  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## See Also

### Working with Leaderboards

- [setDefaultLeaderboardIdentifier(\_:completionHandler:)](setdefaultleaderboardidentifier%28__completionhandler_%29.md): Deprecated. Sets the local player’s default leaderboard.

# loadDefaultLeaderboardIdentifierWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.2) · iPadOS 7.0+ (deprecated in 26.2) · Mac Catalyst 13.1+ (deprecated in 26.2) · macOS 10.10+ (deprecated in 26.2) · tvOS 9.0+ (deprecated in 26.2) · visionOS 1.0+ (deprecated in 26.2) · watchOS 3.0+ (deprecated in 26.2)

Loads the identifier for the local player’s default leaderboard.

> No longer supported

## Declaration

```objectivec
- (void) loadDefaultLeaderboardIdentifierWithCompletionHandler:(void (^)(NSString *leaderboardIdentifier, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **categoryID**: The leaderboard ID for the local player’s default leaderboard that you set in App Store Connect.
  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## See Also

### Working with Leaderboards

- [setDefaultLeaderboardIdentifier:completionHandler:](setdefaultleaderboardidentifier%28__completionhandler_%29.md): Deprecated. Sets the local player’s default leaderboard.
