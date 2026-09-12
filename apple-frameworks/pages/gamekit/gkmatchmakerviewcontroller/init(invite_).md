> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontroller/init(invite:)](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontroller/init(invite:))

# init(invite:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Creates a matchmaker view controller to present to a player who accepts an invitation.

## Declaration

```swift
init?(invite: GKInvite)
```

## Parameters

- `invite`: The invitation that the player accepts.

<a id="return-value"></a>

## Return Value

An initialized matchmaker view controller object. If an error occurs, returns `nil`.

<a id="Discussion"></a>

## Discussion

The interface shows the status of the other players accepting and declining their invitations until the game starts.

## See Also

### Creating and configuring the view controller

- [init(matchRequest:)](init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players.
- [matchRequest](matchrequest.md): The configuration for the desired match.
- [canStartWithMinimumPlayers](canstartwithminimumplayers.md): A Boolean value that indicates whether your game can start after a minimum number of players join a match.
- [matchmakingMode](matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.

# initWithInvite: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Creates a matchmaker view controller to present to a player who accepts an invitation.

## Declaration

```objectivec
- (id) initWithInvite:(GKInvite *) invite;
```

## Parameters

- `invite`: The invitation that the player accepts.

<a id="return-value"></a>

## Return Value

An initialized matchmaker view controller object. If an error occurs, returns `nil`.

<a id="Discussion"></a>

## Discussion

The interface shows the status of the other players accepting and declining their invitations until the game starts.

## See Also

### Creating and configuring the view controller

- [initWithMatchRequest:](init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players.
- [matchRequest](matchrequest.md): The configuration for the desired match.
- [canStartWithMinimumPlayers](canstartwithminimumplayers.md): A Boolean value that indicates whether your game can start after a minimum number of players join a match.
- [matchmakingMode](matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.
