> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/fetchitems(foridentityverificationsignature:)](https://developer.apple.com/documentation/gamekit/gklocalplayer/fetchitems(foridentityverificationsignature:))

# fetchItems(forIdentityVerificationSignature:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 13.5+ · iPadOS 13.5+ · Mac Catalyst 13.5+ · macOS 10.15.5+ · tvOS 13.4.8+ · visionOS 1.0+ · watchOS 6.5+

Generates a signature that you can use to authenticate the local player on your own server.

## Declaration

```swift
func fetchItems(forIdentityVerificationSignature completionHandler: (@Sendable (URL?, Data?, Data?, UInt64, (any Error)?) -> Void)? = nil)
```

```swift
func fetchItemsForIdentityVerificationSignature() async throws -> (URL, Data, Data, UInt64)
```

## Parameters

- `completionHandler`: A block that GameKit calls when the request completes.

  The block receives the following parameters:

  - **publicKeyURL**: The URL for the public encryption key.
  - **signature**: The verification signature data that GameKit generates.
  - **salt**: A random `NSString` that GameKit uses to compute the hash and randomize it.
  - **timestamp**: The signature’s creation date and time.
  - **error**: If an error occurs, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

## Mentioned In

- [Authenticating a player](../authenticating-a-player.md)
- [Initializing and configuring Game Center](../initializing-and-configuring-game-center.md)

<a id="Discussion"></a>

## Discussion

Use this method when you need to authenticate with your server. To generate a signature for your authentication server, you perform steps in the game and pass data to the server, which completes the process.

In your game, follow these steps:

1. Call the [fetchItems(forIdentityVerificationSignature:)](fetchitems%28foridentityverificationsignature_%29.md) method.
2. Send the completion handler `publicKeyURL`, `signature`, `salt`, and `timestamp` parameters to your authentication server.
3. Share the [teamPlayerID](../gkplayer/teamplayerid.md) and the bundle ID (see [CFBundleIdentifier](../../bundleresources/information-property-list/cfbundleidentifier.md)) with the server. For Apple Arcade games, share the [gamePlayerID](../gkplayer/gameplayerid.md) instead of the [teamPlayerID](../gkplayer/teamplayerid.md).

On the server, perform these steps:

1. To mitigate replay attacks, make sure the `timestamp` parameter is recent, and to avoid high network overhead, respect the cache expiration headers.
2. Download the public key using the `publicKeyURL` parameter.
3. Verify with the appropriate signing authority that Apple signed the public key.
4. Concatenate the following information into a data buffer in this order: the [teamPlayerID](../gkplayer/teamplayerid.md) (or [gamePlayerID](../gkplayer/gameplayerid.md) for Apple Arcade) property in UTF-8 format, the bundle ID in UTF-8 format, the `timestamp` parameter in big-endian UInt64 format, and the `salt` parameter.
5. Use the public key to verify the signature of the concatenated data buffer using the [RSASSA-PKCS1-v1_5](https://www.rfc-editor.org/rfc/rfc8017#section-8.2) algorithm.

If the generated and retrieved signatures match, GameKit authenticates the local player.

> **Important**

>  Trust only the fields in the signed payload. Consider other data, such as nicknames, as player-provided information.

## See Also

### Authenticating the Local Player

- [authenticateHandler](authenticatehandler.md): A handler that GameKit calls while initializing the local player.
- [isAuthenticated](isauthenticated.md): A Boolean value that indicates whether a local player has signed in to Game Center.
- [GKPlayerAuthenticationDidChangeNotificationName](../../foundation/nsnotification/name-swift.struct/gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit authenticates the local player.

# fetchItemsForIdentityVerificationSignature: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 13.5+ · iPadOS 13.5+ · Mac Catalyst 13.5+ · macOS 10.15.5+ · tvOS 13.4.8+ · visionOS 1.0+ · watchOS 6.5+

Generates a signature that you can use to authenticate the local player on your own server.

## Declaration

```objectivec
- (void) fetchItemsForIdentityVerificationSignature:(void (^)(NSURL *publicKeyURL, NSData *signature, NSData *salt, uint64_t timestamp, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that GameKit calls when the request completes.

  The block receives the following parameters:

  - **publicKeyURL**: The URL for the public encryption key.
  - **signature**: The verification signature data that GameKit generates.
  - **salt**: A random `NSString` that GameKit uses to compute the hash and randomize it.
  - **timestamp**: The signature’s creation date and time.
  - **error**: If an error occurs, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

## Mentioned In

- [Authenticating a player](../authenticating-a-player.md)
- [Initializing and configuring Game Center](../initializing-and-configuring-game-center.md)

<a id="Discussion"></a>

## Discussion

Use this method when you need to authenticate with your server. To generate a signature for your authentication server, you perform steps in the game and pass data to the server, which completes the process.

In your game, follow these steps:

1. Call the [fetchItemsForIdentityVerificationSignature:](fetchitems%28foridentityverificationsignature_%29.md) method.
2. Send the completion handler `publicKeyURL`, `signature`, `salt`, and `timestamp` parameters to your authentication server.
3. Share the [teamPlayerID](../gkplayer/teamplayerid.md) and the bundle ID (see [CFBundleIdentifier](../../bundleresources/information-property-list/cfbundleidentifier.md)) with the server. For Apple Arcade games, share the [gamePlayerID](../gkplayer/gameplayerid.md) instead of the [teamPlayerID](../gkplayer/teamplayerid.md).

On the server, perform these steps:

1. To mitigate replay attacks, make sure the `timestamp` parameter is recent, and to avoid high network overhead, respect the cache expiration headers.
2. Download the public key using the `publicKeyURL` parameter.
3. Verify with the appropriate signing authority that Apple signed the public key.
4. Concatenate the following information into a data buffer in this order: the [teamPlayerID](../gkplayer/teamplayerid.md) (or [gamePlayerID](../gkplayer/gameplayerid.md) for Apple Arcade) property in UTF-8 format, the bundle ID in UTF-8 format, the `timestamp` parameter in big-endian UInt64 format, and the `salt` parameter.
5. Use the public key to verify the signature of the concatenated data buffer using the [RSASSA-PKCS1-v1_5](https://www.rfc-editor.org/rfc/rfc8017#section-8.2) algorithm.

If the generated and retrieved signatures match, GameKit authenticates the local player.

> **Important**

>  Trust only the fields in the signed payload. Consider other data, such as nicknames, as player-provided information.

## See Also

### Authenticating the Local Player

- [authenticateHandler](authenticatehandler.md): A handler that GameKit calls while initializing the local player.
- [authenticated](isauthenticated.md): A Boolean value that indicates whether a local player has signed in to Game Center.
- [GKPlayerAuthenticationDidChangeNotificationName](../gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit initializes the local player.
