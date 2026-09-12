> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/findplayers(forhostedmatchrequest:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/findplayers(forhostedmatchrequest:withcompletionhandler:))

# findPlayers(forHostedMatchRequest:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Initiates a request to find players for a hosted match.

> Use the [findPlayers(forHostedRequest:withCompletionHandler:)](findplayers%28forhostedrequest_withcompletionhandler_%29.md) method instead.

## Declaration

```swift
func findPlayers(forHostedMatchRequest request: GKMatchRequest, withCompletionHandler completionHandler: (@Sendable ([String]?, (any Error)?) -> Void)? = nil)
```

```swift
func findPlayers(forHostedMatchRequest request: GKMatchRequest) async throws -> [String]
```

## Parameters

- `request`: The configuration for the desired match.
- `completionHandler`: A block to call when GameKit creates the match. This block receives the following parameters:

  - ***playerIDs***: If matchmaking was successful, this parameter contains an array of `NSString` objects containing the players to connect into the match. Otherwise, this parameter is `nil`.
  - ***error***: If matchmaking was successful, this parameter contains `nil`. Otherwise, this parameter holds an error object that describes the error that occurred.

<a id="Discussion"></a>

## Discussion

When GameKit calls this completion handler, your game needs to connect those players to your own server.

On iOS 6, if the match request’s [playersToInvite](../gkmatchrequest/playerstoinvite.md) property is non-`NIL`, Game Center only sends invitations out to the players listed in the property. If the [playersToInvite](../gkmatchrequest/playerstoinvite.md) property is `NIL`, Game Center then searches for any waiting players that match the request. Prior to iOS 6, GameKit ignores the match request’s [playersToInvite](../gkmatchrequest/playerstoinvite.md) property and this method only searches for available players.

## See Also

### Related Documentation

- [cancel()](cancel%28%29.md): Cancels a matchmaking request.

### Deprecated Methods

- [cancelInvite(toPlayer:)](cancelinvite%28toplayer_%29.md): Deprecated. Cancels a pending invitation to another player.
- [startBrowsingForNearbyPlayers(reachableHandler:)](startbrowsingfornearbyplayers%28reachablehandler_%29.md): Deprecated. Enables the matchmaking process to find nearby players through Bluetooth or WiFi, but only on the same subnet.

# findPlayersForHostedMatchRequest:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Initiates a request to find players for a hosted match.

> Use the [findPlayersForHostedRequest:withCompletionHandler:](findplayers%28forhostedrequest_withcompletionhandler_%29.md) method instead.

## Declaration

```objectivec
- (void) findPlayersForHostedMatchRequest:(GKMatchRequest *) request withCompletionHandler:(void (^)(NSArray<NSString *> *playerIDs, NSError *error)) completionHandler;
```

## Parameters

- `request`: The configuration for the desired match.
- `completionHandler`: A block to call when GameKit creates the match. This block receives the following parameters:

  - ***playerIDs***: If matchmaking was successful, this parameter contains an array of `NSString` objects containing the players to connect into the match. Otherwise, this parameter is `nil`.
  - ***error***: If matchmaking was successful, this parameter contains `nil`. Otherwise, this parameter holds an error object that describes the error that occurred.

<a id="Discussion"></a>

## Discussion

When GameKit calls this completion handler, your game needs to connect those players to your own server.

On iOS 6, if the match request’s [playersToInvite](../gkmatchrequest/playerstoinvite.md) property is non-`NIL`, Game Center only sends invitations out to the players listed in the property. If the [playersToInvite](../gkmatchrequest/playerstoinvite.md) property is `NIL`, Game Center then searches for any waiting players that match the request. Prior to iOS 6, GameKit ignores the match request’s [playersToInvite](../gkmatchrequest/playerstoinvite.md) property and this method only searches for available players.

## See Also

### Related Documentation

- [cancel](cancel%28%29.md): Cancels a matchmaking request.

### Deprecated Methods

- [cancelInviteToPlayer:](cancelinvite%28toplayer_%29.md): Deprecated. Cancels a pending invitation to another player.
- [startBrowsingForNearbyPlayersWithReachableHandler:](startbrowsingfornearbyplayers%28reachablehandler_%29.md): Deprecated. Enables the matchmaking process to find nearby players through Bluetooth or WiFi, but only on the same subnet.
