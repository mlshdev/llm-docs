> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/authenticate(completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/authenticate(completionhandler:))

# authenticate(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 6.0) · iPadOS 4.1+ (deprecated in 6.0) · Mac Catalyst 4.1+ (deprecated in 6.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes the local player on the device.

> Use [authenticateHandler](authenticatehandler.md) instead.

## Declaration

```swift
func authenticate(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func authenticate() async throws
```

## Parameters

- `completionHandler`: A block to call when the player initializes or when an error occurs.

  The block takes the following parameter:

  - **error**: This parameter is `nil` if the player successfully initializes. Otherwise, it contains an error object that describes the error that occurrs.

<a id="Discussion"></a>

## Discussion

For more information, see [Authenticating a player](../authenticating-a-player.md).

## See Also

### Deprecated methods

- [generateIdentityVerificationSignature(completionHandler:)](generateidentityverificationsignature%28completionhandler_%29.md): Deprecated. Generates a signature so that a third-party server can authenticate the local player.
- [loadDefaultLeaderboardCategoryID(completionHandler:)](loaddefaultleaderboardcategoryid%28completionhandler_%29.md): Deprecated. Loads the category identifier for the local player’s default leaderboard.
- [loadFriendPlayers(completionHandler:)](loadfriendplayers%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [loadFriendsObsoleted(completionHandler:)](loadfriendsobsoleted%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [setDefaultLeaderboardCategoryID(\_:completionHandler:)](setdefaultleaderboardcategoryid%28__completionhandler_%29.md): Deprecated. Sets the category identifier for the local player’s default leaderboard.

# authenticateWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 6.0) · iPadOS 4.1+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.8) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes the local player on the device.

> Use [authenticateHandler](authenticatehandler.md) instead.

## Declaration

```objectivec
- (void) authenticateWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block to call when the player initializes or when an error occurs.

  The block takes the following parameter:

  - **error**: This parameter is `nil` if the player successfully initializes. Otherwise, it contains an error object that describes the error that occurrs.

<a id="Discussion"></a>

## Discussion

For more information, see [Authenticating a player](../authenticating-a-player.md).

## See Also

### Deprecated methods

- [generateIdentityVerificationSignatureWithCompletionHandler:](generateidentityverificationsignature%28completionhandler_%29.md): Deprecated. Generates a signature so that a third-party server can authenticate the local player.
- [loadDefaultLeaderboardCategoryIDWithCompletionHandler:](loaddefaultleaderboardcategoryid%28completionhandler_%29.md): Deprecated. Loads the category identifier for the local player’s default leaderboard.
- [loadFriendPlayersWithCompletionHandler:](loadfriendplayers%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [loadFriendsWithCompletionHandler:](loadfriendsobsoleted%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [setDefaultLeaderboardCategoryID:completionHandler:](setdefaultleaderboardcategoryid%28__completionhandler_%29.md): Deprecated. Sets the category identifier for the local player’s default leaderboard.
