> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatchmakerviewcontroller/matchmakingmode](https://developer.apple.com/documentation/gamekit/gkturnbasedmatchmakerviewcontroller/matchmakingmode)

# matchmakingMode (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The mode that a multiplayer game uses to find players.

## Declaration

```swift
var matchmakingMode: GKMatchmakingMode { get set }
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

This method throws an exception if you set the mode to a value that isn’t possible due to restrictions.

## See Also

### Creating and Configuring the View Controller

- [init(matchRequest:)](init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players to a turn-based game.
- [showExistingMatches](showexistingmatches.md): A Boolean value that determines whether the view controller shows existing matches.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.

# matchmakingMode (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The mode that a multiplayer game uses to find players.

## Declaration

```objectivec
@property (nonatomic, assign) GKMatchmakingMode matchmakingMode;
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

This method throws an exception if you set the mode to a value that isn’t possible due to restrictions.

## See Also

### Creating and Configuring the View Controller

- [initWithMatchRequest:](init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players to a turn-based game.
- [showExistingMatches](showexistingmatches.md): A Boolean value that determines whether the view controller shows existing matches.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.
