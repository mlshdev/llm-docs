> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller(_:hostedplayerdidaccept:)](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller(_:hostedplayerdidaccept:))

# matchmakerViewController(\_:hostedPlayerDidAccept:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Handles when a player in a hosted match accepts the invitation.

## Declaration

```swift
optional func matchmakerViewController(_ viewController: GKMatchmakerViewController, hostedPlayerDidAccept player: GKPlayer)
```

## Parameters

- `viewController`: The view controller that performs the matchmaking.
- `player`: The player that accepts the invitation to join the match.

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

After a player accepts an invitation, connect the player to your server. Once the connection is established, your game needs to call the view controller’s [setHostedPlayer(\_:didConnect:)](../gkmatchmakerviewcontroller/sethostedplayer%28__didconnect_%29.md) method to update the player’s connection status.

# matchmakerViewController:hostedPlayerDidAccept: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Handles when a player in a hosted match accepts the invitation.

## Declaration

```objectivec
- (void) matchmakerViewController:(GKMatchmakerViewController *) viewController hostedPlayerDidAccept:(GKPlayer *) player;
```

## Parameters

- `viewController`: The view controller that performs the matchmaking.
- `player`: The player that accepts the invitation to join the match.

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

After a player accepts an invitation, connect the player to your server. Once the connection is established, your game needs to call the view controller’s [setHostedPlayer:didConnect:](../gkmatchmakerviewcontroller/sethostedplayer%28__didconnect_%29.md) method to update the player’s connection status.
