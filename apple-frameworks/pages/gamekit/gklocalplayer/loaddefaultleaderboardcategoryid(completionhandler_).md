> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/loaddefaultleaderboardcategoryid(completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/loaddefaultleaderboardcategoryid(completionhandler:))

# loadDefaultLeaderboardCategoryID(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Loads the category identifier for the local player’s default leaderboard.

> Use [loadDefaultLeaderboardIdentifier(completionHandler:)](loaddefaultleaderboardidentifier%28completionhandler_%29.md) instead.

## Declaration

```swift
func loadDefaultLeaderboardCategoryID(completionHandler: (@Sendable (String?, (any Error)?) -> Void)? = nil)
```

```swift
func loadDefaultLeaderboardCategoryID() async throws -> String
```

## Parameters

- `completionHandler`: A block to call when the request completes.

  The block receives the following parameters:

  - **categoryID**: The category ID string for the local player’s default leaderboard.
  - **error**: If an error occurrs, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

## See Also

### Deprecated methods

- [authenticate(completionHandler:)](authenticate%28completionhandler_%29.md): Deprecated. Initializes the local player on the device.
- [generateIdentityVerificationSignature(completionHandler:)](generateidentityverificationsignature%28completionhandler_%29.md): Deprecated. Generates a signature so that a third-party server can authenticate the local player.
- [loadFriendPlayers(completionHandler:)](loadfriendplayers%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [loadFriendsObsoleted(completionHandler:)](loadfriendsobsoleted%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [setDefaultLeaderboardCategoryID(\_:completionHandler:)](setdefaultleaderboardcategoryid%28__completionhandler_%29.md): Deprecated. Sets the category identifier for the local player’s default leaderboard.

# loadDefaultLeaderboardCategoryIDWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Loads the category identifier for the local player’s default leaderboard.

> Use [loadDefaultLeaderboardIdentifierWithCompletionHandler:](loaddefaultleaderboardidentifier%28completionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) loadDefaultLeaderboardCategoryIDWithCompletionHandler:(void (^)(NSString *categoryID, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block to call when the request completes.

  The block receives the following parameters:

  - **categoryID**: The category ID string for the local player’s default leaderboard.
  - **error**: If an error occurrs, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

## See Also

### Deprecated methods

- [authenticateWithCompletionHandler:](authenticate%28completionhandler_%29.md): Deprecated. Initializes the local player on the device.
- [generateIdentityVerificationSignatureWithCompletionHandler:](generateidentityverificationsignature%28completionhandler_%29.md): Deprecated. Generates a signature so that a third-party server can authenticate the local player.
- [loadFriendPlayersWithCompletionHandler:](loadfriendplayers%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [loadFriendsWithCompletionHandler:](loadfriendsobsoleted%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [setDefaultLeaderboardCategoryID:completionHandler:](setdefaultleaderboardcategoryid%28__completionhandler_%29.md): Deprecated. Sets the category identifier for the local player’s default leaderboard.
