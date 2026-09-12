> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller(_:didfindplayers:)](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontrollerdelegate/matchmakerviewcontroller(_:didfindplayers:))

# matchmakerViewController(\_:didFindPlayers:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when a hosted match is found.

## Declaration

```swift
optional func matchmakerViewController(_ viewController: GKMatchmakerViewController, didFindPlayers playerIDs: [String])
```

## Parameters

- `viewController`: The view controller that performed the matchmaking.
- `playerIDs`: An array of `NSString` objects containing player identifier for the matched players.

<a id="Discussion"></a>

## Discussion

This method is called when the view controller’s `hosted` property is [true](https://developer.apple.com/documentation/swift/true). Although optional in the protocol, if your game attaches a delegate to the view controller for a hosted match, the view controller expects your game to provide an implementation of this method.

The view controller returns the list of players to your game by calling this method. Your game is responsible for connecting these players to your own server and then using that server to relay messages between the players.

## See Also

### Related Documentation

- [matchmakerViewController(\_:didFind:)](matchmakerviewcontroller%28__didfind_%29.md): Handles when the view controller finds players for a peer-to-peer match.

### Deprecated Methods

- [matchmakerViewController(\_:didReceiveAcceptFromHostedPlayer:)](matchmakerviewcontroller%28__didreceiveacceptfromhostedplayer_%29.md): Deprecated. Called when a player in a hosted match accepts the invitation.

# matchmakerViewController:didFindPlayers: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Called when a hosted match is found.

## Declaration

```objectivec
- (void) matchmakerViewController:(GKMatchmakerViewController *) viewController didFindPlayers:(NSArray<NSString *> *) playerIDs;
```

## Parameters

- `viewController`: The view controller that performed the matchmaking.
- `playerIDs`: An array of `NSString` objects containing player identifier for the matched players.

<a id="Discussion"></a>

## Discussion

This method is called when the view controller’s `hosted` property is [true](https://developer.apple.com/documentation/swift/true). Although optional in the protocol, if your game attaches a delegate to the view controller for a hosted match, the view controller expects your game to provide an implementation of this method.

The view controller returns the list of players to your game by calling this method. Your game is responsible for connecting these players to your own server and then using that server to relay messages between the players.

## See Also

### Related Documentation

- [matchmakerViewController:didFindMatch:](matchmakerviewcontroller%28__didfind_%29.md): Handles when the view controller finds players for a peer-to-peer match.

### Deprecated Methods

- [matchmakerViewController:didReceiveAcceptFromHostedPlayer:](matchmakerviewcontroller%28__didreceiveacceptfromhostedplayer_%29.md): Deprecated. Called when a player in a hosted match accepts the invitation.
