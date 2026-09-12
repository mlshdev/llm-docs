> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatchmakerviewcontroller/init(matchrequest:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatchmakerviewcontroller/init(matchrequest:))

# init(matchRequest:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a matchmaker view controller for the local player to start inviting other players to a turn-based game.

## Declaration

```swift
init(matchRequest request: GKMatchRequest)
```

## Parameters

- `request`: A match request that you configure for the characteristics of your game.

<a id="return-value"></a>

## Return Value

An initialized matchmaker view controller object or `nil` If an error occurs.

## See Also

### Creating and Configuring the View Controller

- [showExistingMatches](showexistingmatches.md): A Boolean value that determines whether the view controller shows existing matches.
- [matchmakingMode](matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.

# initWithMatchRequest: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a matchmaker view controller for the local player to start inviting other players to a turn-based game.

## Declaration

```objectivec
- (id) initWithMatchRequest:(GKMatchRequest *) request;
```

## Parameters

- `request`: A match request that you configure for the characteristics of your game.

<a id="return-value"></a>

## Return Value

An initialized matchmaker view controller object or `nil` If an error occurs.

## See Also

### Creating and Configuring the View Controller

- [showExistingMatches](showexistingmatches.md): A Boolean value that determines whether the view controller shows existing matches.
- [matchmakingMode](matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.
