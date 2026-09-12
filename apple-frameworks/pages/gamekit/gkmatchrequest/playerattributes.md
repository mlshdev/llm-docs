> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest/playerattributes](https://developer.apple.com/documentation/gamekit/gkmatchrequest/playerattributes)

# playerAttributes (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A mask that specifies the role that the local player would like to play in the game.

## Declaration

```swift
var playerAttributes: UInt32 { get set }
```

## Mentioned In

- [Finding players using matchmaking rules](../finding-players-using-matchmaking-rules.md)
- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

If the value of this property is `0xFFFFFFFF` (the default), GameKit ignores this property. If the value is nonzero, GameKit uses the value as a mask that restricts the role of the player in the match. GameKit finds new players for the game so that the bitwise OR of all the player’s masks equals `0xFFFFFFFF`.

## See Also

### Matching specific players

- [playerGroup](playergroup.md): A number identifying a subset of players invited to join a match.

# playerAttributes (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A mask that specifies the role that the local player would like to play in the game.

## Declaration

```objectivec
@property (assign) uint32_t playerAttributes;
```

## Mentioned In

- [Finding players using matchmaking rules](../finding-players-using-matchmaking-rules.md)
- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

If the value of this property is `0xFFFFFFFF` (the default), GameKit ignores this property. If the value is nonzero, GameKit uses the value as a mask that restricts the role of the player in the match. GameKit finds new players for the game so that the bitwise OR of all the player’s masks equals `0xFFFFFFFF`.

## See Also

### Matching specific players

- [playerGroup](playergroup.md): A number identifying a subset of players invited to join a match.
