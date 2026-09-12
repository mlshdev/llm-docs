> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontroller/matchrequest](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontroller/matchrequest)

# matchRequest (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The configuration for the desired match.

## Declaration

```swift
var matchRequest: GKMatchRequest { get }
```

## See Also

### Creating and configuring the view controller

- [init(matchRequest:)](init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players.
- [init(invite:)](init%28invite_%29.md): Creates a matchmaker view controller to present to a player who accepts an invitation.
- [canStartWithMinimumPlayers](canstartwithminimumplayers.md): A Boolean value that indicates whether your game can start after a minimum number of players join a match.
- [matchmakingMode](matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.

# matchRequest (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The configuration for the desired match.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) GKMatchRequest * matchRequest;
```

## See Also

### Creating and configuring the view controller

- [initWithMatchRequest:](init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players.
- [initWithInvite:](init%28invite_%29.md): Creates a matchmaker view controller to present to a player who accepts an invitation.
- [canStartWithMinimumPlayers](canstartwithminimumplayers.md): A Boolean value that indicates whether your game can start after a minimum number of players join a match.
- [matchmakingMode](matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.
