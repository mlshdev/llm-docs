> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkfriendsauthorizationstatus/authorized](https://developer.apple.com/documentation/gamekit/gkfriendsauthorizationstatus/authorized)

# GKFriendsAuthorizationStatus.authorized (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

The player authorized your game to access their list of friends.

## Declaration

```swift
case authorized
```

## Mentioned In

- [Connecting players with their friends in your game](../connecting-players-with-their-friends-in-your-game.md)

<a id="Discussion"></a>

## Discussion

If the [loadFriendsAuthorizationStatus(\_:)](../gklocalplayer/loadfriendsauthorizationstatus%28__%29.md) method returns `GKFriendsAuthorizationStatus.authorized`, the [loadFriends(identifiedBy:completionHandler:)](../gklocalplayer/loadfriends%28identifiedby_completionhandler_%29.md) method passes the friends list to the completion handler.

## See Also

### Authorization Statuses

- [GKFriendsAuthorizationStatus.denied](denied.md): Access to the player’s friends’ data denied.
- [GKFriendsAuthorizationStatus.notDetermined](notdetermined.md): The player hasn’t choosen whether your game may access their friends list.
- [GKFriendsAuthorizationStatus.restricted](restricted.md): Access to the player’s list of friends restricted.

# GKFriendsAuthorizationStatusAuthorized (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

The player authorized your game to access their list of friends.

## Declaration

```objectivec
GKFriendsAuthorizationStatusAuthorized
```

## Mentioned In

- [Connecting players with their friends in your game](../connecting-players-with-their-friends-in-your-game.md)

<a id="Discussion"></a>

## Discussion

If the [loadFriendsAuthorizationStatus:](../gklocalplayer/loadfriendsauthorizationstatus%28__%29.md) method returns `GKFriendsAuthorizationStatus.authorized`, the [loadFriendsWithIdentifiers:completionHandler:](../gklocalplayer/loadfriends%28identifiedby_completionhandler_%29.md) method passes the friends list to the completion handler.

## See Also

### Authorization Statuses

- [GKFriendsAuthorizationStatusDenied](denied.md): Access to the player’s friends’ data denied.
- [GKFriendsAuthorizationStatusNotDetermined](notdetermined.md): The player hasn’t choosen whether your game may access their friends list.
- [GKFriendsAuthorizationStatusRestricted](restricted.md): Access to the player’s list of friends restricted.
