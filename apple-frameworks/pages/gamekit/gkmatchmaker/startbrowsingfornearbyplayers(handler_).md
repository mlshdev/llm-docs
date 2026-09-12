> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/startbrowsingfornearbyplayers(handler:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/startbrowsingfornearbyplayers(handler:))

# startBrowsingForNearbyPlayers(handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Finds nearby players through Bluetooth or WiFi on the same subnet.

## Declaration

```swift
func startBrowsingForNearbyPlayers(handler reachableHandler: ((GKPlayer, Bool) -> Void)? = nil)
```

## Parameters

- `reachableHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`player`**: The player whose reachability status changes.
  - **`reachable`**: [true](https://developer.apple.com/documentation/swift/true) if a new nearby player appears. [false](https://developer.apple.com/documentation/swift/false) if a previously discovered player disappears.

<a id="Discussion"></a>

## Discussion

Use the `reachableHandler` implementation to update your interface with information about nearby players. If the local player wants to invite a nearby player, call the [findMatch(for:withCompletionHandler:)](findmatch%28for_withcompletionhandler_%29.md) method to create a match or the [addPlayers(to:matchRequest:completionHandler:)](addplayers%28to_matchrequest_completionhandler_%29.md) method to update an existing match. When you are done finding nearby players, call the [stopBrowsingForNearbyPlayers()](stopbrowsingfornearbyplayers%28%29.md) method.

> **Note**

>  Before your game is released and during development, GameKit invokes the handler for all nearby players of all Game Center games.

## See Also

### Looking for nearby players

- [stopBrowsingForNearbyPlayers()](stopbrowsingfornearbyplayers%28%29.md): Stops finding nearby players.

# startBrowsingForNearbyPlayersWithHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Finds nearby players through Bluetooth or WiFi on the same subnet.

## Declaration

```objectivec
- (void) startBrowsingForNearbyPlayersWithHandler:(void (^)(GKPlayer *player, BOOL reachable)) reachableHandler;
```

## Parameters

- `reachableHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`player`**: The player whose reachability status changes.
  - **`reachable`**: [true](https://developer.apple.com/documentation/swift/true) if a new nearby player appears. [false](https://developer.apple.com/documentation/swift/false) if a previously discovered player disappears.

<a id="Discussion"></a>

## Discussion

Use the `reachableHandler` implementation to update your interface with information about nearby players. If the local player wants to invite a nearby player, call the [findMatchForRequest:withCompletionHandler:](findmatch%28for_withcompletionhandler_%29.md) method to create a match or the [addPlayersToMatch:matchRequest:completionHandler:](addplayers%28to_matchrequest_completionhandler_%29.md) method to update an existing match. When you are done finding nearby players, call the [stopBrowsingForNearbyPlayers](stopbrowsingfornearbyplayers%28%29.md) method.

> **Note**

>  Before your game is released and during development, GameKit invokes the handler for all nearby players of all Game Center games.

## See Also

### Looking for nearby players

- [stopBrowsingForNearbyPlayers](stopbrowsingfornearbyplayers%28%29.md): Stops finding nearby players.
