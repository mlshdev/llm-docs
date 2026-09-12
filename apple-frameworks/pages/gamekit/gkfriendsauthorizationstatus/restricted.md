> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkfriendsauthorizationstatus/restricted](https://developer.apple.com/documentation/gamekit/gkfriendsauthorizationstatus/restricted)

# GKFriendsAuthorizationStatus.restricted (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

Access to the player’s list of friends restricted.

## Declaration

```swift
case restricted
```

## Mentioned In

- [Connecting players with their friends in your game](../connecting-players-with-their-friends-in-your-game.md)

<a id="Discussion"></a>

## Discussion

While GameKit restricts access to a player’s friends’ data, the player can’t change the authorization status. If you previously loaded the player’s friends, delete the friends’ data from your game.

## See Also

### Authorization Statuses

- [GKFriendsAuthorizationStatus.authorized](authorized.md): The player authorized your game to access their list of friends.
- [GKFriendsAuthorizationStatus.denied](denied.md): Access to the player’s friends’ data denied.
- [GKFriendsAuthorizationStatus.notDetermined](notdetermined.md): The player hasn’t choosen whether your game may access their friends list.

# GKFriendsAuthorizationStatusRestricted (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

Access to the player’s list of friends restricted.

## Declaration

```objectivec
GKFriendsAuthorizationStatusRestricted
```

## Mentioned In

- [Connecting players with their friends in your game](../connecting-players-with-their-friends-in-your-game.md)

<a id="Discussion"></a>

## Discussion

While GameKit restricts access to a player’s friends’ data, the player can’t change the authorization status. If you previously loaded the player’s friends, delete the friends’ data from your game.

## See Also

### Authorization Statuses

- [GKFriendsAuthorizationStatusAuthorized](authorized.md): The player authorized your game to access their list of friends.
- [GKFriendsAuthorizationStatusDenied](denied.md): Access to the player’s friends’ data denied.
- [GKFriendsAuthorizationStatusNotDetermined](notdetermined.md): The player hasn’t choosen whether your game may access their friends list.
