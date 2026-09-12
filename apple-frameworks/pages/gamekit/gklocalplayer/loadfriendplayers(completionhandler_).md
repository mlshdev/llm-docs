> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/loadfriendplayers(completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/loadfriendplayers(completionhandler:))

# loadFriendPlayers(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Retrieves a list of player identifiers for the local player’s friends.

> Use [loadFriends(\_:)](loadfriends%28__%29.md) instead.

## Declaration

```swift
func loadFriendPlayers(completionHandler: (@Sendable ([GKPlayer]?, (any Error)?) -> Void)? = nil)
```

```swift
func loadFriendPlayers() async throws -> [GKPlayer]
```

## Parameters

- `completionHandler`: A block to call when the request completes.

  The block receives the following parameters:

  - **friendPlayers**: An array of [GKPlayer](../gkplayer.md) objects containing the player identifiers for the players who are friends of the local player. If an error occurs, this value can be non-`nil`. In that case, the array contains the data that GameKit downloads before the error occurs.
  - **error**: If an error occurs, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

The code below shows an example of how to load a player’s friends. Create your own method to save information about the found players.

```objc
- (void) retrieveFriends
{
   GKLocalPlayer *lp = [GKLocalPlayer localPlayer];
   if (lp.authenticated)
   {
      [lp loadFriendPlayersWithCompletionHandler:^(NSArray *friendPlayers, NSError *error) {
         if (friendPlayers != nil)
         {
            [self loadPlayerData: friendPlayers];
         }
      }];
   }
}
```

## See Also

### Deprecated methods

- [authenticate(completionHandler:)](authenticate%28completionhandler_%29.md): Deprecated. Initializes the local player on the device.
- [generateIdentityVerificationSignature(completionHandler:)](generateidentityverificationsignature%28completionhandler_%29.md): Deprecated. Generates a signature so that a third-party server can authenticate the local player.
- [loadDefaultLeaderboardCategoryID(completionHandler:)](loaddefaultleaderboardcategoryid%28completionhandler_%29.md): Deprecated. Loads the category identifier for the local player’s default leaderboard.
- [loadFriendsObsoleted(completionHandler:)](loadfriendsobsoleted%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [setDefaultLeaderboardCategoryID(\_:completionHandler:)](setdefaultleaderboardcategoryid%28__completionhandler_%29.md): Deprecated. Sets the category identifier for the local player’s default leaderboard.

# loadFriendPlayersWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Retrieves a list of player identifiers for the local player’s friends.

> Use [loadFriends:](loadfriends%28__%29.md) instead.

## Declaration

```objectivec
- (void) loadFriendPlayersWithCompletionHandler:(void (^)(NSArray<GKPlayer *> *friendPlayers, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block to call when the request completes.

  The block receives the following parameters:

  - **friendPlayers**: An array of [GKPlayer](../gkplayer.md) objects containing the player identifiers for the players who are friends of the local player. If an error occurs, this value can be non-`nil`. In that case, the array contains the data that GameKit downloads before the error occurs.
  - **error**: If an error occurs, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

The code below shows an example of how to load a player’s friends. Create your own method to save information about the found players.

```objc
- (void) retrieveFriends
{
   GKLocalPlayer *lp = [GKLocalPlayer localPlayer];
   if (lp.authenticated)
   {
      [lp loadFriendPlayersWithCompletionHandler:^(NSArray *friendPlayers, NSError *error) {
         if (friendPlayers != nil)
         {
            [self loadPlayerData: friendPlayers];
         }
      }];
   }
}
```

## See Also

### Deprecated methods

- [authenticateWithCompletionHandler:](authenticate%28completionhandler_%29.md): Deprecated. Initializes the local player on the device.
- [generateIdentityVerificationSignatureWithCompletionHandler:](generateidentityverificationsignature%28completionhandler_%29.md): Deprecated. Generates a signature so that a third-party server can authenticate the local player.
- [loadDefaultLeaderboardCategoryIDWithCompletionHandler:](loaddefaultleaderboardcategoryid%28completionhandler_%29.md): Deprecated. Loads the category identifier for the local player’s default leaderboard.
- [loadFriendsWithCompletionHandler:](loadfriendsobsoleted%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [setDefaultLeaderboardCategoryID:completionHandler:](setdefaultleaderboardcategoryid%28__completionhandler_%29.md): Deprecated. Sets the category identifier for the local player’s default leaderboard.
