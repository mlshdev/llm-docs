> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayer/isfriend](https://developer.apple.com/documentation/gamekit/gkplayer/isfriend)

# isFriend (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A Boolean value that indicates whether the player is a friend of the local player.

> Use [loadFriendPlayers(completionHandler:)](../gklocalplayer/loadfriendplayers%28completionhandler_%29.md) instead.

## Declaration

```swift
var isFriend: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Players use the Game Center app to declare other players as friends.

## See Also

### Accessing player details

- [alias](alias.md): A string the player chooses to identify themself to other players.
- [displayName](displayname.md): A string to display for the player.
- [isInvitable](isinvitable.md): A Boolean value that indicates whether the local player can send an invitation to the player.

# isFriend (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A Boolean value that indicates whether the player is a friend of the local player.

> Use [loadFriendPlayersWithCompletionHandler:](../gklocalplayer/loadfriendplayers%28completionhandler_%29.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isFriend;
```

```objectivec
@property (atomic, readonly) BOOL isFriend;
```

<a id="Discussion"></a>

## Discussion

Players use the Game Center app to declare other players as friends.

## See Also

### Accessing player details

- [alias](alias.md): A string the player chooses to identify themself to other players.
- [displayName](displayname.md): A string to display for the player.
- [isInvitable](isinvitable.md): A Boolean value that indicates whether the local player can send an invitation to the player.
