> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayer/scopedidsarepersistent()](https://developer.apple.com/documentation/gamekit/gkplayer/scopedidsarepersistent())

# scopedIDsArePersistent() (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Returns a Boolean value depending on whether the player identifiers are persistent across game instances or unique to the game instance.

## Declaration

```swift
func scopedIDsArePersistent() -> Bool
```

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the [gamePlayerID](gameplayerid.md) and [teamPlayerID](teamplayerid.md) properties are the same across all instances of this game; otherwise, [false](https://developer.apple.com/documentation/swift/false) if the identifiers are unique to this game instance only.

## Mentioned In

- [Protecting the player’s privacy using scoped identifiers](../protecting-the-player-s-privacy-using-scoped-identifiers.md)

<a id="discussion"></a>

## Discussion

An instance is the time between when the game launches and when the game terminates.

## See Also

### Identifying the player

- [gamePlayerID](gameplayerid.md): A unique identifier for a player of the game.
- [teamPlayerID](teamplayerid.md): A unique identifier for a player of all the games that you distribute using your developer account.
- [GKPlayerIDNoLongerAvailable](../gkplayeridnolongeravailable.md): A constant for a player ID that’s no longer available.
- [playerID](playerid.md): Deprecated. A unique identifier for a player of the game.

# scopedIDsArePersistent (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Returns a Boolean value depending on whether the player identifiers are persistent across game instances or unique to the game instance.

## Declaration

```objectivec
- (BOOL) scopedIDsArePersistent;
```

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the [gamePlayerID](gameplayerid.md) and [teamPlayerID](teamplayerid.md) properties are the same across all instances of this game; otherwise, [false](https://developer.apple.com/documentation/swift/false) if the identifiers are unique to this game instance only.

## Mentioned In

- [Protecting the player’s privacy using scoped identifiers](../protecting-the-player-s-privacy-using-scoped-identifiers.md)

<a id="discussion"></a>

## Discussion

An instance is the time between when the game launches and when the game terminates.

## See Also

### Identifying the player

- [gamePlayerID](gameplayerid.md): A unique identifier for a player of the game.
- [teamPlayerID](teamplayerid.md): A unique identifier for a player of all the games that you distribute using your developer account.
- [GKPlayerIDNoLongerAvailable](../gkplayeridnolongeravailable.md): A constant for a player ID that’s no longer available.
- [playerID](playerid.md): Deprecated. A unique identifier for a player of the game.
