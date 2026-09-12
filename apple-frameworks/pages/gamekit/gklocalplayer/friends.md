> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/friends](https://developer.apple.com/documentation/gamekit/gklocalplayer/friends)

# friends (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The player identifiers for the local player’s friends.

> Use [loadFriendPlayers(completionHandler:)](loadfriendplayers%28completionhandler_%29.md) instead.

## Declaration

```swift
var friends: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

This property is invalid until a call to [loadFriendsObsoleted(completionHandler:)](loadfriendsobsoleted%28completionhandler_%29.md) succeeds.

# friends (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The player identifiers for the local player’s friends.

> Use [loadFriendPlayersWithCompletionHandler:](loadfriendplayers%28completionhandler_%29.md) instead.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSArray<NSString *> * friends;
```

<a id="Discussion"></a>

## Discussion

This property is invalid until a call to [loadFriendsWithCompletionHandler:](loadfriendsobsoleted%28completionhandler_%29.md) succeeds.
