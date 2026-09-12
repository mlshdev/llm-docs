> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/setdefaultleaderboardcategoryid(_:completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/setdefaultleaderboardcategoryid(_:completionhandler:))

# setDefaultLeaderboardCategoryID(\_:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sets the category identifier for the local player’s default leaderboard.

> Use [setDefaultLeaderboardIdentifier(\_:completionHandler:)](setdefaultleaderboardidentifier%28__completionhandler_%29.md) instead.

## Declaration

```swift
func setDefaultLeaderboardCategoryID(_ categoryID: String?, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setDefaultLeaderboardCategoryID(_ categoryID: String?) async throws
```

## Parameters

- `categoryID`: The category ID string for one of your game’s leaderboards.
- `completionHandler`: A block to call when the request completes.

  The block receives the following parameter:

  - **error**: If an error occurs, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

You set the default leaderboard in App Store Connect when you configure your game’s leaderboards. All players normally start with this leaderboard as the default leaderboard. Calling this method changes the default leaderboard only for the local player.

## See Also

### Deprecated methods

- [authenticate(completionHandler:)](authenticate%28completionhandler_%29.md): Deprecated. Initializes the local player on the device.
- [generateIdentityVerificationSignature(completionHandler:)](generateidentityverificationsignature%28completionhandler_%29.md): Deprecated. Generates a signature so that a third-party server can authenticate the local player.
- [loadDefaultLeaderboardCategoryID(completionHandler:)](loaddefaultleaderboardcategoryid%28completionhandler_%29.md): Deprecated. Loads the category identifier for the local player’s default leaderboard.
- [loadFriendPlayers(completionHandler:)](loadfriendplayers%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [loadFriendsObsoleted(completionHandler:)](loadfriendsobsoleted%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.

# setDefaultLeaderboardCategoryID:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sets the category identifier for the local player’s default leaderboard.

> Use [setDefaultLeaderboardIdentifier:completionHandler:](setdefaultleaderboardidentifier%28__completionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) setDefaultLeaderboardCategoryID:(NSString *) categoryID completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `categoryID`: The category ID string for one of your game’s leaderboards.
- `completionHandler`: A block to call when the request completes.

  The block receives the following parameter:

  - **error**: If an error occurs, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

You set the default leaderboard in App Store Connect when you configure your game’s leaderboards. All players normally start with this leaderboard as the default leaderboard. Calling this method changes the default leaderboard only for the local player.

## See Also

### Deprecated methods

- [authenticateWithCompletionHandler:](authenticate%28completionhandler_%29.md): Deprecated. Initializes the local player on the device.
- [generateIdentityVerificationSignatureWithCompletionHandler:](generateidentityverificationsignature%28completionhandler_%29.md): Deprecated. Generates a signature so that a third-party server can authenticate the local player.
- [loadDefaultLeaderboardCategoryIDWithCompletionHandler:](loaddefaultleaderboardcategoryid%28completionhandler_%29.md): Deprecated. Loads the category identifier for the local player’s default leaderboard.
- [loadFriendPlayersWithCompletionHandler:](loadfriendplayers%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [loadFriendsWithCompletionHandler:](loadfriendsobsoleted%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
