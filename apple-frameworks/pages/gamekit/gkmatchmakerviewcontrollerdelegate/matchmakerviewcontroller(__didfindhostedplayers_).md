> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller(_:didfindhostedplayers:)](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller(_:didfindhostedplayers:))

# matchmakerViewController(\_:didFindHostedPlayers:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Handles when the view controller finds all requested players for a hosted match.

## Declaration

```swift
optional func matchmakerViewController(_ viewController: GKMatchmakerViewController, didFindHostedPlayers players: [GKPlayer])
```

## Parameters

- `viewController`: The view controller that finds players for the match.
- `players`: The players who accept an invitation to this match.

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

When all the players accept their invitations to a match, GameKit invokes this method in the app instances for all players in the game, including the local player who initiates the invitations. This method needs to dismiss the view controller and start the game. Your game needs to connect the players to your own server and then use that server to relay messages between the players.

Although this method appears optional in the protocol, if you set the view controller’s delegate for a hosted match, GameKit expects the delegate to implement this method. If the view controller’s [isHosted](../gkmatchmakerviewcontroller/ishosted.md) property is [false](https://developer.apple.com/documentation/swift/false), GameKit instead invokes the [matchmakerViewController(\_:didFind:)](matchmakerviewcontroller%28__didfind_%29.md) method.

## See Also

### Starting matches

- [matchmakerViewController(\_:didFind:)](matchmakerviewcontroller%28__didfind_%29.md): Handles when the view controller finds players for a peer-to-peer match.

# matchmakerViewController:didFindHostedPlayers: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Handles when the view controller finds all requested players for a hosted match.

## Declaration

```objectivec
- (void) matchmakerViewController:(GKMatchmakerViewController *) viewController didFindHostedPlayers:(NSArray<GKPlayer *> *) players;
```

## Parameters

- `viewController`: The view controller that finds players for the match.
- `players`: The players who accept an invitation to this match.

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

When all the players accept their invitations to a match, GameKit invokes this method in the app instances for all players in the game, including the local player who initiates the invitations. This method needs to dismiss the view controller and start the game. Your game needs to connect the players to your own server and then use that server to relay messages between the players.

Although this method appears optional in the protocol, if you set the view controller’s delegate for a hosted match, GameKit expects the delegate to implement this method. If the view controller’s [hosted](../gkmatchmakerviewcontroller/ishosted.md) property is [false](https://developer.apple.com/documentation/swift/false), GameKit instead invokes the [matchmakerViewController:didFindMatch:](matchmakerviewcontroller%28__didfind_%29.md) method.

## See Also

### Starting matches

- [matchmakerViewController:didFindMatch:](matchmakerviewcontroller%28__didfind_%29.md): Handles when the view controller finds players for a peer-to-peer match.
