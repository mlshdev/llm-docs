> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayer/loadplayers(foridentifiers:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkplayer/loadplayers(foridentifiers:withcompletionhandler:))

# loadPlayers(forIdentifiers:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ (deprecated in 14.5) · iPadOS 4.1+ (deprecated in 14.5) · Mac Catalyst 13.1+ (deprecated in 14.5) · macOS 10.8+ (deprecated in 11.3) · tvOS 9.0+ (deprecated in 14.5) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.4)

Loads information about a list of players from Game Center.

> Use [loadFriends(identifiedBy:completionHandler:)](../gklocalplayer/loadfriends%28identifiedby_completionhandler_%29.md) instead.

## Declaration

```swift
class func loadPlayers(forIdentifiers identifiers: [String], withCompletionHandler completionHandler: (([GKPlayer]?, (any Error)?) -> Void)? = nil)
```

## Parameters

- `identifiers`: The identifiers for the players to load.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***players***: The players that GameKit successfully loads. If an error occurs, this array may contain just the player data that GameKit is able to load.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

# loadPlayersForIdentifiers:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ (deprecated in 14.5) · iPadOS 4.1+ (deprecated in 14.5) · Mac Catalyst 13.1+ (deprecated in 14.5) · macOS 10.8+ (deprecated in 11.3) · tvOS 9.0+ (deprecated in 14.5) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.4)

Loads information about a list of players from Game Center.

> Use [loadFriendsWithIdentifiers:completionHandler:](../gklocalplayer/loadfriends%28identifiedby_completionhandler_%29.md) instead.

## Declaration

```objectivec
+ (void) loadPlayersForIdentifiers:(NSArray<NSString *> *) identifiers withCompletionHandler:(void (^)(NSArray<GKPlayer *> *players, NSError *error)) completionHandler;
```

## Parameters

- `identifiers`: The identifiers for the players to load.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***players***: The players that GameKit successfully loads. If an error occurs, this array may contain just the player data that GameKit is able to load.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.
