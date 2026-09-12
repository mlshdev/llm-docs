> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontroller/sethostedplayer(_:didconnect:)](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontroller/sethostedplayer(_:didconnect:))

# setHostedPlayer(\_:didConnect:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Updates the connection status of a player in a hosted game.

## Declaration

```swift
func setHostedPlayer(_ player: GKPlayer, didConnect connected: Bool)
```

## Parameters

- `player`: The player whose status changed.
- `connected`: A Boolean value that indicates whether the player connected or disconnected from the hosted match.

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

When you connect or disconnect a player from your server in a hosted game, use this method to update the player’s status that appears in the matchmaker view controllers on other player’s devices. For example, invoke this method after you connect a player from the [matchmakerViewController(\_:hostedPlayerDidAccept:)](../gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__hostedplayerdidaccept_%29.md) delegate method.

## See Also

### Hosting matches

- [isHosted](ishosted.md): A Boolean value that indicates whether the match is hosted or peer-to-peer.

# setHostedPlayer:didConnect: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Updates the connection status of a player in a hosted game.

## Declaration

```objectivec
- (void) setHostedPlayer:(GKPlayer *) player didConnect:(BOOL) connected;
```

## Parameters

- `player`: The player whose status changed.
- `connected`: A Boolean value that indicates whether the player connected or disconnected from the hosted match.

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

When you connect or disconnect a player from your server in a hosted game, use this method to update the player’s status that appears in the matchmaker view controllers on other player’s devices. For example, invoke this method after you connect a player from the [matchmakerViewController:hostedPlayerDidAccept:](../gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__hostedplayerdidaccept_%29.md) delegate method.

## See Also

### Hosting matches

- [hosted](ishosted.md): A Boolean value that indicates whether the match is hosted or peer-to-peer.
