> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/startbrowsingfornearbyplayers(reachablehandler:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/startbrowsingfornearbyplayers(reachablehandler:))

# startBrowsingForNearbyPlayers(reachableHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Enables the matchmaking process to find nearby players through Bluetooth or WiFi, but only on the same subnet.

> Use the [startBrowsingForNearbyPlayers(handler:)](startbrowsingfornearbyplayers%28handler_%29.md) method instead.

## Declaration

```swift
func startBrowsingForNearbyPlayers(reachableHandler: ((String, Bool) -> Void)? = nil)
```

## Parameters

- `reachableHandler`: A block to call when the reachability for a player changes. The block takes the following parameters:

  - ***playerID***: The player identifier for the player whose reachability status has changed.
  - ***reachable***: [true](https://developer.apple.com/documentation/swift/true) if GameKit discovers a new player locally, [false](https://developer.apple.com/documentation/swift/false) if a previously discovered player disappears.

<a id="Discussion"></a>

## Discussion

Use this method only when you are implementing programmatic matchmaking. After enabling browsing for nearby players, use the responses to populate your user interface with information about nearby players. If a player wants to invite a player to a game, add that player’s player identifier to a match request and call either the [findMatch(for:withCompletionHandler:)](findmatch%28for_withcompletionhandler_%29.md) to create a match or [addPlayers(to:matchRequest:completionHandler:)](addplayers%28to_matchrequest_completionhandler_%29.md) method to update a match.

## See Also

### Deprecated Methods

- [cancelInvite(toPlayer:)](cancelinvite%28toplayer_%29.md): Deprecated. Cancels a pending invitation to another player.
- [findPlayers(forHostedMatchRequest:withCompletionHandler:)](findplayers%28forhostedmatchrequest_withcompletionhandler_%29.md): Deprecated. Initiates a request to find players for a hosted match.

# startBrowsingForNearbyPlayersWithReachableHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Enables the matchmaking process to find nearby players through Bluetooth or WiFi, but only on the same subnet.

> Use the [startBrowsingForNearbyPlayersWithHandler:](startbrowsingfornearbyplayers%28handler_%29.md) method instead.

## Declaration

```objectivec
- (void) startBrowsingForNearbyPlayersWithReachableHandler:(void (^)(NSString *playerID, BOOL reachable)) reachableHandler;
```

## Parameters

- `reachableHandler`: A block to call when the reachability for a player changes. The block takes the following parameters:

  - ***playerID***: The player identifier for the player whose reachability status has changed.
  - ***reachable***: [true](https://developer.apple.com/documentation/swift/true) if GameKit discovers a new player locally, [false](https://developer.apple.com/documentation/swift/false) if a previously discovered player disappears.

<a id="Discussion"></a>

## Discussion

Use this method only when you are implementing programmatic matchmaking. After enabling browsing for nearby players, use the responses to populate your user interface with information about nearby players. If a player wants to invite a player to a game, add that player’s player identifier to a match request and call either the [findMatchForRequest:withCompletionHandler:](findmatch%28for_withcompletionhandler_%29.md) to create a match or [addPlayersToMatch:matchRequest:completionHandler:](addplayers%28to_matchrequest_completionhandler_%29.md) method to update a match.

## See Also

### Deprecated Methods

- [cancelInviteToPlayer:](cancelinvite%28toplayer_%29.md): Deprecated. Cancels a pending invitation to another player.
- [findPlayersForHostedMatchRequest:withCompletionHandler:](findplayers%28forhostedmatchrequest_withcompletionhandler_%29.md): Deprecated. Initiates a request to find players for a hosted match.
