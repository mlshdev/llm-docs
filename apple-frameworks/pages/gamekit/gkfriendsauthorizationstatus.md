> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkfriendsauthorizationstatus](https://developer.apple.com/documentation/gamekit/gkfriendsauthorizationstatus)

# GKFriendsAuthorizationStatus (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

Constants that indicate if the local player grants access to their friends list.

## Declaration

```swift
enum GKFriendsAuthorizationStatus
```

## Topics

### Authorization Statuses

- [GKFriendsAuthorizationStatus.authorized](gkfriendsauthorizationstatus/authorized.md): The player authorized your game to access their list of friends.
- [GKFriendsAuthorizationStatus.denied](gkfriendsauthorizationstatus/denied.md): Access to the player’s friends’ data denied.
- [GKFriendsAuthorizationStatus.notDetermined](gkfriendsauthorizationstatus/notdetermined.md): The player hasn’t choosen whether your game may access their friends list.
- [GKFriendsAuthorizationStatus.restricted](gkfriendsauthorizationstatus/restricted.md): Access to the player’s list of friends restricted.

### Initializers

- [init(rawValue:)](gkfriendsauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Friends and Recents

- [loadFriendsAuthorizationStatus(\_:)](gklocalplayer/loadfriendsauthorizationstatus%28__%29.md): Returns whether the player authorizes your game to access their friends list.
- [loadFriends(\_:)](gklocalplayer/loadfriends%28__%29.md): Loads the local player’s friends list if the local player and their friends grant access.
- [loadFriends(identifiedBy:completionHandler:)](gklocalplayer/loadfriends%28identifiedby_completionhandler_%29.md): Loads the player’s friends list, scoped by the identifiers, if the player and their friends grant access.
- [NSGKFriendListUsageDescription](../bundleresources/information-property-list/nsgkfriendlistusagedescription.md): A message that tells people why the app needs access to their Game Center friends list.
- [loadChallengableFriends(completionHandler:)](gklocalplayer/loadchallengablefriends%28completionhandler_%29.md): Loads players to whom the local player can issue a challenge.
- [loadRecentPlayers(completionHandler:)](gklocalplayer/loadrecentplayers%28completionhandler_%29.md): Loads players from the friends list or players that recently participated in a game with the local player.

# GKFriendsAuthorizationStatus (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

Constants that indicate if the local player grants access to their friends list.

## Declaration

```objectivec
enum GKFriendsAuthorizationStatus : NSInteger;
```

## Topics

### Authorization Statuses

- [GKFriendsAuthorizationStatusAuthorized](gkfriendsauthorizationstatus/authorized.md): The player authorized your game to access their list of friends.
- [GKFriendsAuthorizationStatusDenied](gkfriendsauthorizationstatus/denied.md): Access to the player’s friends’ data denied.
- [GKFriendsAuthorizationStatusNotDetermined](gkfriendsauthorizationstatus/notdetermined.md): The player hasn’t choosen whether your game may access their friends list.
- [GKFriendsAuthorizationStatusRestricted](gkfriendsauthorizationstatus/restricted.md): Access to the player’s list of friends restricted.

## See Also

### Accessing Friends and Recents

- [loadFriendsAuthorizationStatus:](gklocalplayer/loadfriendsauthorizationstatus%28__%29.md): Returns whether the player authorizes your game to access their friends list.
- [loadFriends:](gklocalplayer/loadfriends%28__%29.md): Loads the local player’s friends list if the local player and their friends grant access.
- [loadFriendsWithIdentifiers:completionHandler:](gklocalplayer/loadfriends%28identifiedby_completionhandler_%29.md): Loads the player’s friends list, scoped by the identifiers, if the player and their friends grant access.
- [NSGKFriendListUsageDescription](../bundleresources/information-property-list/nsgkfriendlistusagedescription.md): A message that tells people why the app needs access to their Game Center friends list.
- [loadChallengableFriendsWithCompletionHandler:](gklocalplayer/loadchallengablefriends%28completionhandler_%29.md): Loads players to whom the local player can issue a challenge.
- [loadRecentPlayersWithCompletionHandler:](gklocalplayer/loadrecentplayers%28completionhandler_%29.md): Loads players from the friends list or players that recently participated in a game with the local player.
