> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/setdefaultleaderboardidentifier(_:completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/setdefaultleaderboardidentifier(_:completionhandler:))

# setDefaultLeaderboardIdentifier(\_:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.2) · iPadOS 7.0+ (deprecated in 26.2) · Mac Catalyst 13.1+ (deprecated in 26.2) · macOS 10.10+ (deprecated in 26.2) · tvOS 9.0+ (deprecated in 26.2) · visionOS 1.0+ (deprecated in 26.2) · watchOS 3.0+ (deprecated in 26.2)

Sets the local player’s default leaderboard.

> No longer supported

## Declaration

```swift
func setDefaultLeaderboardIdentifier(_ leaderboardIdentifier: String, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setDefaultLeaderboardIdentifier(_ leaderboardIdentifier: String) async throws
```

## Parameters

- `leaderboardIdentifier`: The identifier of the leaderboard.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

<a id="Discussion"></a>

## Discussion

Until you change the default leaderboard for a player, it is the same as the default leaderboard for your game that you set in App Store Connect.

## See Also

### Working with Leaderboards

- [loadDefaultLeaderboardIdentifier(completionHandler:)](loaddefaultleaderboardidentifier%28completionhandler_%29.md): Deprecated. Loads the identifier for the local player’s default leaderboard.

# setDefaultLeaderboardIdentifier:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.2) · iPadOS 7.0+ (deprecated in 26.2) · Mac Catalyst 13.1+ (deprecated in 26.2) · macOS 10.10+ (deprecated in 26.2) · tvOS 9.0+ (deprecated in 26.2) · visionOS 1.0+ (deprecated in 26.2) · watchOS 3.0+ (deprecated in 26.2)

Sets the local player’s default leaderboard.

> No longer supported

## Declaration

```objectivec
- (void) setDefaultLeaderboardIdentifier:(NSString *) leaderboardIdentifier completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `leaderboardIdentifier`: The identifier of the leaderboard.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

<a id="Discussion"></a>

## Discussion

Until you change the default leaderboard for a player, it is the same as the default leaderboard for your game that you set in App Store Connect.

## See Also

### Working with Leaderboards

- [loadDefaultLeaderboardIdentifierWithCompletionHandler:](loaddefaultleaderboardidentifier%28completionhandler_%29.md): Deprecated. Loads the identifier for the local player’s default leaderboard.
