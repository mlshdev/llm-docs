> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/loadrecentplayers(completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/loadrecentplayers(completionhandler:))

# loadRecentPlayers(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Loads players from the friends list or players that recently participated in a game with the local player.

## Declaration

```swift
func loadRecentPlayers(completionHandler: (@Sendable ([GKPlayer]?, (any Error)?) -> Void)? = nil)
```

```swift
func loadRecentPlayers() async throws -> [GKPlayer]
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **`recentPlayers`**: Players from the friends list or players that recently participated in a game with the local player.
  - **`error`**: Describes an error if it occurs, or `nil` if `t`he operation completes. Possible errors include network and authentication issues.

## See Also

### Accessing Friends and Recents

- [loadFriendsAuthorizationStatus(\_:)](loadfriendsauthorizationstatus%28__%29.md): Returns whether the player authorizes your game to access their friends list.
- [GKFriendsAuthorizationStatus](../gkfriendsauthorizationstatus.md): Constants that indicate if the local player grants access to their friends list.
- [loadFriends(\_:)](loadfriends%28__%29.md): Loads the local player’s friends list if the local player and their friends grant access.
- [loadFriends(identifiedBy:completionHandler:)](loadfriends%28identifiedby_completionhandler_%29.md): Loads the player’s friends list, scoped by the identifiers, if the player and their friends grant access.
- [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md): A message that tells people why the app needs access to their Game Center friends list.
- [loadChallengableFriends(completionHandler:)](loadchallengablefriends%28completionhandler_%29.md): Loads players to whom the local player can issue a challenge.

# loadRecentPlayersWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Loads players from the friends list or players that recently participated in a game with the local player.

## Declaration

```objectivec
- (void) loadRecentPlayersWithCompletionHandler:(void (^)(NSArray<GKPlayer *> *recentPlayers, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **`recentPlayers`**: Players from the friends list or players that recently participated in a game with the local player.
  - **`error`**: Describes an error if it occurs, or `nil` if `t`he operation completes. Possible errors include network and authentication issues.

## See Also

### Accessing Friends and Recents

- [loadFriendsAuthorizationStatus:](loadfriendsauthorizationstatus%28__%29.md): Returns whether the player authorizes your game to access their friends list.
- [GKFriendsAuthorizationStatus](../gkfriendsauthorizationstatus.md): Constants that indicate if the local player grants access to their friends list.
- [loadFriends:](loadfriends%28__%29.md): Loads the local player’s friends list if the local player and their friends grant access.
- [loadFriendsWithIdentifiers:completionHandler:](loadfriends%28identifiedby_completionhandler_%29.md): Loads the player’s friends list, scoped by the identifiers, if the player and their friends grant access.
- [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md): A message that tells people why the app needs access to their Game Center friends list.
- [loadChallengableFriendsWithCompletionHandler:](loadchallengablefriends%28completionhandler_%29.md): Loads players to whom the local player can issue a challenge.
