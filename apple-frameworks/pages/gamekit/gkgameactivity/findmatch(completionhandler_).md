> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/findmatch(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/findmatch(completionhandler:))

# findMatch(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Use information from the activity to find matches for the local player.

## Declaration

```swift
func findMatch(completionHandler: @escaping @Sendable (GKMatch?, (any Error)?) -> Void)
```

```swift
func findMatch() async throws -> GKMatch
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

<a id="discussion"></a>

## Discussion

GameKit creates a classic match making request with the activity’s party code and other information, and returns the match object in the completion handler or any error that occurred. An error occurs if this activity doesn’t support party code, or has an unsupported range of players, which is used to be configured as match request’s `minPlayers` and `maxPlayers`.

## See Also

### Performing a matchmaking request

- [findPlayersForHostedMatch(completionHandler:)](findplayersforhostedmatch%28completionhandler_%29.md): Use information from the activity to find server hosted players for the local player.

# findMatchWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Use information from the activity to find matches for the local player.

## Declaration

```objectivec
- (void) findMatchWithCompletionHandler:(void (^)(GKMatch *match, NSError *error)) completionHandler;
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

<a id="discussion"></a>

## Discussion

GameKit creates a classic match making request with the activity’s party code and other information, and returns the match object in the completion handler or any error that occurred. An error occurs if this activity doesn’t support party code, or has an unsupported range of players, which is used to be configured as match request’s `minPlayers` and `maxPlayers`.

## See Also

### Performing a matchmaking request

- [findPlayersForHostedMatchWithCompletionHandler:](findplayersforhostedmatch%28completionhandler_%29.md): Use information from the activity to find server hosted players for the local player.
