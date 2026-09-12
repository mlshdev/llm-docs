> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontroller/init(matchrequest:)](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontroller/init(matchrequest:))

# init(matchRequest:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Creates a matchmaker view controller for the local player to start inviting other players.

## Declaration

```swift
init?(matchRequest request: GKMatchRequest)
```

## Parameters

- `request`: The configuration for the match.

<a id="return-value"></a>

## Return Value

An initialized matchmaker view controller object or `nil` If an error occurs.

## See Also

### Creating and configuring the view controller

- [init(invite:)](init%28invite_%29.md): Creates a matchmaker view controller to present to a player who accepts an invitation.
- [matchRequest](matchrequest.md): The configuration for the desired match.
- [canStartWithMinimumPlayers](canstartwithminimumplayers.md): A Boolean value that indicates whether your game can start after a minimum number of players join a match.
- [matchmakingMode](matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.

# initWithMatchRequest: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Creates a matchmaker view controller for the local player to start inviting other players.

## Declaration

```objectivec
- (id) initWithMatchRequest:(GKMatchRequest *) request;
```

## Parameters

- `request`: The configuration for the match.

<a id="return-value"></a>

## Return Value

An initialized matchmaker view controller object or `nil` If an error occurs.

## See Also

### Creating and configuring the view controller

- [initWithInvite:](init%28invite_%29.md): Creates a matchmaker view controller to present to a player who accepts an invitation.
- [matchRequest](matchrequest.md): The configuration for the desired match.
- [canStartWithMinimumPlayers](canstartwithminimumplayers.md): A Boolean value that indicates whether your game can start after a minimum number of players join a match.
- [matchmakingMode](matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.
