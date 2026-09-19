> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gkgamemodel/activeplayer

# activePlayer (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The player whose turn it currently is in the game.

## Declaration

```swift
var activePlayer: (any GKGameModelPlayer)? { get }
```

<a id="Discussion"></a>

## Discussion

This player is responsible for the next move. GameplayKit assumes that the next call to the [apply(\_:)](apply%28__%29.md) method will perform a move on behalf of this player.

## See Also

### Keeping Track of Players

- [players](players.md): The players currently in the game.

# activePlayer (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The player whose turn it currently is in the game.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<GKGameModelPlayer> activePlayer;
```

<a id="Discussion"></a>

## Discussion

This player is responsible for the next move. GameplayKit assumes that the next call to the [applyGameModelUpdate:](apply%28__%29.md) method will perform a move on behalf of this player.

## See Also

### Keeping Track of Players

- [players](players.md): The players currently in the game.
