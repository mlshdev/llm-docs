> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/loadchallengablefriends(completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/loadchallengablefriends(completionhandler:))

# loadChallengableFriends(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Loads players to whom the local player can issue a challenge.

## Declaration

```swift
func loadChallengableFriends(completionHandler: (@Sendable ([GKPlayer]?, (any Error)?) -> Void)? = nil)
```

```swift
func loadChallengableFriends() async throws -> [GKPlayer]
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method loads players the local player can challenge.

  The block receives the following parameters:

  - **`challengableFriends`**: Players to whom the local player can issue a challenge. The local player can issue a challenge to a player with a friend level of FL1 or FL2.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes. Possible errors include networking issues or an uninitialized player.

## See Also

### Accessing Friends and Recents

- [loadFriendsAuthorizationStatus(\_:)](loadfriendsauthorizationstatus%28__%29.md): Returns whether the player authorizes your game to access their friends list.
- [GKFriendsAuthorizationStatus](../gkfriendsauthorizationstatus.md): Constants that indicate if the local player grants access to their friends list.
- [loadFriends(\_:)](loadfriends%28__%29.md): Loads the local player’s friends list if the local player and their friends grant access.
- [loadFriends(identifiedBy:completionHandler:)](loadfriends%28identifiedby_completionhandler_%29.md): Loads the player’s friends list, scoped by the identifiers, if the player and their friends grant access.
- [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md): A message that tells people why the app needs access to their Game Center friends list.
- [loadRecentPlayers(completionHandler:)](loadrecentplayers%28completionhandler_%29.md): Loads players from the friends list or players that recently participated in a game with the local player.

# loadChallengableFriendsWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Loads players to whom the local player can issue a challenge.

## Declaration

```objectivec
- (void) loadChallengableFriendsWithCompletionHandler:(void (^)(NSArray<GKPlayer *> *challengableFriends, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method loads players the local player can challenge.

  The block receives the following parameters:

  - **`challengableFriends`**: Players to whom the local player can issue a challenge. The local player can issue a challenge to a player with a friend level of FL1 or FL2.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes. Possible errors include networking issues or an uninitialized player.

## See Also

### Accessing Friends and Recents

- [loadFriendsAuthorizationStatus:](loadfriendsauthorizationstatus%28__%29.md): Returns whether the player authorizes your game to access their friends list.
- [GKFriendsAuthorizationStatus](../gkfriendsauthorizationstatus.md): Constants that indicate if the local player grants access to their friends list.
- [loadFriends:](loadfriends%28__%29.md): Loads the local player’s friends list if the local player and their friends grant access.
- [loadFriendsWithIdentifiers:completionHandler:](loadfriends%28identifiedby_completionhandler_%29.md): Loads the player’s friends list, scoped by the identifiers, if the player and their friends grant access.
- [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md): A message that tells people why the app needs access to their Game Center friends list.
- [loadRecentPlayersWithCompletionHandler:](loadrecentplayers%28completionhandler_%29.md): Loads players from the friends list or players that recently participated in a game with the local player.
