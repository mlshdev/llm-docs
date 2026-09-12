> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontroller/ishosted](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontroller/ishosted)

# isHosted (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the match is hosted or peer-to-peer.

## Declaration

```swift
var isHosted: Bool { get set }
```

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

The value of this property determines which delegate methods GameKit calls when players are found.

If you host your own game, set this property to `true,` and then GameKit calls the [matchmakerViewController(\_:didFindHostedPlayers:)](../gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfindhostedplayers_%29.md) delegate method when it finds players. You must provide a server that hosts the players in the match.

Otherwise, set this property to [false](https://developer.apple.com/documentation/swift/false), and then GameKit calls the [matchmakerViewController(\_:didFind:)](../gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfind_%29.md) delegate method when it finds players.

## See Also

### Hosting matches

- [setHostedPlayer(\_:didConnect:)](sethostedplayer%28__didconnect_%29.md): Updates the connection status of a player in a hosted game.

# hosted (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the match is hosted or peer-to-peer.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isHosted) BOOL hosted;
```

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

The value of this property determines which delegate methods GameKit calls when players are found.

If you host your own game, set this property to `true,` and then GameKit calls the [matchmakerViewController:didFindHostedPlayers:](../gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfindhostedplayers_%29.md) delegate method when it finds players. You must provide a server that hosts the players in the match.

Otherwise, set this property to [false](https://developer.apple.com/documentation/swift/false), and then GameKit calls the [matchmakerViewController:didFindMatch:](../gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller%28__didfind_%29.md) delegate method when it finds players.

## See Also

### Hosting matches

- [setHostedPlayer:didConnect:](sethostedplayer%28__didconnect_%29.md): Updates the connection status of a player in a hosted game.
