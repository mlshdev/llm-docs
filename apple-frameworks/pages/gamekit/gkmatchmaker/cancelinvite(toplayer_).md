> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/cancelinvite(toplayer:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/cancelinvite(toplayer:))

# cancelInvite(toPlayer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Cancels a pending invitation to another player.

> Use the [cancelPendingInvite(to:)](cancelpendinginvite%28to_%29.md) method instead.

## Declaration

```swift
func cancelInvite(toPlayer playerID: String)
```

## Parameters

- `playerID`: The player identifier for a player that GameKit previously invited to the match.

## See Also

### Deprecated Methods

- [findPlayers(forHostedMatchRequest:withCompletionHandler:)](findplayers%28forhostedmatchrequest_withcompletionhandler_%29.md): Deprecated. Initiates a request to find players for a hosted match.
- [startBrowsingForNearbyPlayers(reachableHandler:)](startbrowsingfornearbyplayers%28reachablehandler_%29.md): Deprecated. Enables the matchmaking process to find nearby players through Bluetooth or WiFi, but only on the same subnet.

# cancelInviteToPlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Cancels a pending invitation to another player.

> Use the [cancelPendingInviteToPlayer:](cancelpendinginvite%28to_%29.md) method instead.

## Declaration

```objectivec
- (void) cancelInviteToPlayer:(NSString *) playerID;
```

## Parameters

- `playerID`: The player identifier for a player that GameKit previously invited to the match.

## See Also

### Deprecated Methods

- [findPlayersForHostedMatchRequest:withCompletionHandler:](findplayers%28forhostedmatchrequest_withcompletionhandler_%29.md): Deprecated. Initiates a request to find players for a hosted match.
- [startBrowsingForNearbyPlayersWithReachableHandler:](startbrowsingfornearbyplayers%28reachablehandler_%29.md): Deprecated. Enables the matchmaking process to find nearby players through Bluetooth or WiFi, but only on the same subnet.
