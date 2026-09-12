> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayer/alias](https://developer.apple.com/documentation/gamekit/gkplayer/alias)

# alias (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A string the player chooses to identify themself to other players.

## Declaration

```swift
var alias: String { get }
```

<a id="Discussion"></a>

## Discussion

GameKit uses the player’s alias when a player isn’t a friend of the local player. Typically, you never display the alias string directly in your user interface. Instead use the [displayName](displayname.md) property.

## See Also

### Accessing player details

- [displayName](displayname.md): A string to display for the player.
- [isInvitable](isinvitable.md): A Boolean value that indicates whether the local player can send an invitation to the player.
- [isFriend](isfriend.md): Deprecated. A Boolean value that indicates whether the player is a friend of the local player.

# alias (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A string the player chooses to identify themself to other players.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nonnull) NSString * alias;
```

```objectivec
@property (atomic, copy, readonly, nonnull) NSString * alias;
```

<a id="Discussion"></a>

## Discussion

GameKit uses the player’s alias when a player isn’t a friend of the local player. Typically, you never display the alias string directly in your user interface. Instead use the [displayName](displayname.md) property.

## See Also

### Accessing player details

- [displayName](displayname.md): A string to display for the player.
- [isInvitable](isinvitable.md): A Boolean value that indicates whether the local player can send an invitation to the player.
- [isFriend](isfriend.md): Deprecated. A Boolean value that indicates whether the player is a friend of the local player.
