> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayer/displayname](https://developer.apple.com/documentation/gamekit/gkplayer/displayname)

# displayName (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A string to display for the player.

## Declaration

```swift
var displayName: String { get }
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

The display name for a player depends on whether the player is a friend of the local player on the device. If the player is a friend of the local player, the display name is the actual name of the player. If the player isn’t a friend, the display name is the player’s alias.

## See Also

### Accessing player details

- [alias](alias.md): A string the player chooses to identify themself to other players.
- [isInvitable](isinvitable.md): A Boolean value that indicates whether the local player can send an invitation to the player.
- [isFriend](isfriend.md): Deprecated. A Boolean value that indicates whether the player is a friend of the local player.

# displayName (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A string to display for the player.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) NSString * displayName;
```

```objectivec
@property (atomic, readonly, nonnull) NSString * displayName;
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

The display name for a player depends on whether the player is a friend of the local player on the device. If the player is a friend of the local player, the display name is the actual name of the player. If the player isn’t a friend, the display name is the player’s alias.

## See Also

### Accessing player details

- [alias](alias.md): A string the player chooses to identify themself to other players.
- [isInvitable](isinvitable.md): A Boolean value that indicates whether the local player can send an invitation to the player.
- [isFriend](isfriend.md): Deprecated. A Boolean value that indicates whether the player is a friend of the local player.
