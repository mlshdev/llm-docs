> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayer/playerid](https://developer.apple.com/documentation/gamekit/gkplayer/playerid)

# playerID (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 13.0) · iPadOS 4.1+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

A unique identifier for a player of the game.

> Use [gamePlayerID](gameplayerid.md) or [teamPlayerID](teamplayerid.md) instead.

## Declaration

```swift
var playerID: String { get }
```

## Mentioned In

- [Protecting the player’s privacy using scoped identifiers](../protecting-the-player-s-privacy-using-scoped-identifiers.md)

<a id="Discussion"></a>

## Discussion

Never display the player identifier to the player. Use it only to identify a player in your code.

## See Also

### Identifying the player

- [gamePlayerID](gameplayerid.md): A unique identifier for a player of the game.
- [teamPlayerID](teamplayerid.md): A unique identifier for a player of all the games that you distribute using your developer account.
- [scopedIDsArePersistent()](scopedidsarepersistent%28%29.md): Returns a Boolean value depending on whether the player identifiers are persistent across game instances or unique to the game instance.
- [GKPlayerIDNoLongerAvailable](../gkplayeridnolongeravailable.md): A constant for a player ID that’s no longer available.

# playerID (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 13.0) · iPadOS 4.1+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

A unique identifier for a player of the game.

> Use [gamePlayerID](gameplayerid.md) or [teamPlayerID](teamplayerid.md) instead.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nonnull) NSString * playerID;
```

```objectivec
@property (atomic, retain, readonly, nonnull) NSString * playerID;
```

## Mentioned In

- [Protecting the player’s privacy using scoped identifiers](../protecting-the-player-s-privacy-using-scoped-identifiers.md)

<a id="Discussion"></a>

## Discussion

Never display the player identifier to the player. Use it only to identify a player in your code.

## See Also

### Identifying the player

- [gamePlayerID](gameplayerid.md): A unique identifier for a player of the game.
- [teamPlayerID](teamplayerid.md): A unique identifier for a player of all the games that you distribute using your developer account.
- [scopedIDsArePersistent](scopedidsarepersistent%28%29.md): Returns a Boolean value depending on whether the player identifiers are persistent across game instances or unique to the game instance.
- [GKPlayerIDNoLongerAvailable](../gkplayeridnolongeravailable.md): A constant for a player ID that’s no longer available.
