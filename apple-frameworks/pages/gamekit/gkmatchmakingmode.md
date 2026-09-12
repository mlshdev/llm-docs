> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakingmode](https://developer.apple.com/documentation/gamekit/gkmatchmakingmode)

# GKMatchmakingMode (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Possible modes that a multiplayer game uses to find matches.

## Declaration

```swift
enum GKMatchmakingMode
```

## Topics

### Modes

- [GKMatchmakingMode.default](gkmatchmakingmode/default.md): The default matchmaking mode.
- [GKMatchmakingMode.nearbyOnly](gkmatchmakingmode/nearbyonly.md): A mode that matches the local player only with nearby players.
- [GKMatchmakingMode.automatchOnly](gkmatchmakingmode/automatchonly.md): A mode that matches the local player only with players who are also actively looking for a match.
- [GKMatchmakingMode.inviteOnly](gkmatchmakingmode/inviteonly.md): A mode that matches the local player only with players who they invite, and doesn’t use automatch to fill empty slots.

### Initializers

- [init(rawValue:)](gkmatchmakingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating and configuring the view controller

- [init(matchRequest:)](gkmatchmakerviewcontroller/init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players.
- [init(invite:)](gkmatchmakerviewcontroller/init%28invite_%29.md): Creates a matchmaker view controller to present to a player who accepts an invitation.
- [matchRequest](gkmatchmakerviewcontroller/matchrequest.md): The configuration for the desired match.
- [canStartWithMinimumPlayers](gkmatchmakerviewcontroller/canstartwithminimumplayers.md): A Boolean value that indicates whether your game can start after a minimum number of players join a match.
- [matchmakingMode](gkmatchmakerviewcontroller/matchmakingmode.md): The mode that a multiplayer game uses to find players.

# GKMatchmakingMode (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Possible modes that a multiplayer game uses to find matches.

## Declaration

```objectivec
enum GKMatchmakingMode : NSInteger;
```

## Topics

### Modes

- [GKMatchmakingModeDefault](gkmatchmakingmode/default.md): The default matchmaking mode.
- [GKMatchmakingModeNearbyOnly](gkmatchmakingmode/nearbyonly.md): A mode that matches the local player only with nearby players.
- [GKMatchmakingModeAutomatchOnly](gkmatchmakingmode/automatchonly.md): A mode that matches the local player only with players who are also actively looking for a match.
- [GKMatchmakingModeInviteOnly](gkmatchmakingmode/inviteonly.md): A mode that matches the local player only with players who they invite, and doesn’t use automatch to fill empty slots.

## See Also

### Creating and configuring the view controller

- [initWithMatchRequest:](gkmatchmakerviewcontroller/init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players.
- [initWithInvite:](gkmatchmakerviewcontroller/init%28invite_%29.md): Creates a matchmaker view controller to present to a player who accepts an invitation.
- [matchRequest](gkmatchmakerviewcontroller/matchrequest.md): The configuration for the desired match.
- [canStartWithMinimumPlayers](gkmatchmakerviewcontroller/canstartwithminimumplayers.md): A Boolean value that indicates whether your game can start after a minimum number of players join a match.
- [matchmakingMode](gkmatchmakerviewcontroller/matchmakingmode.md): The mode that a multiplayer game uses to find players.
