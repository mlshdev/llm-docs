> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/loadfriends(_:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/loadfriends(_:))

# loadFriends(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

Loads the local player’s friends list if the local player and their friends grant access.

## Declaration

```swift
func loadFriends(_ completionHandler: @escaping @Sendable ([GKPlayer]?, (any Error)?) -> Void)
```

```swift
func loadFriends() async throws -> [GKPlayer]
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **`friends`**: The player’s friends who also grant your game access to their friends.

  The local player and their friends authorization status must be [GKFriendsAuthorizationStatus.authorized](../gkfriendsauthorizationstatus/authorized.md).

  The local player and their friends must use a version of your game with the same bundle ID.

  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Protecting the player’s privacy using scoped identifiers](../protecting-the-player-s-privacy-using-scoped-identifiers.md)
- [Connecting players with their friends in your game](../connecting-players-with-their-friends-in-your-game.md)

<a id="Discussion"></a>

## Discussion

If the [loadFriendsAuthorizationStatus(\_:)](loadfriendsauthorizationstatus%28__%29.md) method returns [GKFriendsAuthorizationStatus.notDetermined](../gkfriendsauthorizationstatus/notdetermined.md), GameKit presents a prompt to the local player requesting access to their friends that may pause your game. GameKit displays the localized reason that you provide for the [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md) key in the information property list.

If you loaded friends who no longer appear in the `friends` parameter of the completion handler, remove the data for those friends from your game because they no longer grant your game access to that data.

## See Also

### Accessing Friends and Recents

- [loadFriendsAuthorizationStatus(\_:)](loadfriendsauthorizationstatus%28__%29.md): Returns whether the player authorizes your game to access their friends list.
- [GKFriendsAuthorizationStatus](../gkfriendsauthorizationstatus.md): Constants that indicate if the local player grants access to their friends list.
- [loadFriends(identifiedBy:completionHandler:)](loadfriends%28identifiedby_completionhandler_%29.md): Loads the player’s friends list, scoped by the identifiers, if the player and their friends grant access.
- [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md): A message that tells people why the app needs access to their Game Center friends list.
- [loadChallengableFriends(completionHandler:)](loadchallengablefriends%28completionhandler_%29.md): Loads players to whom the local player can issue a challenge.
- [loadRecentPlayers(completionHandler:)](loadrecentplayers%28completionhandler_%29.md): Loads players from the friends list or players that recently participated in a game with the local player.

# loadFriends: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

Loads the local player’s friends list if the local player and their friends grant access.

## Declaration

```objectivec
- (void) loadFriends:(void (^)(NSArray<GKPlayer *> *friends, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **`friends`**: The player’s friends who also grant your game access to their friends.

  The local player and their friends authorization status must be [GKFriendsAuthorizationStatusAuthorized](../gkfriendsauthorizationstatus/authorized.md).

  The local player and their friends must use a version of your game with the same bundle ID.

  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Protecting the player’s privacy using scoped identifiers](../protecting-the-player-s-privacy-using-scoped-identifiers.md)
- [Connecting players with their friends in your game](../connecting-players-with-their-friends-in-your-game.md)

<a id="Discussion"></a>

## Discussion

If the [loadFriendsAuthorizationStatus:](loadfriendsauthorizationstatus%28__%29.md) method returns [GKFriendsAuthorizationStatusNotDetermined](../gkfriendsauthorizationstatus/notdetermined.md), GameKit presents a prompt to the local player requesting access to their friends that may pause your game. GameKit displays the localized reason that you provide for the [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md) key in the information property list.

If you loaded friends who no longer appear in the `friends` parameter of the completion handler, remove the data for those friends from your game because they no longer grant your game access to that data.

## See Also

### Accessing Friends and Recents

- [loadFriendsAuthorizationStatus:](loadfriendsauthorizationstatus%28__%29.md): Returns whether the player authorizes your game to access their friends list.
- [GKFriendsAuthorizationStatus](../gkfriendsauthorizationstatus.md): Constants that indicate if the local player grants access to their friends list.
- [loadFriendsWithIdentifiers:completionHandler:](loadfriends%28identifiedby_completionhandler_%29.md): Loads the player’s friends list, scoped by the identifiers, if the player and their friends grant access.
- [NSGKFriendListUsageDescription](../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md): A message that tells people why the app needs access to their Game Center friends list.
- [loadChallengableFriendsWithCompletionHandler:](loadchallengablefriends%28completionhandler_%29.md): Loads players to whom the local player can issue a challenge.
- [loadRecentPlayersWithCompletionHandler:](loadrecentplayers%28completionhandler_%29.md): Loads players from the friends list or players that recently participated in a game with the local player.
