> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayer/gameplayerid](https://developer.apple.com/documentation/gamekit/gkplayer/gameplayerid)

# gamePlayerID (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 12.4+ · iPadOS 12.4+ · Mac Catalyst 13.1+ · macOS 10.14.6+ · tvOS 12.4+ · visionOS 1.0+

A unique identifier for a player of the game.

## Declaration

```swift
var gamePlayerID: String { get }
```

## Mentioned In

- [Protecting the player’s privacy using scoped identifiers](../protecting-the-player-s-privacy-using-scoped-identifiers.md)

<a id="Discussion"></a>

## Discussion

This identifier is unique to this game instance if the [scopedIDsArePersistent()](scopedidsarepersistent%28%29.md) method returns [false](https://developer.apple.com/documentation/swift/false). Otherwise, this identifier is the same across all game instances. An instance is the time between when the game launches and when the game terminates.

For the local player (a [GKLocalPlayer](../gklocalplayer.md) object), this identifier is persistent across all local player instances of the game. If the player is friends with the local player, this identifier is persistent across all local player and friend game instances. To determine whether the player is a friend, use the [loadFriends(\_:)](../gklocalplayer/loadfriends%28__%29.md) method.

To protect the player’s privacy, use the [gamePlayerID](gameplayerid.md) property instead of the [teamPlayerID](teamplayerid.md) property. For more information, see [Protecting the player’s privacy using scoped identifiers](../protecting-the-player-s-privacy-using-scoped-identifiers.md).

If you transfer your game to another developer, the [gamePlayerID](gameplayerid.md) property is the same for the new developer. For more information, see [Overview of app transfer](https://developer.apple.com/help/app-store-connect/transfer-an-app/overview-of-app-transfer).

## See Also

### Identifying the player

- [teamPlayerID](teamplayerid.md): A unique identifier for a player of all the games that you distribute using your developer account.
- [scopedIDsArePersistent()](scopedidsarepersistent%28%29.md): Returns a Boolean value depending on whether the player identifiers are persistent across game instances or unique to the game instance.
- [GKPlayerIDNoLongerAvailable](../gkplayeridnolongeravailable.md): A constant for a player ID that’s no longer available.
- [playerID](playerid.md): Deprecated. A unique identifier for a player of the game.

# gamePlayerID (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 12.4+ · iPadOS 12.4+ · Mac Catalyst 13.1+ · macOS 10.14.6+ · tvOS 12.4+ · visionOS 1.0+

A unique identifier for a player of the game.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nonnull) NSString * gamePlayerID;
```

```objectivec
@property (atomic, retain, readonly, nonnull) NSString * gamePlayerID;
```

## Mentioned In

- [Protecting the player’s privacy using scoped identifiers](../protecting-the-player-s-privacy-using-scoped-identifiers.md)

<a id="Discussion"></a>

## Discussion

This identifier is unique to this game instance if the [scopedIDsArePersistent](scopedidsarepersistent%28%29.md) method returns [false](https://developer.apple.com/documentation/swift/false). Otherwise, this identifier is the same across all game instances. An instance is the time between when the game launches and when the game terminates.

For the local player (a [GKLocalPlayer](../gklocalplayer.md) object), this identifier is persistent across all local player instances of the game. If the player is friends with the local player, this identifier is persistent across all local player and friend game instances. To determine whether the player is a friend, use the [loadFriends:](../gklocalplayer/loadfriends%28__%29.md) method.

To protect the player’s privacy, use the [gamePlayerID](gameplayerid.md) property instead of the [teamPlayerID](teamplayerid.md) property. For more information, see [Protecting the player’s privacy using scoped identifiers](../protecting-the-player-s-privacy-using-scoped-identifiers.md).

If you transfer your game to another developer, the [gamePlayerID](gameplayerid.md) property is the same for the new developer. For more information, see [Overview of app transfer](https://developer.apple.com/help/app-store-connect/transfer-an-app/overview-of-app-transfer).

## See Also

### Identifying the player

- [teamPlayerID](teamplayerid.md): A unique identifier for a player of all the games that you distribute using your developer account.
- [scopedIDsArePersistent](scopedidsarepersistent%28%29.md): Returns a Boolean value depending on whether the player identifiers are persistent across game instances or unique to the game instance.
- [GKPlayerIDNoLongerAvailable](../gkplayeridnolongeravailable.md): A constant for a player ID that’s no longer available.
- [playerID](playerid.md): Deprecated. A unique identifier for a player of the game.
