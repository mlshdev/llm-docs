> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/findplayersforhostedmatch(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/findplayersforhostedmatch(completionhandler:))

# findPlayersForHostedMatch(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Use information from the activity to find server hosted players for the local player.

## Declaration

```swift
func findPlayersForHostedMatch(completionHandler: @escaping @Sendable ([GKPlayer]?, (any Error)?) -> Void)
```

```swift
func findPlayersForHostedMatch() async throws -> [GKPlayer]
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

<a id="discussion"></a>

## Discussion

GameKit creates a classic server hosted match making request with the activity’s party code and other information, and returns the players in the completion handler or any error that occurred. An error occurs if this activity doesn’t support party code, or has unsupported range of players, which is used to be configured as match request’s `minPlayers` and `maxPlayers`.

## See Also

### Performing a matchmaking request

- [findMatch(completionHandler:)](findmatch%28completionhandler_%29.md): Use information from the activity to find matches for the local player.

# findPlayersForHostedMatchWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Use information from the activity to find server hosted players for the local player.

## Declaration

```objectivec
- (void) findPlayersForHostedMatchWithCompletionHandler:(void (^)(NSArray<GKPlayer *> *players, NSError *error)) completionHandler;
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

<a id="discussion"></a>

## Discussion

GameKit creates a classic server hosted match making request with the activity’s party code and other information, and returns the players in the completion handler or any error that occurred. An error occurs if this activity doesn’t support party code, or has unsupported range of players, which is used to be configured as match request’s `minPlayers` and `maxPlayers`.

## See Also

### Performing a matchmaking request

- [findMatchWithCompletionHandler:](findmatch%28completionhandler_%29.md): Use information from the activity to find matches for the local player.
