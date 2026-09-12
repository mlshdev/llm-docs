> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchdelegate/match(_:player:didchange:)-4eo7p](https://developer.apple.com/documentation/gamekit/gkmatchdelegate/match(_:player:didchange:)-4eo7p)

# match(\_:player:didChange:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Handles when a player connects or disconnects from a match.

## Declaration

```swift
optional func match(_ match: GKMatch, player playerID: String, didChange state: GKPlayerConnectionState)
```

## Parameters

- `match`: The match that the player is connected to.
- `playerID`: The identifier for the player whose state changed.
- `state`: The state the player moved to.

<a id="Discussion"></a>

## Discussion

Implement this method to be notified when players connect to or disconnect from the match.

## See Also

### Deprecated Methods and Properties

- [match(\_:didReceive:fromPlayer:)](match%28__didreceive_fromplayer_%29.md): Deprecated. Handles when a player receives data in a match.
- [match(\_:shouldReinvitePlayer:)](match%28__shouldreinviteplayer_%29.md): Deprecated. Handles when a player disconnects from a two-player match.

# match:player:didChangeState: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.8) · visionOS 1.0+ (deprecated in 1.0)

Handles when a player connects or disconnects from a match.

## Declaration

```objectivec
- (void) match:(GKMatch *) match player:(NSString *) playerID didChangeState:(GKPlayerConnectionState) state;
```

## Parameters

- `match`: The match that the player is connected to.
- `playerID`: The identifier for the player whose state changed.
- `state`: The state the player moved to.

<a id="Discussion"></a>

## Discussion

Implement this method to be notified when players connect to or disconnect from the match.

## See Also

### Deprecated Methods and Properties

- [match:didReceiveData:fromPlayer:](match%28__didreceive_fromplayer_%29.md): Deprecated. Handles when a player receives data in a match.
- [match:shouldReinvitePlayer:](match%28__shouldreinviteplayer_%29.md): Deprecated. Handles when a player disconnects from a two-player match.
