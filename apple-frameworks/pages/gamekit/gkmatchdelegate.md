> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchdelegate](https://developer.apple.com/documentation/gamekit/gkmatchdelegate)

# GKMatchDelegate (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An object that receives connection status and data transmitted in a multiplayer game.

## Declaration

```swift
protocol GKMatchDelegate : NSObjectProtocol
```

## Topics

### Receiving Data from Other Players

- [match(\_:didReceive:forRecipient:fromRemotePlayer:)](gkmatchdelegate/match%28__didreceive_forrecipient_fromremoteplayer_%29.md): Processes the data sent from one player to another.
- [match(\_:didReceive:fromRemotePlayer:)](gkmatchdelegate/match%28__didreceive_fromremoteplayer_%29.md): Processes the data sent from another player to the local player.

### Receiving State Notifications About Other Players

- [match(\_:player:didChange:)](gkmatchdelegate/match%28__player_didchange_%29-8ohgr.md): Handles when players connect or disconnect from a match.
- [GKPlayerConnectionState](gkplayerconnectionstate.md): The possible states of a connection to a match.

### Handling Errors

- [match(\_:didFailWithError:)](gkmatchdelegate/match%28__didfailwitherror_%29.md): Handles the local player’s connection errors to a match.

### Reinviting a Player

- [match(\_:shouldReinviteDisconnectedPlayer:)](gkmatchdelegate/match%28__shouldreinvitedisconnectedplayer_%29.md): Determines whether the local player should reinvite another player who disconnected from a two-player match.

### Deprecated Methods and Properties

- [match(\_:player:didChange:)](gkmatchdelegate/match%28__player_didchange_%29-4eo7p.md): Deprecated. Handles when a player connects or disconnects from a match.
- [match(\_:didReceive:fromPlayer:)](gkmatchdelegate/match%28__didreceive_fromplayer_%29.md): Deprecated. Handles when a player receives data in a match.
- [match(\_:shouldReinvitePlayer:)](gkmatchdelegate/match%28__shouldreinviteplayer_%29.md): Deprecated. Handles when a player disconnects from a two-player match.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the delegate

- [delegate](gkmatch/delegate.md): The delegate that handles communication between players in a match.

# GKMatchDelegate (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An object that receives connection status and data transmitted in a multiplayer game.

## Declaration

```objectivec
@protocol GKMatchDelegate <NSObject>
```

## Topics

### Receiving Data from Other Players

- [match:didReceiveData:forRecipient:fromRemotePlayer:](gkmatchdelegate/match%28__didreceive_forrecipient_fromremoteplayer_%29.md): Processes the data sent from one player to another.
- [match:didReceiveData:fromRemotePlayer:](gkmatchdelegate/match%28__didreceive_fromremoteplayer_%29.md): Processes the data sent from another player to the local player.

### Receiving State Notifications About Other Players

- [match:player:didChangeConnectionState:](gkmatchdelegate/match%28__player_didchange_%29-8ohgr.md): Handles when players connect or disconnect from a match.
- [GKPlayerConnectionState](gkplayerconnectionstate.md): The possible states of a connection to a match.

### Handling Errors

- [match:didFailWithError:](gkmatchdelegate/match%28__didfailwitherror_%29.md): Handles the local player’s connection errors to a match.

### Reinviting a Player

- [match:shouldReinviteDisconnectedPlayer:](gkmatchdelegate/match%28__shouldreinvitedisconnectedplayer_%29.md): Determines whether the local player should reinvite another player who disconnected from a two-player match.

### Deprecated Methods and Properties

- [match:player:didChangeState:](gkmatchdelegate/match%28__player_didchange_%29-4eo7p.md): Deprecated. Handles when a player connects or disconnects from a match.
- [match:didReceiveData:fromPlayer:](gkmatchdelegate/match%28__didreceive_fromplayer_%29.md): Deprecated. Handles when a player receives data in a match.
- [match:shouldReinvitePlayer:](gkmatchdelegate/match%28__shouldreinviteplayer_%29.md): Deprecated. Handles when a player disconnects from a two-player match.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the delegate

- [delegate](gkmatch/delegate.md): The delegate that handles communication between players in a match.
