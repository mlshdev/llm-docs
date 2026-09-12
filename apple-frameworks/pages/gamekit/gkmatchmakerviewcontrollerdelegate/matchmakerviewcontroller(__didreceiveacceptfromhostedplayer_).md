> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller(_:didreceiveacceptfromhostedplayer:)](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller(_:didreceiveacceptfromhostedplayer:))

# matchmakerViewController(\_:didReceiveAcceptFromHostedPlayer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when a player in a hosted match accepts the invitation.

## Declaration

```swift
optional func matchmakerViewController(_ viewController: GKMatchmakerViewController, didReceiveAcceptFromHostedPlayer playerID: String)
```

## Parameters

- `viewController`: The view controller that accepted the invitation.
- `playerID`: The identifier of the accepting player.

<a id="Discussion"></a>

## Discussion

After a player accepts an invitation, that player’s device should connect to your server. Once the connection is established, your game should call the view controller’s [setHostedPlayer(\_:connected:)](../gkmatchmakerviewcontroller/sethostedplayer%28__connected_%29.md) method to update the player’s connection status.

## See Also

### Deprecated Methods

- [matchmakerViewController(\_:didFindPlayers:)](matchmakerviewcontroller%28__didfindplayers_%29.md): Deprecated. Called when a hosted match is found.

# matchmakerViewController:didReceiveAcceptFromHostedPlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when a player in a hosted match accepts the invitation.

## Declaration

```objectivec
- (void) matchmakerViewController:(GKMatchmakerViewController *) viewController didReceiveAcceptFromHostedPlayer:(NSString *) playerID;
```

## Parameters

- `viewController`: The view controller that accepted the invitation.
- `playerID`: The identifier of the accepting player.

<a id="Discussion"></a>

## Discussion

After a player accepts an invitation, that player’s device should connect to your server. Once the connection is established, your game should call the view controller’s [setHostedPlayer:connected:](../gkmatchmakerviewcontroller/sethostedplayer%28__connected_%29.md) method to update the player’s connection status.

## See Also

### Deprecated Methods

- [matchmakerViewController:didFindPlayers:](matchmakerviewcontroller%28__didfindplayers_%29.md): Deprecated. Called when a hosted match is found.
