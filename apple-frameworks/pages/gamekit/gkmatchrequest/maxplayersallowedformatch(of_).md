> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest/maxplayersallowedformatch(of:)](https://developer.apple.com/documentation/gamekit/gkmatchrequest/maxplayersallowedformatch(of:))

# maxPlayersAllowedForMatch(of:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the maximum number of players allowed in the match request for a given match type.

## Declaration

```swift
class func maxPlayersAllowedForMatch(of matchType: GKMatchType) -> Int
```

## Parameters

- `matchType`: The kind of match.

<a id="return-value"></a>

## Return Value

The maximum number of allowed players.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

For peer-to-peer, hosted, and turn-based matches, the maximum number of players is `16`.

## See Also

### Restricting the number of players

- [GKMatchType](../gkmatchtype.md): The kind of match managed by Game Center.
- [minPlayers](minplayers.md): The minimum number of players that can join the match.
- [maxPlayers](maxplayers.md): The maximum number of players that can join the match.
- [defaultNumberOfPlayers](defaultnumberofplayers.md): The default number of players for the match.

# maxPlayersAllowedForMatchOfType: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the maximum number of players allowed in the match request for a given match type.

## Declaration

```objectivec
+ (NSUInteger) maxPlayersAllowedForMatchOfType:(GKMatchType) matchType;
```

## Parameters

- `matchType`: The kind of match.

<a id="return-value"></a>

## Return Value

The maximum number of allowed players.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

For peer-to-peer, hosted, and turn-based matches, the maximum number of players is `16`.

## See Also

### Restricting the number of players

- [GKMatchType](../gkmatchtype.md): The kind of match managed by Game Center.
- [minPlayers](minplayers.md): The minimum number of players that can join the match.
- [maxPlayers](maxplayers.md): The maximum number of players that can join the match.
- [defaultNumberOfPlayers](defaultnumberofplayers.md): The default number of players for the match.
