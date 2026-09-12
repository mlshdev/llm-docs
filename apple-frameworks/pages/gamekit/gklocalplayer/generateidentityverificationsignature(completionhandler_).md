> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/generateidentityverificationsignature(completionhandler:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/generateidentityverificationsignature(completionhandler:))

# generateIdentityVerificationSignature(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.5) · iPadOS 7.0+ (deprecated in 13.5) · Mac Catalyst 13.1+ (deprecated in 13.5) · macOS 10.10+ (deprecated in 10.15.5) · tvOS 9.0+ (deprecated in 13.4.8) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.5)

Generates a signature so that a third-party server can authenticate the local player.

> Use [fetchItems(forIdentityVerificationSignature:)](fetchitems%28foridentityverificationsignature_%29.md) instead.

## Declaration

```swift
func generateIdentityVerificationSignature(completionHandler: (@Sendable (URL?, Data?, Data?, UInt64, (any Error)?) -> Void)? = nil)
```

```swift
func generateIdentityVerificationSignature() async throws -> (URL, Data, Data, UInt64)
```

## Parameters

- `completionHandler`: A block to call when the request completes.

  The block receives the following parameters:

  - **publicKeyUrl**: The URL for the public encryption key.
  - **signature**: The verification signature data that GameKit generates.
  - **salt**: A random `NSString` that GameKit uses to compute the hash and randomize it.
  - **timestamp**: The signature’s creation date and time.
  - **error**: If an error occurrs, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

To generate a signature on your server, see the [fetchItems(forIdentityVerificationSignature:)](fetchitems%28foridentityverificationsignature_%29.md) method.

## See Also

### Deprecated methods

- [authenticate(completionHandler:)](authenticate%28completionhandler_%29.md): Deprecated. Initializes the local player on the device.
- [loadDefaultLeaderboardCategoryID(completionHandler:)](loaddefaultleaderboardcategoryid%28completionhandler_%29.md): Deprecated. Loads the category identifier for the local player’s default leaderboard.
- [loadFriendPlayers(completionHandler:)](loadfriendplayers%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [loadFriendsObsoleted(completionHandler:)](loadfriendsobsoleted%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [setDefaultLeaderboardCategoryID(\_:completionHandler:)](setdefaultleaderboardcategoryid%28__completionhandler_%29.md): Deprecated. Sets the category identifier for the local player’s default leaderboard.

# generateIdentityVerificationSignatureWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.5) · iPadOS 7.0+ (deprecated in 13.5) · Mac Catalyst 13.1+ (deprecated in 13.5) · macOS 10.10+ (deprecated in 10.15.5) · tvOS 9.0+ (deprecated in 13.4.8) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.5)

Generates a signature so that a third-party server can authenticate the local player.

> Use [fetchItemsForIdentityVerificationSignature:](fetchitems%28foridentityverificationsignature_%29.md) instead.

## Declaration

```objectivec
- (void) generateIdentityVerificationSignatureWithCompletionHandler:(void (^)(NSURL *publicKeyUrl, NSData *signature, NSData *salt, uint64_t timestamp, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block to call when the request completes.

  The block receives the following parameters:

  - **publicKeyUrl**: The URL for the public encryption key.
  - **signature**: The verification signature data that GameKit generates.
  - **salt**: A random `NSString` that GameKit uses to compute the hash and randomize it.
  - **timestamp**: The signature’s creation date and time.
  - **error**: If an error occurrs, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

To generate a signature on your server, see the [fetchItemsForIdentityVerificationSignature:](fetchitems%28foridentityverificationsignature_%29.md) method.

## See Also

### Deprecated methods

- [authenticateWithCompletionHandler:](authenticate%28completionhandler_%29.md): Deprecated. Initializes the local player on the device.
- [loadDefaultLeaderboardCategoryIDWithCompletionHandler:](loaddefaultleaderboardcategoryid%28completionhandler_%29.md): Deprecated. Loads the category identifier for the local player’s default leaderboard.
- [loadFriendPlayersWithCompletionHandler:](loadfriendplayers%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [loadFriendsWithCompletionHandler:](loadfriendsobsoleted%28completionhandler_%29.md): Deprecated. Retrieves a list of player identifiers for the local player’s friends.
- [setDefaultLeaderboardCategoryID:completionHandler:](setdefaultleaderboardcategoryid%28__completionhandler_%29.md): Deprecated. Sets the category identifier for the local player’s default leaderboard.
