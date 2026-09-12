> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/loadfriendsauthorizationstatus(_:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/loadfriendsauthorizationstatus(_:))

# loadFriendsAuthorizationStatus(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

Returns whether the player authorizes your game to access their friends list.

## Declaration

```swift
func loadFriendsAuthorizationStatus(_ completionHandler: @escaping @Sendable (GKFriendsAuthorizationStatus, (any Error)?) -> Void)
```

```swift
func loadFriendsAuthorizationStatus() async throws -> GKFriendsAuthorizationStatus
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **`authorizationStatus`**: A status that indicates if the player authorized or denied your game access to their friends list.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

  An error occurs if you don’t add the [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md) key to the information property list file.

## Mentioned In

- [Connecting players with their friends in your game](../connecting-players-with-their-friends-in-your-game.md)

## See Also

### Accessing Friends and Recents

- [GKFriendsAuthorizationStatus](../gkfriendsauthorizationstatus.md): Constants that indicate if the local player grants access to their friends list.
- [loadFriends(\_:)](loadfriends%28__%29.md): Loads the local player’s friends list if the local player and their friends grant access.
- [loadFriends(identifiedBy:completionHandler:)](loadfriends%28identifiedby_completionhandler_%29.md): Loads the player’s friends list, scoped by the identifiers, if the player and their friends grant access.
- [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md): A message that tells people why the app needs access to their Game Center friends list.
- [loadChallengableFriends(completionHandler:)](loadchallengablefriends%28completionhandler_%29.md): Loads players to whom the local player can issue a challenge.
- [loadRecentPlayers(completionHandler:)](loadrecentplayers%28completionhandler_%29.md): Loads players from the friends list or players that recently participated in a game with the local player.

# loadFriendsAuthorizationStatus: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

Returns whether the player authorizes your game to access their friends list.

## Declaration

```objectivec
- (void) loadFriendsAuthorizationStatus:(void (^)(GKFriendsAuthorizationStatus authorizationStatus, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **`authorizationStatus`**: A status that indicates if the player authorized or denied your game access to their friends list.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

  An error occurs if you don’t add the [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md) key to the information property list file.

## Mentioned In

- [Connecting players with their friends in your game](../connecting-players-with-their-friends-in-your-game.md)

## See Also

### Accessing Friends and Recents

- [GKFriendsAuthorizationStatus](../gkfriendsauthorizationstatus.md): Constants that indicate if the local player grants access to their friends list.
- [loadFriends:](loadfriends%28__%29.md): Loads the local player’s friends list if the local player and their friends grant access.
- [loadFriendsWithIdentifiers:completionHandler:](loadfriends%28identifiedby_completionhandler_%29.md): Loads the player’s friends list, scoped by the identifiers, if the player and their friends grant access.
- [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md): A message that tells people why the app needs access to their Game Center friends list.
- [loadChallengableFriendsWithCompletionHandler:](loadchallengablefriends%28completionhandler_%29.md): Loads players to whom the local player can issue a challenge.
- [loadRecentPlayersWithCompletionHandler:](loadrecentplayers%28completionhandler_%29.md): Loads players from the friends list or players that recently participated in a game with the local player.
