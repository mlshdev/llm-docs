> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatchmakerviewcontroller/showexistingmatches](https://developer.apple.com/documentation/gamekit/gkturnbasedmatchmakerviewcontroller/showexistingmatches)

# showExistingMatches (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that determines whether the view controller shows existing matches.

## Declaration

```swift
var showExistingMatches: Bool { get set }
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the view controller shows matches that are in progress or complete. If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the view controller only offers the ability to create new matches. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Creating and Configuring the View Controller

- [init(matchRequest:)](init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players to a turn-based game.
- [matchmakingMode](matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.

# showExistingMatches (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that determines whether the view controller shows existing matches.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL showExistingMatches;
```

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the view controller shows matches that are in progress or complete. If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the view controller only offers the ability to create new matches. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Creating and Configuring the View Controller

- [initWithMatchRequest:](init%28matchrequest_%29.md): Creates a matchmaker view controller for the local player to start inviting other players to a turn-based game.
- [matchmakingMode](matchmakingmode.md): The mode that a multiplayer game uses to find players.
- [GKMatchmakingMode](../gkmatchmakingmode.md): Possible modes that a multiplayer game uses to find matches.
