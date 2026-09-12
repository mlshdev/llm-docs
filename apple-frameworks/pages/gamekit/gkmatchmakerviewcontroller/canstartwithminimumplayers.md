> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontroller/canstartwithminimumplayers](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontroller/canstartwithminimumplayers)

# canStartWithMinimumPlayers (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether your game can start after a minimum number of players join a match.

## Declaration

```swift
var canStartWithMinimumPlayers: Bool { get set }
```

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)

<a id="Discussion"></a>

## Discussion

If you set this property to [true](https://developer.apple.com/documentation/swift/true), players can optionally start a multiplayer game when the minimum number of players accept their invitations. Design your game to progressively add additional players up to the maximum number of players. The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

To set the minimum and maximum number of players, see [Create a match request](../finding-multiple-players-for-a-game.md#Create-a-match-request).

## See Also

### Creating and configuring the view controller

- [init(matchRequest:)](init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players.
- [init(invite:)](init%28invite_%29.md): Creates a matchmaker view controller to present to a player who accepts an invitation.
- [matchRequest](matchrequest.md): The configuration for the desired match.
- [matchmakingMode](matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.

# canStartWithMinimumPlayers (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether your game can start after a minimum number of players join a match.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL canStartWithMinimumPlayers;
```

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)

<a id="Discussion"></a>

## Discussion

If you set this property to [true](https://developer.apple.com/documentation/swift/true), players can optionally start a multiplayer game when the minimum number of players accept their invitations. Design your game to progressively add additional players up to the maximum number of players. The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

To set the minimum and maximum number of players, see [Create a match request](../finding-multiple-players-for-a-game.md#Create-a-match-request).

## See Also

### Creating and configuring the view controller

- [initWithMatchRequest:](init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players.
- [initWithInvite:](init%28invite_%29.md): Creates a matchmaker view controller to present to a player who accepts an invitation.
- [matchRequest](matchrequest.md): The configuration for the desired match.
- [matchmakingMode](matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.
