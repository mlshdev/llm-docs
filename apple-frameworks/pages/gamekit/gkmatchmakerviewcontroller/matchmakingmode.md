> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontroller/matchmakingmode](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontroller/matchmakingmode)

# matchmakingMode (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The mode that a multiplayer game uses to find players.

## Declaration

```swift
var matchmakingMode: GKMatchmakingMode { get set }
```

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)

<a id="Discussion"></a>

## Discussion

This method throws an exception if the mode isn’t possible due to restrictions.

## See Also

### Creating and configuring the view controller

- [init(matchRequest:)](init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players.
- [init(invite:)](init%28invite_%29.md): Creates a matchmaker view controller to present to a player who accepts an invitation.
- [matchRequest](matchrequest.md): The configuration for the desired match.
- [canStartWithMinimumPlayers](canstartwithminimumplayers.md): A Boolean value that indicates whether your game can start after a minimum number of players join a match.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.

# matchmakingMode (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The mode that a multiplayer game uses to find players.

## Declaration

```objectivec
@property (nonatomic, assign) GKMatchmakingMode matchmakingMode;
```

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)

<a id="Discussion"></a>

## Discussion

This method throws an exception if the mode isn’t possible due to restrictions.

## See Also

### Creating and configuring the view controller

- [initWithMatchRequest:](init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players.
- [initWithInvite:](init%28invite_%29.md): Creates a matchmaker view controller to present to a player who accepts an invitation.
- [matchRequest](matchrequest.md): The configuration for the desired match.
- [canStartWithMinimumPlayers](canstartwithminimumplayers.md): A Boolean value that indicates whether your game can start after a minimum number of players join a match.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.
